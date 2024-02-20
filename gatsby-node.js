/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      page: allSanityPage {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.page.nodes.forEach(({ slug }) => {
    createPage({
      path: slug.current,
      component: require.resolve('./src/templates/page.jsx'),
      context: { slug: slug.current },
    });
  });
};
