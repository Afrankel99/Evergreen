import React from 'react';

const TextArea = (props) => {
  const { name, validation, placeholder, defaultValue, register, className, handleChange } = props;

  return (
    <textarea
      className={className || ''}
      {...register(name, validation)}
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default TextArea;
