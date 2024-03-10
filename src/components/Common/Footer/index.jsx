import React, { useState } from 'react';
import Section from '~components/Common/Section';
import Link from '~components/Common/Link';
import Image from '~components/Common/Image';
import FooterItem from '~components/Common/Footer/FooterItem';

import * as styles from './styles.module.scss';

const Footer = (props) => {
  const { data } = props || {};
  const { logo, footerLinks } = data || {};

  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  return (
    <Section as="footer" className={styles.footer} containerClassName={styles.container} sectionSpacing="l">
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
          <FooterItem
            key={footerLink?.id}
            categoryTitle={footerLink?.categoryTitle}
            className={styles.footerItem}
            setActiveMobileMenu={setActiveMobileMenu}
            activeMobileMenu={activeMobileMenu}
          >
            {footerLink?.siteLinks?.map((siteLink) => (
              <Link className={styles.link} key={siteLink?.id} to={siteLink?.link}>
                <span>{siteLink?.title}</span>
              </Link>
            ))}
          </FooterItem>
        ))}
      </div>
    </Section>
  );
};

export default Footer;
