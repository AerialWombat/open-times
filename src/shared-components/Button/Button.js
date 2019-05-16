import React from 'react';

import styles from './button.module.scss';

const Button = props => {
  return (
    <button className={styles['button']} onClick={props.onClickHandle}>
      {props.title || props.children}
    </button>
  );
};

export default Button;
