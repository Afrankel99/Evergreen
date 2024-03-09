import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const TwoPictureSection = (props) => {
  console.log("TwoPictureSection", props);
  const { data } = props;

  return (
    <Section>
      <div className= {styles.contentContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <p>{content}</p>
        <Button className={styles.button} title={button.title} to={button.link} />
        <Image imageData={image}></Image>
        <Image imageData={image}></Image>
      </div>
    </Section>
  );
};

export default TwoPictureSection;
