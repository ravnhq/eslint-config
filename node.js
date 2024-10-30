/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: ["plugin:security/recommended-legacy"],
  rules: {
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
  },
}
