import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({url, toggleModal }) => {
  return (
    <>
      <GalleryItem>
        <GalleryImage
        src={url} 
        onClick={() => toggleModal(url)} />;
      </GalleryItem>
    </>
  );
};
ImageGalleryItem.propTypes = {
  items: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
