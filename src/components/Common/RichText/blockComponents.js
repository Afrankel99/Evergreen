/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import * as styles from './styles.module.scss';

export const blockComponents = () => {
  //   const { pages } = useContext(SiteContext);
  console.log(styles, 'styles');

  return {
    block: {
      h3: ({ children }) => <h3 className={styles.heading}>{children}</h3>,
      h5: ({ children }) => <h5 className={styles.subheading}>{children}</h5>,
      normal: ({ children }) => <p>{children}</p>,
    },
    marks: {
      color: ({ children, value: { hex } }) => <span style={{ color: hex || '#000000' }}>{children}</span>,
      //   link: ({ value, children }) => {
      //     let linkType = value?.linkType; // doing this for backwards compatibility

      //     // if internal link, resolve the internal ref
      //     let internalPath = '';
      //     if (value?.linkType === 'internal' || value?.internalLink?.internal || value?.internalLinkRef) {
      //       const refObj = value?.internal?.path || value?.internalLinkRef || value?.internalLink?.internal;
      //       internalPath = resolvePath(refObj, [...pages]);
      //       linkType = 'internal';
      //     }

      //     let externalLinkOld;
      //     if (value?.href) {
      //       linkType = 'external';
      //       externalLinkOld = value?.href;
      //     }

      //     const to = {
      //       externalLink: value?.externalLink || externalLinkOld,
      //       internalLink: {
      //         path: internalPath,
      //       },
      //       phone: value?.phone,
      //       email: value?.email,
      //       linkType,
      //     };

      //     return <Link to={to}>{children}</Link>;
      //   },
    },
    list: {
      bullet: ({ children }) => <ul className={styles.ul}>{children}</ul>,
      number: ({ children }) => <ol className={styles.ol}>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className={styles.li}>{children}</li>,
      number: ({ children }) => <li className={styles.li}>{children}</li>,
    },
  };
};
