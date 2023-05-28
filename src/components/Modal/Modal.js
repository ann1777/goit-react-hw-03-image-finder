import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';
import React from 'react'
const modalRoot = document.getElementById('modal-root')
console.log(modalRoot)
class Modal extends Component {
  el = document.createElement('div')

  componentDidMount () {
    modalRoot.appendChild(this.el);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    modalRoot.removeChild(this.el);
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
