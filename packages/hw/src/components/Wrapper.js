import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Head, styled, connect } from "frontity";
import { Rings } from "react-loading-icons";

import Favicon from "../images/favicon.png";
import Header from "./Header";
import Links from "./Links";
import Collage from "./Collage";
import Newsletter from "./Newsletter";
import Social from "./Social";
import Footer from "./Footer";

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

  if (!data)
    return (
      <Loading>
        <Rings stroke="var(--purple)" strokeWidth={1} />
      </Loading>
    );

  const { acf } = data;

  return (
    <>
      <Head>
        <title>Hedvig Wessel - Links</title>
        <link href={Favicon} rel="icon" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <Header title={acf.title} bio={acf.bio} image={acf.bio_image} />

        {acf.links.length > 0 && <Links links={acf.links} />}

        <Collage
          background={acf.collage_images.background}
          foreground={acf.collage_images.foreground}
        />

        <Newsletter
          title={acf.newsletter.newsletter_title}
          submitLabel={acf.newsletter.newsletter_submit_text}
          footerText={acf.newsletter.newsletter_footer_text}
          endpoint="mailchimp_xxxx"
        />

        <Social platforms={acf.social_links} />

        <Footer footerText={acf.footer} />
      </Container>
    </>
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
  padding: 1.6rem 1.6rem 3.2rem 1.6rem;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: var(--blue);

  svg {
    width: 6rem;
    height: 6rem;
  }
`;
