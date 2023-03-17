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

  const templateLabel = (
    await prompts({
      type: 'select',
      name: 'value',
      message: 'Select a framework',
      choices: templates.map((it) => ({
        title: it.color(it.framwork),
        value: it.framwork,
      })),
    })
  ).value;

  const frameworkSelected =
    templates.find((it) => it.framwork === templateLabel) || {};

  if (!frameworkSelected.variants) return;

  const githubRepo = (
    await prompts({
      type: 'select',
      name: 'value',
      message: 'Select a variant',
      choices: frameworkSelected.variants.map((item) => ({
        title: item.color(item.name),
        value: item.githubRepo,
      })),
    })
  ).value;

  if (!githubRepo) return;

  const emitter = degit(githubRepo, {
    cache: false,
    force: true,
    verbose: true,
    mode: 'tar',
  });

  await emitter.clone(directory);

  if (!githubRepo.includes('html-css-js')) {
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
