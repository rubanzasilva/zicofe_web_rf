import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ImpactSection = () => {
  const initiatives = [
    {
      title: 'Women In Coffee',
      description: 'ZICOFE is a member of International Women in Coffee Alliance (IWCA Uganda Chapter), in partnership with the sole mission of advocating for gender equality and women\'s rights.',
      image: '/initiatives/women-in-coffee.jpg',
      alt: 'Women coffee farmers in misty forest'
    },
    {
      title: 'Sustainable Farming',
      description: 'Supporting farmers in implementing environmentally responsible practices that preserve the ecosystem while producing high-quality coffee.',
      image: '/initiatives/sustainable-farming.jpg',
      alt: 'Mountain landscape coffee farming area'
    },
    {
      title: 'Youth Empowerment',
      description: 'Creating opportunities for young people in coffee-growing regions through education, training, and employment in the coffee industry.',
      image: '/initiatives/youth-empowerment.jpg',
      alt: 'Trees and nature in coffee growing region'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">Our Initiatives</h2>
          <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
            Making a positive impact through meaningful programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col"
            >
              {/* Hero Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={initiative.image}
                  alt={initiative.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold text-coffee-brown mb-4">
                  {initiative.title}
                </h3>
                <p className="text-coffee-brown mb-6 flex-grow">
                  {initiative.description}
                </p>

                {/* Learn More Button */}
                <button className="inline-flex items-center justify-center w-full bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;