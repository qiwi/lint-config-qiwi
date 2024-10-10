module.exports = {
  ...require('../../.releaserc.cjs'),
  changelog: 'changelog',
  ghPages: {
    branch: 'gh-pages',
    from: 'docs',
    to: 'prettier-config-qiwi'
  }
}