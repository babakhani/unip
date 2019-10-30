[NAME] v[VERSION]
==============

[DESCRIPTION]

- [Documents]()
- [Example/Demo]()
- [Playground]()

## Install

```
npm install [NAME] --save

yarn add [NAME] -S
```

## Usage

#### Pure javascript

```
<div id="container" />
<script>
  var container = document.getElementById('container')
  var options = {
    sampleConfig: 'Overwrite by plugin user',
    onSampleEvent: function (args) {
      console.log('onSampleEvent passed from applicaiton')
    }
  }
  [NAME_SANITIZED](container, options)
</script>
```

#### Vue

```
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
```

#### React 

```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SveltePlugin from './[NAME]-react.js'
function App() {
  const handleClick = () => alert('alert from react')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SveltePlugin onSvelteclick={handleClick} name="(attr passed from react js to svlete)" />
      </header>
    </div>
  );
}

export default App;
```

## Contribute

#### Start svelte dev server

```
npm run dev 
```

#### Start pure JavaScript dev server

[What is IIFE?](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```
npm run iife 
```

#### Install vue demo application packages 

```
npm run install-vue-demo
```

#### Start vue dev server

```
npm run vue 
```

#### Install react demo application packages 

```
npm run install-react-demo
```

#### Start react dev server

```
npm run react 
```

#### Kill node process on ports

```
npm run clear 
```

