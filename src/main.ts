import program from 'commander';

const rootPath = process.cwd();

import { version } from '../package.json';
import reduxGenerator from './redux-generator';

program.version(version, '-v, --version').usage('<command> | [options]');

program
  .command('<source>')
  .description('generate redux template with yml')
  .action((source: string) => {
    reduxGenerator(source);
  });

program.command('*').action(function() {
  console.log('please use option -h view help info');
});

program.parse(process.argv);
