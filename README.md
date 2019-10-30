UNIP
==============

Universal plugin scaffold

Create universal plugin with single code base for pure JavaScript, Svelte, Vue.js and React

[![npm version](https://badge.fury.io/js/unip.svg)](https://badge.fury.io/js/unip)

### What's Unip?

Unip help you start new plugin project that going to work in different
JavaScript framework, currently we support Vue.js, React, pure JavaScript (IIFE) and also Svelte.


## Install

```
npm install -g unip

yarn global add unip
```

## Usage

```
unip create svelte my-awesome-plugin
```

Complete details and create new project

#### Start svelte dev server

```
npm run dev 
```

#### Start Pure javascript dev server

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

#### Kill node process on demo ports

```
npm run clear 
```

## Contribute


```
git clone git@github.com:babakhani/unip.git

cd unip

npm link

unip --help
```


