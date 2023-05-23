/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    './typescript.js',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  /** @type {import('@typescript-eslint/types').ParserOptions} */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
