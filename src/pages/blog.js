import React from "react";

export default ({ data }) => <div>Bloggin</div>;

export const query = graphql`
  query BlogQuery {
    sitePage {
      id
    }
  }
`;
export const frontmatter = {
  title: "Blog"
};
