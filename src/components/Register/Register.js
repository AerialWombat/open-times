import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import Input from '../../shared-components/Input/Input';
import Button from '../../shared-components/Button/Button';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaUserPlus } from 'react-icons/fa';

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

  // On mount, append any alerts from redirect state
  componentDidMount = () => {
    this.setState({
      ...this.state,
      alerts: this.state.alerts.concat(this.props.location.state)
    });
  };

  // Input change handle for form fields
  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  // Submit handle that sends POST request to API's register route
  onRegisterSubmit = event => {
    event.preventDefault();
    const { email, username, password, passwordConfirm } = this.state;
    fetch(`${process.env.REACT_APP_API_URL}api/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        passwordConfirm: passwordConfirm
      })
    }).then(response => {
      // Check for success response
      if (response.status === 200) {
        // Redirect to login route with success message
        this.props.history.push({
          pathname: '/users/login',
          state: { success: true, message: 'Registration successful!' }
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
    const { alerts } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={this.onRegisterSubmit}>
          <h1 className={styles.title}>
            <IconContext.Provider
              value={{ color: 'black', className: 'global-class-name' }}
            >
              <FaUserPlus />
            </IconContext.Provider>
            Register
          </h1>
          {this.getAlertList(alerts)}
          <Input
            type={'email'}
            title={'Email'}
            name={'email'}
            placeholder={'Enter email'}
            required={true}
            onChangeHandle={this.onInputChange}
          />
          <Input
            type={'text'}
            title={'Username'}
            name={'username'}
            placeholder={'Enter username'}
            required={true}
            onChangeHandle={this.onInputChange}
          />
          <Input
            type={'password'}
            title={'Password'}
            name={'password'}
            placeholder={'Enter password'}
            required={true}
            onChangeHandle={this.onInputChange}
          />
          <span className={styles.passRequirements}>
            Password should be at least 8 characters including a number and a
            lowercase letter.
          </span>
          <Input
            type={'password'}
            title={'Confirm Password'}
            name={'passwordConfirm'}
            placeholder={'Re-type password'}
            required={true}
            onChangeHandle={this.onInputChange}
          />
          <Button title={'Submit'} />
          <span className={styles.navigation}>
            Have an account? <Link to='/users/login'>Sign In</Link>
          </span>
        </form>
      </div>
    );
  }
}

export default Register;
