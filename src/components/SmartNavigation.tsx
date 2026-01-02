'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, TrendingUp, Landmark, Phone, Palette, Clipboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const services = [
  {
    title: 'Trade Development',
    href: '/services/trade-development',
    description: 'We build and manage field forces that drive adoption',
    icon: TrendingUp,
  },
  {
    title: 'Agency Banking',
    href: '/services/agency-banking',
    description: 'Deploy high-performing agent networks',
    icon: Landmark,
  },
  {
    title: 'Call Center',
    href: '/services/call-center',
    description: 'Customer support and campaign management',
    icon: Phone,
  },
  {
    title: 'Branding & Marketing',
    href: '/services/branding',
    description: 'Build brand awareness and market presence',
    icon: Palette,
  },
  {
    title: 'Project Management',
    href: '/services/project-management',
    description: 'End-to-end project execution',
    icon: Clipboard,
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  // { name: 'Presence', href: '/presence' },
  // { name: 'Clients', href: '/clients' },
  // { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function SmartNavigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        // isScrolled
        //   ? 
          'bg-background/95 backdrop-blur-md shadow-md py-3'
          // : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex items-center space-x-3">
            <Image
              src="/logos/logo.png"
              alt="Company logo"
              width={40}
              // quality={100}
              height={40}
              priority
              className="h-10 w-auto"
            />
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            'text-sm font-medium transition-colors hover:text-brand-secondary-500',
                            pathname.startsWith(item.href) && 'text-brand-secondary-500'
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                            {services.map((service) => (
                              <li key={service.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={service.href}
                                    className={cn(
                                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                    )}
                                  >
                                    <div className="flex items-center gap-2">
                                      {React.createElement(service.icon, {
                                        className: 'h-6 w-6',
                                        'aria-hidden': true,
                                      })}
                                      <div className="text-sm font-medium leading-none">
                                        {service.title}
                                      </div>
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {service.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'text-sm font-medium transition-colors hover:text-brand-secondary-500 px-3 py-2',
                          pathname === item.href && 'text-brand-secondary-500'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle />

            <Button variant="brand" size="default">
              Request Proposal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <div className="text-base font-medium text-foreground mb-2">
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-2">
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-brand-secondary-500 transition-colors py-2"
                              >
                                <div className="flex items-center gap-2">
                                  {React.createElement(service.icon, {
                                    className: 'h-5 w-5',
                                    'aria-hidden': true,
                                  })}
                                  {service.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'block text-base font-medium transition-colors hover:text-brand-secondary-500 py-2',
                            pathname === item.href && 'text-brand-secondary-500'
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button variant="brand" size="lg" className="w-full mt-4">
                    Request Proposal
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted">
            {/* eslint-disable-next-line react/style-prop-object */}
            <div
              className="h-full bg-brand-gradient transition-all duration-300"
              style={{
                width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
              }}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
