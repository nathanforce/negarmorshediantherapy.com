import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.fields.slug}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3 style={{ marginBottom: ".5rem" }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#BBB" }}>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.frontmatter.brief}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "__post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            brief
          }
        }
      }
    }
  }
`;
