// ramdisk
// ramdisk 2

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js();

    const lib = require('./src/lib')

    grunt.registerTask('cory-load-modules', async function() {
        const done = this.async();
        let replace = '';
        await lib.init(false);
        const pkgs = await lib.extractPackages();
        const pkgNames = Object.keys(pkgs).sort();
        pkgNames.forEach((pkgName) => {
            const pkg = pkgs[pkgName];
            const desc = pkg.description ;
            replace += `[${desc}](https://github.com/patrikx3/${pkgName})              
  
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
    });

    grunt.registerTask('default', ['cory-load-modules'].concat(builder.config.task.build.js));

}
