import React from 'react';
// import { Footer, Header } from '~components';
import Header from '~components/Common/Header';
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
      <main>{children}</main>
      {/* {settings?.footer && <Footer data={settings?.footer} socialLinks={settings?.socialLinks} />} */}
      <div style={{ height: '80px', backgroundColor: 'lightgray' }}>Footer</div>
    </>
  );
};

export default Layout;
