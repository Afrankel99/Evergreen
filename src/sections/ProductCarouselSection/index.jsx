import React, { useState } from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';
import Carousel from '~components/Common/Carousel';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const ProductCarouselSection = (props) => {
  const { data } = props;
  const { categories, spacingOptions } = data;

  const [activeCategoryName, setActiveCategoryName] = useState(categories[1].name);

  // helper function to render each product (takes in the product var and then returns the JSX for the product card)
  const renderProduct = (product) => (
    <div key={product?._key} className={styles.product}>
      <Link to={product?.slug?.current} className={styles.imageWrapper}>
        <Image imageData={product?.images?.[0]}></Image>
      </Link>
      <div className={styles.infoContainer}>
        <Link className={styles.name} aria-label={product?.name} to={product?.slug?.current}>
          {product?.name}
        </Link>
        <span className={styles.price}>{`$${product?.price}`}</span>
      </div>
    </div>
  );

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0',
      border: '1px solid black',
      boxShadow: 'none',
      backgroundColor: '#0c1924',
      color: 'white',
      width: '100%',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#223646' : '#0c1924',
      color: state.isSelected ? 'white' : 'white',
      width: '100%',
      '&:hover': {
        backgroundColor: '#223646',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };

  const mobileSelectOptions = categories.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return (
    <Section data-theme="light" className={styles.section} sectionName="ProductCarouselSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <Button
              key={index}
              className={classNames(styles.categoryButton, { [styles.active]: category.name === activeCategoryName })}
              title={category.name}
              onClick={() => setActiveCategoryName(category.name)}
            />
          ))}
        </div>
        <div className={styles.mobileCategoriesContainer}>
          <Select
            options={mobileSelectOptions}
            defaultValue={mobileSelectOptions[0]}
            onChange={(cat) => setActiveCategoryName(cat.value)}
            styles={customSelectStyles}
            aria-activedescendant={undefined}
          />
        </div>
        <Carousel addArrows className={styles.carousel}>
          {categories
            .find((category) => category.name === activeCategoryName)
            ?.products?.map((product) => renderProduct(product))}
        </Carousel>
      </div>
    </Section>
  );
};

export default ProductCarouselSection;
