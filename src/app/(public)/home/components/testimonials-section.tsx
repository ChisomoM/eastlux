'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Easttlux transformed our agent network deployment. What used to take us 6 months now takes 6 weeks. Their field teams are professional, well-trained, and deliver results.",
    author: "Sarah Mwanza",
    title: "Head of Agency Banking",
    company: "First National Bank Zambia",
    industry: "Banking",
  },
  {
    quote: "We expanded to 3 new provinces in record time thanks to Easttlux. Their understanding of rural markets and local dynamics is unmatched. Our transaction volumes increased by 200%.",
    author: "James Banda",
    title: "Regional Manager",
    company: "MTN Mobile Money",
    industry: "Fintech",
  },
  {
    quote: "The call center services exceeded our expectations. Professional agents, excellent quality monitoring, and 95% SLA compliance. Easttlux is now our long-term partner.",
    author: "Patricia Lungu",
    title: "Customer Experience Director",
    company: "Madison Finance",
    industry: "Financial Services",
  },
  {
    quote: "Their project management expertise saved our product launch. From recruitment to training to deployment - everything was executed flawlessly. Our brand visibility increased significantly.",
    author: "Michael Phiri",
    title: "Marketing Director",
    company: "National Savings & Credit Bank",
    industry: "Banking",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const nextTestimonial = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="brand" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-section-title text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from organizations we've helped grow.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-brand-main-50 to-brand-secondary-50 dark:from-brand-main-950 dark:to-brand-secondary-950 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16 text-brand-main-900 dark:text-brand-main-100" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <Badge variant="accent" className="mb-2">
                {currentTestimonial.industry}
              </Badge>

              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.title}
                  </div>
                  <div className="text-sm font-medium text-brand-secondary-600">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'w-8 bg-brand-secondary-500'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
