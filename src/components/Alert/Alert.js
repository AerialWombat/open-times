import React from "react";

import styles from "./alert.module.scss";

const Alert = ({ success, message }) => {
  return (
    <div className={success ? styles.containerSuccess : styles.containerError}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Alert;
