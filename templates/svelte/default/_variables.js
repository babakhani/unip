/*
 * Variables to replace
 * --------------------
 * They are asked to the user as they appear here, but hey will be
 * searched in uppercase and inside brackets ([VARIABLE]) in the
 * template files
 */

module.exports = [
  {
    name: 'name',
    description:
      'This name will be use in package name, and JavaScript plugin name',
    default: 'awesomeunip',
  },
  {
    name: 'version',
    default: '0.0.1',
  },
  {
    name: 'description',
    default: 'My Awesome unip plugin, created with unip',
  },
  {
    name: 'author',
    default: 'babakhani.reza@gmail.com',
  },
  {
    name: 'license',
    default: 'MIT',
  },
  {
    name: 'dev_port',
    default: '8000',
  },
  {
    name: 'iife_port',
    default: '8001',
  },
  {
    name: 'vue_port',
    default: '8002',
  },
  {
    name: 'react_port',
    default: '8004',
  },
  {
    name: 'email',
    default: 'babakhani.reza@gmail.com',
  },
  {
    name: 'npm_publish-key',
    default: '',
  },
  {
    name: 'repository',
    default: 'git@github.com:babakhani/unip.git',
  },
  {
    name: 'home',
    default: 'https://github.com/babakhani/unip',
  },
]
