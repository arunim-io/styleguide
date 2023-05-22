/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['./typescript.js'],
  parser: '@typescript-eslint/parser',
  /** @type {import('@typescript-eslint/types').ParserOptions} */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
};
