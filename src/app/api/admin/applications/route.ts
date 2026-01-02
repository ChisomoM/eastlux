import { NextRequest } from 'next/server';
import { applicationDb, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { requireAdmin } from '@/lib/auth-backend';

export async function GET(request: NextRequest) {
  const authResult = requireAdmin(request);
  if (authResult instanceof Response) return authResult;

  try {
    const applications = applicationDb.getAll();
    const stats = {
      total: applications.length,
      pending: applications.filter(a => a.status === 'pending').length,
      reviewed: applications.filter(a => a.status === 'reviewed').length,
      accepted: applications.filter(a => a.status === 'accepted').length,
      rejected: applications.filter(a => a.status === 'rejected').length,
    };

    return createSuccessResponse({
      applications,
      stats
    }, 'Applications retrieved successfully');
  } catch (error) {
    console.error('Get applications error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}