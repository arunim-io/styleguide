/**
 * This is the base ESLint config. It is used by all other ESLint configs.
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:jsonc/prettier',
  ],
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
  ],
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['import'],
        next: ['const', 'function', 'export', 'interface', 'type'],
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
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
