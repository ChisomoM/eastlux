import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

// Define database schema
interface User {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  role: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  experience?: string;
  qualifications?: string;
  cv_url?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Data {
  users: User[];
  contacts: Contact[];
  applications: Application[];
}

// Initialize database
const file = join(process.cwd(), 'data', 'db.json');
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter, {
  users: [],
  contacts: [],
  applications: []
});

// Read database synchronously
db.read();

// Initialize admin user if database is empty
const initializeAdminUser = () => {
  if (db.data.users.length === 0) {
    console.log('Initializing database with admin user...');

    // Use bcrypt synchronously for initialization
    const bcrypt = require('bcryptjs');
    const adminPassword = bcrypt.hashSync('admin123', 10);
    const adminId = generateId();

    db.data.users.push({
      id: adminId,
      email: 'admin@eastlux.com',
      password_hash: adminPassword,
      name: 'Eastlux Admin',
      role: 'admin',
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    db.write();
    console.log('Admin user created successfully!');
    console.log('Email: admin@eastlux.com');
    console.log('Password: admin123');
  }
};

// Initialize admin user synchronously
initializeAdminUser();

// Helper functions
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function createSuccessResponse(data: any, message: string = "Success") {
  return new Response(JSON.stringify({
    data,
    message,
    status: 0
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export function createErrorResponse(message: string, status: number = 400) {
  return new Response(JSON.stringify({
    data: null,
    message,
    status: 1
  }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

// User functions
export const userDb = {
  create: async (id: string, email: string, passwordHash: string, name: string, role: string = 'user') => {
    const user: User = {
      id,
      email,
      password_hash: passwordHash,
      name,
      role,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    db.data.users.push(user);
    await db.write();
    return user;
  },

  getByEmail: (email: string) => {
    return db.data.users.find(user => user.email === email);
  },

  getById: (id: string) => {
    return db.data.users.find(user => user.id === id);
  },

  update: async (id: string, name: string) => {
    const user = db.data.users.find(u => u.id === id);
    if (user) {
      user.name = name;
      user.updated_at = new Date().toISOString();
      await db.write();
    }
    return user;
  },
};

// Contact functions
export const contactDb = {
  create: async (id: string, name: string, email: string, phone: string, company: string | null, service: string, message: string) => {
    const contact: Contact = {
      id,
      name,
      email,
      phone,
      company: company || undefined,
      service,
      message,
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    db.data.contacts.push(contact);
    await db.write();
    return contact;
  },

  getAll: () => {
    return db.data.contacts;
  },

  getById: (id: string) => {
    return db.data.contacts.find(contact => contact.id === id);
  },

  updateStatus: async (id: string, status: string) => {
    const contact = db.data.contacts.find(c => c.id === id);
    if (contact) {
      contact.status = status;
      contact.updated_at = new Date().toISOString();
      await db.write();
    }
    return contact;
  },

  getByStatus: (status: string) => {
    return db.data.contacts.filter(contact => contact.status === status);
  },
};

// Application functions
export const applicationDb = {
  create: async (id: string, name: string, email: string, phone: string, experience: string | null, qualifications: string | null, cvUrl: string | null) => {
    const application: Application = {
      id,
      name,
      email,
      phone,
      experience: experience || undefined,
      qualifications: qualifications || undefined,
      cv_url: cvUrl || undefined,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    db.data.applications.push(application);
    await db.write();
    return application;
  },

  getAll: () => {
    return db.data.applications;
  },

  getById: (id: string) => {
    return db.data.applications.find(app => app.id === id);
  },

  updateStatus: async (id: string, status: string) => {
    const application = db.data.applications.find(a => a.id === id);
    if (application) {
      application.status = status;
      application.updated_at = new Date().toISOString();
      await db.write();
    }
    return application;
  },

  getByStatus: (status: string) => {
    return db.data.applications.filter(app => app.status === status);
  },
};

// Stats functions for admin dashboard
export const statsDb = {
  getContactStats: () => {
    const contacts = db.data.contacts;
    return {
      total: contacts.length,
      new: contacts.filter(c => c.status === 'new').length,
      read: contacts.filter(c => c.status === 'read').length,
      responded: contacts.filter(c => c.status === 'responded').length,
    };
  },

  getApplicationStats: () => {
    const applications = db.data.applications;
    return {
      total: applications.length,
      pending: applications.filter(a => a.status === 'pending').length,
      reviewed: applications.filter(a => a.status === 'reviewed').length,
      accepted: applications.filter(a => a.status === 'accepted').length,
      rejected: applications.filter(a => a.status === 'rejected').length,
    };
  },
};