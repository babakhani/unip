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
    description: 'This name will be use in package name, and JavaScript plugin name',
    default: 'awesomeunip',
  },
  {
    name: 'version',
    default: '0.0.1',
  },
  {
    name: 'description',
    default: 'My Awesome plugin, created with unip',
  },
  {
    name: 'author',
    default: '',
  },
  {
    name: 'license',
    default: 'MIT',
  },
  {
    name: 'email',
    default: '',
  },
  {
    name: 'npm_publish-key',
    default: '',
  },
  {
    name: 'repository',
    default: '',
  },
  {
    name: 'home',
    default: '',
  },
]
