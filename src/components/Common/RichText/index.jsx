import React from 'react';
import { PortableText } from '@portabletext/react';
import { blockComponents } from './blockComponents';

const RichText = (props) => {
  const { blocks = [], components } = props;
  if (blocks?.length === 0 || blocks === null) return null;

  return <PortableText value={blocks} components={components || blockComponents(props)} />;
};

export default RichText;
