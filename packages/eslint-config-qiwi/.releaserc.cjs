module.exports = {
  ...require('../../.releaserc.cjs'),
  changelog: 'changelog',
  ghPages: {
    branch: 'gh-pages',
    from: 'docs',
    to: 'eslint-config-qiwi'
  }
}