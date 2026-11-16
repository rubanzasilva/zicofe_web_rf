import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, HeartHandshake, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative isolate bg-coffee-brown font-medium text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/footer-coffee-cherries.webp"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          loading="lazy"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-coffee-brown/[0.96]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.85fr_1.3fr_1fr] gap-12">
          <div>
            <div className="mb-7 w-36 max-w-full">
              <Image
                src="/images/ZICOFE-spaced-white-outline-transparent.svg"
                alt="ZICOFE — Zigoti Coffee Works, established 1984"
                width={1603}
                height={1013}
                sizes="144px"
                className="h-auto w-full"
              />
            </div>
            <p className="text-white mb-6 max-w-[260px]">
              Inspiring change, one bean at a time since 1984.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/ZigotiCoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4DA70] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/zigoticoffeeworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4DA70] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/ZicofeOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4DA70] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://ug.linkedin.com/company/zigoti-coffee-works-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4DA70] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@zigoticoffeeworks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F4DA70] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-7 text-[#F4DA70]">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link href="/" className="text-white hover:text-[#F4DA70] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-[#F4DA70] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-white hover:text-[#F4DA70] transition-colors">Products</Link></li>
              <li><Link href="/#impact" className="text-white hover:text-[#F4DA70] transition-colors">Our Impact</Link></li>
              <li><Link href="/#contact" className="text-white hover:text-[#F4DA70] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-7 text-[#F4DA70]">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F0AA17] mt-1 flex-shrink-0" />
                <span className="text-white">Plot 104, 5th street Industrial Area, Bugolobi, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#F0AA17] flex-shrink-0" />
                <span className="text-white">+256 702 720720</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#F0AA17] flex-shrink-0" />
                <span className="text-white">sales@zicofe.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#F0AA17] mt-1 flex-shrink-0" />
                <span className="text-white">Monday - Saturday: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-7 text-[#F4DA70]">Certifications</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 rounded-xl border border-[#F0AA17]/30 px-5 py-5">
                <HeartHandshake size={26} className="shrink-0 text-[#F0AA17]" />
                <span className="text-white">Fairtrade</span>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-[#F0AA17]/30 px-5 py-5">
                <ShieldCheck size={26} className="shrink-0 text-[#F0AA17]" />
                <span className="text-white">UNBS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#F0AA17]/25 bg-coffee-dark/30">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-white">© {new Date().getFullYear()} Zigoti Coffee Works Ltd. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="text-white hover:text-[#F4DA70] transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="text-white hover:text-[#F4DA70] transition-colors">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
