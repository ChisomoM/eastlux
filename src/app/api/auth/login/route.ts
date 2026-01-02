import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { userDb, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { generateToken } from '@/lib/auth-backend';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return createErrorResponse('Email and password are required', 400);
    }

    // Find user
    const user = userDb.getByEmail(email);
    if (!user) {
      return createErrorResponse('Invalid credentials', 401);
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return createErrorResponse('Invalid credentials', 401);
    }

    // Check if user is active
    if (!user.is_active) {
      return createErrorResponse('Account is deactivated', 403);
    }

    // Generate token
    const token = generateToken({ userId: user.id, email: user.email });

    // Return user data in the expected format for the frontend
    const userResponse = {
      id: user.id,
      email: user.email,
      first_name: user.name.split(' ')[0] || '',
      last_name: user.name.split(' ').slice(1).join(' ') || '',
      username: user.email,
      blocked: !user.is_active,
      status: user.is_active ? 1 : 0,
      is_superUser: user.role === 'admin',
      mobile: null,
      last_login_date: null,
      failed_attempts: 0,
      role_id: user.role === 'admin' ? 1 : 2,
    };

    return createSuccessResponse({
      user: userResponse,
      token
    }, 'Login successful');

  } catch (error) {
    console.error('Login error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}