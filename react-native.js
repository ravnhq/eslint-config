/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  plugins: ["react-native"],
  rules: {
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",
  },
  env: {
    "react-native/react-native": true,
  },
}
