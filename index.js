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
    "capitalized-comments": "off",
    "line-comment-position": "off",
    "multiline-comment-style": "off",
    "no-inline-comments": "off",
    "no-ternary": "off",
    "no-undefined": "off",
    "one-var": "off",
    "sort-keys": "off",
    "max-statements": "off",
    "eol-last": "off",
    "max-lines-per-function": "off",
    "id-length": "off",
    "init-declarations": "off",
    "arrow-body-style": "off",
    "max-params": "off",
    "max-lines": "off",
    "no-warning-comments": "off",
    "prefer-destructuring": "off", // destructuring is cool and great but not required IMO
    "no-prototype-builtins": "off",
    "no-magic-numbers": "off",

    // Rules that need adjusting
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-param-reassign": ["error", { props: false }],
    "object-shorthand": ["error", "properties"],

    "unicorn/filename-case": "off",
    "filenames/match-regex": [
      "error",
      /^(?:\.?(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)+$/u,
    ],
    "filenames/match-exported": ["error", "kebab"],
    "filenames/no-index": "off",

    "sort-imports": "off",
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "error",

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

    "unicorn/no-array-for-each": "off",
    "unicorn/no-null": "off", // Maybe we should stop using null
    "unicorn/no-unsafe-regex": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          dir: false,
          env: false,
          params: false,
          props: false,
          ref: false,
          req: false,
          res: false,
          args: false,
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
        "plugin:@typescript-eslint/eslint-recommended",
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
        "constructor-super": "off", // ts(2335) & ts(2377)
        "getter-return": "off", // ts(2378)
        "no-const-assign": "off", // ts(2588)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-class-members": "off", // ts(2393) & ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2539)
        "no-import-assign": "off", // ts(2539) & ts(2540)
        "no-new-symbol": "off", // ts(2588)
        "no-obj-calls": "off", // ts(2349)
        "no-redeclare": "off", // ts(2451)
        "no-setter-return": "off", // ts(2408)
        "no-this-before-super": "off", // ts(2376)
        "no-undef": "off", // ts(2304)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
        "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
        "prefer-const": "error", // ts provides better types with const
        "prefer-rest-params": "error", // ts provides better types with rest args over arguments
        "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
        "valid-typeof": "off", // ts(2367)
        "consistent-return": "off", // in TS this is much less an issue

        "unicorn/prefer-module": "error",

        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
      },
    },
  ],
}
