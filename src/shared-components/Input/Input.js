import React from 'react';

import styles from './input.module.scss';

const Input = props => {
  return (
    <div className={styles['form-group']}>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChangeHandle}
      />
      <span />
    </div>
  );
};

export default Input;
