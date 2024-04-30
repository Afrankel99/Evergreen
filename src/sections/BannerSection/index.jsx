import React from 'react';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';

import * as styles from './styles.module.scss';

const BannerSection = (props) => {
  const { data } = props;
  const { title, addButton, button, image } = data;

  return (
    <Section className={styles.section} noContainer sectionName="BannerSection">
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <Image imageData={image}></Image>
        </div>
        <div className={styles.textContainer}>
          <div data-theme="light" className={styles.text}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {addButton && <Button className={styles.button} title={button?.title} to={button.link} />}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BannerSection;
