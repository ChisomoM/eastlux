'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '../data/services';
import { BrandCard, BrandCardContent, BrandCardHeader, BrandCardTitle } from '@/components/ui/brand-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <div className="space-y-20">
      {/* Problem Statement */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-6">
                {service.problemStatement.headline}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {service.problemStatement.description}
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-brand-main-900 dark:text-white">
                  Common Challenges:
                </h3>
                {service.problemStatement.painPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-red-100 dark:bg-red-900">
                        <span className="text-red-600 dark:text-red-400 text-sm">✕</span>
                      </div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative hidden md:block">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/assets/images/service-challenge.jpg')`, // Replace with actual image path
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm text-white">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">
                      We solve these challenges with proven strategies and expert execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
              {service.approach.headline}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {service.approach.description}
            </p>
          </div>

          {/* Steps in Detail */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {service.approach.steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                {/* Step Indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-secondary-500 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  {idx < service.approach.steps.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-brand-secondary-300 to-transparent mt-4" />
                  )}
                </div>

                {/* Step Content */}
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-brand-main-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes & Benefits */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Outcomes */}
            <div>
              <h2 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-8">
                Key Outcomes
              </h2>
              <div className="space-y-4">
                {service.keyOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits Cards */}
            <div>
              <h2 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-8">
                Why Choose Us
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
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
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              See how we've helped businesses like yours achieve measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((study, idx) => (
              <BrandCard key={idx} hover>
                <BrandCardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <BrandCardTitle className="text-xl">
                        {study.clientName}
                      </BrandCardTitle>
                      <span className="inline-block mt-2 text-sm bg-brand-secondary-100 dark:bg-brand-secondary-900 text-brand-secondary-700 dark:text-brand-secondary-300 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </BrandCardHeader>
                <BrandCardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-main-900 dark:text-white mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-main-900 dark:text-white mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {study.solution}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                      Results
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {study.result}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {study.metrics.map((metric, midx) => (
                        <div key={midx} className="bg-green-50 dark:bg-green-950 rounded p-2">
                          <div className="text-lg font-bold text-green-700 dark:text-green-300">
                            {metric.value}
                          </div>
                          <div className="text-xs text-green-600 dark:text-green-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </BrandCardContent>
              </BrandCard>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Proven results across diverse industries and markets
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {service.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-lg bg-gradient-to-br from-brand-secondary-50 to-brand-secondary-100 dark:from-brand-secondary-950 dark:to-brand-secondary-900"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-secondary-600 dark:text-brand-secondary-400 mb-2">
                  {metric.label}
                </div>
                <div className="font-semibold text-brand-main-900 dark:text-white">
                  {metric.value}
                </div>
                {metric.description && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {metric.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-8 text-center">
              Complementary Services
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              {service.title} works even better when combined with our other services
            </p>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-brand-main-900 to-brand-secondary-900 rounded-lg p-12 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Let's discuss how {service.title} can drive growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="/contact">
                    Request a Proposal
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">
                    Talk to Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
