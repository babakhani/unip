import App from '../src/App.svelte'
const Plugin = function(container, config) {
  let softContainer = container
  if (container.tagName === 'INPUT') {
    softContainer = document.body;
  }
  return new App({
    target: softContainer,
    props: {
      originalContainer: container,
      options: config,
    },
  })
}
export default Plugin
