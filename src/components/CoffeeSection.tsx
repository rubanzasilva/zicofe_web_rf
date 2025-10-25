"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const CoffeeSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Product data
  const greenBeans = [
    { name: 'Natural Uganda Robusta 1800', description: 'Premium grade natural robusta coffee beans', image: '/coffee1.jpg' },
    { name: 'Natural Uganda Robusta 1500', description: 'High-quality natural robusta coffee beans', image: '/coffee2.jpg' },
    { name: 'Natural Uganda Robusta 1700+', description: 'Superior grade natural robusta coffee beans', image: '/coffee3.jpg' }
  ];

  const arabicaBeans = [
    { name: 'Washed Uganda Arabica AA', description: 'Premium grade washed arabica coffee beans', image: '/coffee4.jpg' },
    { name: 'Washed Uganda Arabica AB', description: 'High-quality washed arabica coffee beans', image: '/coffee5.jpg' },
    { name: 'WUGAR', description: 'Washed Uganda Arabica specialty grade', image: '/coffee6.jpg' }
  ];

  return (
    <section id="beans" className="py-20 bg-coffee-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">Green Coffee Beans</h2>
          <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
            We export high-quality green coffee beans to all parts of the world
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab(0)}
            className={`px-6 py-3 rounded-md transition-colors font-medium ${activeTab === 0 ? 'bg-coffee-brown text-white' : 'bg-white text-coffee-brown border border-coffee-brown'}`}
          >
            Robusta Varieties
          </button>
          <button 
            onClick={() => setActiveTab(1)}
            className={`px-6 py-3 rounded-md transition-colors font-medium ${activeTab === 1 ? 'bg-coffee-brown text-white' : 'bg-white text-coffee-brown border border-coffee-brown'}`}
          >
            Arabica Varieties
          </button>
        </div>
        
        {/* Robusta Cards */}
        <div className={activeTab === 0 ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {greenBeans.map((bean, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <Image 
                    src={bean.image} 
                    alt={bean.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-brown mb-2">{bean.name}</h3>
                  <p className="text-coffee-brown mb-4">{bean.description}</p>
                  <button className="flex items-center text-coffee-brown font-medium hover:text-coffee-dark">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Arabica Cards */}
        <div className={activeTab === 1 ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arabicaBeans.map((bean, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <Image 
                    src={bean.image} 
                    alt={bean.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-brown mb-2">{bean.name}</h3>
                  <p className="text-coffee-brown mb-4">{bean.description}</p>
                  <button className="flex items-center text-coffee-brown font-medium hover:text-coffee-dark">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;