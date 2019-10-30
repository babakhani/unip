import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import banner from 'rollup-plugin-banner'
import pkg from '../package.json'
const production = !process.env.ROLLUP_WATCH;
export default {
	input: 'adapter/plugin-vue.js',
	output: {
		sourcemap: true,
		format: 'esm',
    extend: true,
		name: pkg.name,
		file: `public/[NAME]-vue.js`
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
    banner(`
<%= pkg.name %>
v<%= pkg.version %>
<%= pkg.author %>
license <%= pkg.license %>
<%= pkg.homepage %>
    `)
	],
	watch: {
		clearScreen: false
	}
};
