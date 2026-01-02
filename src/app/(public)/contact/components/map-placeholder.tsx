'use client';

import * as React from 'react';
import { MapPin } from 'lucide-react';

export default function MapPlaceholder() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-4">
            Our Location
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find us in the heart of Lusaka, Zambia
          </p>
        </div>

        {/* Map Placeholder - You'll implement this */}
        <div className="max-w-4xl mx-auto h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Interactive Map Coming Soon
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              (You'll implement the Zambia map here)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
