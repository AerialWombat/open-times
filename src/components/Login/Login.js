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

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  onLoginSubmit = event => {
    const { email, password } = this.state;
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    // .then(response => response.json().then(data => console.log(data)));
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={this.onInputChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={this.onInputChange}
          />
        </div>
        <button type="submit">Login</button>
        <p className={styles.navigation}>
          Need an account? <Link to="/users/register">Sign Up</Link>
        </p>
        <button onClick={this.test}>Test</button>
      </form>
    );
  }
}

export default Login;
