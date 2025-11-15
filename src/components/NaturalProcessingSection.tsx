"use client";
import React from 'react';
import ProcessingSection from './ProcessingSection';

const NaturalProcessingSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
  ];

  const description = [
    "Our natural processing method involves drying coffee cherries in the sun with the fruit still intact. This traditional method produces coffee with bold, fruity flavors and a full body.",
    "The cherries are spread on raised beds and turned regularly over 2-3 weeks until they reach optimal moisture content. This careful process ensures the development of complex flavor profiles that our customers love."
  ];

  return (
    <ProcessingSection
      title="Natural Processing"
      description={description}
      buttonText="Learn More About Natural Processing"
      images={images}
      imagePosition="left"
      backgroundColor="bg-coffee-light"
    />
  );
};

export default NaturalProcessingSection;
