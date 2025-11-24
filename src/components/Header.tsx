import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://d322abd807wvow.cloudfront.net/zicofe-photos/zicofeLogoSmall-Photoroom.png"
              alt="ZICOFE Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-coffee-brown hover:text-coffee-dark font-medium">Home</Link>
          <Link href="/about" className="text-coffee-brown hover:text-coffee-dark font-medium">About Us</Link>
          <Link href="/products" className="text-coffee-brown hover:text-coffee-dark font-medium">Products</Link>
          <Link href="/#impact" className="text-coffee-brown hover:text-coffee-dark font-medium">Our Impact</Link>
          <Link href="/#contact" className="text-coffee-brown hover:text-coffee-dark font-medium">Contact</Link>
        </nav>
        <Link href="/shop" className="bg-coffee-brown text-white px-6 py-2 rounded-md hover:bg-coffee-dark transition-colors inline-block">
          Shop Now
        </Link>
      </div>
    </header>
  );
};

export default Header;