import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';

import * as styles from './styles.module.scss';

const ThreePictureSection = (props) => {
  console.log('ThreePictureSection', props);
  const { data } = props;
  const { title, content, imageOne, imageTwo, imageThree, spacingOptions } = data;

  return (
    <Section className={styles.section} sectionName="ThreePictureSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p>{content}</p>
        <Image imageData={imageOne}></Image>
        <Image imageData={imageTwo}></Image>
        <Image imageData={imageThree}></Image>
      </div>
    </Section>
  );
};

export default ThreePictureSection;
