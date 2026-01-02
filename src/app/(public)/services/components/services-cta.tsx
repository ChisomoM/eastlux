'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-brand-main-900 to-brand-secondary-900 rounded-lg p-12 md:p-16 text-white text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss which service is right for your needs and how we can help you achieve
              measurable growth.
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Contact Options Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Call */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-secondary-100 dark:bg-brand-secondary-900 text-brand-secondary-600 dark:text-brand-secondary-400 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-brand-main-900 dark:text-white mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Speak directly with our team for immediate assistance
              </p>
              <a href="tel:+260123456789" className="text-brand-secondary-600 dark:text-brand-secondary-400 font-semibold hover:underline text-sm">
                +260 1 234 567
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-secondary-100 dark:bg-brand-secondary-900 text-brand-secondary-600 dark:text-brand-secondary-400 mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-brand-main-900 dark:text-white mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Send us your inquiry and we'll respond within 24 hours
              </p>
              <a href="mailto:info@eastlux.com" className="text-brand-secondary-600 dark:text-brand-secondary-400 font-semibold hover:underline text-sm">
                info@eastlux.com
              </a>
            </div>

            {/* Contact Form */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-secondary-100 dark:bg-brand-secondary-900 text-brand-secondary-600 dark:text-brand-secondary-400 mb-4">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-brand-main-900 dark:text-white mb-2">
                Contact Form
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Fill out our contact form to start the conversation
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact" className="text-brand-secondary-600 dark:text-brand-secondary-400">
                  Go to Form →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
