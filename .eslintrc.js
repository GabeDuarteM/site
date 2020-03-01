const baseConfig = require('gd-configs/eslint/web')

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'react/no-unescaped-entities': 'off',
  },
}
