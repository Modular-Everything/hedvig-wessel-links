import React from 'react'
import PropTypes from 'prop-types';
import { styled } from 'frontity';

// ---

const Header = ({ title, bio }) => {
  return (
    <HeaderWrap>
      <Logo>
      <h1>{title}</h1>
      </Logo>
      <p>{bio}</p>
    </HeaderWrap>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
}

export default Header

const HeaderWrap = styled.header`
  
`

const Logo = styled.div`
h1 {
    font-weight: 800;
    text-transform: uppercase;
  }
`