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
    "plugin:unicorn/all",
    "eslint:all",
    "plugin:import/recommended",
    "prettier",
  ],
  plugins: ["filenames", "promise"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    // Rules that are no bueno
    "arrow-body-style": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "default-param-last": "off",
    "eol-last": "off",
    "id-length": "off",
    "init-declarations": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "off",
    "max-lines-per-function": "off",
    "max-lines": "off",
    "max-params": "off",
    "max-statements": "off",
    "multiline-comment-style": "off",
    "no-inline-comments": "off",
    "no-magic-numbers": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-ternary": "off",
    "no-undefined": "off",
    "no-warning-comments": "off",
    "one-var": "off",
    "prefer-destructuring": "off", // destructuring is cool and great but not required IMO
    "require-unicode-regexp": "off",
    "sort-keys": "off",

    // Rules that need adjusting
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "object-shorthand": ["error", "properties"],

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

    "sort-imports": "off",
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "error",

    "param-names": "off",
    "always-return": "off",
    "no-return-wrap": "off",
    "no-native": "off",
    "catch-or-return": "off",
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

    "sonarjs/no-duplicate-string": "off",

    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-null": "off", // Maybe we should stop using null
    "unicorn/no-unsafe-regex": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        checkFilenames: false,
        replacements: {
          args: false,
          dir: false,
          env: false,
          params: false,
          prev: false,
          props: false,
          ref: false,
          req: false,
          res: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2019,
        project: tsConfig,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        "no-duplicate-imports": "off",
        "consistent-return": "off", // in TS this is much less an issue

        "unicorn/prefer-module": "error",

        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
}
