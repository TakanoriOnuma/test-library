#!/usr/bin/env node

const program = require('commander');

program
  .option('-p, --param <value>', 'Add params')
  .parse(process.argv);

console.log('receive param: %s', program.param);
