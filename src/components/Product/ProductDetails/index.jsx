/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from '../../Common/Image';
import Section from '../../Common/Section';

import * as styles from './styles.module.scss';

const ProductDetails = (props) => {
  const { data } = props;
  const { name, description, images, price } = data;

  return (
    <Section className={styles.section} sectionName="ProductDetails" sectionSpacing="l">
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image imageData={images?.[0]}></Image>
        </div>
        <div className={styles.textContainer}>
          {name && <h1 className={styles.name}>{name}</h1>}
          {price && <span className={styles.price}>{`$${price}`}</span>}
          {description && <p className={styles.body}>{description}</p>}
        </div>
      </div>
    </Section>
  );
};

export default ProductDetails;
