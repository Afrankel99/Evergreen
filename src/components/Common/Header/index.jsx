import React, { useEffect, useRef, useState } from 'react';
import Link from '~components/Common/Link';
import Image from '~components/Common/Image';
import Section from '~components/Common/Section';
import Button from '~components/Common/Button';
import classNames from 'classnames';
import useWindowSize from '../../../utils/hooks/useWindowSize';

import * as styles from './styles.module.scss';

const Header = (props) => {
  const { data, pathname } = props;
  const { image: logo, navItems, addButton, button } = data;
  const loginRef = useRef(null);
  const wrapperRef = useRef(null);

  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const [active, setActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [topOfPage, setTopOfPage] = useState(true);
  const lastScrollY = useRef(0);

  const { width } = useWindowSize();

  // detect scroll direction
  useEffect(() => {
    const onScroll = () => {
      // detect scroll direction
      const scrollDirectionToUse = window.scrollY > lastScrollY.current ? 'down' : 'up';
      if (scrollDirectionToUse !== scrollDirection) setScrollDirection(scrollDirectionToUse);
      lastScrollY.current = window.scrollY;
      // set scrolled past threshold
      if (window.scrollY > headerHeight && !scrolledPastThreshold) {
        setScrolledPastThreshold(true);
      }
      if (window.scrollY <= headerHeight && scrolledPastThreshold) {
        setScrolledPastThreshold(false);
      }

      if (window.scrollY === 0 && !topOfPage) {
        setTopOfPage(true);
      }
      if (window.scrollY > 0 && topOfPage) {
        setTopOfPage(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerHeight, scrolledPastThreshold, topOfPage, scrollDirection]);

  // detects size of login menu section to align navbar properly
  useEffect(() => {
    const calculateLoginHeight = () => {
      if (loginRef.current) {
        document.documentElement.style.setProperty('--login-width', `${loginRef.current.clientWidth}px`);
      }
    };
    calculateLoginHeight();
    window.addEventListener('resize', calculateLoginHeight);
    return () => window.removeEventListener('resize', calculateLoginHeight);
  }, []);

  // Automatically deactivates hamburger menu on resize
  useEffect(() => {
    if (width > 1120) {
      setHamburgerMenuActive(false);
      setActive(false);
    }
  }, [width]);

  // prevents scrolling while hamburger menu active
  useEffect(() => {
    if (hamburgerMenuActive) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [hamburgerMenuActive, setHamburgerMenuActive]);

  const handleHamburgerToggle = () => {
    setHamburgerMenuActive(!hamburgerMenuActive);
  };

  return (
    <Section
      as="header"
      sectionRef={wrapperRef}
      className={classNames(
        styles.header,
        pathname === '/' && styles.transparent,
        topOfPage && styles.top,
        scrollDirection === 'down' && scrolledPastThreshold ? styles.hidden : null
      )}
      data-theme="dark"
    >
      <div className={styles.contentContainer}>
        <div className={classNames(styles.navContainer, hamburgerMenuActive && styles.hamburgerActive)}>
          <div className={styles.logoWrapper}>
            <Link to="/" ariaLabel="Evergreen Home Logo" className={styles.logo}>
              <Image imageData={logo} />
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navMenu}>
              {navItems?.map((navLink) => (
                <li
                  key={navLink?._key}
                  className={classNames(
                    styles.navItem,
                    navLink?.ctaLink?.internalLink?.slug?.current === pathname && styles.activeLink
                  )}
                >
                  <Link key={navLink?.title} className={classNames(styles.link, styles.navLink)} to={navLink?.link}>
                    {navLink?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.contactNav} data-theme="light" ref={loginRef}>
            <Button title={button?.title} to={button?.link} />
          </div>
          <button
            title="Hamburger menu"
            type="button"
            onClick={handleHamburgerToggle}
            className={classNames(styles.hamburgerMenu)}
          >
            <span className={classNames(hamburgerMenuActive && styles.hamburgerActive)} />
            <span className={classNames(hamburgerMenuActive && styles.hamburgerActive)} />
            <span className={classNames(hamburgerMenuActive && styles.hamburgerActive)} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Header;
