import React from "react";
import Img from "gatsby-image";

export const Splash = ({ data }) => (
  <div>
    <Img sizes={data.image.sizes} />
  </div>
);
