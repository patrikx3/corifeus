#!/usr/bin/env node
const lib = require('../src/lib');

const start = async() => {

    await lib.init();

    await lib.projects.forEachAsync(async(project) => {
        const args = process.argv.slice()
        args.shift()
        args.shift()
        const command = args .join(' ');
        await lib.exec(project, `${command}`)
    })

    console.log('DONE :)')
}

start();
