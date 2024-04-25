import React from 'react';

const TextInput = (props) => {
  const { register, name, validation, type, placeholder, defaultValue, className, handleChange } = props;

  return (
    <input
      className={className || ''}
      {...register(name, validation)}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default TextInput;
