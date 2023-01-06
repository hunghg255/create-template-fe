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
  'next12-antd-recoil': {
    name: 'Next12, Antd, Recoil, Typescript',
  },
  'vite-react-ts': {
    name: 'Vite, React18, Typescript',
  },
};

module.exports = templates;
