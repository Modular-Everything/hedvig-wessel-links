import React from "react";
import PropTypes from "prop-types";
import { connect, styled } from "frontity";
import { useMailChimpForm } from "use-mailchimp-form";
import { useForm } from "react-hook-form";

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

  const {
    loading,
    error,
    success,
    message,
    handleSubmit: MailChimpSubmit,
  } = useMailChimpForm(endpoint);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => MailChimpSubmit(data);

  return (
    <NewsletterWrap>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <label htmlFor="name">Your Name</label>
          <input
            id="NAME"
            type="text"
            placeholder="Your Name"
            required
            disabled={success}
            {...register("NAME", { required: true })}
          />
        </Input>

        <Input>
          <label htmlFor="email">Your Email</label>
          <input
            id="EMAIL"
            type="email"
            placeholder="Your Email"
            required
            disabled={success}
            {...register("EMAIL", { required: true })}
          />
        </Input>

        <Button type="submit" disabled={loading || success}>
          {submitLabel}
        </Button>

        {errors.NAME && <span className="alert">Please enter your name</span>}
        {errors.EMAIL && (
          <span className="alert">Please enter your email address</span>
        )}
        {loading && <span className="alert">Signing you up...</span>}
        {error && <span className="alert">{message}</span>}
        {success && <span className="alert">{message}</span>}
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

  .alert {
    display: block;
    margin-top: 0.8rem;
    color: var(--white);
    font-family: var(--mono);
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
  }

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
  transition: 350ms ease opacity;
  border: 1px solid var(--white);
  opacity: 1;
  background-color: var(--pink);
  color: var(--white);
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
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
