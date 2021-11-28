import React from 'react';

import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

export default function home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
