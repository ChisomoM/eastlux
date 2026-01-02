import { NextRequest } from 'next/server';
import { applicationDb, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { requireAdmin } from '@/lib/auth-backend';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authResult = requireAdmin(request);
  if (authResult instanceof Response) return authResult;

  try {
    const { id } = await params;
    const application = applicationDb.getById(id);
    if (!application) {
      return createErrorResponse('Application not found', 404);
    }

    return createSuccessResponse(application, 'Application retrieved successfully');
  } catch (error) {
    console.error('Get application error:', error);
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

    if (!status || !['pending', 'reviewing', 'interviewed', 'accepted', 'rejected'].includes(status)) {
      return createErrorResponse('Invalid status', 400);
    }

    const application = await applicationDb.updateStatus(id, status);
    if (!application) {
      return createErrorResponse('Application not found', 404);
    }

    return createSuccessResponse(application, 'Application updated successfully');
  } catch (error) {
    console.error('Update application error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}