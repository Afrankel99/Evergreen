import React from 'react';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';

import * as styles from './styles.module.scss';

const TwoPictureSection = (props) => {
  const { data } = props;
  const { title, content, button, imageOne, imageTwo, spacingOptions } = data;

  return (
    <Section sectionName="TwoPictureSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.firstImage} imageData={imageOne} />
          <Image className={styles.secondImage} imageData={imageTwo} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.content}>{content}</p>
          <Button className={styles.button} title={button.title} to={button.link} />
        </div>
      </div>
    </Section>
  );
};

export default TwoPictureSection;
