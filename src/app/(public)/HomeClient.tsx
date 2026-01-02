'use client';

import Hero from './home/components/hero';
import ServicesSection from './home/components/services-section';
import StatsSection from './home/components/stats-section';
import ClientLogos from './home/components/client-logos';
import TestimonialsSection from './home/components/testimonials-section';
import CTASection from './home/components/cta-section';

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <ClientLogos />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
