import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { LoadButton } from './LoadButton/LoadButton';
// import Loader from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import handleFetch from '../services/pixabayapi';
export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    modalImg: '',
    status: 'idle',
    showModal: false,
    page: 1,
  };

  resetPage = () => {
    this.setState({page: 1});
  };
  async componentDidUpdate(_, prevState) {
    if (this.state.status === 'pending') {
        const data = await handleFetch(this.state.inputValue).then(
          this.setState({ status: 'loading' })
        );

        if (data.hits.length === 12) {
          return this.setState(
            prevState.inputValue !== this.state.inputValue
              ? {
                  images: data.hits,
                  status: 'loaded',
                }
              : {
                  images: [...prevState.images, ...data.hits],
                  status: 'loaded',
                }
          );
        }
        if (data.hits.length === 0) {
          return this.setState({ photos: [], status: 'rejected' });
        }
        return this.setState(
          prevState.inputValue !== this.state.inputValue
            ? {
                images: data.hits,
                status: 'idle',
              }
            : {
                images: [...prevState.images, ...data.hits],
                status: 'idle',
              }
        );
      }
    }

  fetchImages = async () => {
    try {
      const { inputValue, page } = this.state;

      this.setState({
        isLoading: true,
      });

      const images = await handleFetch(inputValue, page);
      console.log(images);

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        isLoading: false,
        totalPage: Math.ceil(images.total / 12),
      }));

      if (images.length === 0) {
        toast.info('No images found.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (error) {
      this.setState({ isLoading: false });
      toast.error('Error fetching images');
    }
  };

  getInputValue = handleValue => {
    this.resetPage();
    this.setState({ status: 'pending', inputValue: handleValue });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  onLoadMore = () => {
    this.setState({ status: 'pending' });
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { modalImg, showModal, page, totalPage, images } = this.state;
    const loadMoreImgs = page < totalPage;
    console.log(showModal, modalImg);
    return (
      <>
        <Searchbar getInputValue={this.getInputValue} />
        <ImageGallery images={images} toggleModal={this.getLargeImg} />
        {showModal && createPortal(<Modal url={modalImg} onClose={this.toggleModal} />,
            document.body
          )}
        {this.state.status === 'loaded' && (
          <LoadButton onLoadMore={this.onLoadMore} />
        )}
        {this.state.status === 'rejected' && (
          <div>
            Your generic alert to promt you that there are no images found, but
            I was too lazy to style it. Hell, at least it removed that "Load
            More" button from showing
          </div>
        )}  
        {loadMoreImgs && <LoadButton onLoadMore={this.onLoadMore} />}
        <ToastContainer autoClose={1000} />
      </>
    );
  }
}

export default App;