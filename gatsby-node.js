const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const pageType = node.fileAbsolutePath.includes("_posts")
      ? "__post"
      : "__page";

    const slug =
      pageType === "__post"
        ? node.frontmatter.permalink.replace("posts/", "blog/")
        : node.frontmatter.permalink;

    createNodeField({
      node,
      name: `type`,
      value: pageType
    });
    createNodeField({
      node,
      name: `slug`,
      value:
        slug ||
        createFilePath({
          node,
          getNode,
          basePath: type === "__post" ? "_posts" : "_pages"
        })
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                type
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const type = node.fields.type;
        const slug = node.fields.slug;

        createPage({
          path: slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug,
            type
          }
        });
      });
      resolve();
    });
  });
};
