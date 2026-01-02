'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function ServicesHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-main-900 via-brand-main-800 to-brand-secondary-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mx-auto">
            Our Services
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Solutions That Drive{' '}
            <span className="bg-gradient-to-r from-brand-secondary-300 to-brand-secondary-200 bg-clip-text text-transparent">
              Growth
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            From field force deployment to customer support, we provide comprehensive solutions
            tailored to your business needs. Select a service below to learn how we can help you
            expand your reach and drive measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}
