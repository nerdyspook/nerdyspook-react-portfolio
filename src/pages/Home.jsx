import React from 'react';

import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
