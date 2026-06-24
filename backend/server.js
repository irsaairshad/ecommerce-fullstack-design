const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.json({ message: 'Ecommerce API is running!' });
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://IrsaIrshad:12345@lab3cluster.aubkzpf.mongodb.net/ecommerce?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error('MongoDB Error:', err));