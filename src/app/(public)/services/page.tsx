import type { Metadata } from 'next';
import ServicesHero from './components/services-hero';
import ServiceSelector from './components/service-selector';
import ServiceComparison from './components/service-comparison';
import ServicesCTA from './components/services-cta';

export const metadata: Metadata = {
  title: 'Our Services - Eastlux | Field Force Solutions',
  description: 'Explore our comprehensive services: Trade Development, Agency Banking, Call Center Services, and Branding & Marketing solutions for financial inclusion and business growth.',
  keywords: 'services, trade development, agency banking, call center, field marketing, DSA deployment, zambia',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServiceSelector />
      <ServiceComparison />
      <ServicesCTA />
    </main>
  );
}
