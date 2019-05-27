import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import Input from '../../shared-components/Input/Input';
import Button from '../../shared-components/Button/Button';
import { Redirect } from 'react-router-dom';

import styles from './join.module.scss';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoggedIn: false,
      title: null,
      email: null,
      password: null,
      anonUsername: null,
      alerts: []
    };
  }

  // Checks if user is already logged in, if not, GETs group info for render
  componentDidMount = () => {
    fetch(`${process.env.REACT_APP_API_URL}api/checkAuth`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({ loading: false, isLoggedIn: true });
        } else {
          this.setState({ loading: false, isLoggedIn: false });
        }
      })
      .then(
        fetch(
          `${process.env.REACT_APP_API_URL}api/groups/info/${
            this.props.match.params.slug
          }`,
          {
            method: 'GET',
            credentials: 'include'
          }
        ).then(response => {
          response.json().then(data => {
            if (response.status === 200) {
              this.setState({ title: data.title });
            } else {
              console.log(data);
            }
          });
        })
      )
      .catch(error => console.log(error));
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

  // Input change handle for form fields
  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  // Submit handle that sends POST request to API's login route, then redirects to group's edit page
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
        // Redirect to group edit route
        this.props.history.push({
          pathname: `/groups/edit/${this.props.match.params.slug}`
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

  // Takes
  onAnonUsernameSubmit = event => {
    event.preventDefault();
    if (this.state.anonUsername) {
      this.props.history.push({
        pathname: `/groups/edit/${this.props.match.params.slug}`,
        state: { anonUsername: this.state.anonUsername }
      });
    } else {
      this.setState({
        ...this.state,
        alerts: [{ success: false, message: 'Display name is missing.' }]
      });
    }
  };

  render() {
    const { alerts, loading, isLoggedIn, title } = this.state;
    if (loading) {
      return null;
    } else if (isLoggedIn) {
      return <Redirect to={`/groups/edit/${this.props.match.params.slug}`} />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.subtitle}>You are joining</div>
          <h1>{title}</h1>
          {this.getAlertList(alerts)}
          <div>
            <form onSubmit={this.onLoginSubmit}>
              <h2>Log In</h2>
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
            </form>
            <div className={styles.divider} />
            <form onSubmit={this.onAnonUsernameSubmit}>
              <h2>Use A Display Name</h2>
              <Input
                type={'text'}
                title={'Display Name'}
                name={'anonUsername'}
                placeholder={'Enter a display name'}
                required={true}
                onChangeHandle={this.onInputChange}
              />
              <Button title={'Continue'} />
            </form>
          </div>
        </div>
      );
    }
  }
}
export default Join;
