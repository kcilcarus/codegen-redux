import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import lodash from 'lodash';
import shelljs from 'shelljs';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';

const qrcode: any = require('qrcode-terminal');

const EGG_LIST = [
  'ruofeixiong',
  'kongchenxu',
  'chenhao',
  'jiangting',
  'unicareer',
  'liuxiaozhong',
  'wanganyi'
];

const easterEgg = (): void => {
  const res = shelljs.exec('whoami', { silent: true });
  const name = typeof res.stdout === 'string' ? res.stdout : '';
  if (EGG_LIST.includes(name.substring(0, name.length - 1).toLowerCase())) {
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'egg',
          message: 'Whether to open the easter-egg'
        }
      ])
      .then(
        (res: any): void => {
          if (res.egg) {
            const spinner = ora();

            qrcode.generate('wxp://f2f1dCO-KRa-5EXMMwBWGaKmT6ZwGdDh_0R7');

            spinner.text = chalk.green(
              '   😶· please pay ￥5 to author\n    open qrcode with wechat\n'
            );
            spinner.start();
          }
        }
      );
  }
};

const replaceLineBreak = (str: string) => {
  const reg = new RegExp(',\n  \n', 'g');
  const res = str
    .replace(reg, ',\n')
    .replace(new RegExp('{\n', 'g'), '{')
    .replace(new RegExp('\n\n', 'g'), '\n')
    .replace(new RegExp('    ', 'g'), '  ');
  return res;
};

const underscoreName = (str: string) =>
  str.replace(/([A-Z])/g, '_$1').toUpperCase();

const checkPathExist = (path: string) => {
  const arr = path.split('/').slice(1);
  let processPath = '';
  for (const o of arr) {
    processPath += '/' + o;
    if (!fs.existsSync(processPath)) {
      fs.mkdirSync(processPath);
    }
  }
  return true;
};

const STORE_PATH = 'src/store';

type Options = {
  source: string;
};

type Actions = {
  name: string;
  reducer?: boolean;
  saga?: boolean;
};

class Generator {
  actionTemplate?: string;
  reducerTemplate?: string;
  sagaTemplate?: string;
  doc?: any;

  public init(options: Options) {
    const { source } = options;
    this.doc = yaml.safeLoad(
      fs.readFileSync(path.resolve(source), { encoding: 'utf8' })
    );

    this.actionTemplate = this.readTemplate('action.tml');
    this.reducerTemplate = this.readTemplate('reducer.tml');
    this.sagaTemplate = this.readTemplate('saga.tml');
  }

  readTemplate(templateName: string) {
    return fs.readFileSync(
      path.resolve(__dirname, 'template', templateName),
      'utf8'
    );
  }

  writeFile(filePath: string, fileName: string, params: any) {
    const dir = filePath + this.doc.dir + '/';
    checkPathExist(dir);

    fs.writeFile(dir + fileName + '.js', params, err => {
      if (err) console.log(err);
    });
  }

  public run() {
    easterEgg();

    const actions = this.doc.actions.map((o: Actions) => {
      return {
        ...o,
        underscoreName: underscoreName(o.name)
      };
    });
    const reducers = actions.filter((o: Actions) => o.reducer);

    const actionCompiled = lodash.template(this.actionTemplate);
    const reducerCompiled = lodash.template(this.reducerTemplate);
    const sagaCompiled = lodash.template(this.sagaTemplate);

    const storePath = path.resolve(STORE_PATH);

    this.writeFile(
      storePath + '/actions/',
      this.doc.fileName,
      replaceLineBreak(actionCompiled({ actions }))
    );

    this.writeFile(
      storePath + '/reducers/',
      this.doc.fileName,
      reducerCompiled({ ...this.doc, actions: reducers })
    );

    this.writeFile(
      storePath + '/sagas/',
      this.doc.fileName,
      sagaCompiled({ ...this.doc })
    );
  }
}

export default function(source: string) {
  const rg = new Generator();
  rg.init({
    source
  });
  rg.run();
}
