<template>
  <div id="app">
    <SveltePlugin
      :options="{
        sampleConfig: 'passed from vue js',
      }"
      @onSampleEvent="handleClick"
      @onSampleEventOver="handleOver"
    />
  </div>
</template>
<script>
import SveltePlugin from '../../../dist/<%-NAME>-vue2.js'
// eslint-disable-next-line no-unused-vars
import styles from '../../../dist/<%-NAME>.css'
export default {
  name: 'App',
  components: { SveltePlugin },
  methods: {
    handleOver() {
      console.log('Vue handle mouse over vue js')
    },
    handleClick() {
      alert('alert from vue js')
    },
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
