import React from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";

import Media from "./Media";

// ---

const Collage = ({ background, foreground }) => {
  return (
    <CollageWrap>
      <Media id={foreground.ID} className="foreground" />
      <Media id={background.ID} className="background" />
    </CollageWrap>
  );
};

Collage.propTypes = {
  background: PropTypes.shape({
    ID: PropTypes.number.isRequired,
  }).isRequired,
  foreground: PropTypes.shape({
    ID: PropTypes.number.isRequired,
  }).isRequired,
};

export default Collage;

const CollageWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 5.6rem 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .background {
    width: 95%;
    max-height: 32rem;
    transform: rotate(-11deg);
  }

  .foreground {
    position: absolute;
    z-index: 10;
    right: 0;
    width: 55%;
    transform: rotate(5deg);
  }
`;
