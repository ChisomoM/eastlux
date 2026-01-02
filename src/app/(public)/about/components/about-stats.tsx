'use client';

import * as React from 'react';
import { Users, Building2, MapPin, TrendingUp } from 'lucide-react';

// Reuse the counter hook from homepage
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * end));

            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

export default function AboutStats() {
  const stats = [
    { icon: Users, value: 200, suffix: '+', label: 'Trained DSAs', color: 'text-brand-secondary-500' },
    { icon: Building2, value: 40, suffix: '+', label: 'Clients Served', color: 'text-brand-main-600' },
    { icon: MapPin, value: 15, suffix: '+', label: 'Districts Covered', color: 'text-green-600' },
    { icon: TrendingUp, value: 85, suffix: '%', label: 'Client Retention', color: 'text-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-main-900 via-brand-main-800 to-brand-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.value);
            return (
              <div key={stat.label} ref={ref} className="text-center">
                <div className="mb-4">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto`} />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {count}
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
