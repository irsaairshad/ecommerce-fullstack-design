const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const MONGO_URI = 'mongodb://127.0.0.1:27017/ecommerce_fullstack_design';

async function createAdmin() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected!');

    await User.deleteMany({ email: 'admin@ecommerce.com' });

    const hashed = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin',
      email: 'admin@ecommerce.com',
      password: hashed,
      role: 'admin'
    });

    console.log('Admin created successfully!');
    console.log('Email: admin@ecommerce.com');
    console.log('Password: admin123');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error:', err);
  }
}

createAdmin();