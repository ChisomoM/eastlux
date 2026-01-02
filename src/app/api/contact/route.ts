import { NextRequest, NextResponse } from 'next/server';
import { contactDb, generateId, createSuccessResponse, createErrorResponse } from '@/lib/database';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, phone, service, message } = body;
    if (!name || !email || !phone || !service || !message) {
      return createErrorResponse('Missing required fields', 400);
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return createErrorResponse('Invalid email format', 400);
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return createErrorResponse('Invalid phone format', 400);
    }

    // Create contact in database
    const contactId = generateId();
    contactDb.create(
      contactId,
      name,
      email,
      phone,
      body.company || null,
      service,
      message
    );

    // TODO: Send email notification to admin
    console.log('New contact form submission:', {
      id: contactId,
      name,
      email,
      phone,
      company: body.company || 'N/A',
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return createSuccessResponse({
      contactId
    }, 'Your message has been received. We\'ll get back to you soon!');

  } catch (error) {
    console.error('Contact form error:', error);
    return createErrorResponse('Failed to process request', 500);
  }
}

// Handle unsupported methods
export async function GET() {
  return createErrorResponse('Method not allowed', 405);
}
