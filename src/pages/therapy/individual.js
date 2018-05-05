import React from "react";

export default ({ data }) => <div>Individual Therapy</div>;

export const query = graphql`
  query IndividualTherapyQuery {
    sitePage {
      id
    }
  }
`;
export const frontmatter = {
  title: "Individual Therapy"
};
