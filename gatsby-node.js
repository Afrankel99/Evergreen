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
      pages: allSanityPage {
        nodes {
          slug {
            current
          }
        }
      }

      products: allSanityProduct {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.pages.nodes.forEach(({ slug }) => {
    createPage({
      path: slug.current,
      component: require.resolve('./src/templates/page.jsx'),
      context: { slug: slug.current },
    });
  });

  data.products.nodes.forEach(({ slug }) => {
    createPage({
      path: slug.current,
      component: require.resolve('./src/templates/product.jsx'),
      context: { slug: slug.current },
    });
  });
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityProductTag: {
      products: {
        type: ['SanityProduct'],
        args: {
          limit: 'Int',
        },
        resolve: async (source, args, context) => {
          const { entries: productsArray } = await context.nodeModel.findAll({
            type: 'SanityProduct',
            query: {
              filter: {
                tags: {
                  elemMatch: {
                    name: {
                      eq: source.name,
                    },
                  },
                },
              },
              sort: {
                _createdAt: 'DESC',
              },
            },
          });
          return args.limit ? productsArray.slice(0, args.limit) : productsArray;
        },
      },
    },
    SanityProduct: {
      similarProducts: {
        type: ['SanityProduct'],
        args: {
          limit: 'Int',
        },
        resolve: async (source, args, context) => {
          const { tags } = source;
          const similarProductsSet = new Set();
          for (const tagRef of tags) {
            // Fetch the referenced tag document
            const tagDocument = await context.nodeModel.getNodeById({
              id: tagRef._ref,
              type: 'SanityProductTag', // Adjust the type if necessary
            });

            // Check if the tag document exists
            if (tagDocument) {
              // Query for products that have the tag name
              const { entries: similarProducts } = await context.nodeModel.findAll({
                type: 'SanityProduct',
                query: {
                  filter: {
                    tags: {
                      elemMatch: {
                        _id: {
                          eq: tagDocument._id,
                        },
                      },
                    },
                    _id: {
                      ne: source._id, // Exclude the current product from similar products
                    },
                  },
                },
              });

              // Add similar products to the set
              similarProducts.forEach((product) => similarProductsSet.add(product));

              // Break the loop if the limit is reached
              if (args.limit && similarProductsSet.size >= args.limit) {
                break;
              }
            }
          }

          // Convert the set to an array and limit the results if necessary
          let similarProductsArray = [...similarProductsSet];
          if (args.limit) {
            similarProductsArray = similarProductsArray.slice(0, args.limit);
          }

          return similarProductsArray;
        },
      },
    },
  };
  createResolvers(resolvers);
};
