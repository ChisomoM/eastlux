import type { Metadata } from 'next';
import ContactHero from './components/contact-hero';
import ContactForm from './components/contact-form';
import ContactInfo from './components/contact-info';
import MapPlaceholder from './components/map-placeholder';

export const metadata: Metadata = {
  title: 'Contact Us - Eastlux | Get in Touch',
  description: 'Contact Eastlux to discuss your field force management needs. We deploy, train, and manage DSAs across Zambia for agency banking, trade development, and more.',
  keywords: 'contact eastlux, field force zambia, agency banking inquiries, DSA deployment contact',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapPlaceholder />
    </main>
  );
}
