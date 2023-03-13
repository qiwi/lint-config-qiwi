# eslint-config-qiwi-js

[![CI](https://github.com/qiwi/lint-config-qiwi/workflows/CI/badge.svg)](https://github.com/qiwi/lint-config-qiwi/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/test_coverage)](https://codeclimate.com/github/qiwi/lint-config-qiwi/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/maintainability)](https://codeclimate.com/github/qiwi/lint-config-qiwi/maintainability)
[![npm (scoped)](https://img.shields.io/npm/v/eslint-config-qiwi?label=npm&color=39f)](https://www.npmjs.com/package/eslint-config-qiwi)

[ESLint](https://eslint.org) rules for QIWI JS projects.

## Install

```bash
npm add eslint-config-qiwi-js -D
yarn add eslint-config-qiwi-js -D
```

## Usage

Refer to `eslint-config-qiwi-js` in your [.eslintrc.json](https://eslint.org/docs/user-guide/configuring):

```json
{
  "extends": "eslint-config-qiwi-js"
}
```

[Run](https://eslint.org/docs/user-guide/command-line-interface) linting your TS code:

```bash
eslint -c /any/path/to/.eslintrc.json --fix
```

## Contribution

If you find this config not strong enough you may add additional rules, write some tests, and trigger assets generation.

```bash
yarn test:u
```

## License

MIT
