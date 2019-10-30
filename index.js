#!/usr/bin/env node

const pkg = require('./package.json');
const prog = require('caporal');
const createCmd = require('./create');

prog
  .version(pkg.version)
  .description(pkg.description)
  .command('create', 'Create a new application')
  .argument('<template>', 'Template to use, currently we only have one template: svelte')
  .argument('<name>', 'Name of new project directory')
  .action(createCmd);

prog.parse(process.argv);
