import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <span className="text-2xl font-bold text-coffee-brown">ZICOFE</span>
          </Link>
          <span className="text-coffee-brown font-semibold">EST. 1984</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-coffee-brown hover:text-coffee-dark font-medium">Home</Link>
          <Link href="/about" className="text-coffee-brown hover:text-coffee-dark font-medium">About Us</Link>
          <Link href="/products" className="text-coffee-brown hover:text-coffee-dark font-medium">Products</Link>
          <Link href="/#impact" className="text-coffee-brown hover:text-coffee-dark font-medium">Our Impact</Link>
          <Link href="/#contact" className="text-coffee-brown hover:text-coffee-dark font-medium">Contact</Link>
        </nav>
        <button className="bg-coffee-brown text-white px-6 py-2 rounded-md hover:bg-coffee-dark transition-colors">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;