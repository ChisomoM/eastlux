'use client';

import * as React from 'react';
import { Users, MapPin, Briefcase, TrendingUp } from 'lucide-react';

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ end, suffix = '', duration = 2000 }: StatCounterProps) {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-stats-number font-bold">
      {count}{suffix}
    </div>
  );
}

const stats = [
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Direct Sales Agents',
    description: 'Trained field force nationwide',
  },
  {
    icon: MapPin,
    value: 15,
    suffix: '+',
    label: 'Districts Covered',
    description: 'Across 5 provinces',
  },
  {
    icon: Briefcase,
    value: 40,
    suffix: '+',
    label: 'Active Clients',
    description: 'Banks, fintechs, and corporates',
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: '%',
    label: 'Client Retention',
    description: 'Year-over-year growth',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-brand-main-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title mb-4">
            Trusted Across Zambia
          </h2>
          <p className="text-lg text-gray-300">
            Our track record speaks for itself. We've helped dozens of organizations
            expand their reach and grow their revenue.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-500/20 mb-4 group-hover:bg-brand-secondary-500/20 transition-colors">
                  <Icon className="h-8 w-8 text-brand-secondary-400" />
                </div>
                <StatCounter end={stat.value} suffix={stat.suffix} />
                <div className="text-stats-label text-brand-secondary-300 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Operating in Copperbelt, Lusaka, Eastern, Central, and Southern Provinces
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
