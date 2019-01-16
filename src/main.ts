import program from 'commander';

import { version } from '../package.json';
import reduxGenerator from './redux-generator';

program.version(version, '-v, --version').usage('<command> | [options]');

program
  .command('generate <source>')
  .alias('g')
  .description('generate redux template with yml')
  .action((source: string) => {
    reduxGenerator(source);
  });

program.parse(process.argv);

const NO_COMMAND_SPECIFIED = process.argv.length === 2;

if (NO_COMMAND_SPECIFIED) {
  program.help();
}

if (program.args.length === 1) {
  reduxGenerator(program.args[0]);
}
