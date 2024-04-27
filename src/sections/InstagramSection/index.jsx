import React from 'react';
import Link from '~components/Common/Link';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Carousel from '../../components/Common/Carousel';

import * as styles from './styles.module.scss';

const InstagramSection = (props) => {
  const { data } = props;
  const { title, images, theme, spacingOptions } = data;

  const instagramUrl = 'https://www.instagram.com/evergreen_flowerstudio/';

  return (
    <Section sectionName="InstagramSection" data-theme={theme} {...spacingOptions}>
      <div className={styles.contentContainer}>
        <Link className={styles.titleLink} to={instagramUrl} target="_blank" rel="noopener noreferrer">
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <div className={styles.images}>
          {images?.map((image) => (
            <Link key={image?._key} className={styles.imageContainer} to={instagramUrl}>
              <Image imageData={image} />
            </Link>
          ))}
        </div>

        <div className={styles.mobileCarouselContainer}>
          <Carousel>
            {images?.map((image) => (
              <Link key={`carousel-item-${image?._key}`} className={styles.imageContainer} to={instagramUrl}>
                <Image imageData={image} />
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default InstagramSection;
