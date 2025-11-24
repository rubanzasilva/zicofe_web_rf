import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CoffeeSection from '../components/CoffeeSection';
import NaturalProcessingSection from '../components/NaturalProcessingSection';
import WashedProcessingSection from '../components/WashedProcessingSection';
import ImpactSection from '../components/ImpactSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <CoffeeSection />
      <NaturalProcessingSection />
      <WashedProcessingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}