import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';

import * as styles from './styles.module.scss';

const InstagramSection = (props) => {
  const { data } = props;
  const { title, imageOne, imageTwo, imageThree, spacingOptions } = data;

  return (
    <Section className={styles.section} sectionName="InstagramSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{title}</h1>
        <Image imageData={imageOne}></Image>
        <Image imageData={imageTwo}></Image>
        <Image imageData={imageThree}></Image>
      </div>
    </Section>
  );
};

export default InstagramSection;
