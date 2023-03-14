#! /usr/bin/env node

const path = require('path');
const fs = require('fs');
const degit = require('degit');
const kebabCase = require('lodash.kebabcase');
const templates = require('./templates');
const prompts = require('prompts');

(async () => {
  const name = (
    await prompts({
      type: 'text',
      message: "What's the name of your app?",
      initial: 'my-app',
      name: 'name',
    })
  ).name;

  const directory = path.resolve(process.cwd(), name);

  if (fs.existsSync(directory) && fs.readdirSync(directory).length > 0) {
    console.log(`⚙️ ${directory}`);
    const { willRemoveFiles } = await prompts({
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

  const template = (
    await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose a template',
      choices: templates.map((temp) => ({
        title: temp.name,
        value: temp.githubPath,
      })),
    })
  ).value;

  const emitter = degit(`https://github.com/hunghg255/${template}.git`, {
    cache: false,
    force: true,
    verbose: true,
    mode: 'tar',
  });

  await emitter.clone(directory);

  if (template !== 'html-css-js') {
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
