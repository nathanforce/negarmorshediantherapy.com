import React from "react";
import Img from "gatsby-image";
import { colors } from "../utils/theme";
import { after } from "glamor";
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
        <div>
          <h1
            css={{
              margin: 0,
              fontSize: 200,
              textTransform: "uppercase",
              letterSpacing: "initial",
              mixBlendMode: "overlay",
              lineHeight: 1,
              position: "absolute",
              transform: "translate(0,-30%)",
              opacity: 0.6
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
        <div
          style={{
            maxWidth: "40%",
            marginTop: "1rem"
          }}
        >
          <p
            style={{
              color: colors.white,
              mixBlendMode: "overlay",
              background: "rgba(50, 87, 112, .25)",
              display: "inline",
              padding: "0.35rem 0.5rem",
              lineHeight: 2,
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone"
            }}
          >
            Negar is a compassionate therapist who aims to create an accepting
            and validating space for her clients. She believes that all humans
            are wired for healing and growth and her approach to therapy is
            strength-based, emotion-focused, and relational. Negar works
            collaboratively with her clients to set goals, identify barriers to
            growth, and increase coping skills.
          </p>
        </div>
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
