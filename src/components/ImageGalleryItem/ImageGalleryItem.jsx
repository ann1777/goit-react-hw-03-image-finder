import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItemStyle } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, togleModal }) => {
  return (
    <GalleryItemStyle.GallerryItem>
      <GalleryItemStyle.GallerryItemImg
        src={image.webformatURL}
        alt=""
        onClick={togleModal(url)}
      />
    </GalleryItemStyle.GallerryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
