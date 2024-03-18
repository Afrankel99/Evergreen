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
      <Header data={settings?.navbar} pathname={pathname} />
      <main className={classNames(pathname === '/' && 'isHome', 'main-children')}>{children}</main>
      {settings?.footer && <Footer data={settings?.footer} socialLinks={settings?.socialLinks} />}
    </>
  );
};

export default Layout;
