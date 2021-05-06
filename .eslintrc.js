module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  linterOptions: {
    exclude: ["bin", "**/__test__", "lib/*generated.js"],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
  },
};
