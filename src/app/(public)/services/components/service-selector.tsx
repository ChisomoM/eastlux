'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { services } from '../data/services';
import { getIcon } from '../utils/icon-map';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { BrandCard, BrandCardContent, BrandCardHeader, BrandCardTitle } from '@/components/ui/brand-card';

export default function ServiceSelector() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Service Tabs */}
        <Tabs defaultValue={services[0].id} onValueChange={(id) => {
          const service = services.find(s => s.id === id);
          if (service) setSelectedService(service);
        }} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm lg:text-base">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Service Content Panels */}
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="space-y-12">
              {/* Problem Statement */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-4">
                    {service.problemStatement.headline}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {service.problemStatement.description}
                  </p>
                  <ul className="space-y-3">
                    {service.problemStatement.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary-500 flex-shrink-0 mt-2" />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary-50 to-brand-secondary-100 dark:from-brand-secondary-950 dark:to-brand-secondary-900 rounded-lg blur-xl" />
                  <div className="relative bg-brand-secondary-50 dark:bg-brand-secondary-950 rounded-lg p-8">
                    <div className="text-center">
                      {(() => {
                        const Icon = getIcon(service.icon);
                        return Icon ? (
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-brand-secondary-500 text-white mb-4">
                            <Icon className="w-8 h-8" />
                          </div>
                        ) : null;
                      })()}
                      <h4 className="text-xl font-bold text-brand-main-900 dark:text-white">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                        {service.heroSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h3 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-4">
                    {service.approach.headline}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {service.approach.description}
                  </p>
                </div>

                {/* Approach Steps */}
                <div className="grid md:grid-cols-5 gap-4">
                  {service.approach.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Connection Line */}
                      {idx < service.approach.steps.length - 1 && (
                        <div className="hidden md:block absolute left-[55px] top-16 w-[calc(100%-55px-20px)] h-0.5 bg-gradient-to-r from-brand-secondary-300 to-transparent" />
                      )}

                      {/* Step Card */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-secondary-500 text-white flex items-center justify-center font-bold text-sm">
                            {step.number}
                          </div>
                        </div>
                        <div className="ml-0 md:ml-0">
                          <h4 className="font-bold text-brand-main-900 dark:text-white text-sm mb-2">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-main-900 dark:text-white mb-6">
                    Key Outcomes
                  </h3>
                  <ul className="space-y-4">
                    {service.keyOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary-500 flex-shrink-0 mt-2" />
                        <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="grid gap-4">
                  {service.keyBenefits.map((benefit, idx) => (
                    <BrandCard key={idx} className="group">
                      <BrandCardHeader className="pb-3">
                        <BrandCardTitle className="text-lg group-hover:text-brand-secondary-600 transition-colors">
                          {benefit.title}
                        </BrandCardTitle>
                      </BrandCardHeader>
                      <BrandCardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {benefit.description}
                        </p>
                      </BrandCardContent>
                    </BrandCard>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-main-50 to-brand-secondary-50 dark:from-brand-main-950 dark:to-brand-secondary-950 rounded-lg p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-main-900 dark:text-white mb-4">
                  Ready to get started with {service.title}?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve your business goals with our proven approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="brand" size="lg" asChild>
                    <Link href={`/services/${service.slug}`}>
                      View Full Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">
                      Request Proposal
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
