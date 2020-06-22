# eslint-config-qiwi
[![Build Status](https://travis-ci.com/qiwi/lint-config-qiwi.svg?branch=master)](https://travis-ci.com/qiwi/lint-config-qiwi)
[![npm (tag)](https://img.shields.io/npm/v/prettier-config-qiwi/latest.svg)](https://www.npmjs.com/package/prettier-config-qiwi)
[![dependencyStatus](https://img.shields.io/david/qiwi/lint-config-qiwi.svg?maxAge=300)](https://david-dm.org/qiwi/lint-config-qiwi)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/test_coverage)](https://codeclimate.com/github/qiwi/lint-config-qiwi/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8738098b0f0f4825da8b/maintainability)](https://codeclimate.com/github/qiwi/lint-config-qiwi/maintainability)

[Prettier](https://prettier.io/) rules related to QIWI projects.

## Install
```bash
npm add prettier-config-qiwi -D
yarn add prettier-config-qiwi -D
```

## Usage
Add in your `package.json`:
```json
{
   ...
   "prettier": "prettier-config-qiwi"
}
``` 
If you want overwrite some properties, you need import the file in a .prettierrc.js file and export the modifications: 
```javascript
module.exports = {
  ...require("prettier-config-qiwi"),
  semi: false,
};
```

If you want to use prettier with eslint, add in your .eslintrc.js: 
```javascript
  extends: [
    // ...
    'prettier',
    'prettier/@typescript-eslint',
  ],
```

[Run](https://prettier.io/docs/en/cli.html) format your code:
```bash
prettier --write \"src/**/*.ts\""
```

## Contribution
If you find this config not strong enough you may add additional rules, write some tests, and trigger assets generation.
```bash
yarn test
```
