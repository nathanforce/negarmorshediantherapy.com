import React from "react";

export default ({ data }) => <div>Expectations are the heart of failure</div>;

export const query = graphql`
  query WhatToExpectQuery {
    sitePage {
      id
    }
  }
`;
export const frontmatter = {
  title: "What to Expect"
};
