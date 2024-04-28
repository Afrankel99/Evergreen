import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import './styles.scss';

const Image = (props) => {
  const {
    loadingStrategy = 'lazy',
    imageData,
    altText = '',
    className = '',
    url, // specifically for block content
    ...otherProps
  } = props;

  const image = imageData?.image?.asset;
  const alt = imageData?.altText || altText;

  const classes = classNames('gatsby-image', 'image-component', className);

  const Placeholder = () => <div className={`gatsby-image placeholder ${className}`} />;

  if (!image && !url) return <Placeholder />;

  const isSvg = image?.url?.includes('.svg');

  // Using plain img tag for SVGs
  if (isSvg) {
    return <img className={classes} src={image?.url || url} alt={alt} />;
  }

  if (image?.gatsbyImageData) {
    return (
      <GatsbyImage
        {...otherProps}
        className={classNames(classes, 'gatsby-image-component')}
        image={image?.gatsbyImageData}
        alt={alt}
        loading={loadingStrategy}
      />
    );
  }

  if (image?.url || url) {
    return (
      <div className={classes}>
        <img src={image?.url || url} alt={alt} />
      </div>
    );
  }

  return <Placeholder />;
};

export default Image;
