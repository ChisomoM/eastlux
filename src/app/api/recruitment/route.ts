import { NextRequest, NextResponse } from 'next/server';
import { applicationDb, generateId, createSuccessResponse, createErrorResponse } from '@/lib/database';

interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  experience?: string;
  qualifications?: string;
  cv_url?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ApplicationFormData = await request.json();

    // Validate required fields
    const { name, email, phone } = body;
    if (!name || !email || !phone) {
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

    // Create application in database
    const applicationId = generateId();
    await applicationDb.create(
      applicationId,
      name,
      email,
      phone,
      body.experience || null,
      body.qualifications || null,
      body.cv_url || null
    );

    // TODO: Send confirmation email to applicant
    console.log('New DSA application submitted:', {
      id: applicationId,
      name,
      email,
      phone,
      experience: body.experience || 'N/A',
      qualifications: body.qualifications || 'N/A',
      cv_url: body.cv_url || 'N/A',
      timestamp: new Date().toISOString(),
    });

    return createSuccessResponse({
      applicationId
    }, 'Your application has been received. We\'ll get back to you soon!');

  } catch (error) {
    console.error('Application form error:', error);
    return createErrorResponse('Failed to process application', 500);
  }
}

// Handle unsupported methods
export async function GET() {
  return createErrorResponse('Method not allowed', 405);
}