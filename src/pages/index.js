import React from "react";
import Img from "gatsby-image";
import { colors } from "../utils/theme";

export default ({ data }) => (
  <div>
    <div style={{ position: "relative", height: "100vh" }}>
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
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "5rem",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <h1
          css={{
            margin: 0,
            fontSize: 200,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.5,
            zIndex: 100,
            mixBlendMode: "overlay",
            background: colors.secondary,
            padding: "2rem",
            letterSpacing: "initial"
          }}
        >
          NM
        </h1>
        <h2
          style={{
            color: colors.white,
            mixBlendMode: "overlay",
            fontSize: 50,
            textTransform: "uppercase",
            fontWeight: 100,
            marginTop: "2rem",
            marginBottom: "1rem"
          }}
        >
          Negar Morshedian
        </h2>{" "}
        <h2
          style={{
            color: colors.white,
            mixBlendMode: "overlay",
            fontSize: 50,
            textTransform: "uppercase",
            fontWeight: 300,
            margin: 0
          }}
        >
          Psychotherapist, NYC
        </h2>
      </div>
    </div>
  </div>
);

export const query = graphql`
  query BlurUpQuery {
    image: imageSharp(id: { regex: "/splash2/" }) {
      sizes {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
