import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClick }) => {
  const { webFormatURL, tag, largeImageURL } = item;
  return (
    <GalleryItem>
      <GalleryImage
        src={webFormatURL}
        alt={tag}
        onClick={() => onClick(largeImageURL)}
        loading='lazy'
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.exact({
    webFormatUrl: PropTypes.string,
    tag: PropTypes.string,
    largeImageUrl: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
