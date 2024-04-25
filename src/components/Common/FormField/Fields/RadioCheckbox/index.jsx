import React from 'react';
import classNames from 'classnames';
import * as styles from './styles.module.scss';

const RadioCheckbox = (props) => {
  const { type, options, register, name, validation, handleChange, size, className } = props;

  return (
    <div className={classNames(styles[`${type}Buttons`], className || '')}>
      {options.map((option) => (
        <div key={option?.value} className={classNames(styles.container, styles[size])}>
          <label className={styles.label} htmlFor={`${name} ${option.value}`}>
            {option?.label} {type === 'checkbox' && validation?.required && <span className={styles.asterisk}>*</span>}
          </label>
          <span className={styles.button}>
            <input
              className={styles.input}
              {...register(name, validation)}
              type={type}
              id={`${name} ${option.value}`}
              name={name}
              value={option?.value}
              // defaultValue={defaultValue}
              onChange={handleChange}
            />
            {type === 'checkbox' && (
              <svg className={styles.checkmark} viewBox="0 0 50 50">
                <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RadioCheckbox;
