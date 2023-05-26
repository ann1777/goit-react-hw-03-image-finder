import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({url, toggleModal }) => {
  return (
    <>
      <GalleryItem>
        <GalleryImage
        src={url} 
        onClick={() => toggleModal()} />
      </GalleryItem>
    </>
  );
};
ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
