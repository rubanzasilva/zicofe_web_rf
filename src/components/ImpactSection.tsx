import React from 'react';
import Image from 'next/image';

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">Our Impact</h2>
          <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
            Supporting farmers and the environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4">Supporting Communities</h3>
            <p className="text-coffee-brown mb-6">
              We collaborate with a network of 12,000 small-scale farmers, including 4,000 women 
              and over 7,000 youth, across central Uganda's key coffee-producing districts.
            </p>
            <p className="text-coffee-brown mb-6">
              Each farm typically looks after around 450 trees of both Robusta
              and Arabica varieties, such as SL.14, SL.28, and KP 423.
            </p>
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4 mt-6">Climate Smart Practices</h3>
            <p className="text-coffee-brown">
              We provide agronomic extension training to farmers, encouraging practices 
              such as irrigation, shading, water harvesting, and organic soil fertility 
              conservation measures.
            </p>
          </div>
          <div className="relative h-96">
            <Image 
              src="/farmers.jpg" 
              alt="Coffee Farmers" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;