import React from 'react';
import T from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ photos }) => {
  return (
    <div>
      {photos.map(photo => (
        <GalleryItem url={photo.previewURL} key={photo.id}/>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  photos: T.array.isRequired,
};

export default Gallery;
