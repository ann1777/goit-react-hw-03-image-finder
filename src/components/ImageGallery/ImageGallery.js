import PropTypes from 'prop-types';
import handleFetch from '../../services/pixabayapi';
import { ImgGallery } from './ImageGallery.styled';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ImgGallery>
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={largeImageURL}
            tags={tags}
            // onClick={handleFetch}
          />
        ))}
      </ImgGallery>
    </>
  );
};
