import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import handleLink from './handleLink';

import './styles.scss';

const Link = (props) => {
  const { children, className = '', to, title = null, ariaLabel = null, onClick = () => {}, ...otherProps } = props;

  const sharedProps = {
    className,
    title,
    'aria-label': ariaLabel,
    onClick,
    ...otherProps,
  };

  const link = handleLink(to);

  if (!to) return <div {...sharedProps}>{children}</div>;

  const isExternal = link?.match(/(http|https|#|tel:|mailto:)/);

  const containsSiteUrl = process.env.GATSBY_SITE_URL && link?.indexOf(process.env.GATSBY_SITE_URL) !== -1;

  const isAnchorLink = link?.startsWith('#');

  const handleAnchorClick = (e) => {
    e.preventDefault();
    // creates smooth scroll effect without impacting rest of site
    const element = document.querySelector(link);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (isAnchorLink) {
    return (
      <a
        href={link}
        aria-label="Internal site navigation link"
        onClick={handleAnchorClick}
        rel="nofollow noopener noreferrer"
        {...sharedProps}
      >
        {children}
      </a>
    );
  }

  if (isExternal && !containsSiteUrl) {
    return (
      <a href={link} aria-label="External navigation link" rel="nofollow noopener noreferrer" {...sharedProps}>
        {children}
      </a>
    );
  }

  const withTrailingSlash = `${link}${link?.endsWith('/') ? '' : '/'}`;
  const linkTo = containsSiteUrl ? withTrailingSlash.replace(containsSiteUrl, '') : withTrailingSlash;

  return (
    <GatsbyLink to={linkTo} aria-label="Internal site navigation link" {...sharedProps}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
