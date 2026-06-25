require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');
const Product = require('../models/Product');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce';

const products = [
  // ELECTRONICS
  {
    name: "Canon EOS 2000, black 10x zoom",
    price: 998.00, oldPrice: 1128.00,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    description: "Professional DSLR camera with 10x optical zoom, 24.1MP sensor, Full HD video recording.",
    category: "Electronics", stock: 15, rating: 4, reviews: 32, shipping: "Free Shipping"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: 998.00, oldPrice: 1128.00,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    description: "Capture stunning 4K60 video and 12MP photos. Voice control, waterproof up to 33ft.",
    category: "Electronics", stock: 20, rating: 4, reviews: 154, shipping: "Free Shipping"
  },
  {
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 280.00, oldPrice: 350.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Industry-leading noise canceling headphones with 30-hour battery life.",
    category: "Electronics", stock: 25, rating: 5, reviews: 320, shipping: "Free Shipping"
  },
  {
    name: "Smart Watch Series 6 - Space Gray",
    price: 450.00, oldPrice: 550.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Advanced smartwatch with health monitoring, GPS tracking, always-on display.",
    category: "Electronics", stock: 30, rating: 5, reviews: 89, shipping: "Free Shipping"
  },
  {
    name: "Canon Camera EOS Black 100x zoom",
    price: 599.00, oldPrice: 750.00,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    description: "Advanced Canon camera with 100x zoom capability for professional photography.",
    category: "Electronics", stock: 12, rating: 4, reviews: 67, shipping: "Free Shipping"
  },
  {
    name: "Bluetooth Gaming Headset - Blue",
    price: 89.00, oldPrice: 120.00,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400",
    description: "Professional gaming headset with surround sound and noise-canceling microphone.",
    category: "Electronics", stock: 40, rating: 4, reviews: 210, shipping: "Free Shipping"
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    price: 1199.00, oldPrice: 1399.00,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "200MP camera, S Pen included, 5000mAh battery, Snapdragon 8 Gen 2 processor.",
    category: "Smartphones", stock: 18, rating: 5, reviews: 445, shipping: "Free Shipping"
  },
  {
    name: "iPhone 14 Pro Max 256GB",
    price: 1099.00, oldPrice: 1299.00,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400",
    description: "48MP camera system, Dynamic Island, Always-On display, A16 Bionic chip.",
    category: "Smartphones", stock: 22, rating: 5, reviews: 540, shipping: "Free Shipping"
  },
  {
    name: "Xiaomi Redmi Note 12 Pro",
    price: 299.00, oldPrice: 399.00,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "200MP camera, 5000mAh battery, 67W fast charging, AMOLED display.",
    category: "Smartphones", stock: 35, rating: 4, reviews: 289, shipping: "Free Shipping"
  },
  // COMPUTERS
  {
    name: "MacBook Pro 14-inch M2",
    price: 1999.00, oldPrice: 2299.00,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR display.",
    category: "Computers", stock: 10, rating: 5, reviews: 210, shipping: "Free Shipping"
  },
  {
    name: "Dell XPS 15 Laptop",
    price: 1599.00, oldPrice: 1899.00,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "Intel Core i7, 16GB RAM, 512GB SSD, 4K OLED touch display.",
    category: "Computers", stock: 8, rating: 4, reviews: 156, shipping: "Free Shipping"
  },
  {
    name: "HP Pavilion Gaming Desktop",
    price: 899.00, oldPrice: 1099.00,
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400",
    description: "Intel Core i5, RTX 3060, 16GB RAM, 1TB SSD gaming desktop.",
    category: "Computers", stock: 15, rating: 4, reviews: 98, shipping: "Free Shipping"
  },
  // FURNITURE
  {
    name: "Soft Comfort Chair - Beige",
    price: 19.00, oldPrice: 29.00,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    description: "Comfortable modern chair perfect for home and office. Ergonomic design.",
    category: "Furniture", stock: 50, rating: 4, reviews: 67, shipping: "Free Shipping"
  },
  {
    name: "Modern Sofa & Chair Set",
    price: 299.00, oldPrice: 399.00,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400",
    description: "Elegant sofa and chair set for your living room. Premium fabric, durable frame.",
    category: "Furniture", stock: 8, rating: 4, reviews: 43, shipping: "Free Shipping"
  },
  {
    name: "Modern Coffee Table - Oak",
    price: 149.00, oldPrice: 199.00,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    description: "Solid oak coffee table with minimalist design, perfect for modern living rooms.",
    category: "Furniture", stock: 20, rating: 4, reviews: 55, shipping: "Free Shipping"
  },
  {
    name: "Ergonomic Office Chair",
    price: 259.00, oldPrice: 329.00,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400",
    description: "Adjustable lumbar support, breathable mesh back, armrests for all day comfort.",
    category: "Furniture", stock: 30, rating: 5, reviews: 187, shipping: "Free Shipping"
  },
  // KITCHEN
  {
    name: "Kitchen Mixer Professional",
    price: 100.00, oldPrice: 149.00,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    description: "Professional stand mixer with 10 speed settings, 5-quart stainless steel bowl.",
    category: "Kitchen", stock: 22, rating: 4, reviews: 88, shipping: "Free Shipping"
  },
  {
    name: "Electric Kettle 1.7L",
    price: 39.00, oldPrice: 59.00,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
    description: "Fast boiling electric kettle with temperature control and auto shut-off.",
    category: "Kitchen", stock: 45, rating: 4, reviews: 134, shipping: "Free Shipping"
  },
  {
    name: "Blender Pro 2000W",
    price: 79.00, oldPrice: 99.00,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
    description: "High-power blender for smoothies, soups, and more. 2000W motor, BPA-free jar.",
    category: "Kitchen", stock: 33, rating: 4, reviews: 201, shipping: "Free Shipping"
  },
  {
    name: "Coffee Maker Deluxe",
    price: 89.00, oldPrice: 119.00,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
    description: "12-cup programmable coffee maker with built-in grinder and thermal carafe.",
    category: "Kitchen", stock: 28, rating: 5, reviews: 156, shipping: "Free Shipping"
  },
  {
    name: "Non-Stick Cookware Set 10pc",
    price: 129.00, oldPrice: 169.00,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
    description: "10-piece non-stick cookware set with glass lids, dishwasher safe.",
    category: "Kitchen", stock: 18, rating: 4, reviews: 223, shipping: "Free Shipping"
  },
  // CLOTHES
  {
    name: "T-Shirt with Multiple Colors for Men",
    price: 10.30, oldPrice: 15.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium quality cotton t-shirt available in multiple colors. Comfortable fit.",
    category: "Clothes", stock: 100, rating: 4, reviews: 230, shipping: "Free Shipping"
  },
  {
    name: "Casual Brown Jacket Men",
    price: 34.00, oldPrice: 49.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    description: "Stylish casual brown jacket for men. Perfect for autumn and winter seasons.",
    category: "Clothes", stock: 35, rating: 4, reviews: 112, shipping: "Free Shipping"
  },
  {
    name: "Blue Denim Jeans Slim Fit",
    price: 45.00, oldPrice: 65.00,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    description: "Classic slim fit blue denim jeans. Comfortable stretch fabric, multiple sizes.",
    category: "Clothes", stock: 60, rating: 4, reviews: 189, shipping: "Free Shipping"
  },
  {
    name: "Women Summer Dress Floral",
    price: 29.00, oldPrice: 45.00,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    description: "Beautiful floral summer dress for women. Lightweight, breathable fabric.",
    category: "Clothes", stock: 55, rating: 5, reviews: 267, shipping: "Free Shipping"
  },
  {
    name: "Men Formal Suit Navy Blue",
    price: 199.00, oldPrice: 279.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_zFOEjgUGuefP2A5ipcjy4nlxYvZIrhsKQ&s",
    description: "Elegant navy blue formal suit. Perfect for business meetings and formal events.",
    category: "Clothes", stock: 20, rating: 5, reviews: 89, shipping: "Free Shipping"
  },
  // ACCESSORIES
  {
    name: "Leather Wallet Premium",
    price: 29.00, oldPrice: 45.00,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    description: "Genuine leather wallet with multiple card slots and RFID blocking technology.",
    category: "Accessories", stock: 60, rating: 5, reviews: 189, shipping: "Free Shipping"
  },
  {
    name: "Jeans Bag for Travel",
    price: 34.00, oldPrice: 49.00,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    description: "Durable travel bag made from premium denim. Multiple compartments, waterproof.",
    category: "Accessories", stock: 40, rating: 4, reviews: 134, shipping: "Free Shipping"
  },
  {
    name: "Sunglasses UV400 Protection",
    price: 49.00, oldPrice: 79.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    description: "Stylish sunglasses with UV400 protection. Lightweight frame, anti-scratch lens.",
    category: "Accessories", stock: 75, rating: 4, reviews: 156, shipping: "Free Shipping"
  },
  {
    name: "Sports Running Shoes Nike",
    price: 89.00, oldPrice: 120.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Lightweight running shoes with air cushion sole. Available in multiple colors.",
    category: "Accessories", stock: 45, rating: 5, reviews: 342, shipping: "Free Shipping"
  },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected!');
    await Product.deleteMany({});
    console.log('Old products deleted!');
    await Product.insertMany(products);
    console.log(`${products.length} products inserted!`);
    mongoose.connection.close();
    console.log('Done! Database seeded successfully.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

seedDB();