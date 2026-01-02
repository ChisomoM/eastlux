'use client';

import * as React from 'react';
import Link from 'next/link';
import { TrendingUp, Building2, Phone, Megaphone, ClipboardList, Users } from 'lucide-react';
import { BrandCard, BrandCardContent, BrandCardDescription, BrandCardFooter, BrandCardHeader, BrandCardTitle } from '@/components/ui/brand-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: TrendingUp,
    title: 'Trade Development',
    description: 'Build and manage high-performing field teams that drive product adoption and market penetration across Zambia.',
    stats: '200+ DSAs',
    href: '/services/trade-development',
  },
  {
    icon: Building2,
    title: 'Agency Banking',
    description: 'Deploy, train, and manage agent networks for financial institutions expanding into rural and underserved markets.',
    stats: '15+ Districts',
    href: '/services/agency-banking',
  },
  {
    icon: Phone,
    title: 'Call Center Services',
    description: 'Professional customer support and campaign management solutions with trained agents and quality monitoring.',
    stats: '95% SLA',
    href: '/services/call-center',
  },
  {
    icon: Megaphone,
    title: 'Branding & Marketing',
    description: 'Increase brand awareness and market presence through strategic field marketing and community engagement.',
    stats: '40+ Campaigns',
    href: '/services/branding',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-section-title text-foreground mb-4">
            Solutions That Drive Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            From field force deployment to customer support, we provide end-to-end solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BrandCard
                key={service.title}
                hover
                className="group"
              >
                <BrandCardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-brand-secondary-50 dark:bg-brand-secondary-950 text-brand-secondary-600 dark:text-brand-secondary-400 group-hover:bg-brand-secondary-100 dark:group-hover:bg-brand-secondary-900 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.stats}
                    </Badge>
                  </div>
                  <BrandCardTitle className="text-xl">
                    {service.title}
                  </BrandCardTitle>
                  <BrandCardDescription className="mt-2">
                    {service.description}
                  </BrandCardDescription>
                </BrandCardHeader>
                <BrandCardFooter className="pt-4">
                  <Button variant="ghost" className="w-full group-hover:bg-accent" asChild>
                    <Link href={service.href}>
                      Learn More
                      <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </BrandCardFooter>
              </BrandCard>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution?
          </p>
          <Button variant="brand" size="lg" asChild>
            <Link href="/contact">
              <Users className="mr-2 h-5 w-5" />
              Talk to Our Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
