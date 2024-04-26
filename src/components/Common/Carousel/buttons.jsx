import React from 'react';

import * as styles from './styles.module.scss';

export const PrevNextButton = ({ isNext }) => {
  if (isNext) {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" />
        <path d="M24 16L22.59 17.41L28.17 23H16V25H28.17L22.59 30.59L24 32L32 24L24 16Z" fill="#12100F" />
      </svg>
    );
  }
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" />
      <path d="M32 23H19.83L25.42 17.41L24 16L16 24L24 32L25.41 30.59L19.83 25H32V23Z" fill="#12100F" />
    </svg>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      {children}
      <PrevNextButton className={styles.arrow} />
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      {children}
      <PrevNextButton isNext className={styles.arrow} />
    </button>
  );
};
