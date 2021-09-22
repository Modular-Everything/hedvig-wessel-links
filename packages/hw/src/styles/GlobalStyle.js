import React from "react";
import { normalize } from "styled-normalize";
import { Global, css } from "frontity";

// ---

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${normalize}

        :root {
          --white: #ffffff;
          --grey: #cac8c8;
          --blue: #161a31;
          --purple: #9275a2;
          --pink: #e78a8f;

          --sans: -apple-system, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          --mono: monospace;

          --dev: "modulareverything.com";
        }

        html {
          font-size: 10px;
        }

        body {
          background-color: var(--grey);
          color: var(--blue);
          font-family: var(--sans);
          font-size: 2rem;
        }
      `}
    />
  );
};

export default GlobalStyle;
