module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        semi: true,
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
  },
}
