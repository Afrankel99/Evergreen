import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';
import Section from '~components/Common/Section';
import Image from '~components/Common/Image';
import Button from '~components/Common/Button';
import * as styles from './styles.module.scss';

const TwoColumnSection = (props) => {
  const { data } = props;
  const { title, content, button, image, addButton } = data;

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>{data.title}</h1>
          <p>{content}</p>
          <Button className={styles.button} title={button.title} to={button.link} />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.image}>
            <Image imageData={image}></Image>
          </div>
        </div>
      </div>



    </Section>
  );

};

export default TwoColumnSection;
