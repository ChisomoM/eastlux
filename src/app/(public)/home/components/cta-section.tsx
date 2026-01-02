'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-section-title">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Let's discuss how our field force solutions can help you expand your reach,
            increase revenue, and achieve your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="xl"
              variant="default"
              className="bg-white text-brand-main-900 hover:bg-gray-100 shadow-lg"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Request Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services">
                <FileText className="mr-2 h-5 w-5" />
                View All Services
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-gray-200 mb-4">
              Or contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <a
                href="tel:+260211123456"
                className="flex items-center gap-2 hover:text-brand-secondary-300 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +260 211 123 456
              </a>
              <span className="hidden sm:block text-white/30">•</span>
              <a
                href="mailto:info@easttlux.com"
                className="flex items-center gap-2 hover:text-brand-secondary-300 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@easttlux.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
