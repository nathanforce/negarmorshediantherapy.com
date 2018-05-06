import React from "react";
import Img from "gatsby-image";

export default ({ data }) => (
  <div>
    <div style={{ position: "relative", height: "75vh" }}>
      <Img
        sizes={data.image.sizes}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </div>
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
  </div>
);

export const query = graphql`
  query BlurUpQuery {
    image: imageSharp(id: { regex: "/trees/" }) {
      sizes {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
