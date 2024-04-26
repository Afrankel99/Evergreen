import React from 'react';
import Section from '~components/Common/Section';
import RichText from '../../components/Common/RichText';
import Button from '../../components/Common/Button';

import * as styles from './styles.module.scss';

const ClosingCtaSection = (props) => {
  const { data } = props;
  const { title, _rawContent, addButton, button } = data;

  return (
    <Section data-theme="light" sectionName="ClosingCtaSection" sectionSpacing="l">
      <div className={styles.textContainer}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {_rawContent && <RichText className={styles.body} blocks={_rawContent} />}
        {addButton && <Button className={styles.button} title={button.title} to={button.link} />}
      </div>
    </Section>
  );
};

export default ClosingCtaSection;
