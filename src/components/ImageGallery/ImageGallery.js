import { ImgGallery } from './ImageGallery.styled';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <>
      <ImgGallery>
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={largeImageURL}
            tags={tags}
            toggleModal={toggleModal}
          />
        ))}
      </ImgGallery>
    </>
  );
};
