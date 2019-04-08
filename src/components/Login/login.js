import React from "react";
import { IconContext } from "react-icons";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./login.module.scss";

const Login = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>
        <IconContext.Provider
          value={{ color: "black", className: "global-class-name" }}
        >
          <FaSignInAlt />
        </IconContext.Provider>
        Login
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
        />
      </div>
      <button type="submit">Login</button>
      <p className={styles.navigation}>
        Need an account? <Link to="/user/register">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
