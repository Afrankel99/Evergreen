import React from 'react';
import classNames from 'classnames';
import * as styles from './styles.module.scss';

const Select = (props) => {
  const { name, register, validation, options, defaultValue, className, size, handleChange, placeholder } = props;

  return (
    <div className={classNames(styles.select, styles[size])}>
      <select name={name} {...register(name, validation)} className={className || ''} onChange={handleChange}>
        {!defaultValue && (
          <option value="" disabled selected>
            {placeholder || ''}
          </option>
        )}
        {options.map((option) => (
          <option value={option?.value || option} defaultValue={defaultValue} key={option?.value || option}>
            {option?.label || option}
          </option>
        ))}
      </select>
      <svg
        className={styles.chevron}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="#667085"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Select;
