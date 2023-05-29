/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['./javascript.js', 'plugin:import/recommended'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
