import React from 'react';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

const Arrow = ({ className }) => (
  <svg
    className={classNames(className, styles.arrow)}
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.625 7.12305C0.625 6.77787 0.904822 6.49805 1.25 6.49805L12.2411 6.49805L7.68306 1.93999C7.43898 1.69591 7.43898 1.30018 7.68306 1.0561C7.92714 0.812028 8.32287 0.812028 8.56694 1.0561L14.1919 6.68111C14.436 6.92518 14.436 7.32091 14.1919 7.56499L8.56694 13.19C8.32286 13.4341 7.92713 13.4341 7.68306 13.19C7.43898 12.9459 7.43898 12.5502 7.68306 12.3061L12.2411 7.74805L1.25 7.74805C0.904822 7.74805 0.625 7.46822 0.625 7.12305Z"
      fill="#2970FF"
    />
  </svg>
);

export default Arrow;
