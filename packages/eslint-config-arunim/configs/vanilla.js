/**
 * @description This is the base ESLint config for vanilla JavaScript. Use it when your project only uses vanilla JavaScript.
 *
 * Required packages include:
 * - eslint-config-prettier
 * - eslint-plugin-prettier
 * - eslint-plugin-unicorn
 * - eslint-plugin-jsonc
 *
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:jsonc/prettier',
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
  ],
  rules: {
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['import'],
        next: ['const', 'function', 'export'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
  },
};
