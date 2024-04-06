/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from '../../Common/Image';
import Section from '../../Common/Section';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import Form from '../../Common/Form';
import AccordionInfo from './AccordionInfo';

import * as styles from './styles.module.scss';

const ProductDetails = (props) => {
  const { data } = props;
  const { name, description, images, price } = data;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Navigate to the contact page and pass form data as state
    navigate('/contact', {
      state: data, // Pass form data as state
    });
  };

  const fields = [
    {
      type: 'select',
      name: 'size',
      label: 'Size',
      defaultValue: '',
      validation: { required: true },
      validationMessage: 'Please enter your desired size',
      options: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
    },
    {
      type: 'date',
      name: 'pickupDate',
      label: 'Pickup Date',
      validation: { required: true },
      validationMessage: 'Please enter a pickup date',
    },
  ];

  return (
    <Section sectionName="ProductDetails" sectionSpacing="l">
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image imageData={images?.[0]}></Image>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            {name && <h1 className={styles.name}>{name}</h1>}
            {price && <span className={styles.price}>{`$${price}`}</span>}
            {description && <p className={styles.body}>{description}</p>}
          </div>
          <div className={styles.formContainer}>
            <Form className={styles.form} fields={fields} />
          </div>
          <AccordionInfo />
        </div>
      </div>
    </Section>
  );
};

export default ProductDetails;
