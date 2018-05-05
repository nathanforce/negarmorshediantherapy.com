import React from "react";
import Img from "gatsby-image";

export default ({ data }) => (
  <div>
    <div style={{ position: "relative" }}>
      <h1
        css={{
          margin: 0,
          fontSize: "100px",
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: 1.5
        }}
      >
        Negar Morshedian
      </h1>
      {/* <Img sizes={data.image.sizes} /> */}
    </div>
  </div>
);

export const query = graphql`
  query BlurUpQuery {
    image: imageSharp(id: { regex: "/forest/" }) {
      sizes {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
