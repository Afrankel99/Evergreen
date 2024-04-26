import React from 'react';
import classNames from 'classnames';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import RichText from '../../components/Common/RichText';
import Button from '../../components/Common/Button';

import * as styles from './styles.module.scss';

const TwoColumnSection = (props) => {
  const { data } = props;
  const { title, _rawContent, button, image, addButton, alignMedia, theme, spacingOptions } = data;

  return (
    <Section className={styles.section} sectionName="TwoColumnSection" data-theme={theme} {...spacingOptions}>
      <div className={classNames(styles.contentContainer, styles[alignMedia])}>
        <div className={styles.textContainer}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {_rawContent && <RichText className={styles.body} blocks={_rawContent} />}
          {addButton && <Button className={styles.button} title={button.title} to={button.link} />}
        </div>
        <div className={styles.imageContainer}>
          <Image imageData={image} />
        </div>
      </div>
    </Section>
  );
};

export default TwoColumnSection;
