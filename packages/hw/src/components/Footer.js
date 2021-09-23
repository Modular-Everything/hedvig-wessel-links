import React from "react";
import PropTypes from "prop-types";
import { connect, styled } from "frontity";

const Footer = ({ footerText, libraries }) => {
  if (!libraries) return null;

  const Html2React = libraries.html2react.Component;

  return (
    <FooterWrap>
      <Html2React html={footerText} />
      <p>&copy; {new Date().getFullYear()} Hedvig Wessel</p>
    </FooterWrap>
  );
};

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
  libraries: PropTypes.object,
};

Footer.defaultProps = {
  libraries: null,
};

export default connect(Footer);

const FooterWrap = styled.footer`
  margin-top: 3.2rem;

  p {
    width: 80%;
    max-width: 32rem;
    margin: 0 auto 1.6rem auto;
    font-family: var(--mono);
    font-size: 1rem;
    text-align: center;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
