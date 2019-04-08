import React from "react";

import styles from "./register.module.scss";

const Register = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <input type="text" placeholder="Thing" />
      <button>Press me</button>
    </form>
  );
};

export default Register;
