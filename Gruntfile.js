const utils = require('corifeus-utils');

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js();


    grunt.registerTask('cory-load-modules', async function() {
        const done = this.async();
        let replace = '';
        let finds = await utils.fs.find({
            find: 'package.json',
        });
        finds.forEach((found) => {
            const pkg = require(found.path);
            const desc = pkg.description ;
            replace += `### ${desc} 
[Wiki](https://pages.corifeus.com/${pkg.name}) - [Github](https://github.com/patrikx3/${pkg.name})              
  
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
