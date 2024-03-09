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
  const { title, content, button, image, addButton } = data;

  return (
    <Section>
      <div className={styles.contentContainer}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {addButton && <Button className={styles.button} title={button?.title} to={button.link} />}
        <Image imageData={image}></Image>
      </div>
    </Section>
  );
};

export default BannerSection;
