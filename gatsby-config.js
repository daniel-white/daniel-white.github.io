require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Daniel A. White`,
    author: `Daniel A. White`,
    siteHeadline: `Passion-driven software engineering`,
    siteTitleAlt: `Daniel A. White's Blog`,
    siteDescription: `Daniel A. White's Blog`,
    siteUrl: `https://daniel-white.github.io/`,
    siteLanguage: `en`,
    siteImage: ``,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `YYYY-MM-DD`,
        navigation: [
          /*{
            title: `Blog`,
            slug: `/blog`,
          },*/
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Stack Overflow`,
            url: `https://stackoverflow.com/users/23528/daniel-a-white`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/thetrueaplus`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },*/
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
