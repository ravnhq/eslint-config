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
        "react/button-has-type": "off",
        "react/forbid-component-props": "off",
        "react/function-component-definition": "off",
        "react/hook-use-state": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-indent": "off",
        "react/jsx-max-depth": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-newline": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-constructed-context-values": "off",
        "react/jsx-no-leaked-render": [
          "error",
          { validStrategies: ["ternary"] },
        ],
        "react/jsx-no-literals": "off",
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-wrap-multilines": "off",
        "react/no-array-index-key": "off",
        "react/no-multi-comp": "off",
        "react/no-set-state": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/require-optimization": "off",
        "react/sort-comp": "off",
        "react/state-in-constructor": "off",
      },
    },
  ],
}
