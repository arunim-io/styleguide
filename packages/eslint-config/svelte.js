/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    './typescript-with-parser.js',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // NOTE: It is required until there is a workaround.
        'import/no-unresolved': 0,
      },
    },
  ],
  /** @type {import('@typescript-eslint/types').ParserOptions} */
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
};
