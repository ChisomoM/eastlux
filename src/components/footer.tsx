'use client';

import * as React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  services: [
    { name: 'Trade Development', href: '/services/trade-development' },
    { name: 'Agency Banking', href: '/services/agency-banking' },
    { name: 'Call Center', href: '/services/call-center' },
    { name: 'Project Management', href: '/services/project-management' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/clients' },
  ],
  contact: [
    { name: 'Head Office', href: '/contact' },
    { name: 'Regional Offices', href: '/contact#offices' },
    { name: '24/7 Support', href: '/contact' },
    { name: 'Emergency', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Compliance', href: '/compliance' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-brand-main-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-white">Easttlux</div>
              <div className="text-sm text-brand-secondary-300">Growing Zambia's Economy</div>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              We deploy, train, and manage field forces that drive financial inclusion and
              trade growth across Zambia.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-secondary-400" />
                <span className="text-gray-300">
                  Plot 1234, Independence Avenue<br />
                  Lusaka, Zambia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-secondary-400" />
                <a href="tel:+260211123456" className="text-gray-300 hover:text-brand-secondary-400 transition-colors">
                  +260 211 123 456
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-secondary-400" />
                <a href="mailto:info@easttlux.com" className="text-gray-300 hover:text-brand-secondary-400 transition-colors">
                  info@easttlux.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-secondary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-secondary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-secondary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with our latest news and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-secondary-400"
              />
              <Button
                type="submit"
                variant="accent"
                className="w-full"
                size="sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        {/* Social Links & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-secondary-400 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            {footerLinks.legal.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-brand-secondary-400 transition-colors"
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="text-gray-500">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Separator className="bg-white/10 my-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Easttlux Ventures Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}