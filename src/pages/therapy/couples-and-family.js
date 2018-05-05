import React from "react";

export default ({ data }) => <div>Fam.</div>;

export const query = graphql`
  query CouplesAndFamilyTherapyQuery {
    sitePage {
      id
    }
  }
`;
export const frontmatter = {
  title: "Couples and Family Therapy"
};
