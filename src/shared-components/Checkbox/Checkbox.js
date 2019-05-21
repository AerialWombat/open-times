import React from 'react';

import styles from './checkbox.module.scss';

const Checkbox = props => {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>{props.title}</label>
      <div className={styles['checkbox-group']}>
        {props.options.map(option => {
          return (
            <label className={styles['input-group']} key={option}>
              <input
                className={styles['input-group__checkbox']}
                type='checkbox'
                id={props.name}
                name={props.name}
                value={option}
                onChange={props.onChangeHandle}
                checked={props.selectedOptions.includes(option)}
              />
              <span className={styles['checkmark']} />
              {option}
            </label>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Checkbox;
