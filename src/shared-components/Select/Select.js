import React from 'react';

const Select = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <select
        name={props.name}
        id={props.name}
        // value={props.value}
        onChange={props.onChangeHandle}
      >
        <option value='' disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
