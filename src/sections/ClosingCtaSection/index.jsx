import React from 'react';
import classNames from 'classnames';
import Section from '~components/Common/Section';
import RichText from '../../components/Common/RichText';
import Button from '../../components/Common/Button';
import leafLeft from '../../images/leafLeft.png';
import leafRight from '../../images/leafRight.png';

import * as styles from './styles.module.scss';

const ClosingCtaSection = (props) => {
  const { data } = props;
  const { title, _rawContent, addButton, button } = data;

  return (
    <Section data-theme="light" className={styles.section} sectionName="ClosingCtaSection" sectionSpacing="xl">
      <img src={leafLeft} className={classNames(styles.leaf, styles.left)} />
      <div className={styles.textContainer}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {_rawContent && <RichText className={styles.body} blocks={_rawContent} />}
        {addButton && button?.title && <Button className={styles.button} title={button?.title} to={button?.link} />}
      </div>
      <img src={leafRight} className={classNames(styles.leaf, styles.right)} />
    </Section>
  );
};

export default ClosingCtaSection;
