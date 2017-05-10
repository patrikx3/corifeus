#!/usr/bin/env node
const lib = require('../src/lib');

const start = async() => {

    await lib.init();

    lib.projects.forEach((project) => {
        lib.exec(project, `rm -rf ./node_modules`)
    })

    console.log('DONE :)')
}

start();
