import React from "react";

export const Fullscreen = ({ style, ...props }) => (
  <div {...props} style={{ ...style, minHeight: "100vh" }} />
);
