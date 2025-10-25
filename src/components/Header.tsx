"use client";
import React from 'react';
import Link from 'next/link';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <span className="text-2xl font-bold text-coffee-brown">ZICOFE</span>
          </Link>
          <span className="text-coffee-brown font-semibold">EST. 1984</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-coffee-brown hover:text-coffee-dark font-medium">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-coffee-brown hover:text-coffee-dark font-medium">About Us</button>
          <button onClick={() => scrollToSection('beans')} className="text-coffee-brown hover:text-coffee-dark font-medium">Our Coffee</button>
          <button onClick={() => scrollToSection('impact')} className="text-coffee-brown hover:text-coffee-dark font-medium">Our Impact</button>
          <button onClick={() => scrollToSection('contact')} className="text-coffee-brown hover:text-coffee-dark font-medium">Contact</button>
        </nav>
        <button className="bg-coffee-brown text-white px-6 py-2 rounded-md hover:bg-coffee-dark transition-colors">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;