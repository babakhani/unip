import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import rollup_start_dev from './rollup_start_dev';
import banner from 'rollup-plugin-banner'
import pkg from './package.json'
const production = !process.env.ROLLUP_WATCH;
export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
    extend: true,
		name: pkg.name,
		file: `public/bundle.js`
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write(`public/bundle.css`);
			}
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		!production && rollup_start_dev,
		!production && livereload('public'),
		production && terser(),
    banner('v<%= pkg.name %>'),
    banner('v<%= pkg.lisence %>'),
    banner('v<%= pkg.version %> by<%= pkg.author %>')
	],
	watch: {
		clearScreen: false
	}
};
