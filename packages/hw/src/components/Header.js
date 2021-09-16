import React from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";
import Logo from "../images/Logo";

// ---

const Header = ({ title, bio }) => (
  <HeaderWrap>
    <LogoWrap>
      <Logo />
      <h1>{title}</h1>
    </LogoWrap>

    <p>{bio}</p>
  </HeaderWrap>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Header;

const HeaderWrap = styled.header`
  margin-bottom: 5.6rem;

  p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: right;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5.6rem;

  h1 {
    margin: 0;
    font-size: clamp(1.6rem, 9vw, 6.4rem);
    font-weight: 800;
    text-transform: uppercase;
  }
`;
