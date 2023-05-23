import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClick }) => {
  const { webFormatUrl, tag, largeImageUrl } = item;
  return (
    <GalleryItem>
      <GalleryImage
        src={webFormatUrl}
        alt={tag}
        onClick={() => onClick(largeImageUrl)}
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
