const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Places
  const placeTemplate = path.resolve(`src/templates/places.tsx`);
  (
    await graphql(`
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
    `)
  ).data.allContentfulPlace.edges.forEach(edge => {
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
