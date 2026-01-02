'use client';

import * as React from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Zanaco Bank', logo: '/client_logos/zanaco.png' },
  { name: 'First National Bank', logo: '/client_logos/fnb.png' },
  { name: 'MTN Zambia', logo: '/client_logos/mtn.png' },
  { name: 'Airtel Money', logo: '/client_logos/airtel.png' },
  { name: 'National Savings', logo: '/client_logos/natsave.png' },
  { name: 'Madison Finance', logo: '/client_logos/madison.png' },
];

export default function ClientLogos() {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section className="py-16 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Leading Organizations
        </h3>

        {/* Scrolling Logos */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-12 ${isPaused ? '' : 'animate-scroll'}`}
            style={{
              width: 'fit-content',
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[150px] h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground/60">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`${client.name}-duplicate-${index}`}
                className="flex items-center justify-center min-w-[150px] h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground/60">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
