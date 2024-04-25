import React from 'react';

import classNames from 'classnames';
import * as styles from './styles.module.scss';

const StaticText = (props) => {
  const { name, className, content, variant } = props;

  if (variant === 'heading') {
    return (
      <div className={classNames(styles.heading, className || '')} name={name} id={name}>
        {content}
      </div>
    );
  }

  return (
    <p className={classNames(styles.body, className || '')} name={name} id={name}>
      {content}
    </p>
  );
};

export default StaticText;
