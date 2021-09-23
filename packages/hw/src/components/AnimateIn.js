import React, { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// ---

const AnimateIn = ({ children, className }) => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 32,
      },
      {
        scrollTrigger: ref.current,
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

AnimateIn.propTypes = {
  ref: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AnimateIn.defaultProps = {
  className: null,
};

export default AnimateIn;
