import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const Arrow = ({ className }) => (
  <svg viewBox="0 0 14 14" fill="black" className={className || ''}>
    <path d="M0 5.77902V7.44925H10.0214L5.42827 12.0424L6.61414 13.2283L13.2283 6.61414L6.61414 0L5.42827 1.18587L10.0214 5.77902H0Z" />
  </svg>
);

const Button = (props) => {
  const { children, title, className, hideArrow, to, ...rest } = props;

  const buttonClassNames = classNames(styles.button, className);

  if (to) {
    const resolvedTo = handleLink(to);
    if (!resolvedTo) return null;

    return (
      <Link to={to} {...rest} className={buttonClassNames}>
        {children || title}
        {!hideArrow && <Arrow className={styles.arrow} />}
      </Link>
    );
  }

  return (
    <button type="button" {...rest} className={buttonClassNames}>
      {children || title}
      {!hideArrow && <Arrow className={styles.arrow} />}
    </button>
  );
};

export default Button;
