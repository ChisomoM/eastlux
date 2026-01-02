'use client';

import * as React from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter } from 'lucide-react';
import { BrandCard } from '@/components/ui/brand-card';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['123 Cairo Road', 'Lusaka, Zambia'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+260 123 456 789', '+260 987 654 321'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@eastlux.co.zm', 'sales@eastlux.co.zm'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div className="space-y-6">
      <BrandCard className="p-8">
        <h2 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-6">
          Contact Information
        </h2>

        <div className="space-y-6">
          {contactDetails.map((item) => (
            <div key={item.title} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-secondary-100 dark:bg-brand-secondary-900/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-secondary-600 dark:text-brand-secondary-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-main-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BrandCard>

      {/* Social Links */}
      <BrandCard className="p-8">
        <h3 className="text-xl font-bold text-brand-main-900 dark:text-white mb-4">
          Follow Us
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-brand-main-100 dark:bg-brand-main-900/20 rounded-lg flex items-center justify-center hover:bg-brand-secondary-100 dark:hover:bg-brand-secondary-900/20 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-brand-main-700 dark:text-brand-main-300" />
            </a>
          ))}
        </div>
      </BrandCard>

      {/* Quick Info */}
      <BrandCard className="p-6 bg-gradient-to-r from-brand-main-900 to-brand-secondary-900">
        <p className="text-white text-sm leading-relaxed">
          <strong>Looking to join our team?</strong><br />
          We're always seeking talented DSAs. Visit our{' '}
          <a href="/careers" className="underline hover:text-brand-secondary-300">
            Careers page
          </a>{' '}
          to learn more.
        </p>
      </BrandCard>
    </div>
  );
}
