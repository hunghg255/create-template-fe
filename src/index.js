#! /usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const degit = require('degit');
const kebabCase = require('lodash.kebabcase');

program.option('-t, --template <template>', 'Specify the template');
program.option('--with-yarn', 'Use yarn to install packages');

program.parse();

let name = program.args[0];

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

  const emitter = degit(`https://github.com/hunghg2505/nextjs-init.git`, {
    cache: false,
    force: true,
    verbose: true,
    mode: 'tar',
  });

  await emitter.clone(directory);

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

  console.log(`\n🎉 Successfully created your project!\n`);
})();
