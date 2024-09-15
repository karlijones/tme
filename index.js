#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

// helper function to run async/await
const run = async () => {
    const results = await runner.collectFiles();
    console.log(results);
};

run();