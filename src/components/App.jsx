
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
// import LoadButton from './LoadButton/LoadButton';
// import Loader from './Loader/Loader';
// import handleFetch from '../services/pixabayapi';
export class App extends Component {
  state = {
    inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
    // page: 1,
    // totalPage: 1,
    // query: '',
    // items: [],
    // url: '',
    // alt: '',
    // isLoading: false,
    // isOpen: false,
    // error: false,
  };

  getInputValue = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render () {

    const { url, showModal, page } = this.state;
    return (
      <>
        <Searchbar getInputValue={this.getInputValue}/>
        <ImageGallery inputValue={this.state.inputValue} onClick={this.getLargeImg} loadMoreBtn={this.onLoadMoreButton} page={ page}/>
        {showModal && <Modal url={url} onClose={this.toggleModal} />}
      <ToastContainer/>
      </>
    )
  }
}