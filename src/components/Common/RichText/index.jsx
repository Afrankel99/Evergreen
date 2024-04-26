import React from 'react';
import { PortableText } from '@portabletext/react';
import { blockComponents } from './blockComponents';

const RichText = (props) => {
  const { blocks = [], components, className } = props;
  if (blocks?.length === 0 || blocks === null) return null;

  return (
    <div className={className}>
      <PortableText className={className} value={blocks} components={components || blockComponents(props)} />
    </div>
  );
};

export default RichText;
