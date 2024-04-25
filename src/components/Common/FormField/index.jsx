/* eslint-disable import/no-unresolved */
import React from 'react';
import TextArea from './Fields/TextArea';
import Select from './Fields/Select';
import RadioCheckbox from './Fields/RadioCheckbox';
import TextInput from './Fields/TextInput';
import StaticText from './Fields/StaticText';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

const FormField = (props) => {
  const {
    name,
    type,
    content,
    options,
    placeholder,
    defaultValue,
    handleChange,
    register,
    validation,
    variant,
    size = 'm',
  } = props;

  if (type === 'textarea') {
    return (
      <TextArea
        className={classNames(styles.field, styles[size || 'm'])}
        register={register}
        name={name}
        validation={validation}
        placeholder={placeholder}
        defaultValue={defaultValue}
        size={size}
        handleChange={handleChange}
      />
    );
  }
  if (type === 'select') {
    return (
      <Select
        className={classNames(styles.field, styles[size || 'm'])}
        name={name}
        register={register}
        validation={validation}
        options={options}
        defaultValue={defaultValue}
        size={size}
        handleChange={handleChange}
        placeholder={placeholder}
      />
    );
  }

  if (type === 'radio' || type === 'checkbox') {
    return (
      <RadioCheckbox
        className={classNames(styles.field, styles[size || 'm'])}
        type={type}
        options={options}
        register={register}
        name={name}
        validation={validation}
        defaultValue={defaultValue}
        handleChange={handleChange}
        size={size}
      />
    );
  }

  if (type === 'staticText') {
    return (
      <StaticText
        className={classNames(styles.field, styles[size || 'm'])}
        name={name}
        content={content}
        variant={variant}
      />
    );
  }

  return (
    <TextInput
      className={classNames(styles.field, styles[size || 'm'])}
      register={register}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      size={size}
      handleChange={handleChange}
      validation={validation}
    />
  );
};

export default FormField;
