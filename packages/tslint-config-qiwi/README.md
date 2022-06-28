# tslint-config-qiwi
[![CI](https://github.com/qiwi/lint-config-qiwi/workflows/CI/badge.svg)](https://github.com/qiwi/lint-config-qiwi/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/test_coverage)](https://codeclimate.com/github/qiwi/lint-config-qiwi/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/maintainability)](https://codeclimate.com/github/qiwi/lint-config-qiwi/maintainability)
[![npm (scoped)](https://img.shields.io/npm/v/prettier-config-qiwi?label=npm&color=39f)](https://www.npmjs.com/package/prettier-config-qiwi)

[TSLint](https://github.com/palantir/tslint/) rules related to QIWI projects. Based on [tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard) and [tslint-react](https://github.com/palantir/tslint-react).

⚠️ TSLint is deprecated since 2019: [TSLint &rarr; ESLint](https://github.com/palantir/tslint/issues/4534). 
Use [eslint-config-qiwi](../eslint-config-qiwi/README.md) instead.

## Install
```bash
npm add tslint-config-qiwi -D
yarn add tslint-config-qiwi -D
```

## Usage
Refer to `tslint-config-qiwi` in your [tslint.json](https://palantir.github.io/tslint/usage/configuration/):
```json
{
  "extends": "tslint-config-qiwi"
}
```
[Run](https://palantir.github.io/tslint/usage/cli/) linting your TS code:
```bash
tslint -p tsconfig.json -c tslint.json --fix
```

## Contribution
If you find this config not strong enough you may add additional rules, write some tests, and trigger assets generation.
```bash
yarn test:u
```

## License
MIT
