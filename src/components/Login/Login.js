import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import Input from '../../shared-components/Input/Input';
import Button from '../../shared-components/Button/Button';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaSignInAlt } from 'react-icons/fa';

import styles from './login.module.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
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

  // Submit handle that sends POST request to API's login route
  onLoginSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    fetch(`${process.env.REACT_APP_API_URL}api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(response => {
      // Check for success response
      if (response.status === 200) {
        // Update loggedIn state to be true
        this.props.updateLoggedIn('in');
        // Redirect to any route with success message
        this.props.history.push({
          pathname: '/groups',
          state: { success: true, message: 'Login successful!' }
        });
      } else {
        // Append alerts from unsuccessful response
        response
          .json()
          .then(data => {
            this.setState({ ...this.state, alerts: data.alerts });
          })
          .catch(error => console.log(error));
      }
    });
  };

  // Submit handle that sends POST request to API's login route with demo login credentials
  onDemoLoginSubmit = event => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email: 'demo@gmail.com',
        password: 'Password1'
      })
    }).then(response => {
      // Check for success response
      if (response.status === 200) {
        // Update loggedIn state to be true
        this.props.updateLoggedIn('in');
        // Redirect to any route with success message
        this.props.history.push({
          pathname: '/groups',
          state: { success: true, message: 'Login successful!' }
        });
      } else {
        // Append alerts from unsuccessful response
        response
          .json()
          .then(data => {
            this.setState({ ...this.state, alerts: data.alerts });
          })
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

  // Displays list of Alert components if alerts exist in state
  render() {
    const { alerts } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={this.onLoginSubmit}>
          <h1 className={styles.title}>
            <IconContext.Provider
              value={{ color: 'black', className: 'global-class-name' }}
            >
              <FaSignInAlt />
            </IconContext.Provider>
            Login
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
            type={'password'}
            title={'Password'}
            name={'password'}
            placeholder={'Enter password'}
            required={true}
            onChangeHandle={this.onInputChange}
          />
          <Button title={'Login'} />
          <Button title={'Demo Login'} onClickHandle={this.onDemoLoginSubmit} />
          <p className={styles.navigation}>
            Need an account? <Link to='/users/register'>Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
