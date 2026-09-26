import config from 'ultracite/stylelint'

export default {
  ...config,
  ignoreFiles: ['dist/**', '.astro/**'],
  rules: {
    ...config.rules,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['theme', 'source', 'apply'] }],
    'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['apply'] }],
    'import-notation': 'string',
  },
}
