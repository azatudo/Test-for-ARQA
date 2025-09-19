module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  plugins: ["@typescript-eslint", "react"], // убрали react-hooks
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals", // уже включает react-hooks
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};