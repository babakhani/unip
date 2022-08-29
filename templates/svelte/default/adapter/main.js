import App from '../src/App.svelte'

export default (container, options) => {

  const attrs = container.attributes
  // TODO: clean up this functions
  function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
  }

  function toCamelCase(text) {
    return text.replace(/-\w/g, clearAndUpper);
  }

  let sanitizedoptions = {}

  Object.keys(attrs).forEach((value) => {
    let sanitizedValue = attrs[value].value
    if (/^\d+$/.test(sanitizedValue)) {
      sanitizedValue = parseInt(sanitizedValue)
    }
    if (sanitizedValue === 'true') {
      sanitizedValue = true
    }
    if (sanitizedValue === 'false') {
      sanitizedValue = false
    }
    sanitizedoptions[toCamelCase(attrs[value].name)] = sanitizedValue
  })

  const app = new App({
    target: container,
    props: {
      originalContainer: container,
      options: sanitizedoptions
    },
  })
  return app
}
