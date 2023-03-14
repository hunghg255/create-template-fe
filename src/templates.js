const fs = require('fs');
const path = require('path');
const {
  blue,
  cyan,
  green,
  lightGreen,
  lightRed,
  magenta,
  red,
  yellow,
  violet,
} = require('kolorist');

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
    framwork: 'Vanillajs',
    color: yellow,
    variants: [
      {
        name: 'HTML, CSS, JS',
        githubPath: 'html-css-js',
        color: green,
      },
      {
        name: 'HTML, CSS, JS, Webpack',
        githubPath: 'fe-webpack',
        color: cyan,
      },
    ],
  },
  {
    framwork: 'Vitejs',
    color: blue,
    variants: [
      {
        name: 'Vitejs, React18, Typescript',
        githubPath: 'vite-react-ts',
        color: green,
      },
      {
        name: 'Vitejs, React18, Typescript, SWC',
        githubPath: 'vite-react-swc-init',
        color: lightRed,
      },
      {
        name: 'Vitejs, Antd, Recoil, i18n, Typescript',
        githubPath: 'vite-react-antd',
        color: yellow,
      },
    ],
  },
  {
    framwork: 'Nextjs',
    color: lightGreen,
    variants: [
      {
        name: 'Next12, Antd, Recoil, i18n, Typescript',
        githubPath: 'next12-antd-recoil',
        color: red,
      },
      {
        name: 'Next13, Antd, Jotai, i18n, Typescript',
        githubPath: 'next13-antd-jotai',
        color: yellow,
      },
      {
        name: 'Next13, Tailwindcss, Jotai, i18n, Typescript',
        githubPath: 'next13-tailwindcss-jotai',
        color: cyan,
      },
    ],
  },
];

module.exports = templates;
