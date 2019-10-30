#!/usr/bin/env node

const prog = require('caporal');
const createCmd = require('./create');

prog
  .version('1.0.0')
  .command('create', 'Create a new application')
  .argument('<template>', 'Template to use')
  .argument('<name>', 'Name of new project directory')
  .option('--variant <variant>', 'Which <variant> of the template is going to be created')
  .action(createCmd);

prog.parse(process.argv);
