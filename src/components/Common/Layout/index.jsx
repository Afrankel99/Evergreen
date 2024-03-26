import React from 'react';
import classNames from 'classnames';
import Header from '~components/Common/Header';
import Footer from '~components/Common/Footer';
import '~sass/global/styles.scss';

import './styles.scss';

const Layout = (props) => {
  const {
    children,
    settings,
    location: { pathname },
  } = props;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <Header data={settings?.navbar} pathname={pathname} />
      <main className={classNames(pathname === '/' && 'isHome', 'main-children')}>{children}</main>
      {settings?.footer && <Footer data={settings?.footer} socialLinks={settings?.socialLinks} />}
    </>
  );
};

export default Layout;
