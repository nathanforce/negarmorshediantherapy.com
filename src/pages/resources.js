import React from "react";

export default ({ data }) => <div>Learn More</div>;

export const query = graphql`
  query ResourcesQuery {
    sitePage {
      id
    }
  }
`;

export const frontmatter = {
  title: "Resources"
};
