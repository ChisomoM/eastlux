import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceBySlug } from '../data/services';
import ServiceDetailHero from '../components/service-detail-hero';
import ServiceDetailContent from '../components/service-detail-content';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: ServicePageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - Eastlux | ${service.heroSubtitle}`,
    description: service.fullDescription,
    keywords: `${service.title}, ${resolvedParams.slug}, field force, zambia, business solutions`,
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'trade-development' },
    { slug: 'agency-banking' },
    { slug: 'call-center' },
    { slug: 'branding' },
  ];
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
    </main>
  );
}
