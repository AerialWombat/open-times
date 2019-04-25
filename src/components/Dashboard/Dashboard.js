import React, { Component } from 'react';
import GroupCard from './GroupCard/GroupCard';
// import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styles from './dashboard.module.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      showModal: false
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/groups/dashboard', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => this.setState({ groups: data }));
  };

  toggleModalVisibility = () => {
    this.setState({ ...this.state, showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className={styles.container}>
        <div
          className={
            this.state.showModal
              ? styles.showModalOverlay
              : styles.hideModalOverlay
          }
        >
          <form className={styles.creationModal}>
            <h1 className={styles.title}>Create Group</h1>
            <div className={styles.inputWrapper}>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter group name'
                required
                onChange={this.onInputChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                name='location'
                id='location'
                placeholder='Enter location (optional)'
                onChange={this.onInputChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                name='description'
                id='description'
                placeholder='Enter description (optional)'
                required
                onChange={this.onInputChange}
              />
            </div>
            <button type='submit'>Create</button>
            <button
              className={styles.grey}
              onClick={this.toggleModalVisibility}
            >
              Go Back
            </button>
          </form>
        </div>

        <header>
          <h1>Your Groups</h1>
          <button
            className={styles.navButton}
            onClick={this.toggleModalVisibility}
          >
            <IconContext.Provider value={{ size: '1.5em' }}>
              <FaPlusCircle />
            </IconContext.Provider>
            <span className={styles.btnText}>Create Group</span>
          </button>
        </header>

        {this.state.groups.map((group, index) => {
          return <GroupCard key={index} group={group} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
