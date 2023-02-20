const fs = require('fs');
const path = require('path');

const updateFiles = (directory, files) => {
  files.remove.forEach((file) => {
    fs.rmSync(path.resolve(directory, file), {
      recursive: true,
      force: true,
    });
  });

  Object.entries(files.write).map(([key, value]) =>
    fs.writeFileSync(path.resolve(directory, key), value, { encoding: 'utf-8' })
  );
};

const templates = {
  'html-css-js': {
    name: 'HTML, CSS, JS',
  },
  'fe-webpack': {
    name: 'HTML, CSS, JS, Webpack',
  },
  'vite-react-ts': {
    name: 'Vite, React18, Typescript',
  },
  'vite-react-swc-init': {
    name: 'Vite, React18, Typescript, SWC',
  },
  'vite-react-antd': {
    name: 'Vite, Antd, Recoil, i18n, Typescript',
  },
  'next12-antd-recoil': {
    name: 'Next12, Antd, Recoil, i18n, Typescript',
  },
  'next13-antd-jotai': {
    name: 'Next13, Antd, Jotai, i18n, Typescript',
  },
};

module.exports = templates;
