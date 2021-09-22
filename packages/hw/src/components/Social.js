import React from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaYoutubeSquare as YouTube,
  FaInstagramSquare as Instagram,
  FaPinterestSquare as Pinterest,
  FaWhatsappSquare as WhatsApp,
  FaFacebookMessenger as Messenger,
} from "react-icons/fa";

// ---

const Social = ({ platforms }) => {
  if (!platforms) return null;

  const icons = {
    Facebook,
    Twitter,
    YouTube,
    Instagram,
    Pinterest,
    WhatsApp,
    Messenger,
  };

  return (
    <SocialWrap>
      {platforms.map((platform, index) => {
        return (
          <li key={index}>
            <a href={platform.link} target="_blank">
              {React.createElement(icons[platform.icon])}
            </a>
          </li>
        );
      })}
    </SocialWrap>
  );
};

Social.propTypes = {
  platforms: PropTypes.array.isRequired,
};

export default Social;

const SocialWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.2rem 0 0 0;
  padding: 0;
  list-style: none;

  li {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1.6rem;

    &:last-child {
      margin-right: 0;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  a {
    transition: 250ms ease opacity;
    opacity: 1;
    color: var(--blue);
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;
