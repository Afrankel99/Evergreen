/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import useDataLayer from '../../../utils/hooks/useDataLayer';
import FormField from '../FormField';
import Button from '../Button';

import * as styles from './styles.module.scss';

const Form = (props) => {
  const { fields, className, name = 'Unnamed Form' } = props;

  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const { errors, isSubmitting } = formState;

  const [submissionError, setSubmissionError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sendToDataLayer = useDataLayer();

  if (!fields) return null;

  const onSubmit = async (data) => {
    const formValues = {
      'form-name': name,
      ...data,
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();

    for (const key in formValues) {
      body.append(key, formValues[key]);
    }

    const requestOptions = {
      method: 'POST',
      headers,
      body,
      redirect: 'follow',
    };

    try {
      const response = await fetch('/', requestOptions);

      if (response.ok) {
        reset();
        sendToDataLayer('contact_form_submission');
        setShowSuccess(true);
      } else {
        setSubmissionError('Oops something went wrong, please try again');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError('Oops something went wrong, please try again');
    }
  };

  return (
    <div className={classNames(className, styles.formdiv)}>
      {submissionError && <p>{submissionError}</p>}
      <form
        method="POST"
        data-netlify="true"
        netlify-honeypot="_gotcha"
        onSubmit={handleSubmit(onSubmit)}
        name={name}
        className={classNames(styles.form, className || '')}
      >
        <button type="submit" disabled aria-hidden="true" style={{ display: 'none' }} />
        {fields?.map((field) => {
          const hasError = errors[field.name];
          const key = `${field.name}-${field.label}`;

          return (
            <div key={key} className={classNames(styles.field, styles[field?.className], field.className || '')}>
              {field.label && (
                <span className={styles.label}>
                  {field.label}
                  {field.validation?.required && <span className={styles.asterix}>*</span>}
                </span>
              )}
              <FormField {...field} register={register} />
              <input
                {...register('_gotcha')}
                type="checkbox"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              <div className={`${styles.fieldError} ${hasError ? 'active' : 'inactive'}`}>
                {hasError && <span>{field.validationMessage || 'This field is required'}</span>}
              </div>
            </div>
          );
        })}
        {showSuccess && <p className={styles.successMessage}>Thank you for your submission!</p>}
        <Button type="submit" className={styles.formButton} disabled={isSubmitting} title="Submit Form" hideArrow>
          {isSubmitting ? 'Submitting' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default Form;
