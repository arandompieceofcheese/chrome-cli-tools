#!/usr/bin/env node
const program = require('commander');

program.version('1.0.0')
  .command('init', 'Initializes a browser extension in the current directory')
  .command('config <field> <value>', 'Edits the default manifest.json fields')
  .command('generate <type>', 'Generate an extension component')
  .parse(process.argv);