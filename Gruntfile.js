const utils = require('corifeus-utils');

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js();


    grunt.registerTask('cory-load-modules', async function() {
        const done = this.async();
        try {
            let replace = '';
            /*
            let finds = await utils.fs.find({
                find: 'package.json',
            });
            const path = require('path')
            const findsP3x = await utils.fs.find({
                root: path.resolve(process.cwd(), '../p3x'),
                find: 'package.json',
            });

            finds = finds.concat(findsP3x)
            */
            const packages = (await utils.http.request('https://server.patrikx3.com/api/patrikx3/git/repos')).body.repo

            let sortedObject = {}
            sortedObject = Object.keys(packages).sort((a, b) => {
                return packages[b].corifeus.stargazers_count - packages[a].corifeus.stargazers_count
            }).reduce((prev, curr, i) => {
                prev[i] = packages[curr]
                return prev
            }, {})

            //console.log(JSON.stringify(sortedObject, null, 4))

            Object.keys(sortedObject).forEach((key) => {
                const pkg = sortedObject[key]
                const desc = pkg.description ;

                const hiddenStars = `<!--@star|${pkg.name}-->`;;

                replace += `

### ${hiddenStars} ${desc}

[README](https://corifeus.com/${pkg.corifeus.reponame === 'corifeus' ? 'matrix' : pkg.corifeus.reponame}) | [Github](https://github.com/patrikx3/${pkg.corifeus.reponame})

---


`
            })

            const config = grunt.config.get('cory-replace');
            config['projects'] = {
                prefix: '[//]: #@corifeus-projects',
                postfix: '[//]: #@corifeus-projects:end',
                replace: replace,
                files: [
                    'README.md',
                ]
            }
            grunt.config.set('cory-replace', config)
            done();

        } catch(e) {
            done(e)
        }
    });

    grunt.registerTask('default', ['cory-load-modules'].concat(builder.config.task.build.js));

}
