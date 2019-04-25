import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import { IconContext } from 'react-icons';
import { FaUserEdit } from 'react-icons/fa';

import styles from './account.module.scss';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: null,
      currentPassword: null,
      newPassword: null,
      newPasswordConfirm: null,
      deletePassword: null,
      alerts: []
    };
  }

  // Input change handle for form fields
  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
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

  onPassChangeSubmit = event => {
    event.preventDefault();
    const { currentPassword, newPassword, newPasswordConfirm } = this.state;
    fetch('http://localhost:5000/api/users/changepassword', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword,
        newPasswordConfirm: newPasswordConfirm
      })
    }).then(response => {
      response
        .json()
        .then(data => this.setState({ ...this.state, alerts: data.alerts }))
        .catch(error => console.log(error));
    });
  };
  onDeleteAccSubmit = event => {
    event.preventDefault();
    const { deletePassword } = this.state;
    fetch('http://localhost:5000/api/users/deleteaccount', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        deletePassword: deletePassword
      })
    }).then(response => {
      // Check for success response
      if (response.status === 200) {
        // Redirect to login route with success message
        this.props.history.push({
          pathname: '/users/login',
          state: { success: true, message: 'Account deleted.' }
        });
      } else {
        // Append alerts from unsuccessful response
        response
          .json()
          .then(data => this.setState({ ...this.state, alerts: data.alerts }))
          .catch(error => console.log(error));
      }
    });
  };

  // Displays list of Alert components if alerts exist in state
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          <IconContext.Provider
            value={{ color: 'black', className: 'global-class-name' }}
          >
            <FaUserEdit />
          </IconContext.Provider>
          Account
        </h1>
        {this.getAlertList(this.state.alerts)}
        <form onSubmit={this.onPassChangeSubmit}>
          <h2 className={styles.subtitle}>Change Password</h2>
          <div className={styles.inputWrapper}>
            <label htmlFor='email'>Current Password</label>
            <input
              type='password'
              name='currentPassword'
              id='currentPassword'
              placeholder='Enter current password'
              required
              onChange={this.onInputChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='password'>New password</label>
            <input
              type='password'
              name='newPassword'
              id='newPassword'
              placeholder='Enter new password'
              required
              onChange={this.onInputChange}
            />
            <p className={styles.passRequirements}>
              Password should be at least 8 characters including a number and a
              lowercase letter.
            </p>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='password'>Confirm new password</label>
            <input
              type='password'
              name='newPasswordConfirm'
              id='newPasswordConfirm'
              placeholder='Re-type new password'
              required
              onChange={this.onInputChange}
            />
          </div>
          <button className={styles.grey} type='submit'>
            Change Password
          </button>
        </form>
        <form onSubmit={this.onDeleteAccSubmit}>
          <h2 className={styles.subtitle}>Delete Account</h2>
          <div className={styles.inputWrapper}>
            <label htmlFor='password'>Enter password to confirm</label>
            <input
              type='password'
              name='deletePassword'
              id='deletePassword'
              placeholder='Enter password'
              required
              onChange={this.onInputChange}
            />
          </div>
          <button className={styles.grey} type='submit'>
            Delete Account
          </button>
        </form>
      </div>
    );
  }
}

export default Account;
