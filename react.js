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
        "plugin:react/all",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ],
      rules: {
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-newline": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-max-depth": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-no-literals": "off",
        "react/forbid-component-props": "off",
        "react/function-component-definition": "off",
      },
    },
    {
      files: ["**/use@([A-Z]|-)*.@(js|ts|tsx)"],
      rules: {
        "filenames/match-regex": ["error", /^use(?:[A-Z][\da-z]+)*$/],
        "filenames/match-exported": ["error", "camel"],
      },
    },
  ],
}
