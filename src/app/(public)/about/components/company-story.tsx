'use client';

import * as React from 'react';
import { BrandCard } from '@/components/ui/brand-card';

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-brand-secondary-500 mx-auto mb-6" />
          </div>

          <div className="space-y-8">
            <BrandCard className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Eastlux was founded with a singular vision: to democratize access to financial services across Zambia by building and managing the most capable field force network in the region.
              </p>
            </BrandCard>

            <BrandCard className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we operate across <strong>15+ districts</strong> in <strong>5 provinces</strong>, with over <strong>200 trained Direct Sales Agents (DSAs)</strong> delivering exceptional results for our clients. From agency banking to trade development, we enable businesses to reach underserved communities and drive meaningful economic impact.
              </p>
            </BrandCard>

            <BrandCard className="p-8 bg-gradient-to-r from-brand-main-900 to-brand-secondary-900">
              <p className="text-lg text-white leading-relaxed">
                Our core expertise spans <strong>Trade Development</strong>, <strong>Agency Banking</strong>, <strong>Call Center Operations</strong>, and <strong>Project Management</strong> — all designed to help businesses scale efficiently and sustainably.
              </p>
            </BrandCard>
          </div>
        </div>
      </div>
    </section>
  );
}
