
const progress = require('progress');
const fs = require('mz/fs');
const path = require('path')
const commander = require('commander');
const utils = require('corifeus-utils');

const execRaw = require('child_process').exec;

const pkg = require('../package.json');


/**
 * Load all modules in this project
 */
let loadModules = () => {
    const srcpath = `${process.cwd()}`
    const modules = fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory()).filter(dir => dir.startsWith('corifeus-'));
    modules.unshift('corifeus');
    /*
    let modules = childProcess.execSync('git submodule--helper list').toString().split('\n').map((line) => {
        return line.split('\t')[1];
    })
    modules = modules.splice(0, modules.length -1 );
    modules.unshift('corifeus');
    */
    return modules;
}
const allProjects = loadModules()

let projects;

const projectPath = (project) => {
    return `${__dirname}/../${project === 'corifeus' ? '' : project + '/' }`;
}

const getPkg = async (project) => {
    const buffer = await fs.readFile(`${projectPath(project)}package.json`);
    return JSON.parse(buffer.toString());
}

const extractPackages = async function (projects = allProjects) {
    const pkgs = {};
    await utils.array.forEachAsync(projects, async (project) => {
        pkgs[project] = await getPkg(project)
    }, true)
    return pkgs;
};

let pkgs;

// order is important
const settings = {
    'corifeus-utils': {
      publish: true,
    },
    'corifeus-builder': {
        publish: true,
    },
    'corifeus-server': {
        publish: true,
    },
    'corifeus-server-deployer': {
        publish: true,
    },
    'corifeus-builder-angular': {
        publish: true,
    },
    'corifeus-web': {
        publish: true,
    },
    'corifeus-web-material': {
        publish: true,
    },
}

const loadPublishableChildren = () => {
    Object.keys(settings).forEach((publishable) => {
        const setting = settings[publishable];
        const children = {};
        Object.keys(pkgs).forEach((pkgName) => {
            const pkg = pkgs[pkgName];
            const updateDependecies = (repo) => {
                if (pkg.hasOwnProperty(repo) && pkg[repo].hasOwnProperty(publishable)) {
                    if (Object.keys(pkg[repo]).includes(publishable)) {
                        children[pkgName] = true;
                    }
                }
            }
            updateDependecies('dependencies', publishable);
            updateDependecies('devDependencies', publishable);
            setting.children = Object.keys(children);
        })
    })
}


const init = async (commanderEnabled = true) => {
    pkgs = await extractPackages()
    if (commanderEnabled) {
        commander
            .version(pkg.version)
            .usage('[options]')
            .option('-v, --verbose', 'Verbose')
            .option('-n, --npm', 'Npm to original registry')
            .option('-p, --projects <items>', 'The list of projects', (val) => {
                return val.split(',');
            })
            .parse(process.argv);

    }
    projects = commander.projects || allProjects
    loadPublishableChildren();
    module.exports.projects = projects
}


const exec = (project, command, bar) => {
    return new Promise((resolve, reject) => {
        const actualCommand = `${project === 'corifeus' ? '' : `pushd ${project}`}
${command}
${project === 'corifeus' ? '' : `popd`}
`
        if (bar) {
            bar.interrupt(actualCommand);
        } else {
            console.log(actualCommand);
        }
        const run = execRaw(`bash -c '
set -e    
${actualCommand}
'`, {
            stdio: `inherit`,
        }, (e) => {
            if (e) {
                console.error(e);
                return reject(e);
            }
            if (bar) {
                bar.tick({
                    token: `${project}`
                })
            }
            return resolve();
        })
        run.stdout.on('data', (data) => {
            if (commander.verbose && bar) {
                bar.interrupt(data)
            }
            if (!bar) {
                console.log(data);
            }
        });
        run.stderr.on('data', (data) => {
            if (bar) {
                bar.interrupt(data)
            } else {
                console.error(data);
            }
        });
    })
}

const newProgress = (status, total = projects.length) => {
    const bar = new progress(`${status} [:bar] :token`, {
        total: total,
        width: 27,
        clear: true
    })
    bar.tick(0, {
        token: `${projects[0]}`
    })
    return bar;
}

const grunt = async () => {
    let port = 10000;
    const promises = [];
    const barGrunt = newProgress('grunt');
    await utils.array.forEachAsync(projects, (project) => {
        promises.push(exec(project, `grunt --cory-port=${++port}`, barGrunt));
    })
    await Promise.all(promises);
}

/**
 * Order is important
 * @returns {Promise.<void>}
 */
const publish = async () => {
    let total = projects.length;
    const upgradeAbleCount = await getUpgradeAbleCount();
    total = total + (total * upgradeAbleCount);
    const barPublish = newProgress('publish-upgrade', total);

    await utils.array.forEachAsync(projects, async (project) => {
        const setting = settings[project];
        if (setting !== undefined && setting.hasOwnProperty('publish') ) {
            await exec(project, `${commander.npm ? '' : 'grunt cory-npm'}
npm publish ${commander.npm ? ' --registry https://registry.npmjs.org' : ''}`, barPublish);
            await upgrade(barPublish)
        } else {
            barPublish.tick({
                token: '...'
            })
        }
    }, true)
}

const getUpgradable = async () => {
    const upgradeAble = {};
    await utils.array.forEachAsync(projects, (project) => {
        const setting = settings[project];
        if (setting !== undefined && setting.hasOwnProperty('publish') && setting.hasOwnProperty('children')) {
            setting.children.forEach((child) => {
                upgradeAble[child] = upgradeAble[child] || [];
                upgradeAble[child].push(project)
            })
        }
    })
    return upgradeAble;
}

const getUpgradeAbleCount = async() => {
    const upgradeAble = await getUpgradable();
    const upgrades = Object.keys(upgradeAble);
    let total = upgrades.length;
    upgrades.forEach(() => total++);
    return total;
}

const upgrade = async (progresser) => {
    const upgradeAble = await getUpgradable();
    const upgrades = Object.keys(upgradeAble);

    if (progresser === undefined) {
        const total = await getUpgradeAbleCount();
        progresser = progresser || newProgress('upgrade', total);
    }

    const promises = [];
    await utils.array.forEachAsync(upgrades, async (project) => {
        progresser.tick({
            token: project
        })
        const pkgFile = `${projectPath(project)}package.json`;
        const pkg = await getPkg(project);
        await utils.array.forEachAsync(upgradeAble[project], async(linkUpdate) => {
            const updateDependecies = async (repo) => {
                if (pkg.hasOwnProperty(repo) && pkg[repo].hasOwnProperty(linkUpdate)) {
                    const linkPkg = await getPkg(linkUpdate);
                    pkg[repo][linkUpdate] = `^${linkPkg.version}`;
                }
            }
            await updateDependecies('dependencies', linkUpdate);
            await updateDependecies('devDependencies', linkUpdate);
            promises.push(fs.writeFile(pkgFile, JSON.stringify(pkg, null, 4)));
            progresser.interrupt(`${project} => new pkg ${linkUpdate}`);
            progresser.tick({
                token: linkUpdate
            })
        })

    })
    await Promise.all(promises);
}

const link = async() => {
    const upgradeAble = await getUpgradable();

    const upgradeAbleKeys = Object.keys(upgradeAble);
    const projectsGenerated = projects.filter((project) => (settings[project] || {}).hasOwnProperty('children') );
    let  total = projectsGenerated.length + upgradeAbleKeys.length;

    const progress = newProgress('link', total);
    let promises = [];

    await utils.array.forEachAsync(projectsGenerated, (project) => {
        const setting = settings[project] || {};
        if (setting.hasOwnProperty('publish') && setting.hasOwnProperty('children')) {
            promises.push(
                exec(project, `yarn unlink || true
yarn link`, progress)
            )
        }
    })
    await Promise.all(promises);

    promises = [];
    await utils.array.forEachAsync(upgradeAbleKeys , (project) => {
        let command = ``
        upgradeAble[project].forEach((link) => {
            command += `yarn link ${link}         
`;
        })
        promises.push(exec(project, command, progress))
    })
    await Promise.all(promises);


}

module.exports = {
    projects: projects,
    settings: settings,
    exec: exec,
    projectPath: projectPath,
    newProgress: newProgress,
    grunt: grunt,
    publish: publish,
    upgrade: upgrade,
    link: link,
    extractPackages: extractPackages,
    loadModules: loadModules,
    init: init
}