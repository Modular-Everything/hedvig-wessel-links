import React from "react";
import PropTypes from "prop-types";
import { styled } from "frontity";

import Link from "./Link";

// ---

const Links = ({ links }) => {
  return (
    <LinksWrapper>
      {links.map((link, index) => {
        if (link.thumbnail === false) return null;

        return (
          <Link
            key={index}
            title={link?.title}
            description={link?.description}
            thumbnail={link?.thumbnail}
            link={link?.link}
          />
        );
      })}
    </LinksWrapper>
  );
};

Links.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Links;

const LinksWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & > a {
    margin-bottom: 3.2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
