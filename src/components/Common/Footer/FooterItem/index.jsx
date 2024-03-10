import React from 'react';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

export const ChevronDown = () => (
  <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.49994 7.06095L13.5773 0.983536L14.7559 2.16205L7.49994 9.41797L0.244017 2.16205L1.42253 0.983535L7.49994 7.06095Z"
      fill="#BCBCBC"
    />
  </svg>
);

const FooterItem = (props) => {
  const { categoryTitle, className, children, disabledOnDesktop, activeMobileMenu, setActiveMobileMenu } = props;

  const classes = classNames(styles.container, {
    [styles.active]: activeMobileMenu === categoryTitle,
    [styles.disabledOnDesktop]: disabledOnDesktop,
    className,
  });

  return (
    <div className={classes}>
      <div
        className={styles.title}
        role="button"
        tabIndex={0}
        onClick={() => setActiveMobileMenu(categoryTitle === activeMobileMenu ? null : categoryTitle)}
      >
        <span>{categoryTitle}</span>
        <span className={styles.icon}>
          <ChevronDown />
        </span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FooterItem;
