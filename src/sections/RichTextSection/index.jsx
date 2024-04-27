import React from 'react';
import Section from '../../components/Common/Section';
import RichText from '../../components/Common/RichText';

import * as styles from './styles.module.scss';

const RichTextSection = (props) => {
  const { data } = props;
  const { _rawBody, spacingOptions } = data;

  return (
    <Section data-theme="light" {...spacingOptions} className={styles.section} sectionName="RichTextSection">
      <RichText blocks={_rawBody} className={styles.body} />
    </Section>
  );
};

export default RichTextSection;
