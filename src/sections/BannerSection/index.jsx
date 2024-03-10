import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';
import * as styles from './styles.module.scss';

const BannerSection = (props) => {
  const { data } = props;
  const { title, content, button, image, addButton, spacingOptions } = data;

  return (
    <Section className={styles.section} sectionName="BannerSection" {...spacingOptions}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {content && <p className={styles.title}>{content}</p>}
          {addButton && <Button className={styles.button} title={button?.title} to={button.link} />}
        </div>
        <div className={styles.imageWrapper}>{/* <Image imageData={image}></Image> */}</div>
      </div>
    </Section>
  );
};

export default BannerSection;
