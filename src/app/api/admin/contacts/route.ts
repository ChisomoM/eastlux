import { NextRequest } from 'next/server';
import { contactDb, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { requireAdmin } from '@/lib/auth-backend';

export async function GET(request: NextRequest) {
  const authResult = requireAdmin(request);
  if (authResult instanceof Response) return authResult;

  try {
    const contacts = contactDb.getAll();
    const stats = {
      total: contacts.length,
      new: contacts.filter(c => c.status === 'new').length,
      read: contacts.filter(c => c.status === 'read').length,
      responded: contacts.filter(c => c.status === 'responded').length,
    };

    return createSuccessResponse({
      contacts,
      stats
    }, 'Contacts retrieved successfully');
  } catch (error) {
    console.error('Get contacts error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}