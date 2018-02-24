import React from "react";
import Img from "gatsby-image";

export default ({ data }) => (
    <div>
        <div style={{ position: "relative" }}>
            <h1
                css={{
                    margin: 0,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0px",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    display: "flex",
                    fontSize: "100px",
                    textTransform: "uppercase",
                    zIndex: "100",
                    color: "#e46414",
                    mixBlendMode: "color"
                }}
            >
                Welcome
            </h1>
            <Img sizes={data.image.sizes} />
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
