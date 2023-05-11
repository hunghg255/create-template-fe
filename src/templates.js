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
        githubRepo: 'https://github.com/hunghg255/html-css-js.git',
      },
      {
        name: 'HTML, CSS, JS, Webpack',
        githubPath: 'fe-webpack',
        color: cyan,
        githubRepo: 'https://github.com/hunghg255/fe-webpack.git',
      },
    ],
  },
  {
    framwork: 'Vitejs',
    color: blue,
    variants: [
      {
        name: 'Vitejs, React18, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/vite-react-ts.git',
      },
      {
        name: 'Vitejs, React18, Typescript, SWC',
        color: lightRed,
        githubRepo: 'https://github.com/hunghg255/vite-react-swc-init.git',
      },
      {
        name: 'Vitejs, Antd, Recoil, i18n, Typescript',
        color: yellow,
        githubRepo: 'https://github.com/hunghg255/vite-react-antd.git',
      },
    ],
  },
  {
    framwork: 'Nextjs',
    color: lightGreen,
    variants: [
      {
        name: 'Next12, Antd, Recoil, i18n, Typescript',
        color: red,
        githubRepo: 'https://github.com/hunghg255/next12-antd-recoil.git',
      },
      {
        name: 'Next13, Antd, Jotai, i18n, Typescript (Page Router)',
        color: yellow,
        githubRepo: 'https://github.com/hunghg255/next13-antd-jotai.git',
      },
      {
        name: 'Next13, Tailwindcss, Jotai, i18n, Typescript (Page Router)',
        color: cyan,
        githubRepo: 'https://github.com/hunghg255/next13-tailwindcss-jotai.git',
      },
      {
        name: 'Next13 (App Router)',
        color: green,
        githubRepo: 'https://github.com/hunghg255/next13-app-dir-template',
      },
    ],
  },
];

module.exports = templates;
