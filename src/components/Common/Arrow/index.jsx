import React from 'react';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

const Arrow = ({ className }) => (
  <svg
    className={classNames(className, styles.arrow)}
    width="16"
    height="11"
    viewBox="0 0 16 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.375 5.5L14.7286 5.85355L15.0821 5.5L14.7286 5.14645L14.375 5.5ZM0.875 5C0.598858 5 0.375 5.22386 0.375 5.5C0.375 5.77614 0.598858 6 0.875 6V5ZM10.2286 10.3536L14.7286 5.85355L14.0214 5.14645L9.52145 9.64645L10.2286 10.3536ZM14.7286 5.14645L10.2286 0.646447L9.52145 1.35355L14.0214 5.85355L14.7286 5.14645ZM14.375 5L0.875 5V6L14.375 6V5Z"
      fill="white"
    ></path>
  </svg>
);

export default Arrow;
