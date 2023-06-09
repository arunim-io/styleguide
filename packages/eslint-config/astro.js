/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    './typescript-with-parser.js',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  rules: {
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        allowList: {
          Props: true,
        },
        extendDefaultAllowList: true,
        ignore: ['env.d'],
      },
    ],
  },
  settings: {
    'import/core-modules': ['astro:content', 'astro:assets'],
  },
};
