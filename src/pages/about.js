import React from "react";

export default ({ data }) => <div>Negar is a dope therapist and friend.</div>;

export const query = graphql`
  query AboutMeQuery {
    sitePage {
      id
    }
  }
`;

export const frontmatter = {
  title: "About Me"
};
