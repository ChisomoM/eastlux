'use client';

import * as React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { BrandCard } from '@/components/ui/brand-card';

export default function MissionVisionValues() {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deploy and manage world-class field forces that drive financial inclusion, expand market reach, and deliver measurable business outcomes for our clients.',
      color: 'text-brand-secondary-500',
      bgColor: 'bg-brand-secondary-100 dark:bg-brand-secondary-900/20',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be Zambia\'s leading field force management partner, recognized for excellence in agent deployment, training, and performance optimization.',
      color: 'text-brand-main-700',
      bgColor: 'bg-brand-main-100 dark:bg-brand-main-900/20',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity • Excellence • Innovation • Accountability • Collaboration • Impact',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our mission, vision, and values guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <BrandCard key={item.title} className="p-8 text-center hover:scale-105 transition-transform">
              <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-brand-main-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  );
}
