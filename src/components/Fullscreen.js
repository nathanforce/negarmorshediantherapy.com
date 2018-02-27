import React from "react";

const FullScreen = ({ style, ...props }) => (
  <div {...props} style={{ ...style, height: "100vh" }} />
);

export default FullScreen;
