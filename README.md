# `@ravn/eslint-config`

> Ravn [Eslint](https://eslint.org/) config.

## Usage

**Install**:

```bash
$ yarn add --dev eslint@"^8.0.0" @ravn/eslint-config
```

**Edit `.eslintrc.js`**:

```js
module.exports = {
  extends: ["@ravnhq/eslint-config"],
}
```

Optionally there are other supplemental configs based on the project:

```js
module.exports = {
  extends: [
      "@ravnhq/eslint-config"
      "@ravnhq/eslint-config/react"
      "@ravnhq/eslint-config/react-native"
      "@ravnhq/eslint-config/electron"
      "@ravnhq/eslint-config/jest"
      "@ravnhq/eslint-config/node"
    ],
}
```
