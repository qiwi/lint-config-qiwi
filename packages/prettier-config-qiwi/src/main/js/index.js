module.exports = {
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  importOrder: ['^node:', '^react', '^@qiwi/', '^@pijma/', '^[^./]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy', 'importAssertions'],
}
