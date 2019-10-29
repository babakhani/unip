<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SveltePlugin 
    @onSampleEvent="handleClick" 
    @onSampleEventOver="handleOver" 
    :options="{
       sampleConfig: 'passed from vue js'
    }" />
  </div>
</template>
<script>
import SveltePlugin from '../../../public/[NAME]-vue.js'
export default {
  name: 'app',
  components: { SveltePlugin},
  methods: {
    handleOver () {
      console.log('Vue handle mouse over vue js')
    },
    handleClick () {
      alert('alert from vue js')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
