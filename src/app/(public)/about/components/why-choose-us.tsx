'use client';

import * as React from 'react';
import { CheckCircle2, Users, Zap, Shield, TrendingUp, Award } from 'lucide-react';
import { BrandCard } from '@/components/ui/brand-card';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Trained & Certified DSAs',
      description: '200+ agents rigorously trained in customer service, compliance, and product knowledge.',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Average onboarding time of just 48 hours — get your field force active fast.',
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Full KYC/AML compliance and security protocols to protect your brand reputation.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '85% client retention rate and consistent performance across 40+ client engagements.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Ongoing training, performance monitoring, and quality control systems.',
    },
    {
      icon: CheckCircle2,
      title: 'End-to-End Management',
      description: 'From recruitment to training to deployment — we handle everything.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
            Why Choose Eastlux?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We don't just provide agents — we deliver strategic field force solutions that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <BrandCard key={reason.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-secondary-100 dark:bg-brand-secondary-900/20 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-brand-secondary-600 dark:text-brand-secondary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-main-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  );
}
