module.exports = {
  siteMetadata: {
    title: `Spencer Fitch`,
    description: `Portfolio website for Spencer Fitch, an aspiring full-stack software engineer with interests in everything from scalable application design to computational photography.`,
    siteUrl: `https://www.spencerfitch.com`,
    image: `/icon.png`,
    author: `Spencer Fitch`,
    authorEmail: `spencer@spencerfitch.com`,
    authorImage: `/portrait.jpg`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spencer Fitch Portfolio`,
        short_name: `Spencer Fitch`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/icon.png',
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
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    { 
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-7ZQ9FH45QC`,
        head: true,
        anonymize: true,
      }
    },
  ],
};
