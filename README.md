# tslint-config-qiwi
[![Build Status](https://travis-ci.com/qiwi/tslint-config-qiwi.svg?branch=master)](https://travis-ci.com/qiwi/tslint-config-qiwi)
[![npm (tag)](https://img.shields.io/npm/v/tslint-config-qiwi/latest.svg)](https://www.npmjs.com/package/tslint-config-qiwi)
[![dependencyStatus](https://img.shields.io/david/qiwi/tslint-config-qiwi.svg?maxAge=300)](https://david-dm.org/qiwi/tslint-config-qiwi)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e7fdc4e135133bfb5370/test_coverage)](https://codeclimate.com/github/qiwi/tslint-config-qiwi/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/e7fdc4e135133bfb5370/maintainability)](https://codeclimate.com/github/qiwi/tslint-config-qiwi/maintainability)

[TSLint](https://github.com/palantir/tslint/) rules related to QIWI projects. Based on [tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard) and [tslint-react](https://github.com/palantir/tslint-react).

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
[Run](https://palantir.github.io/tslint/usage/cli/) linting your ts-code:
```bash
tslint -p tsconfig.json
tslint -p tsconfig.json --fix
```

## Contribution
If you find this config not strong enough you may add additional rules, write some tests, and trigger assets generation.
```bash
yarn test:gen
```
