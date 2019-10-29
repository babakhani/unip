import SvelteApp from '../src/App.svelte'
import toVue from 'svelte-adapter/vue'
export default toVue(SvelteApp, {}, 'div')
