# eslint-config-qiwi
[![CI](https://github.com/qiwi/lint-config-qiwi/workflows/CI/badge.svg)](https://github.com/qiwi/lint-config-qiwi/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/test_coverage)](https://codeclimate.com/github/qiwi/lint-config-qiwi/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/maintainability)](https://codeclimate.com/github/qiwi/lint-config-qiwi/maintainability)
[![npm (scoped)](https://img.shields.io/npm/v/eslint-config-qiwi?label=npm&color=39f)](https://www.npmjs.com/package/eslint-config-qiwi)

[ESLint](https://eslint.org) rules related to QIWI projects.

## Install
```bash
npm add eslint-config-qiwi -D
yarn add eslint-config-qiwi -D
```

## Usage
Refer to `eslint-config-qiwi` in your [.eslintrc.json](https://eslint.org/docs/user-guide/configuring):
```json
{
  "extends": "eslint-config-qiwi"
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
