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
          --dev: "modulareverything.com";
        }

        html {
          font-family: system-ui, Verdana, Arial, sans-serif;
          font-size: 10px;
        }

        body {
          background-color: var(--grey);
          color: var(--blue);
          font-size: 2rem;
        }
      `}
    />
  );
};

export default GlobalStyle;
