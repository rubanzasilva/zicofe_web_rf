import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-brown text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://d322abd807wvow.cloudfront.net/zicofe-photos/zicofeLogoSmall-Photoroom.png"
              alt="ZICOFE Logo"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-200 mb-4">
              Inspiring change, one bean at a time since 1984.
            </p>
            <p className="text-gray-200 mb-4">
              © {new Date().getFullYear()} Zigoti Coffee Works Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ZigotiCoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/zigoticoffeeworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/ZicofeOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://ug.linkedin.com/company/zigoti-coffee-works-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@zigoticoffeeworks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
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
            <h4 className="text-lg font-semibold mb-4 mt-6">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-200 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gray-200 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Plot 104, 5th street Industrial Area, Bugolobi, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-gray-200 flex-shrink-0" />
                <span className="text-gray-200">+256 772 029 059</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gray-200 flex-shrink-0" />
                <span className="text-gray-200">sales@zicofe.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-gray-200 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Monday - Saturday: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
          <div className="lg:ml-8">
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