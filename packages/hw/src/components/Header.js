import React from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";
import Logo from "../images/Logo";
import AnimateIn from "./AnimateIn";
import Media from "./Media";

// ---

const Header = ({ title, bio, image }) => (
  <HeaderWrap>
    <AnimateIn>
    <LogoWrap>
      <Logo />
      <h1>{title}</h1>
    </LogoWrap>

    <BioWrap>
      <p>{bio}</p>
      <Media id={image.ID} className="image" />
    </BioWrap>
    </AnimateIn>
  </HeaderWrap>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Header;

const HeaderWrap = styled.header`
  position: relative;
  z-index: 20;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    font-size: clamp(1.6rem, 9vw, 6.4rem);
    font-weight: 800;
    text-transform: uppercase;
  }
`;

const BioWrap = styled.div`
  position: relative;
  padding: 7rem 0;
  overflow: visible;

  p {
    position: relative;
    z-index: 10;
    width: 85%;
    margin: 0 0 0 auto;
    font-family: var(--mono);
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: right;
  }

  .image {
    position: absolute;
    z-index: 0;
    top: 2rem;
    left: -12rem;
    width: 100%;
    max-width: 32rem;
    height: 100%;
    transform: rotate(-4deg);
    object-fit: cover;
  }
`;
