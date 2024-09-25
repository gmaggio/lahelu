module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ JSX scope not required
    "react/jsx-uses-react": "off", // Disable JSX React import check for React 17+
    "react/style-prop-object": [
      "warn",
      {
        allow: ["StatusBar"], // Allow StatusBar styles
      },
    ],
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
