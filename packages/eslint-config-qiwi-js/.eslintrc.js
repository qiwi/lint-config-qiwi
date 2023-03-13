module.exports = {
  ...require('../infra/.eslintrc.json'),
  "plugins": ["disable"],
  "processor": "disable/disable",
  "overrides": [
    {
      "files": ["**/*.js"],
      "settings": {
        "disable/plugins": ["@typescript-eslint"],
      }
    }
  ]
}
