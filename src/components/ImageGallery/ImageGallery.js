import ImageGalleryItem from '../ImageGalleryItem/ImagegalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
    return (
        <Gallery>
            {items.map(item => {
                return <ImageGalleryItem key={item.id} Item={item}/>
            })}
        </Gallery>
    );
};

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}

export default ImageGallery;