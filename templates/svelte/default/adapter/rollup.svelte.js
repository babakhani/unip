import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import banner from 'rollup-plugin-banner'
import sveltePreprocess from 'svelte-preprocess'

import rollup_start_dev from './rollup_start_dev'
import pkg from '../package.json'

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
})

const production = !process.env.ROLLUP_WATCH

export default { 
  input: 'adapter/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    extend: true,
    name: pkg.name,
    file: `dist/<%-NAME>-svelte.js`,
  },
  plugins: [
    svelte({
      dev: !production,
      preprocess,
      css: css => {
        css.write(`<%-NAME>.css`)
      },
    }),
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    !production && rollup_start_dev,
    !production && livereload('dist'),
    production && terser(),
    banner(`
<%= pkg.name %>
v<%= pkg.version %>
<%= pkg.author %>
license <%= pkg.license %>
<%= pkg.homepage %>
    `),
  ],
  watch: {
    chokidar: {
      usePolling: true
    },
    clearScreen: false,
  }
}
