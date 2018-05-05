import React from "react";
import { Fullscreen } from "../components/Fullscreen";

const NotFoundPage = () => (
  <Fullscreen
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}
  >
    <h1 style={{ fontSize: "100px", color: "#f5f5f5" }}>OOPS</h1>
    <p>There's nothing here.</p>
  </Fullscreen>
);

export default NotFoundPage;
