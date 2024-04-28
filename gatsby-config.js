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

const website = require('./config/website');

// Environment variables
const { GATSBY_SITE_URL, GATSBY_SANITY_STUDIO_PROJECT_ID } = process.env;
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: GATSBY_SITE_URL + pathPrefix,
    pathPrefix,
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    banner: website.banner,
    siteName: website.siteName,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    socialLinks: website.socialLinks,
    sanityProjectId: GATSBY_SANITY_STUDIO_PROJECT_ID,
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DETECT_NODE_MUTATIONS: false,
    PARALLEL_SOURCING: true,
  },

  headers: [
    {
      source: `*`,
      headers: [
        {
          key: 'referrer-policy',
          value: 'no-referrer',
        },
        { key: 'x-xss-protection', value: '1; mode=block' },
        { key: 'x-content-type-options', value: 'nosniff' },
      ],
    },
  ],

  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['x-frame-options: DENY', 'x-xss-protection: 1; mode=block', 'x-content-type-options: nosniff'],
        },
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_STUDIO_PROJECT_DATASET,
        token: process.env.GATSBY_SANITY_STUDIO_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: '@import "resources.scss";',
        sassOptions: {
          includePaths: ['src/utils/sass/base'],
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_SITE_URL,
        sitemap: `${process.env.GATSBY_SITE_URL}/sitemap-0.xml`,
        configFile: path.join(__dirname, 'config/robots-txt.production.js'),
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
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: '/',
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.icon || 'src/images/icon.png',
        include_favicon: false,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
  ],
};
