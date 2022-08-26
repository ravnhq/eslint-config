/**
 * In projects where our legacy filename structure is used, this config can be
 * extended to fix the filename rules
 *
 * Legacy file naming structure: camelCase unless the file is exporting a react
 * component (.tsx) in which case use PascalCase
 */

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  plugins: ["filenames"],
  rules: {
    "filenames/match-regex": ["error", /^(?:\.?[\da-z]+(?:[A-Z][\da-z]+)*)+$/],
    "filenames/match-exported": ["error", "camel"],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "filenames/match-regex": ["error", /^(?:[A-Z][a-z]+)+(?:\.[\da-z]+)*$/],
        "filenames/match-exported": ["error", "pascal"],
      },
    },
    {
      files: ["**/use@([A-Z]|-|_)*.@(js|ts|tsx)"],
      rules: {
        "filenames/match-regex": ["error", /^use(?:[A-Z][\da-z]+)*$/],
        "filenames/match-exported": ["error", "camel"],
      },
    },
  ],
}
