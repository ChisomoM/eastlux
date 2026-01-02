'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const services = [
    'Trade Development',
    'Agency Banking',
    'Call Center',
    'Project Management',
  ];

  const [currentService, setCurrentService] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(28,30,78,0.6), rgba(0,0,0,0.10)), url('/Hero-image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(18,163,220,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(18,163,220,0.2),transparent)]" />
      </div> */}

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-hero-title text-white leading-tight">
                Grow Your Brand.{' '}
                <span className="bg-gradient-to-r from-brand-secondary-400 to-brand-secondary-300 bg-clip-text text-transparent">
                  Scale Your Revenue.
                </span>
              </h1>
              
              {/* Animated Service Tags */}
              <div className="flex items-center gap-3 text-[16px] text-gray-200 flex-wrap">
                {services.map((service, index) => (
                  <React.Fragment key={service}>
                    <span
                    className='text-gray-300'>{service}</span>
                    {index < services.length - 1 && (
                      <span className="text-brand-secondary-500">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-lg text-white max-w-xl">
                We deploy, train, and manage field forces that drive financial inclusion
                and trade growth across Zambia.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="accent"
                className="group"
                asChild
              >
                <Link href="/contact">
                  Request Proposal
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* <Button
                size="xl"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Overview
              </Button> */}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-white">DSAs Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white">Districts Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-white">Provinces</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="relative lg:block animate-slide-in-right">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              {/* <div className="absolute inset-0 bg-brand-gradient opacity-10 rounded-full blur-3xl animate-pulse" /> */}
              
              {/* Stats Cards */}
              {/* <div className="relative grid grid-cols-2 gap-4 h-full items-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-brand-secondary-400 mb-2">40+</div>
                  <div className="text-sm text-white">Clients Served</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-brand-secondary-400 mb-2">85%</div>
                  <div className="text-sm text-white">Client Retention</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-brand-secondary-400 mb-2">200+</div>
                  <div className="text-sm text-white">Field Agents</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-brand-secondary-400 mb-2">48h</div>
                  <div className="text-sm text-white">Avg. Onboarding</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}