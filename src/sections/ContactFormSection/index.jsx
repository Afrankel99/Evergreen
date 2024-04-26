import React from 'react';
import Section from '../../components/Common/Section';
import Image from '../../components/Common/Image';
import Form from '../../components/Common/Form';

import * as styles from './styles.module.scss';

const ContactFormSection = (props) => {
  const { data } = props;
  const { image, theme, spacingOptions = {} } = data;

  const fields = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Your name',
      label: 'Name',
      validation: { required: true },
      validationMessage: 'Please enter your name',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'email@company.com.au',
      label: 'Email',
      defaultValue: '',
      validation: { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
      validationMessage: 'Please enter a valid email',
    },
    {
      type: 'tel',
      name: 'phoneNumber',
      placeholder: '04XX XXX XXX',
      label: 'Phone number',
      defaultValue: '',
      validation: { required: true, minLength: 8 },
      validationMessage: 'Please enter a valid number',
    },
    {
      type: 'textarea',
      name: 'wish',
      placeholder: 'Your wish',
      label: 'Your wish',
      defaultValue: '',
    },
  ];

  return (
    <Section sectionName="ContactFormSection" {...spacingOptions} data-theme={theme}>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactImg}>
          <Image imageData={image} />
        </div>
        <div data-theme="sand" className={styles.contactForm}>
          <div className={styles.formWrapper}>
            <Form fields={fields} className={styles.form} name="Contact Form" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactFormSection;
