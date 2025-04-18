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
  lightYellow,
  lightGray,
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
        name: 'Vitejs, React, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/vite-react-ts.git',
      },
      {
        name: 'Vitejs, React, Antd, Jotail, i18n, Typescript',
        color: yellow,
        githubRepo: 'https://github.com/hunghg255/vite-react-antd.git',
      },
    ],
  },
  {
    framwork: 'Rsbuild',
    color: magenta,
    variants: [
      {
        name: 'Rsbuild, Antd, Jotail, i18n, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/rsbuild-react-antd.git',
      }
    ],
  },
  {
    framwork: 'Nextjs',
    color: lightGreen,
    variants: [
      {
        name: 'Next12, Antd, Jotail, i18n, Typescript',
        color: red,
        githubRepo: 'https://github.com/hunghg255/next12-antd-recoil.git',
      },
      {
        name: 'Next, Antd, Jotai, i18n, Typescript (Page Router)',
        color: yellow,
        githubRepo: 'https://github.com/hunghg255/next13-antd-jotai.git',
      },
      {
        name: 'Next, Tailwindcss, Jotai, i18n, Typescript (Page Router)',
        color: cyan,
        githubRepo: 'https://github.com/hunghg255/next13-tailwindcss-jotai.git',
      },
      {
        name: 'Next (App Router)',
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
    framwork: 'Template create a package react, svlete, vanillajs,...',
    color: magenta,
    variants: [
      {
        name: 'Rollup, React, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/rollup-package-react-template',
      },
      {
        name: 'Tsup, React, Typescript',
        color: red,
        githubRepo: 'https://github.com/hunghg255/tsup-react-typescript-template',
      },
      {
        name: 'Microbundle, React, Typescript',
        color: yellow,
        githubRepo: 'https://github.com/hunghg255/microbundle-package-react-template',
      },
      {
        name: 'Microbundle, Typescript',
        color: cyan,
        githubRepo: 'https://github.com/hunghg255/microbundle-package-template',
      },
      {
        name: 'Tsup, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/npm-package-template',
      },
      {
        name: 'unbuild, Typescript',
        color: lightBlue,
        githubRepo: 'https://github.com/hunghg255/unbuild-package-template.git',
      },
      {
        name: 'Rollup, Svelte, Typescript',
        color: lightGreen,
        githubRepo: 'https://github.com/hunghg255/rollup-svelte-package-template.git',
      },
      {
        name: 'Tsup, Svelte, Typescript',
        color: lightYellow,
        githubRepo: 'https://github.com/hunghg255/tsup-svelte-package-template.git',
      },
      {
        name: 'Bunchee, Typescript',
        color: cyan,
        githubRepo: 'https://github.com/hunghg255/bunchee-package.git',
      },
      {
        name: 'Bunchee, React, Typescript',
        color: blue,
        githubRepo: 'https://github.com/hunghg255/bunchee-React-package.git',
      },
      {
        name: 'Rslib, Typescript',
        color: lightRed,
        githubRepo: 'https://github.com/hunghg255/rslib-package.git',
      },
      {
        name: 'Tsdown, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/tsdown-template.git',
      },
    ],
  },
  {
    framwork: 'Template create a blog, docs',
    color: cyan,
    variants: [
      {
        name: 'Docusaurus, Typescript, Embeded Expo, Stackblitz',
        color: green,
        githubRepo: 'https://github.com/hunghg255/template-docusaurus.git',
      },
      {
        name: 'Markdown, Typescript, Twoslash, Shiki',
        color: blue,
        githubRepo: 'https://github.com/hunghg255/tiny-docs-template.git',
      },
    ],
  },
  {
    framwork: 'Template create a github action',
    color: lightYellow,
    variants: [
      {
        name: 'Actions Core, Typescript',
        color: green,
        githubRepo: 'https://github.com/hunghg255/github-actions-template.git',
      },
    ],
  },
  {
    framwork: 'Template create a CMS',
    color: yellow,
    variants: [
      {
        name: 'Vitejs, Antd, Tailwindcss, Jotai',
        color: green,
        githubRepo: 'https://github.com/hunghg255/cms-vite-antd.git',
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
  },
  {
    name: 'bun',
    color: lightGray,
  }
]
