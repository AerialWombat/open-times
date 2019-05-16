import React, { Component } from 'react';

import styles from './modal.module.scss';

class Modal extends Component {
  onKeyDown = event => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.hideModalHandle();
    }
  };

  onOverlayClick = () => {
    this.props.hideModalHandle();
  };

  render() {
    let overlayStyle = this.props.isOpen ? '' : styles['modal-overlay--hide'];
    let modalStyle = this.props.isOpen ? '' : styles['modal-content--hide'];

    return (
      <React.Fragment>
        <div
          className={styles['modal-overlay'] + ' ' + overlayStyle}
          onClick={this.onOverlayClick}
        />
        <div
          className={styles['modal-content'] + ' ' + modalStyle}
          onKeyDown={this.onKeyDown}
          tabIndex='0'
        >
          {this.props.children}
          <button
            className={styles['modal__close-btn']}
            onClick={this.props.hideModalHandle}
          >
            X
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
