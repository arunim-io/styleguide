/**
 * @description This is the ESLint config for TypeScript. Use it when your project uses TypeScript.
 *
 * Required packages are all specified in vanilla.js, including:
 * - @typescript-eslint/eslint-plugin
 *
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['./vanilla.js', 'plugin:@typescript-eslint/eslint-recommended'],
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
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
