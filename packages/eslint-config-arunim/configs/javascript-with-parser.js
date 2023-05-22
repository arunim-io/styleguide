/**
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
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
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
