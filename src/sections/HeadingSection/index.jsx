import React from 'react';
import Section from '~components/Common/Section';
import RichText from '../../components/Common/RichText';

import * as styles from './styles.module.scss';

const HeadingSection = (props) => {
  const { data } = props;
  const { title, _rawContent, theme, spacingOptions } = data;

  return (
    <Section data-theme={theme} sectionName="HeadingSection" {...spacingOptions}>
      <div className={styles.textContainer}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {_rawContent && <RichText className={styles.body} blocks={_rawContent} />}
      </div>
    </Section>
  );
};

export default HeadingSection;
