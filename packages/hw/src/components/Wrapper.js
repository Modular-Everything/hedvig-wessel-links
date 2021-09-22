import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled, connect } from "frontity";

import Header from "./Header";
import Links from "./Links";
import Collage from "./Collage";

// ---

const Wrapper = ({ libraries }) => {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await libraries.source.api.get({
      endpoint: "pages/139",
    });
    const parsedRes = await res.json();
    setData(parsedRes);
  }

  useEffect(() => {
    if (!libraries) return null;
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const { acf } = data;

  console.log(acf);

  return (
    <Container>
      <Header title={acf.title} bio={acf.bio} image={acf.bio_image} />

      {acf.links.length > 0 && <Links links={acf.links} />}

      <Collage
        background={acf.collage_images.background}
        foreground={acf.collage_images.foreground}
      />
    </Container>
  );
};

Wrapper.propTypes = {
  libraries: PropTypes.object,
};

Wrapper.defaultProps = {
  libraries: null,
};

export default connect(Wrapper);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  margin: 0 auto;
  padding: 1.6rem;
`;
