import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Arrow from '~components/Common/Arrow';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const ProductFeedSection = (props) => {
  const { data } = props;
  const { spacingOptions } = data;

  const productFeedData = useStaticQuery(graphql`
    query ProductFeedQuery {
      allSanityProduct(sort: { _updatedAt: DESC }) {
        nodes {
          name
          price
          slug {
            current
          }
          tags {
            name
          }
          images {
            ...ImageFragment
          }
        }
      }
    }
  `);

  const products = productFeedData?.allSanityProduct?.nodes || [];

  return (
    <Section data-theme="light" sectionName="ProductFeedSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <div className={styles.grid}>{products.map((product) => renderProduct(product))}</div>
      </div>
    </Section>
  );
};

export default ProductFeedSection;

const renderProduct = (product) => (
  <div key={product?._key} className={styles.product}>
    <Link to={product?.slug?.current} className={styles.imageWrapper}>
      <Image imageData={product?.images?.[0]}></Image>
    </Link>
    <div className={styles.infoContainer}>
      <div className={styles.nameAndArrow}>
        <Link className={styles.name} to={product?.slug?.current}>
          {product?.name}
        </Link>
        <Link className={styles.arrowLink} to={product?.slug?.current}>
          <Arrow className={styles.arrow} />
        </Link>
      </div>
      <span className={styles.price}>{`$${product?.price}`}</span>
    </div>
  </div>
);
