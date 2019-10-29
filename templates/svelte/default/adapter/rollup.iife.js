import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import banner from 'rollup-plugin-banner'
import pkg from '../package.json'
const production = !process.env.ROLLUP_WATCH;
export default {
	input: 'adapter/plugin-iife.js',
	output: {
		sourcemap: false,
		format: 'iife',
    extend: true,
		name: '[NAME_SANITIZED]',
		file: `public/[NAME]-iife.js`
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write(`public/[NAME].css`);
			}
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		production && terser(),
    banner('v<%= pkg.version %> by<%= pkg.author %>')
    banner('<%= pkg.lisence %>'),
    banner('<%= pkg.name %>'),
	],
	watch: {
		clearScreen: false
	}
};
