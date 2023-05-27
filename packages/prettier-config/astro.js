/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...require('./base'),
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: [require.resolve('prettier-plugin-astro')],
};
