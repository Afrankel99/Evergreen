const handleLink = (linkData) => {
  if (linkData?.linkType === 'internal') {
    return linkData.internalLink?.slug?.current;
  }

  if (linkData?.linkType === 'external') {
    return linkData.externalLink;
  }

  if (linkData?.linkType === 'phone') {
    return `tel:${linkData.phone}`;
  }

  if (linkData?.linkType === 'email') {
    return `mailto:${linkData.email}`;
  }

  return linkData;
};

export default handleLink;
