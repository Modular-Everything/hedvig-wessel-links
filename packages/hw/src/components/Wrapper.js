import React from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";

// ---

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.6rem;
`;
