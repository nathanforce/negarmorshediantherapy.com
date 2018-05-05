import React from "react";

export default ({ data }) => <div>HMU</div>;

export const query = graphql`
  query ContactQuery {
    sitePage {
      id
    }
  }
`;
export const frontmatter = {
  title: "Contact"
};
