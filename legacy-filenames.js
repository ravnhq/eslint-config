/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  plugins: ["filenames", "promise"],
  rules: {
    "filenames/match-regex": ["error", /^[\da-z]+(?:[A-Z][\da-z]+)*$/g],
    "filenames/match-exported": ["error", "camel"],
  },
  overrides: [
    {
      files: ["**/*.tsx)"],
      rules: {
        "filenames/match-regex": ["error", /^(?:[A-Z][a-z]+)+$/],
        "filenames/match-exported": ["error", "pascal"],
      },
    },
  ],
}
