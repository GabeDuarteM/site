module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
