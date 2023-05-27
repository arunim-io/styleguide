/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...require('./base'),
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
  plugins: [require.resolve('prettier-plugin-svelte')],
};
