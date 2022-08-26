/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".tsx"] }],
  },
  overrides: [
    {
      files: ["**/*.@(js|tsx)"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ],
      rules: {},
    },
  ],
}
