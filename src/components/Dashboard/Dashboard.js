import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import GroupCard from './GroupCard/GroupCard';
import { FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styles from './dashboard.module.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      showModal: false,
      name: null,
      location: null,
      description: null,
      alerts: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/groups/dashboard', {
      method: 'GET',
      credentials: 'include'
    }).then(response =>
      response.json().then(data => {
        // Check for successful response
        if (response.status === 200) {
          this.setState({ groups: data });
        } else {
          // Append alerts from unsuccessful response
          this.setState({ ...this.state, alerts: data.alerts });
        }
      })
    );
  };

  toggleModalVisibility = event => {
    event.preventDefault();
    this.setState({ ...this.state, showModal: !this.state.showModal });
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  // Checks for group data and then renders cards
  getGroupCards = groups => {
    if (groups.length > 0) {
      return this.state.groups.map((group, index) => {
        return <GroupCard key={index} group={group} />;
      });
    } else {
      return;
    }
  };

  onCreateSubmit = event => {
    event.preventDefault();
    const { name, location, description } = this.state;
    fetch('http://localhost:5000/api/groups/create', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        location: location,
        description: description
      })
    }).then(response => {
      response
        .json()
        .then(data => {
          // Check for successful response
          if (response.status === 200) {
            // Redirect to schedule view page for group with returned slug
            this.props.history.push({
              pathname: `/groups/${data.slug}`,
              state: { success: true, message: 'Group Created!' }
            });
          } else {
            // Append alerts from unsuccessful response
            this.setState({ ...this.state, alerts: data.alerts });
          }
        })
        .catch(error => console.log(error));
    });
  };

  // Check for alerts and display Alert component for each
  getAlertList = alerts => {
    if (alerts.length <= 0 || !alerts[0]) {
      return;
    }
    return alerts.map((alert, index) => {
      return (
        <Alert key={index} success={alert.success} message={alert.message} />
      );
    });
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
          <form className={styles.creationModal} onSubmit={this.onCreateSubmit}>
            <h1 className={styles.title}>Create Group</h1>
            {this.getAlertList(this.state.alerts)}
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
              <textarea
                type='text'
                name='description'
                id='description'
                placeholder='Enter description (optional)'
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

        {this.getGroupCards(this.state.groups)}
      </div>
    );
  }
}

export default Dashboard;
