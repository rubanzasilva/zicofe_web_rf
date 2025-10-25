import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">Our Story</h2>
          <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
            A journey of determination and growth in Central Uganda since 1984
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Replace with your actual image */}
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg relative">
              <Image 
                src="/coffee-farm.jpg" 
                alt="Zigoti Coffee Farm" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4">40 Years of Excellence</h3>
            <p className="text-coffee-brown mb-6">
              In 1984, riding on a motorbike along a dusty dirt road, Rose Nakayenga Kato
              and her late husband, Enock Kisuule Kato, sought out the perfect land for
              cultivating coffee. They found it – a parcel of rich and promising land – in the
              rural town of Zigoti, in central Uganda.
            </p>
            <p className="text-coffee-brown mb-6">
              They acquired it, and so Zigoti Coffee was born. Rose and Enock dedicated
              themselves to nurturing their dream, tirelessly working the land to establish
              their coffee farm, mill, roastery and even a beautiful hotel, Enro Hotel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;