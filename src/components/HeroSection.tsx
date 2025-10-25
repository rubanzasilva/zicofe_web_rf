"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen bg-coffee-light flex items-center">
      <div className="container z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-coffee-dark mb-6">ZICOFE</h1>
          <p className="text-2xl md:text-3xl text-coffee-dark mb-8">INSPIRING CHANGE, ONE BEAN AT A TIME</p>
          <p className="text-xl text-gray-800 mb-10">
            Renowned for our top-quality Robusta coffee, Zigoti has drawn attention and respect from specialty coffee traders and consumers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('about')} className="bg-coffee-dark text-white px-8 py-3 rounded-md hover:bg-coffee-brown transition-colors">
              Our Story
            </button>
            <button onClick={() => scrollToSection('beans')} className="border border-coffee-dark text-coffee-dark px-8 py-3 rounded-md hover:bg-coffee-light transition-colors">
              View Products
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-coffee-dark" />
      </div>
    </section>
  );
};

export default HeroSection;