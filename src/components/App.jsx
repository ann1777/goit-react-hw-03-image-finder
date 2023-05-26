
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
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
    showModal: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
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
        images:
            [...prevState.images, ...images.hits],
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
    this.setState({ inputValue: handleValue, page: 1, images: [] })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render () {

    const { url, showModal, page, totalPage, images } = this.state;
    const loadMoreImgs = page < totalPage;
    return (
      <>
        <Searchbar getInputValue={this.getInputValue}/>
        <ImageGallery images={images} toggleModal={this.getLargeImg}/>
        {showModal && <Modal url={url} onClose={this.toggleModal}/>}
        {loadMoreImgs && <LoadButton onLoadMore={this.onLoadMore} />}
        <ToastContainer autoClose={1000} />
      </>
    )
  }
}