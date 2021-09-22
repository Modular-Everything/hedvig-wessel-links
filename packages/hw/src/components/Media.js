import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "frontity";
import Image from "@frontity/components/image";

// ---

const Media = ({ libraries, id, className }) => {
  const [media, setMedia] = useState(null);

  async function getMedia() {
    const res = await libraries.source.api.get({
      endpoint: `media/${id}`,
    });
    const parsedRes = await res.json();
    setMedia(parsedRes);
  }

  useEffect(() => {
    if (!libraries) return null;
    getMedia();
  }, []);

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      .map((item) => [item.source_url, item.width])
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Image
      src={media.source_url}
      srcSet={srcset}
      alt={media.title.rendered}
      width={media?.media_details?.width}
      height={media?.media_details?.height}
      className={className}
    />
  );
};

Media.propTypes = {
  libraries: PropTypes.object,
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Media.defaultProps = {
  libraries: null,
  className: null,
};

export default connect(Media);
