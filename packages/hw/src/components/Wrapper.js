import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled, connect } from "frontity";

import Header from "./Header";

// ---

const Wrapper = ({ state, libraries }) => {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await libraries.source.api.get({
      endpoint: "pages/139",
    });
    const parsedRes = await res.json();
    setData(parsedRes);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  console.log(data);

  const { acf } = data;

  return (
    <Container>
      <Header title={acf.title} bio={acf.bio} />
    </Container>
  );
};

Wrapper.propTypes = {
  state: PropTypes.object.isRequired,
};

export default connect(Wrapper);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.6rem;
`;
