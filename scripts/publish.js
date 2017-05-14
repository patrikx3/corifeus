#!/usr/bin/env node

const lib = require('../src/lib');

const start = async() => {

    await lib.init();
    await lib.publish()

    console.log('DONE :)')
}

start();