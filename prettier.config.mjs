import config from 'ultracite/prettier'

export default {
  ...config,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tailwindStylesheet: './src/styles/global.css',
  trailingComma: 'all',
}
