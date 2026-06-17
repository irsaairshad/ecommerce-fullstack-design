require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce_fullstack_design';
const products = [

  {
    name: "Canon EOS 2000, black 10x zoom",
    price: 998.00,
    oldPrice: 1128.00,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    description: "Professional DSLR camera with 10x optical zoom, 24.1MP sensor, Full HD video recording, built-in Wi-Fi and NFC connectivity for easy sharing.",
    category: "Electronics",
    stock: 15,
    rating: 4,
    reviews: 32,
    shipping: "Free Shipping"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: 998.00,
    oldPrice: 1128.00,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    description: "Capture stunning 4K60 video and 12MP photos. Features voice control, 2-inch touch display, and waterproof up to 33ft without a housing.",
    category: "Electronics",
    stock: 20,
    rating: 4,
    reviews: 154,
    shipping: "Free Shipping"
  },
  {
    name: "Smart Watch Series 6 - Space Gray",
    price: 450.00,
    oldPrice: 550.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Advanced smartwatch with health monitoring, GPS tracking, always-on display, and up to 18 hours battery life.",
    category: "Electronics",
    stock: 30,
    rating: 5,
    reviews: 89,
    shipping: "Free Shipping"
  },
  {
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 280.00,
    oldPrice: 350.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Industry-leading noise canceling headphones with 30-hour battery life, touch controls, and multipoint connection.",
    category: "Electronics",
    stock: 25,
    rating: 5,
    reviews: 320,
    shipping: "Free Shipping"
  },
  {
    name: "MacBook Pro 14-inch Laptop",
    price: 1999.00,
    oldPrice: 2299.00,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR display, up to 18 hours battery life.",
    category: "Computers",
    stock: 10,
    rating: 5,
    reviews: 210,
    shipping: "Free Shipping"
  },
  {
    name: "iPhone 14 Pro Max 256GB",
    price: 1199.00,
    oldPrice: 1399.00,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "48MP camera system, Dynamic Island, Always-On display, A16 Bionic chip, and emergency SOS via satellite.",
    category: "Smartphones",
    stock: 18,
    rating: 4,
    reviews: 540,
    shipping: "Free Shipping"
  },
  {
    name: "Soft Comfort Chair - Beige",
    price: 19.00,
    oldPrice: 29.00,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    description: "Comfortable modern chair perfect for home and office. Ergonomic design with soft cushioning.",
    category: "Furniture",
    stock: 50,
    rating: 4,
    reviews: 67,
    shipping: "Free Shipping"
  },
  {
    name: "Modern Sofa & Chair Set",
    price: 299.00,
    oldPrice: 399.00,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400",
    description: "Elegant sofa and chair set for your living room. Premium fabric, durable frame, modern design.",
    category: "Furniture",
    stock: 8,
    rating: 4,
    reviews: 43,
    shipping: "Free Shipping"
  },
  {
    name: "Kitchen Mixer Professional",
    price: 100.00,
    oldPrice: 149.00,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    description: "Professional stand mixer with 10 speed settings, 5-quart stainless steel bowl, and multiple attachments.",
    category: "Kitchen",
    stock: 22,
    rating: 4,
    reviews: 88,
    shipping: "Free Shipping"
  },
  {
    name: "T-Shirt with Multiple Colors for Men",
    price: 10.30,
    oldPrice: 15.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium quality cotton t-shirt available in multiple colors. Comfortable fit, durable fabric, perfect for everyday wear.",
    category: "Clothes",
    stock: 100,
    rating: 4,
    reviews: 230,
    shipping: "Free Shipping"
  },
  {
    name: "Casual Brown Jacket",
    price: 34.00,
    oldPrice: 49.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    description: "Stylish casual brown jacket for men. Perfect for autumn and winter seasons. Warm and comfortable.",
    category: "Clothes",
    stock: 35,
    rating: 4,
    reviews: 112,
    shipping: "Free Shipping"
  },
  {
    name: "Leather Wallet Premium",
    price: 29.00,
    oldPrice: 45.00,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    description: "Genuine leather wallet with multiple card slots, bill compartment, and RFID blocking technology.",
    category: "Accessories",
    stock: 60,
    rating: 5,
    reviews: 189,
    shipping: "Free Shipping"
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected!');

    await Product.deleteMany({});
    console.log('Old products deleted!');

    await Product.insertMany(products);
    console.log('Sample products inserted!');

    mongoose.connection.close();
    console.log('Done! Database seeded successfully.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

seedDB();