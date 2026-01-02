import { NextRequest } from 'next/server';
import { statsDb, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { requireAdmin } from '@/lib/auth-backend';

export async function GET(request: NextRequest) {
  const authResult = requireAdmin(request);
  if (authResult instanceof Response) return authResult;

  try {
    const contactStats = statsDb.getContactStats();
    const applicationStats = statsDb.getApplicationStats();

    return createSuccessResponse({
      contacts: contactStats,
      applications: applicationStats,
      summary: {
        totalContacts: contactStats.total,
        totalApplications: applicationStats.total,
        pendingItems: contactStats.new + applicationStats.pending
      }
    }, 'Dashboard stats retrieved successfully');
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}