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

const templates = [
  {
    name: 'HTML, CSS, JS',
    githubPath: 'html-css-js',
  },
  {
    name: 'HTML, CSS, JS, Webpack',
    githubPath: 'fe-webpack',
  },
  {
    name: 'Vitejs, React18, Typescript',
    githubPath: 'vite-react-ts',
  },
  {
    name: 'Vitejs, React18, Typescript, SWC',
    githubPath: 'vite-react-swc-init',
  },
  {
    name: 'Vitejs, Antd, Recoil, i18n, Typescript',
    githubPath: 'vite-react-antd',
  },
  {
    name: 'Next12, Antd, Recoil, i18n, Typescript',
    githubPath: 'next12-antd-recoil',
  },
  {
    name: 'Next13, Antd, Jotai, i18n, Typescript',
    githubPath: 'next13-antd-jotai',
  },
  {
    name: 'Next13, Tailwindcss, Jotai, i18n, Typescript',
    githubPath: 'next13-tailwindcss-jotai',
  },
];

module.exports = templates;
