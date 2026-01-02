import type { Metadata } from 'next';
import AboutHero from './components/about-hero';
import CompanyStory from './components/company-story';
import MissionVisionValues from './components/mission-vision-values';
import WhyChooseUs from './components/why-choose-us';
import AboutStats from './components/about-stats';
import AboutCTA from './components/about-cta';

export const metadata: Metadata = {
  title: 'About Us - Eastlux | Driving Financial Inclusion Across Zambia',
  description: 'Learn about Eastlux\'s mission to drive financial inclusion and trade growth across Zambia through expert field force management and deployment.',
  keywords: 'about eastlux, company story, financial inclusion zambia, field force management, agency banking zambia',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <MissionVisionValues />
      <WhyChooseUs />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}
