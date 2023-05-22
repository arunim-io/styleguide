/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    './javascript-with-parser.js',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  /** @type {import('@typescript-eslint/types').ParserOptions} */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['import'],
        next: ['const', 'function', 'export', 'interface', 'type'],
      },
    ],
  },
};
