#!/usr/bin/env node
const lib = require('../src/lib');

const start = async() => {

    await lib.init();

    lib.projects.forEach((project) => {
        const args = process.argv.slice()
        args.shift()
        args.shift()
        const command = args .join(' ');
        lib.exec(project, `${command}`)
    })

    console.log('DONE :)')
}

start();
