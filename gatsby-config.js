/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require('path');
/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DETECT_NODE_MUTATIONS: false,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_STUDIO_PROJECT_DATASET,
        token: process.env.GATSBY_SANITY_STUDIO_READ_TOKEN,
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['src'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~assets': path.resolve(__dirname, `src/assets`),
        '~components': path.resolve(__dirname, `src/components`),
        '~slices': path.join(__dirname, 'src/slices'),
        '~sections': path.join(__dirname, 'src/sections'),
        '~postSections': path.join(__dirname, 'src/postSections'),

        // Utils
        '~utils': path.resolve(__dirname, `src/utils`),
        '~helpers': path.resolve(__dirname, `src/utils/helpers`),
        '~hooks': path.resolve(__dirname, `src/utils/hooks`),
        '~sass': path.resolve(__dirname, `src/utils/sass`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: 'src', path: path.join(__dirname, 'src') },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
