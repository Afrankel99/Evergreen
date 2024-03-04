import React from 'react';
import classNames from 'classnames';
import handleLink from '~components/Common/Link/handleLink';
import Link from '~components/Common/Link';

import * as styles from './styles.module.scss';

const TwoColumnSection = (props) => {
console.log(props)
const { data } = props;
  
    return <h1>{data.title}</h1>
  };
  
  export default TwoColumnSection;