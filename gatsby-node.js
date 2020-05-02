const path = require(`path`);
const { paginate } = require("gatsby-awesome-pagination");

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Places
  const indexTemplate = path.resolve(`src/templates/index.tsx`);
  const placeTemplate = path.resolve(`src/templates/places.tsx`);

  const allPlaces = await graphql(`
    query {
      allContentfulPlace(
        filter: { node_locale: { eq: "ja-JP" } }
        sort: { fields: updatedAt, order: DESC }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  paginate({
    createPage,
    items: allPlaces.data.allContentfulPlace.edges,
    itemsPerPage: 12,
    pathPrefix: ({ pageNumber, _ }) =>
      pageNumber === 0 ? "/" : "/places/page",
    component: indexTemplate
  });

  allPlaces.data.allContentfulPlace.edges.forEach(edge => {
    createPage({
      path: `places/${edge.node.id}`,
      component: placeTemplate,
      context: {
        id: edge.node.id
      }
    });
  });

  // Create Tags
  const tagsTemplate = path.resolve(`src/templates/tags.tsx`);
  (
    await graphql(`
      query {
        allContentfulPlaceTag(filter: { node_locale: { eq: "ja-JP" } }) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `)
  ).data.allContentfulPlaceTag.edges.forEach(edge => {
    createPage({
      path: `tags/${edge.node.slug}`,
      component: tagsTemplate,
      context: {
        slug: edge.node.slug
      }
    });
  });
};
