'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-main-900 dark:text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how our field force solutions can help you reach more customers and drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="accent" asChild className="group">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button size="xl" variant="outline" asChild>
              <Link href="/services">
                <Phone className="mr-2 h-5 w-5" />
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
