import React from "react";
import { styled } from "frontity";
import BG from "../images/BG";

// ---

const Background = () => {
  return (
    <BackgroundWrapper>
      <BG />
    </BackgroundWrapper>
  );
};

export default Background;

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  svg {
    transform: translate(-50%, -50%);
  }
`;
