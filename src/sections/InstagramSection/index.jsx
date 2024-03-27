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
        <Link
          className={styles.titleLink}
          to="https://www.instagram.com/evergreen_flowerstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <div className={styles.imageRow}>
          <div className={styles.imageContainer}>
            <Image imageData={imageOne}></Image>
          </div>
          <div className={styles.imageContainer}>
            <Image imageData={imageTwo}></Image>
          </div>
          <div className={styles.imageContainer}>
            <Image imageData={imageThree}></Image>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InstagramSection;
