'use client';

import React from 'react';
import { Service } from '../data/services';
import { Badge } from '@/components/ui/badge';
import { getIcon } from '../utils/icon-map';

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const Icon = getIcon(service.icon);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-main-900 via-brand-main-800 to-brand-secondary-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-secondary-500 text-white mb-4">
              <Icon className="h-8 w-8" />
            </div>
          )} */}

          {/* <Badge variant="secondary" className="mx-auto">
            {service.title}
          </Badge> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {service.heroSubtitle}
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
