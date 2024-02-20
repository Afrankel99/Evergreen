import React from 'react';
import * as Sections from '~sections';

const SanitySection = (props) => {
  const { data } = props;
  const { _type: sectionType } = data;

  // Handle null slice_type prop
  if (!sectionType) {
    console.error('Please pass a slice_type from your template to the SanitySection component');
    return null;
  }

  // Convert slice type from snake_case to TitleCase
  const sectionName = sectionType
    .split('_')
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
    .join('');

  const CustomSection = Sections[sectionName];

  // Handle missing exported SanitySection
  if (!CustomSection) {
    console.error(`Can't find SanitySection ${sectionName}, are you sure it exists in the slices directory?`);
  }

  // Return SanitySection
  return <CustomSection {...props} />;
};

export default SanitySection;
