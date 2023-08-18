import path from 'node:path';
import fs from 'node:fs';
import degit from 'degit';
import kebabCase from 'lodash.kebabcase';
import { packageManagers, templates } from './templates';
import { green, bgBlue, underline, cyan, yellow } from 'kolorist';
import {
  intro,
  outro,
  confirm,
  select,
  spinner,
  cancel,
  text,
  note,
  isCancel,
} from 'unprompts';
import { execSync } from 'child_process';

export const startCli = async () => {
  intro(bgBlue(' create-my-app '));

  const name = await text({
    message: "What's the name of your app?",
    placeholder: 'my-app',
    defaultValue: 'my-app',
  });

  if (isCancel(name)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const directory = path.resolve(process.cwd(), name as string);

  if (fs.existsSync(directory) && fs.readdirSync(directory).length > 0) {
    const isConfirmed = await confirm({
      message: 'Directory is not empty. Remove existing files and continue?',
      initialValue: true,
    });

    if (isConfirmed) {
      fs.rmSync(directory, { recursive: true, force: true });
      fs.mkdirSync(directory);
    } else {
      cancel('Operation cancelled');
      process.exit(0);
    }
  }

  const templateLabel = await select({
    message: 'Select a framework',
    options: templates.map((it) => ({
      label: it.color(it.framwork),
      value: it.framwork,
    })),
  });

  if (isCancel(templateLabel)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const frameworkSelected: any =
    templates.find((it) => it.framwork === templateLabel) || {};

  const githubRepo = (await select({
    message: 'Select a variant',
    options: frameworkSelected?.variants.map((item: any) => ({
      label: item.color(item.name),
      value: item.githubRepo,
    })),
  })) as string;

  if (isCancel(githubRepo)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  let isInstallDeps = false;
  let packageManager = 'npm';

  if (!githubRepo.includes('html-css-js')) {
    isInstallDeps = (await confirm({
      message: 'Do you want to install dependencies?',
      initialValue: false,
    })) as boolean;

    if (isCancel(isInstallDeps)) {
      cancel('Operation cancelled');
      return process.exit(0);
    }

    if (isInstallDeps) {
      packageManager = (await select({
        message: 'Select package manager',
        options: packageManagers.map((item: any) => ({
          label: item.color(item.name),
          value: item.name,
        })),
      })) as string;

      if (isCancel(packageManager)) {
        cancel('Operation cancelled');
        return process.exit(0);
      }
    }
  }

  const s = spinner();
  s.start(`Installing via ${isInstallDeps ? packageManager : 'degit'}`);

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

    if (isInstallDeps) {
      execSync(`${packageManager} install`, {
        cwd: directory,
        stdio: 'inherit',
      });
    }
  }

  s.stop(green(`🎉 Scaffolding project in ${underline(directory)}`));

  note(
    `${yellow(`cd ${name}`)}\n${
      isInstallDeps ? '' : yellow('npm install')
    }\n${yellow('npm run dev')}`,
    green('🎉 Done. Now run:')
  );

  outro(
    `Problems? ${underline(
      cyan('https://github.com/hunghg255/create-template-fe/issues')
    )}`
  );

  return process.exit(0);
};
