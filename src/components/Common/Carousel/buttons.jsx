import React from 'react';
import classNames from 'classnames';
import Arrow from '~components/Common/Arrow';

import * as styles from './styles.module.scss';

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      {children}
      <Arrow className={classNames(styles.arrow, styles.isPrev)} />
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      {children}
      <Arrow isNext className={styles.arrow} />
    </button>
  );
};
