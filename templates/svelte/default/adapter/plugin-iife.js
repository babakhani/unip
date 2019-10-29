import App from '../src/App.svelte';
const Plugin = function (container, config) {
  return new App({
  	target: container,
	  props: {
      options: config
    }
  });
}
export default Plugin;
