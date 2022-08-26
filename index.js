const fs = require("node:fs")
const path = require("node:path")

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

const tsConfig = fs.existsSync("tsconfig.json")
  ? path.resolve("tsconfig.json")
  : undefined

module.exports = {
  extends: [
    "plugin:eslint-comments/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "prettier",
  ],
  plugins: ["filenames", "promise"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    // Rules that are no bueno
    "object-shorthand": "off",

    // Rules that need adjusting
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],

    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unused-disable": "error",

    "unicorn/filename-case": "off",
    "filenames/match-regex": [
      "error",
      /^(?:\.?(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)+$/u,
    ],
    "filenames/match-exported": [
      "error",
      "kebab",
      "\\.(query|service|types|styles)$",
    ],
    "filenames/no-index": "off",

    "promise/always-return": "error",
    "promise/avoid-new": "off",
    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "off",
    "promise/no-native": "off",
    "promise/no-nesting": "error",
    "promise/no-new-statics": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-return-in-finally": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/valid-params": "error",

    "sonarjs/cognitive-complexity": "off",
    "sonarjs/no-duplicate-string": "off",
    "sonarjs/prefer-immediate-return": "off",

    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-null": "off", // Maybe we should stop using null
    "unicorn/no-unsafe-regex": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": ["off"],
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-useless-undefined": "off",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2022,
        project: tsConfig,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "no-duplicate-imports": "off",
        "consistent-return": "off", // in TS this is much less an issue

        "unicorn/prefer-module": "error",

        "@typescript-eslint/no-floating-promises": "off",

        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: false,
          },
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
}
