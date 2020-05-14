#!/usr/bin/env node

const cli = require('./lib/cli');

async function main() {
  try {
    await cli().start();
  }
  catch(e) {
    console.log(e);
    process.exit(1);
  }
}

main();
