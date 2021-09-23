import React from "react";
import PropTypes from "prop-types";
import { connect, styled } from "frontity";
import AnimateIn from "./AnimateIn";

// ---

const Newsletter = ({
  title,
  submitLabel,
  footerText,
  endpoint,
  libraries,
}) => {
  if (!endpoint) return null;
  const Html2React = libraries.html2react.Component;

  return (
    <NewsletterWrap>
      <h3>{title}</h3>
      <form>
        <Input>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Your Name" />
        </Input>

        <Input>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="text" placeholder="Your Email" />
        </Input>

        <Button type="submit">{submitLabel}</Button>
      </form>

      {footerText && (
        <FooterText>
          <Html2React html={footerText} />
        </FooterText>
      )}
    </NewsletterWrap>
  );
};

Newsletter.propTypes = {
  title: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  footerText: PropTypes.string,
  endpoint: PropTypes.string,
};

Newsletter.defaultProps = {
  footerText: null,
  endpoint: null,
};

export default connect(Newsletter);

const NewsletterWrap = styled(AnimateIn)`
  width: calc(100% - 3.2rem);
  padding: 3.2rem 1.6rem;
  background-color: var(--pink);

  p {
    margin: 0;
  }

  h3 {
    margin: 0;
    color: var(--white);
    font-size: clamp(3.5rem, 4vw, 4.8rem);
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
  }

  form {
    position: relative;
    margin: 2.4rem 0 0 0;
  }
`;

const Input = styled.div`
  margin-bottom: 1.6rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    display: none;
  }

  input {
    width: calc(100% - 3.2rem);
    padding: 1.6rem;
    border: 0;
    background-color: var(--white);
    color: var(--pink);
    font-family: var(--mono);
    font-size: 1.6rem;
    line-height: 2.2rem;

    &:focus {
      outline-color: var(--purple);
    }

    &::placeholder {
      opacity: 0.35;
      color: var(--pink);
      font-family: var(--sans);
      font-size: 2rem;
      font-weight: 800;
      text-transform: uppercase;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.6rem;
  padding: 1.6rem;
  border: 1px solid var(--white);
  background-color: var(--pink);
  color: var(--white);
  font-weight: 800;
  text-transform: uppercase;
`;

const FooterText = styled.div`
  width: 80%;
  max-width: 32rem;
  margin: 2.4rem auto 0 auto;
  color: var(--white);
  font-family: var(--mono);
  font-size: 1rem;
  text-align: center;
`;
