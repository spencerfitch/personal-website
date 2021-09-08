module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `personal-website`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spencer Fitch Portfolio`,
        short_name: `Spencer Fitch`,
        start_url: `/`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/favicon.ico`,
            sizes: `48x48 32x32 24x24 16x16`,
            type: `image/x-icon`
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
          {
            src: `/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`
          }

        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/content/hero`
      }
    },
    `gatsby-plugin-mdx`,
  ],
};
