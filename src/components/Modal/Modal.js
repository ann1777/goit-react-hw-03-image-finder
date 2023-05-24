import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

class Modal extends Component {
  static propTypes = {
    onclose: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  };

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'escape') {
      this.props.onclose();
    }
  };

  render () {
    return createPortal(
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalWindow>
          <img src={this.props.url} alt='' />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

// <div class='overlay'>
//   <div class='modal'>
//     <img src='' alt='' />
//   </div>
// </div>;
