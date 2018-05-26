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
        css={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          padding: "1rem",
          flexDirection: "column",
          "@media(min-width: 44em)": {
            padding: "5rem"
          }
        }}
      >
        <div>
          <h1
            css={{
              margin: 0,
              fontSize: 200,
              textTransform: "uppercase",
              letterSpacing: "initial",
              lineHeight: 1,
              opacity: 0.6,
              mixBlendMode: "overlay",
              "@media(min-width: 44em)": {
                position: "absolute",
                transform: "translate(0,-30%)"
              }
            }}
          >
            NM
          </h1>
          <h2
            css={{
              color: colors.white,
              mixBlendMode: "overlay",
              textTransform: "uppercase",
              fontWeight: 100,
              marginTop: "1rem",
              marginBottom: ".5rem",
              "@media(min-width: 44em)": {
                marginTop: "2rem",
                fontSize: 50
              }
            }}
          >
            Negar Morshedian
          </h2>{" "}
          <h3
            css={{
              color: colors.white,
              mixBlendMode: "overlay",
              textTransform: "uppercase",
              fontWeight: 300,
              margin: 0,
              "@media(min-width: 44em)": {
                fontSize: 50
              }
            }}
          >
            Psychotherapist, NYC
          </h3>
        </div>
        <div
          css={{
            "@media(min-width: 44em)": {
              maxWidth: "600px"
            },
            marginTop: "1rem"
          }}
        >
          <p
            css={{
              color: colors.white,
              background: "rgba(50, 87, 112, .25)",
              display: "inline",
              padding: "0.35rem 0.5rem",
              lineHeight: 2,
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
              "@media(min-width: 44em)": {
                mixBlendMode: "overlay"
              }
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
