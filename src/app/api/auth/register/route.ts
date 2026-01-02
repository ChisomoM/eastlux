import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { userDb, generateId, createSuccessResponse, createErrorResponse } from '@/lib/database';
import { generateToken } from '@/lib/auth-backend';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return createErrorResponse('Email, password, and name are required', 400);
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return createErrorResponse('Invalid email format', 400);
    }

    // Password validation
    if (password.length < 6) {
      return createErrorResponse('Password must be at least 6 characters long', 400);
    }

    // Check if user already exists
    const existingUser = userDb.getByEmail(email);
    if (existingUser) {
      return createErrorResponse('User already exists', 409);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const userId = generateId();
    userDb.create(userId, email, hashedPassword, name, 'user');

    // Generate token
    const token = generateToken({ userId, email });

    // Get user data for response in expected format
    const user = userDb.getById(userId);
    if (!user) {
      return createErrorResponse('User creation failed', 500);
    }

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
    }, 'User registered successfully');

  } catch (error) {
    console.error('Registration error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}