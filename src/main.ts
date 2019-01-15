import program from 'commander';

const rootPath = process.cwd();

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
