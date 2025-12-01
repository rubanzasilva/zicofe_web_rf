"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // All Robusta products (7 products)
  const robustaProducts = [
    {
      name: 'Natural Uganda Robusta Screen 1800',
      description: 'Premium grade natural robusta coffee beans with superior size and quality',
      image: '/coffee1.jpg',
      specs: ['Screen Size: 18', 'Processing: Natural', 'Grade: Premium']
    },
    {
      name: 'Natural Uganda Robusta Screen 1500',
      description: 'High-quality natural robusta coffee beans',
      image: '/coffee2.jpg',
      specs: ['Screen Size: 15', 'Processing: Natural', 'Grade: Standard']
    },
    {
      name: 'Natural Uganda Robusta Screen 1200',
      description: 'Quality natural robusta coffee beans',
      image: '/coffee3.jpg',
      specs: ['Screen Size: 12', 'Processing: Natural', 'Grade: Standard']
    },
    {
      name: 'Natural Uganda Robusta Screen 1700+',
      description: 'Superior grade natural robusta coffee beans',
      image: '/coffee4.jpg',
      specs: ['Screen Size: 17+', 'Processing: Natural', 'Grade: Superior']
    },
    {
      name: 'Washed Uganda Robusta Screen 1500+',
      description: 'Premium washed robusta coffee beans',
      image: '/coffee5.jpg',
      specs: ['Screen Size: 15+', 'Processing: Washed', 'Grade: Premium']
    },
    {
      name: 'BHP 1199',
      description: 'Undergrades from robusta coffee',
      image: '/coffee6.jpg',
      specs: ['Type: BHP', 'Grade: 1199', 'Processing: Hand-picked']
    },
    {
      name: 'Black Beans',
      description: 'Undergrade black robusta coffee beans',
      image: '/coffee7.jpg',
      specs: ['Type: Black Beans', 'Processing: Natural', 'Grade: Specialty']
    }
  ];

  // All Arabica products (6 products)
  const arabicaProducts = [
    {
      name: 'Washed Uganda Arabica AA',
      description: 'Premium grade washed arabica coffee beans with exceptional quality',
      image: '/coffee8.jpg',
      specs: ['Grade: AA', 'Processing: Washed', 'Quality: Premium']
    },
    {
      name: 'Washed Uganda Arabica AB',
      description: 'High-quality washed arabica coffee beans',
      image: '/coffee9.jpg',
      specs: ['Grade: AB', 'Processing: Washed', 'Quality: High']
    },
    {
      name: 'Washed Uganda Arabica A',
      description: 'Quality washed arabica coffee beans',
      image: '/coffee10.jpg',
      specs: ['Grade: A', 'Processing: Washed', 'Quality: Standard']
    },
    {
      name: 'WUGAR (Washed Uganda Arabica)',
      description: 'Washed Uganda Arabica specialty grade',
      image: '/coffee11.jpg',
      specs: ['Grade: Specialty', 'Processing: Washed', 'Type: WUGAR']
    },
    {
      name: 'CPB (Caracoli/Peaberry)',
      description: 'Premium peaberry arabica coffee beans',
      image: '/coffee12.jpg',
      specs: ['Type: Peaberry', 'Processing: Washed', 'Grade: Premium']
    },
    {
      name: 'Dry Processed Uganda Arabica',
      description: 'Natural processed arabica coffee beans with unique flavor profile',
      image: '/coffee13.jpg',
      specs: ['Processing: Dry/Natural', 'Origin: Uganda', 'Profile: Unique']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-coffee-light py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-coffee-brown mb-6">Our Green Coffee Beans</h1>
            <p className="text-2xl text-coffee-brown">
              We export premium quality Robusta and Arabica coffee beans to all parts of the world
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab(0)}
              className={`px-6 py-3 rounded-md transition-colors font-medium ${activeTab === 0 ? 'bg-coffee-brown text-white' : 'bg-white text-coffee-brown border border-coffee-brown'}`}
            >
              Robusta Varieties ({robustaProducts.length})
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`px-6 py-3 rounded-md transition-colors font-medium ${activeTab === 1 ? 'bg-coffee-brown text-white' : 'bg-white text-coffee-brown border border-coffee-brown'}`}
            >
              Arabica Varieties ({arabicaProducts.length})
            </button>
          </div>

          {/* Robusta Products Grid */}
          <div className={activeTab === 0 ? 'block' : 'hidden'}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-coffee-brown mb-4">Robusta Coffee Beans</h2>
              <p className="text-coffee-brown max-w-3xl">
                Our Robusta varieties are known for their bold flavor, high caffeine content, and exceptional quality.
                Grown in the fertile soils of central Uganda, these beans are carefully processed to maintain their
                distinctive characteristics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {robustaProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-coffee-brown mb-2">{product.name}</h3>
                    <p className="text-coffee-brown mb-4">{product.description}</p>
                    <div className="space-y-1 mb-4">
                      {product.specs.map((spec, idx) => (
                        <p key={idx} className="text-sm text-gray-600">• {spec}</p>
                      ))}
                    </div>
                    <button className="flex items-center text-coffee-brown font-medium hover:text-coffee-dark">
                      Request Quote <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arabica Products Grid */}
          <div className={activeTab === 1 ? 'block' : 'hidden'}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-coffee-brown mb-4">Arabica Coffee Beans</h2>
              <p className="text-coffee-brown max-w-3xl">
                Our Arabica varieties offer refined flavors with bright acidity and aromatic complexity.
                Cultivated at higher altitudes in Uganda's prime coffee-growing regions, these beans deliver
                the premium quality that specialty coffee buyers seek.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {arabicaProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-coffee-brown mb-2">{product.name}</h3>
                    <p className="text-coffee-brown mb-4">{product.description}</p>
                    <div className="space-y-1 mb-4">
                      {product.specs.map((spec, idx) => (
                        <p key={idx} className="text-sm text-gray-600">• {spec}</p>
                      ))}
                    </div>
                    <button className="flex items-center text-coffee-brown font-medium hover:text-coffee-dark">
                      Request Quote <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-coffee-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-coffee-brown mb-6">Quality Assurance</h2>
            <p className="text-coffee-brown mb-8">
              Every batch of our coffee beans undergoes rigorous quality control processes to ensure
              consistency and excellence. We maintain international standards in processing, grading,
              and packaging to deliver the finest green coffee beans to our customers worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-coffee-brown mb-2">100%</div>
                <p className="text-coffee-brown">Quality Tested</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-coffee-brown mb-2">13</div>
                <p className="text-coffee-brown">Product Varieties</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-coffee-brown mb-2">12K+</div>
                <p className="text-coffee-brown">Farmer Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-coffee-brown mb-6">Ready to Order?</h2>
            <p className="text-xl text-coffee-brown mb-8">
              Contact us for pricing, availability, and to discuss your specific requirements.
              We're here to help you find the perfect coffee beans for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-coffee-brown text-white px-8 py-3 rounded-md hover:bg-coffee-dark transition-colors">
                Contact Us
              </a>
              <a href="/about" className="border border-coffee-brown text-coffee-brown px-8 py-3 rounded-md hover:bg-coffee-light transition-colors">
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
