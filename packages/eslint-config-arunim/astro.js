/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['./typescript-with-parser.js'],
  overrides: [
    {
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-strict'],
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
};
