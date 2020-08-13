const baseConfig = require('gd-configs/eslint/web')

module.exports = {
  ...baseConfig,
  globals: {
    process: true,
  },
  rules: {
    ...baseConfig.rules,
    'react/no-unescaped-entities': 'off',
  },
}
