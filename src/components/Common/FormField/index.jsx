import React from 'react';
import './styles.scss';

const FormField = ({ name, type, options, placeholder, defaultValue, handleChange, register, validation }) => {
  if (type === 'textarea') {
    return (
      <textarea
        {...register(name, validation)}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    );
  }
  if (type === 'select') {
    return (
      <select name={name} {...register(name, validation)}>
        {options.map((option) => (
          <option value={option} defaultValue={defaultValue} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (type === 'date') {
    return <input {...register(name, validation)} type={type} name={name} />;
  }

  if (type === 'radio' || type === 'checkbox') {
    return (
      <div className={`${type}-buttons`}>
        {options.map((option) => (
          <div key={option} className={`${type}-button`}>
            <input
              {...register(name, validation)}
              type={type}
              id={option}
              name={name}
              value={option}
              defaultValue={defaultValue}
              onChange={handleChange}
            />

            <label className="label" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </div>
    );
  }
  return (
    <input
      {...register(name, validation)}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default FormField;
