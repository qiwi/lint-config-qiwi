const rules = {
  'brace-style': [
    true,
    'stroustrup',
  ],
  'jsx-boolean-value': false,
  'jsx-no-lambda': false,
  'jsx-no-multiline-js': false,
  'no-unnecessary-type-assertion': false,
  'no-consecutive-blank-lines': [
    true,
    1,
  ],
  'object-curly-spacing': [
    true,
    'never',
  ],
  'object-literal-shorthand': true,
  'one-line': [
    false,
  ],
  'ter-padded-blocks': [
    true,
    {
      'classes': 'always',
    },
  ],
  'prefer-object-spread': true,
  'quotemark': [
    true,
    'single',
    'jsx-double',
  ],
  'space-before-function-paren': [
    true,
    {
      'anonymous': 'never',
      'asyncArrow': 'never',
      'constructor': 'never',
      'method': 'never',
      'named': 'never',
    },
  ],
  'trailing-comma': [
    true,
    {
      'multiline': {
        'arrays': 'always',
        'objects': 'always',
        'functions': 'always',
        'imports': 'always',
        'exports': 'always',
        'typeLiterals': 'never',
      },
      'singleline': 'never',
      'esSpecCompliant': true,
    },
  ],
}

module.exports = {
  extends: [
    'tslint-config-standard',
    'tslint-react',
  ],
  jsRules: rules,
  rules,
}
