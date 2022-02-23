module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'max-len': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
  },
};
