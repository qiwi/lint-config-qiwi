# tslint-config-qiwi
[![Build Status](https://travis-ci.com/qiwi/lint-config-qiwi.svg?branch=master)](https://travis-ci.com/qiwi/lint-config-qiwi)
[![npm (tag)](https://img.shields.io/npm/v/tslint-config-qiwi/latest.svg)](https://www.npmjs.com/package/tslint-config-qiwi)
[![dependencyStatus](https://img.shields.io/david/qiwi/lint-config-qiwi.svg?maxAge=300)](https://david-dm.org/qiwi/lint-config-qiwi)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/test_coverage)](https://codeclimate.com/github/qiwi/lint-config-qiwi/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/maintainability)](https://codeclimate.com/github/qiwi/lint-config-qiwi/maintainability)

[TSLint](https://github.com/palantir/tslint/) rules related to QIWI projects. Based on [tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard) and [tslint-react](https://github.com/palantir/tslint-react).

:warning: __TSLint will be deprecated some time in 2019__. See this issue for more details: [Roadmap: TSLint &rarr; ESLint](https://github.com/palantir/tslint/issues/4534).  
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
