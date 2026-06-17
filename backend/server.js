require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/products'));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Ecommerce API is running!' });
});

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce_fullstack_design';

if (!mongoUri) {
  console.error('MongoDB Error: MONGO_URI is not defined in .env or environment variables.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error('MongoDB Error:', err));