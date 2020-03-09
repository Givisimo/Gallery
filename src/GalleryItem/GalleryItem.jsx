import React from 'react';
import T from 'prop-types';

const GalleryItem = ({ url }) => {
  return (
    <div >
      <img src={url} alt="photo1" width={500} />
    </div>
  );
};

GalleryItem.propTypes = {
  url: T.string.isRequired,
};

export default GalleryItem;
