'use client';

import * as React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-main-900 via-brand-main-800 to-brand-secondary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(18,163,220,0.3),transparent)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-brand-secondary-400 to-brand-secondary-300 bg-clip-text text-transparent">
              Grow Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-200">
            Ready to scale your business? Get in touch to discuss your field force needs.
          </p>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="mailto:info@eastlux.co.zm"
              className="inline-flex items-center gap-2 text-brand-secondary-300 hover:text-brand-secondary-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@eastlux.co.zm</span>
            </a>
            <a
              href="tel:+260123456789"
              className="inline-flex items-center gap-2 text-brand-secondary-300 hover:text-brand-secondary-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+260 123 456 789</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
