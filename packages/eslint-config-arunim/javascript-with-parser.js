/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['./javascript.js'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
