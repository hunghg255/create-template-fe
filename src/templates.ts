import {
  blue,
  cyan,
  green,
  lightBlue,
  lightGreen,
  lightRed,
  magenta,
  red,
  yellow,
} from 'kolorist';

export const templates = [
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
  {
    framwork: 'Svelte',
    color: red,
    variants: [
      {
        name: 'Sveltekit, Tailwindcss, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/svelte-kit-tailwindcss-template',
      },
    ],
  },
  {
    framwork: 'Template build package',
    color: magenta,
    variants: [
      {
        name: 'Rollup, Reactjs, Typescript',
        color: red,
        githubRepo: 'https://github.com/hunghg255/rollup-package-react-template',
      },
      {
        name: 'Microbundle, Reactjs, Typescript',
        color: yellow,
        githubRepo: 'https://github.com/hunghg255/microbundle-package-react-template',
      },
      {
        name: 'Microbundle, Typescript',
        color: cyan,
        githubRepo: 'https://github.com/hunghg255/microbundle-package-template',
      },
      {
        name: 'Tsup, typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/npm-package-template',
      },
      {
        name: 'unbuild, typescript',
        color: lightBlue,
        githubRepo: 'https://github.com/hunghg255/unbuild-package-template.git',
      },
    ],
  }
];

export const packageManagers = [
  {
    name: 'npm',
    color: red,
  },
  {
    name: 'yarn',
    color: cyan,
  },
  {
    name: 'pnpm',
    color: yellow,
  }
]
