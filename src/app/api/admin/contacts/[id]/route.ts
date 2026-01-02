import { NextRequest } from 'next/server';
import { contactDb, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { requireAdmin } from '@/lib/auth-backend';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authResult = requireAdmin(request);
  if (authResult instanceof Response) return authResult;

  try {
    const { id } = await params;
    const contact = contactDb.getById(id);
    if (!contact) {
      return createErrorResponse('Contact not found', 404);
    }

    return createSuccessResponse(contact, 'Contact retrieved successfully');
  } catch (error) {
    console.error('Get contact error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authResult = requireAdmin(request);
  if (authResult instanceof Response) return authResult;

  try {
    const { id } = await params;
    const { status } = await request.json();

    if (!status || !['new', 'read', 'responded'].includes(status)) {
      return createErrorResponse('Invalid status', 400);
    }

    const contact = await contactDb.updateStatus(id, status);
    if (!contact) {
      return createErrorResponse('Contact not found', 404);
    }

    return createSuccessResponse(contact, 'Contact updated successfully');
  } catch (error) {
    console.error('Update contact error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}