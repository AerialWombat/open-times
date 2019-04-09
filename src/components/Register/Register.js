import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./register.module.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      password: null,
      passwordConfirm: null,
      messages: []
    };
  }

  onEmailChange = event => {
    this.setState({ ...this.state, email: event.target.value });
  };

  onUsernameChange = event => {
    this.setState({ ...this.state, username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ ...this.state, password: event.target.value });
  };

  onPasswordConfirmChange = event => {
    this.setState({ ...this.state, passwordConfirm: event.target.value });
  };

  onRegisterSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <form className={styles.container} onSubmit={this.onRegisterSubmit}>
        <h1 className={styles.title}>
          <IconContext.Provider
            value={{ color: "black", className: "global-class-name" }}
          >
            <FaUserPlus />
          </IconContext.Provider>
          Register
        </h1>
        <p>Errors here</p>
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
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
            onChange={this.onUsernameChange}
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
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            title="Must be at least 8 characters including a number and a lowercase letter."
          />
          <p className={styles.passRequirements}>
            Password should be at least 8 characters including a number and a
            lowercase letter.
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Re-type password"
            required
            onChange={this.onPasswordConfirmChange}
          />
        </div>
        <button type="submit">Register</button>
        <p className={styles.navigation}>
          Have an account? <Link to="/users/login">Sign In</Link>
        </p>
      </form>
    );
  }
}

export default Register;
