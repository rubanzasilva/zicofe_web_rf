"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

interface ProcessingSectionProps {
  title: string;
  description: string[];
  buttonText: string;
  images: string[];
  imagePosition: 'left' | 'right';
  backgroundColor?: string;
}

const ProcessingSection: React.FC<ProcessingSectionProps> = ({
  title,
  description,
  buttonText,
  images,
  imagePosition,
  backgroundColor = 'bg-gray-50'
}) => {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          {/* Image Carousel Side */}
          <div className="w-full lg:w-1/2">
            <ImageCarousel
              images={images}
              altText={title}
              autoPlayInterval={5000}
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-coffee-brown mb-6">
              {title}
            </h2>

            <div className="space-y-4 text-coffee-brown text-lg mb-8">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <button className="inline-flex items-center px-8 py-3 border-2 border-coffee-brown text-coffee-brown font-medium rounded-md hover:bg-coffee-brown hover:text-white transition-all duration-300 group">
              {buttonText}
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingSection;
