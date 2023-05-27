/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['./typescript-with-parser.js', 'plugin:svelte/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
};
