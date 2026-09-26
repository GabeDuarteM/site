// eslint-disable-next-line import-x/no-rename-default -- Both presets name their default export config.
import core from 'ultracite/eslint/core'
// eslint-disable-next-line import-x/no-rename-default -- Both presets name their default export config.
import astro from 'ultracite/eslint/astro'
import { configs } from 'eslint-plugin-astro'

export default [
  { ignores: ['.astro/**', '**/*.json', 'src/components/posthog.astro'] },
  ...core,
  ...configs['flat/recommended'],
  ...configs['flat/jsx-a11y-strict'],
  ...astro,
  { files: ['**/*.astro'], processor: 'astro/astro' },
]
