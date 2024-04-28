import React from 'react';
import classNames from 'classnames';
import Image from '~components/Common/Image';

import * as styles from './styles.module.scss';

const isDev = process.env.NODE_ENV === 'development';

const Section = (props) => {
  const {
    as,
    className,
    containerClassName,
    children,
    sectionName,
    noContainer,
    bgImage,
    sectionSpacing,
    spacingOverride,
    sectionRef,
    ...rest
  } = props;

  const HtmlElement = as || 'section';

  const spacingClassNames = {
    none: styles.noneSpacing,
    xs: styles.xsSpacing,
    s: styles.sSpacing,
    m: styles.mSpacing,
    l: styles.lSpacing,
    xl: styles.xlSpacing,
  };

  const sectionClasses = classNames(
    styles.section,
    spacingClassNames[sectionSpacing],
    spacingOverride !== 'none' && styles[spacingOverride],
    className || ''
  );

  return (
    <HtmlElement ref={sectionRef} className={sectionClasses} data-slice={isDev ? sectionName : null} {...rest}>
      {noContainer ? (
        children
      ) : (
        <div className={classNames(styles.container, containerClassName || '')}>{children}</div>
      )}
      {bgImage && (
        <Image compression={50} imageData={bgImage} className={classNames(styles?.sectionBg, 'section-bg-img')} />
      )}
    </HtmlElement>
  );
};

export default Section;
