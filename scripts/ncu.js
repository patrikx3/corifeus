#!/usr/bin/env node
const lib = require('../src/lib');

const start = async() => {

    await lib.init();

    lib.projects.forEachAsync(async(project) => {
        lib.exec(project, `ncu -a --loglevel verbose --packageFile package.json`)
    })

}

start();
