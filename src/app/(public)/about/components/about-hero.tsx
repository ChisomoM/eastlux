'use client';

import * as React from 'react';
import { ArrowDown } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-main-900 via-brand-main-800 to-brand-secondary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(18,163,220,0.3),transparent)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Driving Financial Inclusion{' '}
            <span className="bg-gradient-to-r from-brand-secondary-400 to-brand-secondary-300 bg-clip-text text-transparent">
              Across Zambia
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We deploy, train, and manage field forces that bridge the gap between financial services and communities nationwide.
          </p>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <ArrowDown className="w-6 h-6 text-brand-secondary-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
