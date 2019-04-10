import React, { Component } from "react";
import Alert from "../Alert/Alert";
import { IconContext } from "react-icons";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./login.module.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      alerts: []
    };
  }

  onEmailChange = event => {
    this.setState({ ...this.state, email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ ...this.state, password: event.target.value });
  };

  onLoginSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };

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
      <form className={styles.container} onSubmit={this.onLoginSubmit}>
        <h1 className={styles.title}>
          <IconContext.Provider
            value={{ color: "black", className: "global-class-name" }}
          >
            <FaSignInAlt />
          </IconContext.Provider>
          Login
        </h1>
        {this.getAlertList([this.props.location.state, ...this.state.alerts])}
        <div className={styles.inputWrapper}>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={this.onEmailChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={this.onPasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <p className={styles.navigation}>
          Need an account? <Link to="/users/register">Sign Up</Link>
        </p>
      </form>
    );
  }
}

export default Login;
