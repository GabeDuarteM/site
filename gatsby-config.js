module.exports = {
  siteMetadata: {
    title: 'Gabriel Duarte',
    description: "Gabriel Duarte's personal site",
    author: `@GabrielDuarteM`,
    siteUrl: `https://www.gabrielduarte.tech/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: ['300', '400', '500'],
          },
          {
            family: `Roboto`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gabriel Duarte's Portfolio`,
        /* eslint-disable camelcase */
        short_name: `G. Duarte`,
        start_url: `/?utm_source=web_app_manifest`,
        background_color: `#e7e7e7`,
        theme_color: `#343e46`,
        /* eslint-enable camelcase */
        display: `minimal-ui`,
        icon: `src/assets/icons/icon512.png`,
        lang: 'en-US',
        description: 'This is me :)',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
