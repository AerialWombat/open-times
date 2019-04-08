import React from "react";
import { IconContext } from "react-icons";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./register.module.scss";

const Register = () => {
  return (
    <form className={styles.container}>
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
      <div className={styles.inputWrapper}>
        <label for="password2">Confirm Password</label>
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Re-type password"
          required
        />
      </div>
      <button type="submit">Register</button>
      <p className={styles.navigation}>
        Have an account? <Link to="/user/login">Sign In</Link>
      </p>
    </form>
  );
};

export default Register;
