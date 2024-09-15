#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

// helper function to run async/await
const run = async () => {
    await runner.collectFiles(process.cwd());
    console.log(runner.testFiles);
};

run();