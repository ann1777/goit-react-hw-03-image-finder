import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
// import { getImagesAPI } from '../services/pixabayapi';
import { ToastContainer, toast } from 'react-toastify';
import LoadButton from './LoadButton/LoadButton';
import Loader from './Loader/Loader';
import api from '../services/pixabayapi';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    currentLargeImageURL: '',
    isLoading: false,
    error: null,
  };

  onOpensLargeItemImageInModal = url => {
    /*    this.setState(prevState => ({ contentModal, modal: !prevState.modal }));
  }; */
    this.setState({
      currentLargeImageURL: url,
    });
  };

  addImages = async (query, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const newQueryItems = await api(query, page);

      this.setState(prevState => ({
        items: [...prevState.items, ...newQueryItems],
        isLoading: false,
      }));
      if (api.getData.length === 0) {
        const notify = () =>
          toast(
            "Sorry, we can't find anyting for your request. Please, enter another request"
          );
        return notify;
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate (prevProps, prevState) {
    const { value, page } = this.state;

    if (value !== prevState.value || page !== prevState.page) {
      this.setState(prevState => ({
        page: value === prevState.value ? prevState.page : 1,
        loader: true,
      }));

      api
        .getData(value, page)
        .then(data => {
          this.setState({
            pictures:
              page === 1 ? data.hits : [...this.state.pictures, ...data.hits],
          });
          toast(
            `We are find ${this.state.pictures.length} images from ${data.total}`
          );
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({ loader: false });
        });
    }
  }

  // componentDidUpdate (_, prevState) {
  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.query !== this.state.query
  //   ) {
  //     this.addImage(this.state.query, this.state.page);
  //   }
  //   api
  //     .getData(value, page)
  //     .then(data => {
  //       this.setState({
  //         pictures:
  //           page === 1 ? data.hits : [...this.state.pictures, ...data.hits],
  //       });
  //       toast(
  //         `We are find ${this.state.pictures.length} images from ${data.total}`
  //       );
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => {
  //       this.setState({ loader: false });
  //     });
  // }

  onSubmit = query => {
    if (query.trim().length === 0) {
      alert('Please, enter rearch query');
      return;
    }
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onModalClose = () => {
    /* this.setState({
      currentLargeImageURL: url,
    }); */
  };

  render () {
    const { items, currentLargeImageURL, isLoading, error } = this.state;
    return (
      <ToastContainer>
        <Searchbar onSubmit={this.onSubmit} isLoading={isLoading} />
        {error && <p>{error}</p>}
        {items.length > 0 && (
          <ImageGallery
            items={items}
            onClick={this.onOpensLargeItemImageInModal}
            url={currentLargeImageURL}
          />
        )}
        {isLoading && <Loader />}
        {items.length > 0 && (
          <LoadButton
            onLoadMore={this.onLoadMoreButton}
            isLoading={isLoading}
          />
        )}
        {currentLargeImageURL && (
          <Modal onClose={this.onModalClose} url={currentLargeImageURL} />
        )}
      </ToastContainer>
    );
  }
}
