import React, { useState } from 'react';
import classNames from 'classnames';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';
import Carousel from '~components/Common/Carousel';
import Arrow from '~components/Common/Arrow';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const ProductCarouselSection = (props) => {
  const { data } = props;
  const { categories, spacingOptions } = data;

  const [activeCategory, setActiveCategory] = useState(categories[1]);

  // helper function to render each product (takes in the product var and then returns the JSX for the product card)
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

  return (
    <Section data-theme="light" className={styles.section} sectionName="ProductCarouselSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <Button
              key={index}
              className={classNames(styles.categoryButton, { [styles.active]: category === activeCategory })}
              title={category.name}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
        <Carousel addArrows className={styles.carousel}>
          {activeCategory?.products?.map((product) => renderProduct(product))}
        </Carousel>
      </div>
    </Section>
  );
};

export default ProductCarouselSection;
