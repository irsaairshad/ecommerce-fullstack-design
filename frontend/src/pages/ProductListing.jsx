import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: "Canon EOS 2000, black 10x zoom", price: 998.00, oldPrice: 1128.00, rating: 4, reviews: 32, orders: 154, shipping: "Free Shipping", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200", description: "Professional DSLR camera with 10x optical zoom, 24.1MP sensor, Full HD video recording, built-in Wi-Fi and NFC connectivity for easy sharing." },
  { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, oldPrice: 1128.00, rating: 3.5, reviews: 154, orders: 32, shipping: "Free Shipping", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200", description: "Capture stunning 4K60 video and 12MP photos. Features voice control, 2-inch touch display, and waterproof up to 33ft without a housing." },
  { id: 3, name: "Smart Watch Series 6 - Space Gray", price: 450.00, oldPrice: 550.00, rating: 4, reviews: 89, orders: 201, shipping: "Free Shipping", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", description: "Advanced smartwatch with health monitoring, GPS tracking, always-on display, and up to 18 hours battery life." },
  { id: 4, name: "Sony WH-1000XM4 Wireless Headphones", price: 280.00, oldPrice: 350.00, rating: 5, reviews: 320, orders: 450, shipping: "Free Shipping", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200", description: "Industry-leading noise canceling headphones with 30-hour battery life, touch controls, and multipoint connection." },
  { id: 5, name: "MacBook Pro 14-inch Laptop", price: 1999.00, oldPrice: 2299.00, rating: 4.5, reviews: 210, orders: 98, shipping: "Free Shipping", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200", description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR display, up to 18 hours battery life." },
  { id: 6, name: "iPhone 14 Pro Max 256GB", price: 1199.00, oldPrice: 1399.00, rating: 4, reviews: 540, orders: 320, shipping: "Free Shipping", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200", description: "48MP camera system, Dynamic Island, Always-On display, A16 Bionic chip, and emergency SOS via satellite." },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

export default function ProductListing() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500 mb-3">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt; Clothings &gt; Men's wear &gt; Summer clothing
        </div>

        <button onClick={() => setShowFilter(!showFilter)} className="md:hidden mb-3 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm w-full">
          {showFilter ? "Hide Filters ▲" : "Show Filters ▼"}
        </button>

        <div className="flex gap-4">
          {/* SIDEBAR */}
          <div className={`${showFilter ? 'block' : 'hidden'} md:block w-full md:w-52 shrink-0 space-y-4`}>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
              {["Mobile accessory","Electronics","Smartphones","Modern tech"].map((c,i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-2 cursor-pointer hover:text-blue-600">
                  <input type="radio" name="category" /> {c}
                </div>
              ))}
              <span className="text-blue-600 text-sm cursor-pointer">See all</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Brands</h3>
              {["Samsung","Apple","Huawei","Pocco","Lenovo"].map((b,i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-2"><input type="checkbox" /> {b}</div>
              ))}
              <span className="text-blue-600 text-sm cursor-pointer">See all</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
              {["Metallic","Plastic cover","8GB Ram","Super power","Large Memory"].map((f,i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-2"><input type="checkbox" /> {f}</div>
              ))}
              <span className="text-blue-600 text-sm cursor-pointer">See all</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Price range</h3>
              <input type="range" className="w-full accent-blue-600" />
              <div className="flex gap-2 mt-2">
                <input type="text" placeholder="Min" className="w-full border rounded px-2 py-1 text-xs" />
                <input type="text" placeholder="Max" className="w-full border rounded px-2 py-1 text-xs" />
              </div>
              <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded text-sm hover:bg-blue-700">Apply</button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Condition</h3>
              {["Any","Refurbished","Brand new","Old items"].map((c,i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-2"><input type="radio" name="condition" /> {c}</div>
              ))}
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Ratings</h3>
              {[5,4,3,2,1].map((r,i) => (
                <div key={i} className="flex items-center gap-2 mb-2"><input type="radio" name="rating" /><Stars rating={r} /></div>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
              <div className="text-sm text-gray-600"><span className="font-semibold">12,911 items</span> in Mobile accessory</div>
              <div className="flex items-center gap-3 text-sm flex-wrap">
                <label className="flex items-center gap-1"><input type="checkbox" className="accent-blue-600" /> Verified only</label>
                <label className="flex items-center gap-1"><input type="checkbox" className="accent-blue-600" /> Featured</label>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>Best match</option>
                  <option>Price low to high</option>
                  <option>Price high to low</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md">
                  <img src={product.img} alt={product.name} className="w-full sm:w-40 h-40 object-contain border rounded" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Stars rating={product.rating} />
                      <span className="text-xs text-gray-500">{product.reviews} reviews · {product.orders} orders</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                    <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {product.shipping}
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start shrink-0 gap-2">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</p>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <button className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 whitespace-nowrap">View details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 mt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Show</span>
                <select className="border rounded px-2 py-1 text-sm"><option>10</option><option>20</option></select>
              </div>
              <div className="flex gap-1">
                <button className="px-3 py-1 rounded text-sm border hover:bg-gray-50">‹</button>
                {[1,2,3].map(p => (
                  <button key={p} className={`px-3 py-1 rounded text-sm border ${p===1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'}`}>{p}</button>
                ))}
                <button className="px-3 py-1 rounded text-sm border hover:bg-gray-50">›</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}