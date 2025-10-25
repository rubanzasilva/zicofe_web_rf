import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-coffee-brown text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ZICOFE</h3>
            <p className="text-gray-200 mb-4">
              Inspiring change, one bean at a time since 1984.
            </p>
            <p className="text-gray-200">
              © {new Date().getFullYear()} Zigoti Coffee Works Ltd. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/#impact" className="text-gray-200 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link href="/#contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-200 mb-4">
              Subscribe to get updates on new products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full text-coffee-brown focus:outline-none"
              />
              <button className="bg-coffee-dark hover:bg-coffee-medium px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;