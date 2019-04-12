import React, { Component } from 'react';
import Alert from '../Alert/Alert';
import { IconContext } from 'react-icons';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './register.module.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      password: null,
      passwordConfirm: null,
      alerts: []
    };
  }

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  onRegisterSubmit = event => {
    event.preventDefault();
    const { email, username, password, passwordConfirm } = this.state;
    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        passwordConfirm: passwordConfirm
      })
    }).then(response => {
      if (response.status === 200) {
        this.props.history.push({
          pathname: '/users/login',
          state: { success: true, message: 'Registration successful!' }
        });
      } else {
        response.json().then(data => {
          this.setState({ ...this.state, alerts: data.alerts });
        });
      }
    });
  };

  getAlertList = alerts => {
    if (!alerts) {
      return '';
    }
    return alerts.map((alert, index) => {
      return (
        <Alert key={index} success={alert.success} message={alert.message} />
      );
    });
  };

  // Check if redirecting, if false, render page normally
  render() {
    return (
      <form className={styles.container} onSubmit={this.onRegisterSubmit}>
        <h1 className={styles.title}>
          <IconContext.Provider
            value={{ color: 'black', className: 'global-class-name' }}
          >
            <FaUserPlus />
          </IconContext.Provider>
          Register
        </h1>
        {this.getAlertList(this.state.alerts)}
        <div className={styles.inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email'
            required
            onChange={this.onInputChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Enter username'
            required
            onChange={this.onInputChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={this.onInputChange}
            pattern='(?=.*\d)(?=.*[a-z]).{8,}'
            title='Must be at least 8 characters including a number and a lowercase letter.'
          />
          <p className={styles.passRequirements}>
            Password should be at least 8 characters including a number and a
            lowercase letter.
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            placeholder='Re-type password'
            required
            onChange={this.onInputChange}
          />
        </div>
        <button type='submit'>Register</button>
        <p className={styles.navigation}>
          Have an account? <Link to='/users/login'>Sign In</Link>
        </p>
      </form>
    );
  }
}

export default Register;
