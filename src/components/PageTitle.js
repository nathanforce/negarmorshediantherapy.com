import React from "react";

export const PageTitle = ({ text }) => {
  return (
    <h2
      css={{
        marginBottom: "2rem",
        marginTop: 0,
        fontSize: 48,
        "@media(min-width: 44em)": {
          fontSize: 72
        }
      }}
    >
      {text}
    </h2>
  );
};
