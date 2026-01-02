import { userDb, generateId } from '../src/lib/database';
import bcrypt from 'bcryptjs';

async function initializeDatabase() {
  try {
    console.log('Initializing database...');

    // Check if admin user already exists
    const existingAdmin = userDb.getByEmail('admin@eastlux.com');

    if (!existingAdmin) {
      console.log('Creating admin user...');

      // Create admin user
      const adminId = generateId();
      const adminPassword = await bcrypt.hash('admin123', 10);

      userDb.create(
        adminId,
        'admin@eastlux.com',
        adminPassword,
        'Eastlux Admin',
        'admin'
      );

      console.log('Admin user created successfully!');
      console.log('Email: admin@eastlux.com');
      console.log('Password: admin123');
    } else {
      console.log('Admin user already exists');
    }

    console.log('Database initialization complete!');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

// Run initialization
initializeDatabase();