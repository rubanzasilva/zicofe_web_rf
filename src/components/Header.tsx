import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container h-[72px] min-[992px]:h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="block shrink-0">
            <Image
              src="/images/ZICOFE-EST-1984-spaced.svg"
              alt="ZICOFE Logo"
              width={1583}
              height={993}
              sizes="(min-width: 992px) 96px, 80px"
              className="h-[50px] min-[992px]:h-[60px] w-auto"
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
