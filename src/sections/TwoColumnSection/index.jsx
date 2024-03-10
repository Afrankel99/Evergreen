import React from 'react';
import classNames from 'classnames';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';

import * as styles from './styles.module.scss';

const TwoColumnSection = (props) => {
  const { data } = props;
  const { title, content, button, image, addButton, alignMedia, spacingOptions } = data;

  return (
    <Section className={styles.section} sectionName="TwoColumnSection" {...spacingOptions}>
      <div className={classNames(styles.contentContainer, styles[alignMedia])}>
        <div className={styles.textContainer}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {content && <p className={styles.body}>{content}</p>}
          {addButton && <Button className={styles.button} title={button.title} to={button.link} />}
        </div>
        <div className={styles.imageContainer}>
          <Image imageData={image}></Image>
        </div>
      </div>
    </Section>
  );
};

export default TwoColumnSection;
