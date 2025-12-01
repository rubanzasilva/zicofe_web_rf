"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/hero_a.webp',
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/hero_b.webp',
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/hero_c.webp',
    'https://d3q0oijmiduzg2.cloudfront.net/zicofe/hero_d.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Carousel Background */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Hero slide ${index + 1}`}
            fill
            priority={index === 0}
            style={{ objectFit: 'cover' }}
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">ZICOFE</h1>
          <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-lg">INSPIRING CHANGE, ONE BEAN AT A TIME</p>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Renowned for our top-quality Robusta coffee, Zigoti has drawn attention and respect from specialty coffee traders and consumers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('about')} className="bg-coffee-dark text-white px-8 py-3 rounded-md hover:bg-coffee-brown transition-colors shadow-lg">
              Our Story
            </button>
            <button onClick={() => scrollToSection('beans')} className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors shadow-lg backdrop-blur-sm">
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown size={32} className="text-white drop-shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;