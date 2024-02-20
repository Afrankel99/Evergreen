import React from 'react';
// import { Footer, Header } from '~components';
import './styles.scss';

const Layout = (props) => {
  const {
    children,
    settings,
    // location: { pathname },
  } = props;

  return (
    <>
      <div style={{ height: '80px', backgroundColor: 'lightgray' }}>Header</div>
      {/* {settings?.navbar && <Header data={settings?.navbar} pathname={pathname} />} */}
      <main>{children}</main>
      {/* {settings?.footer && <Footer data={settings?.footer} socialLinks={settings?.socialLinks} />} */}
      <div style={{ height: '80px', backgroundColor: 'lightgray' }}>Footer</div>
    </>
  );
};

export default Layout;
