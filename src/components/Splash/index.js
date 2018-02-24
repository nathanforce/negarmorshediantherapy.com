import React from "react";
import Img from "gatsby-image";

export default ({ data }) =>
    console.log(data) || (
        <div>
            <Img sizes={data.image.sizes} />
        </div>
    );
