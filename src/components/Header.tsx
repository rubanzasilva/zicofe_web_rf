'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/#impact', label: 'Our Impact' },
  { href: '/#contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    desktop.addEventListener('change', handleResize);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      desktop.removeEventListener('change', handleResize);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="bg-white sticky top-0 z-50 shadow-sm">
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
        <nav aria-label="Main navigation" className="hidden md:flex space-x-8">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} className="text-coffee-brown hover:text-coffee-dark font-medium">{label}</Link>
          ))}
        </nav>
        <Link href="/shop" className="bg-coffee-brown text-white px-6 py-2 rounded-md hover:bg-coffee-dark transition-colors hidden md:inline-block">
          Order Now
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-coffee-brown hover:bg-coffee-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coffee-brown md:hidden"
        >
          {menuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-coffee-brown/10 bg-white shadow-lg md:hidden"
      >
        <div className="container flex flex-col gap-1 py-4">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-medium text-coffee-brown hover:bg-coffee-light focus-visible:outline-coffee-brown">
              {label}
            </Link>
          ))}
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="mt-3 rounded-md bg-coffee-brown px-6 py-3 text-center font-medium text-white transition-colors hover:bg-coffee-dark">
            Order Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
