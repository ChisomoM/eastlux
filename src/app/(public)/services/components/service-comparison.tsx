'use client';

import React from 'react';
import { services } from '../data/services';
import { getIcon } from '../utils/icon-map';
import { BrandCard, BrandCardContent, BrandCardHeader, BrandCardTitle } from '@/components/ui/brand-card';
import { Badge } from '@/components/ui/badge';

export default function ServiceComparison() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
            Quick Service Comparison
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find the right solution for your business needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <BrandCard key={service.id} hover className="flex flex-col h-full">
                <BrandCardHeader>
                  {Icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-secondary-50 dark:bg-brand-secondary-950 text-brand-secondary-600 dark:text-brand-secondary-400 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}
                  <BrandCardTitle className="text-xl mb-2">
                    {service.title}
                  </BrandCardTitle>
                </BrandCardHeader>
                <BrandCardContent className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.shortDescription}
                  </p>
                  
                  {/* Key Stats */}
                  <div className="space-y-3 mb-4">
                    <div className="text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Primary Focus:</span>
                      <p className="font-semibold text-brand-main-900 dark:text-white">
                        {service.problemStatement.headline}
                      </p>
                    </div>
                  </div>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {benefit.title}
                      </Badge>
                    ))}
                  </div>
                </BrandCardContent>
              </BrandCard>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-brand-main-900 dark:text-white">
                  Aspect
                </th>
                {services.map((service) => (
                  <th key={service.id} className="text-left py-4 px-4 font-semibold text-brand-main-900 dark:text-white">
                    {service.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-brand-main-900 dark:text-white">
                  Best For
                </td>
                {services.map((service) => (
                  <td key={service.id} className="py-4 px-4 text-gray-600 dark:text-gray-400 text-sm">
                    {service.heroSubtitle}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-brand-main-900 dark:text-white">
                  Team Size
                </td>
                {services.map((service) => (
                  <td key={service.id} className="py-4 px-4 text-gray-600 dark:text-gray-400 text-sm">
                    {service.metrics[0].value}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-brand-main-900 dark:text-white">
                  Deployment Time
                </td>
                {services.map((service) => {
                  const times: Record<string, string> = {
                    'trade-development': '2-4 weeks',
                    'agency-banking': '3-6 weeks',
                    'call-center': '1-2 weeks',
                    'branding': '1-3 weeks',
                  };
                  return (
                    <td key={service.id} className="py-4 px-4 text-gray-600 dark:text-gray-400 text-sm">
                      {times[service.id]}
                    </td>
                  );
                })}
              </tr>

              <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-brand-main-900 dark:text-white">
                  Key Benefit
                </td>
                {services.map((service) => (
                  <td key={service.id} className="py-4 px-4 text-gray-600 dark:text-gray-400 text-sm">
                    {service.keyBenefits[0]?.title}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-4 px-4 font-medium text-brand-main-900 dark:text-white">
                  ROI Focus
                </td>
                {services.map((service) => {
                  const rois: Record<string, string> = {
                    'trade-development': 'Revenue Growth',
                    'agency-banking': 'Market Expansion',
                    'call-center': 'Customer Retention',
                    'branding': 'Brand Awareness',
                  };
                  return (
                    <td key={service.id} className="py-4 px-4 text-gray-600 dark:text-gray-400 text-sm">
                      {rois[service.id]}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
