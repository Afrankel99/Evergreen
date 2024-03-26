/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormField from '../FormField';
import Button from '../Button';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

const Form = ({ fields, onSubmit, className }) => {
  const { register, handleSubmit, formState, reset } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const { errors, isSubmitting } = formState;

  const [submissionError, setSubmissionError] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  //   const defaultFields = [
  //     {
  //       type: 'text',
  //       name: 'firstName',
  //       placeholder: 'Pepe',
  //       label: 'First name',
  //       className: styles.splitLeft,
  //       defaultValue: '',
  //       validation: { required: true },
  //       validationMessage: 'Please enter your first name',
  //     },
  //     {
  //       type: 'text',
  //       name: 'lastName',
  //       placeholder: 'Silvia',
  //       label: 'Last name',
  //       className: styles.splitRight,
  //       defaultValue: '',
  //       validation: { required: true },
  //       validationMessage: 'Please enter your last name',
  //     },
  //     {
  //       type: 'tel',
  //       name: 'phone',
  //       placeholder: '0422 123 456',
  //       label: 'Best Phone number',
  //       defaultValue: '',
  //       validation: { required: true, minLength: 8 },
  //       validationMessage: 'Please enter a valid number',
  //     },
  //     {
  //       type: 'email',
  //       name: 'email',
  //       placeholder: 'carol@hr.com',
  //       label: 'Email address',
  //       defaultValue: '',
  //       validation: { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
  //       validationMessage: 'Please enter a valid email',
  //     },
  //     {
  //       type: 'textarea',
  //       name: 'message',
  //       placeholder: "What's on your mind?",
  //       label: 'Enter a message',
  //       defaultValue: '',
  //     },
  //   ];

  const defaultOnSubmit = async (values) => {
    try {
      //   const url = `https://hooks.zapier.com/hooks/catch/15552835/3tqjm2n/`; // pass formSparkId to send to formSpark
      //   const config = {
      //     method: 'POST',
      //     body: JSON.stringify(values),
      //   };
      //   const response = await fetch(url, config);
      //   // const json = await response.json()
      //   if (response.ok) {
      //     // return json
      //     sendToDataLayer('contact_form_submission');
      //     return navigate('/thank-you');
      //   }
      console.log('Form Values: ', values);
    } catch (error) {
      console.error('Error submitting form', error);
      setSubmissionError('Oops something went wrong, please try again');
    }
  };

  return (
    <div className={classNames(className, styles.formdiv)}>
      <form onSubmit={handleSubmit(onSubmit || defaultOnSubmit)} className={classNames(styles.form, className)}>
        <button type="submit" disabled aria-hidden="true" style={{ display: 'none' }} />
        {fields?.map((field) => {
          const hasError = errors[field.name];

          return (
            <div key={field.label} className={classNames(styles.field, field.className || '', styles[field.className])}>
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
        <Button type="submit" className={styles.formButton} title={isSubmitting ? 'Submitting...' : 'Submitted!'} />
      </form>
      {submissionError && <p className={styles.submissionError}>{submissionError}</p>}
      {submissionMessage !== '' && <p className={styles.submissionMessage}>{submissionMessage}</p>}
    </div>
  );
};

export default Form;
