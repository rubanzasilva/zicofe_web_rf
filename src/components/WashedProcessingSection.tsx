"use client";
import React from 'react';
import ProcessingSection from './ProcessingSection';

const WashedProcessingSection = () => {
  const images = [
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/z_wp.webp',
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/z_wp_a.webp',
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/z_wp_b.webp'
  ];

  const description = [
    "In our washed processing method, coffee cherries are pulped to remove the fruit, then fermented and washed to remove remaining mucilage. This process results in a clean, bright cup with pronounced acidity and clarity of flavor.",
    "The beans are then dried on raised beds until they reach 11-12% moisture content. Our washed coffees are known for their exceptional clarity and vibrant flavor notes that highlight the unique terroir of our growing regions."
  ];

  return (
    <ProcessingSection
      title="Washed Processing"
      description={description}
      buttonText="Learn More About Washed Processing"
      images={images}
      imagePosition="right"
      backgroundColor="bg-white"
    />
  );
};

export default WashedProcessingSection;
