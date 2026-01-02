import { NextRequest } from 'next/server';
import * as jwt from 'jsonwebtoken';
import { userDb } from './database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface JWTPayload {
  userId: string;
  email: string;
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export function getUserFromToken(token: string) {
  const payload = verifyToken(token);
  if (!payload) return null;

  return userDb.getById(payload.userId);
}

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}

export function requireAuth(request: NextRequest) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return new Response(JSON.stringify({
      data: null,
      message: 'No token provided',
      status: 1
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const user = getUserFromToken(token);
  if (!user) {
    return new Response(JSON.stringify({
      data: null,
      message: 'Invalid token',
      status: 1
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!user.is_active) {
    return new Response(JSON.stringify({
      data: null,
      message: 'Account is deactivated',
      status: 1
    }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return { user };
}

export function requireAdmin(request: NextRequest) {
  const authResult = requireAuth(request);
  if (authResult instanceof Response) return authResult;

  const { user } = authResult;
  if (user.role !== 'admin') {
    return new Response(JSON.stringify({
      data: null,
      message: 'Admin access required',
      status: 1
    }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return { user };
}