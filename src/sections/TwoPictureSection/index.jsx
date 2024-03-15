import React from 'react';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';

import * as styles from './styles.module.scss';

const TwoPictureSection = (props) => {
  const { data } = props;
  const { title, content, button, imageOne, imageTwo, spacingOptions } = data;

  return (
    <Section {...spacingOptions}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.textContainer}>{content}</p>
        <Button className={styles.button} title={button.title} to={button.link} />
      <div className={styles.imageContainer}>
        <Image className={styles.firstImage} imageData={imageOne}></Image>
        <Image className={styles.secondImage} imageData={imageTwo}></Image>
        </div>
      </div>
    </Section>
  );
};

export default TwoPictureSection;
