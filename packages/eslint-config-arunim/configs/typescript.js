/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['./javascript.js', 'plugin:@typescript-eslint/eslint-recommended'],
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
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
