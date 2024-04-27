import React from 'react';
import Section from '~components/Common/Section';
import Link from '~components/Common/Link';
import Image from '~components/Common/Image';

import * as styles from './styles.module.scss';

const Footer = (props) => {
  const { data } = props || {};
  const { logo, footerLinks } = data || {};

  return (
    <Section
      as="footer"
      className={styles.footer}
      containerClassName={styles.container}
      sectionSpacing="l"
      data-theme="dark"
    >
      <div className={styles.leftPane}>
        <div className={styles.logo}>
          <Link to="/" ariaLabel="Evergreen">
            <Image imageData={logo} className={styles.image} />
          </Link>
        </div>
        <div className={styles.copyright}>{`© ${new Date().getFullYear()} Evergreen. All rights reserved.`}</div>
      </div>
      <div className={styles.rightPane}>
        {footerLinks?.map((footerLink) => (
          <div key={footerLink?.id} className={styles.footerGroupContainer}>
            <p className={styles.footerCategory}>{footerLink?.categoryTitle}</p>
            {footerLink?.siteLinks?.map((siteLink) => (
              <Link className={styles.link} key={siteLink?.id} to={siteLink?.link}>
                <span>{siteLink?.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Footer;
