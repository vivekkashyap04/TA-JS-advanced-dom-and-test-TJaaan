module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'max-classes-per-file': ['error', 3],
  },
};
