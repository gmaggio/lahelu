module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', '@stylistic/js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ JSX scope not required
    'react/jsx-uses-react': 'off', // Disable JSX React import check for React 17+
    'react/style-prop-object': [
      'warn',
      {
        allow: ['StatusBar'], // Allow StatusBar styles
      },
    ],
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/mock-api/**'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true, // Keep the rule for other cases
        ignorePropertyModificationsFor: [
          // Ignore reassignment for Redux Toolkit's state parameter
          // (because it uses Immer)
          'state',
        ],
      },
    ],
    'no-plusplus': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
