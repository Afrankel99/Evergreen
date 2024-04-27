/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from '../../Common/Image';
import Section from '../../Common/Section';
import Link from '../../Common/Link';
import Carousel from '../../Common/Carousel';

import * as styles from './styles.module.scss';

const ProductSuggestions = (props) => {
  const { data } = props;
  const { similarProducts } = data;

  return (
    <Section data-theme="light" sectionName="ProductSuggestions" sectionSpacing="l">
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>You may also like</h1>
        </div>
        <div className={styles.imagesContainer}>
          {similarProducts?.map((product) => (
            <ProductSuggestion product={product} key={product?._id} />
          ))}
        </div>
        <div className={styles.mobileCarouselContainer}>
          <Carousel>
            {similarProducts?.map((product) => (
              <ProductSuggestion product={product} key={product?._id} />
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default ProductSuggestions;

const ProductSuggestion = (props) => {
  const { product } = props;

  return (
    <Link to={product?.slug?.current} className={styles.product}>
      <Image className={styles.image} imageData={product?.images?.[0]}></Image>
      <div className={styles.overlay}>
        {product?.name && <div className={styles.name}>{product?.name}</div>}
        {product?.price && <div className={styles.price}>{`$${product?.price}`}</div>}
      </div>
      <div className={styles.mobileInfo}>
        {product?.name && <div className={styles.name}>{product?.name}</div>}
        {product?.price && <div className={styles.price}>{`$${product?.price}`}</div>}
      </div>
    </Link>
  );
};
