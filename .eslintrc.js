module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['markdown', 'spellcheck'],
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      rules: {
        'no-unused-vars': 'off' // eslint cant hadnle this and eslint svelte plugin doesnt work propely
      }
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'vue/html-self-closing': 'off',
    semi: ['error', 'never'],
    indent: 'off', // handeled By prettier
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: [
          'commitlint',
          'args',
          'cwd',
          'npm',
          'vue',
          'react',
          'dev',
          'utils',
          'shelljs',
          'str',
          'wasn',
          'Init',
          'init',
          'esm',
          'unip',
          'reza',
          'babakhani',
          'eslint',
          'argv',
          'prog',
          'Prog',
          'Cmd',
          'caporal',
          'usr',
          'gmail',
          'iife',
          'Preprocess',
          'preprocess',
          'commonjs',
          'importee',
          'scss',
          'src',
          'rollup',
          'postcss',
          'autoprefixer',
          'sourcemap',
          'dedupe',
          'cli',
          'livereload',
          'decrement',
          'Formatter'
        ],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+/[-\\w\\.]+$' //For MIME Types
        ],
        minLength: 3
      }
    ]
  }
}
