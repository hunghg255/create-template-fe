#! /usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const degit = require('degit');
const kebabCase = require('lodash.kebabcase');
const templates = require('./templates');

program.option('-t, --template <template>', 'Specify the template');
program.option('--with-yarn', 'Use yarn to install packages');

program.parse();

const options = program.opts();

let name = program.args[0];

let template =
  options.template in templates ? templates[options.template].name : null;

(async () => {
  if (!name) {
    name = (
      await inquirer.prompt({
        type: 'input',
        message: "What's the name of your app?",
        default: 'my-app',
        name: 'name',
      })
    ).name;
  }

  const directory = path.resolve(process.cwd(), name);

  if (fs.existsSync(directory) && fs.readdirSync(directory).length > 0) {
    console.log(`⚙️ ${directory}`);
    const { willRemoveFiles } = await inquirer.prompt({
      type: 'confirm',
      name: 'willRemoveFiles',
      message: 'Directory is not empty. Remove existing files and continue?',
      initial: true,
    });

    if (willRemoveFiles) {
      fs.rmSync(directory, { recursive: true, force: true });
      fs.mkdirSync(directory);
    } else {
      process.exit(1);
    }
  }

  if (!template) {
    template = (
      await inquirer.prompt({
        type: 'list',
        name: 'template',
        message: 'Choose a template',
        choices: Object.values(templates).map((temp) => temp.name),
      })
    ).template;
  }

  const templateId = Object.entries(templates).find(
    ([key, value]) => value.name === template
  )[0];

  const emitter = degit(`https://github.com/hunghg255/${templateId}.git`, {
    cache: false,
    force: true,
    verbose: true,
    mode: 'tar',
  });

  await emitter.clone(directory);

  if (templateId !== 'html-css-js') {
    const packageJSON = JSON.parse(
      fs.readFileSync(path.resolve(directory, 'package.json'), {
        encoding: 'utf-8',
      })
    );
    packageJSON.name = kebabCase(directory.split('/').slice(-1)[0]);
    fs.writeFileSync(
      path.resolve(directory, 'package.json'),
      JSON.stringify(packageJSON, null, 2),
      { encoding: 'utf-8' }
    );
  }

  console.log(`\n🎉 Successfully created your project!\n`);
})();
