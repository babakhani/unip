<p align="center">
  <a href="https://github.com/babakhani/unip" target="_blank">
    <img width="180" src="https://raw.githubusercontent.com/babakhani/unip/master/logo.png" alt="UNIP">
  </a>
</p>
<h4 align="center">Plugin scaffold</h4>

<p align="center" >
<a href="https://badge.fury.io/js/unip"><img src="https://badge.fury.io/js/unip.svg" alt="npm version" height="18"></a>
</p>

UNIP
==================

Create Components with single code base for pure JavaScript, Svelte, Vue.js and React

### What's Unip?

Unip help you start new plugin project that will going to work in different
JavaScript framework, currently we support Vue.js, React, pure JavaScript (IIFE) and also Svelte.

## Features
- Use svelte power to create plugin that going to work every where
- Example for every thing you need to create your plugin
- Pre defined Vue.js React adapter
- VuePress static site generated for documentation

## Install

```
npm install -g unip

yarn global add unip
```

## Usage

```
unip create svelte my-awesome-plugin

cd my-awesome-plugin

npm run dev
```

#### Start svelte dev server

```
npm run dev 
```

#### Start Pure JavaScript dev server

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

## Contribute

```
git clone git@github.com:babakhani/unip.git

cd unip

npm link

unip --help
```

## license
Freely distributable under the terms of the [MIT](https://opensource.org/licenses/MIT) license. 
