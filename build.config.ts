import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/cli',
  ],
  clean: true,
  declaration: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      minify: true,
    },
  },
  failOnWarn: false
})
