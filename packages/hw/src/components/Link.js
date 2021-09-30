import React, { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";

import AnimateIn from "./AnimateIn";
import Media from "./Media";

// ---

const Link = ({ title, description, thumbnail, link, color, index }) => {
  const ref = useRef(null);

  return (
    <AnimateIn>
      <LinkWrapper
        href={link}
        className={index % 2 ? "flip" : "no-flip"}
        ref={ref}
        highlightColor={color}
        flip={index % 2}
        columns={thumbnail ? 2 : 1}
      >
        {thumbnail && (
          <Thumbnail className="top">
            <div className="image-wrapper">
              {thumbnail !== false && <Media id={thumbnail.ID} />}
            </div>
          </Thumbnail>
        )}

        <Text>
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </Text>
      </LinkWrapper>
    </AnimateIn>
  );
};

Link.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

Link.defaultProps = {
  description: null,
  thumbnail: null,
};

export default Link;

const LinkWrapper = styled.a`
  --highlight: ${({ highlightColor }) => highlightColor};

  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: ${({ columns }) =>
    columns === 1 ? "1fr" : "8ch minmax(min(50vw, 30ch), 1fr)"};
  padding: 1.6rem;
  border: 2px solid var(--highlight);
  background-color: var(--white);
  color: var(--blue);
  text-decoration: none;

  &.flip {
    grid-template-columns: ${({ columns }) =>
      columns === 1 ? "1fr" : "minmax(min(50vw, 30ch), 1fr) 8ch"};

    .top,
    .center,
    .bottom {
      order: 2;
    }
  }

  &:hover {
    .image-wrapper {
      transform: scale(1.1) rotate(-2deg);
    }
  }
`;

const Thumbnail = styled.div`
  display: flex;

  &.top {
    align-items: flex-start;
    margin-top: -3.2rem;
  }

  &.center {
    align-items: center;
  }

  &.bottom {
    align-items: flex-end;
    margin-bottom: -3.2rem;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: 250ms ease transform;
    border: 2px solid var(--highlight);
    aspect-ratio: 1/1;

    @supports not (aspect-ratio: 1/1) {
      padding-bottom: 100%;
      overflow: hidden;

      & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 2rem;
    text-transform: uppercase;
  }

  p {
    margin: 0.8rem 0 0 0;
    font-family: var(--mono);
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
