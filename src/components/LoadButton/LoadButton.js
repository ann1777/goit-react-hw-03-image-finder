import { LoadMoreBtn, LBContainer } from './LoadButton.styled';
import PropTypes from 'prop-types';

const LoadButton = ({ onLoadMore, isLoading }) => {
  return (
    <LBContainer>
      <LoadMoreBtn type='button' onClick={onLoadMore} disabled={isLoading}>
        Load more
      </LoadMoreBtn>
    </LBContainer>
  );
};

LoadButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadButton;
