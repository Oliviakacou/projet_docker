// eslint.config.cjs
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'script' // pour CommonJS
      },
      globals: {
        // Globals Node.js
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',

        // Globals Jest
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];
