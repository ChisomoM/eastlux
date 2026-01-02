import * as React from 'react';
import { cn } from '@/lib/utils';

const BrandCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
    gradient?: boolean;
  }
>(({ className, hover = false, gradient = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300',
      hover && 'hover:shadow-xl hover:scale-[1.02] hover:border-brand-secondary-500/50',
      gradient && 'bg-brand-gradient text-white border-transparent',
      className
    )}
    {...props}
  />
));
BrandCard.displayName = 'BrandCard';

const BrandCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
BrandCardHeader.displayName = 'BrandCardHeader';

const BrandCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
BrandCardTitle.displayName = 'BrandCardTitle';

const BrandCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
BrandCardDescription.displayName = 'BrandCardDescription';

const BrandCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
BrandCardContent.displayName = 'BrandCardContent';

const BrandCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
BrandCardFooter.displayName = 'BrandCardFooter';

export {
  BrandCard,
  BrandCardHeader,
  BrandCardFooter,
  BrandCardTitle,
  BrandCardDescription,
  BrandCardContent,
};
