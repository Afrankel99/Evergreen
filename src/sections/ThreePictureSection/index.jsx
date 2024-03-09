import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const ThreePictureSection = (props) => {
  console.log('ThreePictureSection', props);
  const { data } = props;

  return (
    <Section>
      <div className= {styles.contentContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <p>{content}</p>
        <Image imageData={image}></Image>
        <Image imageData={image}></Image>
        <Image imageData={image}></Image>
      </div>
    </Section>
  );
};

export default ThreePictureSection;
