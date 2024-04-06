/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from '../../Common/Image';
import Section from '../../Common/Section';

import * as styles from './styles.module.scss';

const ProductSuggestions = (props) => {
  const { data } = props;
  const { name, description, images, price } = data;

  return (
    <Section className={styles.section} sectionName="ProductSuggestions" sectionSpacing="l">
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>You may also like</h1>
        </div>
        <div className={styles.imageContainer}>
          <Image imageData={images?.[0]}></Image>
          <Image imageData={images?.[0]}></Image>
          <Image imageData={images?.[0]}></Image>
        </div>
      </div>
    </Section>
  );
};

export default ProductSuggestions;
