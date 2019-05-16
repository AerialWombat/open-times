import React, { Component } from 'react';

import styles from './sidebar.module.scss';

class Sidebar extends Component {
  onOverlayClick = () => {
    this.props.hideSidebarHandle();
  };

  render() {
    let overlayStyle = this.props.isOpen ? '' : styles['sidebar-overlay--hide'];
    let sidebarStyle = this.props.isOpen ? '' : styles['sidebar-content--hide'];

    return (
      <React.Fragment>
        <div
          className={styles['sidebar-overlay'] + ' ' + overlayStyle}
          onClick={this.onOverlayClick}
        />
        <div className={styles['sidebar-content'] + ' ' + sidebarStyle}>
          {this.props.children}
          <button
            className={styles['sidebar__close-btn']}
            onClick={this.props.hideSidebarHandle}
          >
            X
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
