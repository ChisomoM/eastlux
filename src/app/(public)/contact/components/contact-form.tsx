'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BrandCard } from '@/components/ui/brand-card';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
 
  };

  return (
    <BrandCard className="p-8">
      <h2 className="text-3xl font-bold text-brand-main-900 dark:text-white mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+260 XXX XXX XXX"
            {...register('phone', { required: 'Phone number is required' })}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            type="text"
            placeholder="Your Company Ltd."
            {...register('company')}
          />
        </div>

        {/* Service Interest */}
        <div>
          <Label htmlFor="service">Service Interest *</Label>
          <Select
            onValueChange={(value) => setValue('service', value)}
            {...register('service', { required: 'Please select a service' })}
          >
            <SelectTrigger className={errors.service ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trade-development">Trade Development</SelectItem>
              <SelectItem value="agency-banking">Agency Banking</SelectItem>
              <SelectItem value="call-center">Call Center Services</SelectItem>
              <SelectItem value="project-management">Project Management</SelectItem>
              <SelectItem value="other">Other / General Inquiry</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us about your needs..."
            {...register('message', { required: 'Message is required' })}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          variant="accent"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </BrandCard>
  );
}
