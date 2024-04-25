/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from '../../Common/Image';
import Section from '../../Common/Section';
import Form from '../../Common/Form';
import Carousel from '../../Common/Carousel';
import AccordionInfo from './AccordionInfo';

import * as styles from './styles.module.scss';

const ProductDetails = (props) => {
  const { data } = props;
  const { name, description, images, price } = data;

  const fields = [
    {
      type: 'select',
      name: 'size',
      label: 'Size',
      defaultValue: 'Extra Small',
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
        <div className={styles.carouselContainer}>
          <Carousel addArrows>
            {images?.map((image) => (
              <div key={image?._id} className={styles.imageContainer}>
                <Image imageData={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            {name && <h1 className={styles.name}>{name}</h1>}
            {price && <span className={styles.price}>{`$${price}`}</span>}
            {description && <p className={styles.body}>{description}</p>}
          </div>
          <div className={styles.formContainer}>
            <Form className={styles.form} fields={fields} name="Product Page Form" />
          </div>
          <AccordionInfo />
        </div>
      </div>
    </Section>
  );
};

export default ProductDetails;
