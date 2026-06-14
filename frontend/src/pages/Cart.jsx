import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialItems = [
  { id: 1, name: "T-shirts with multiple colors, for men", description: "Color: Black, Size: Medium", price: 14.00, qty: 2, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150" },
  { id: 2, name: "T-shirts with multiple colors, for men", description: "Color: Red, Size: Large", price: 14.00, qty: 1, img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=150" },
  { id: 3, name: "T-shirts with multiple colors, for men", description: "Color: Blue, Size: Small", price: 14.00, qty: 1, img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=150" },
];

const savedItems = [
  { id: 4, name: "GoPro HERO6 4K Action Camera", price: 99.50, oldPrice: 128.00, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150" },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => item.id===id ? {...item, qty: Math.max(1, item.qty+delta)} : item));
  };
  const removeItem = (id) => setCartItems(prev => prev.filter(item => item.id!==id));

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* BREADCRUMB */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt; My cart
        </div>

        <div className="flex flex-col lg:flex-row gap-4">

          {/* LEFT — Cart Items */}
          <div className="flex-1 space-y-3 min-w-0">

            {/* Select all bar */}
            <div className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" className="accent-blue-600" defaultChecked />
                <span>Select all ({cartItems.length}) items</span>
              </label>
              <button className="text-sm text-red-500 hover:underline">Remove selected</button>
            </div>

            {/* Items */}
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <input type="checkbox" className="accent-blue-600 mt-1 shrink-0" defaultChecked />
                  <img src={item.img} alt={item.name} className="w-full sm:w-24 h-24 object-cover border rounded shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{item.description}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <button onClick={() => removeItem(item.id)} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        Remove
                      </button>
                      <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item.id,-1)} className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm">-</button>
                      <span className="px-4 py-2 text-sm font-semibold border-x">{item.qty}</span>
                      <button onClick={() => updateQty(item.id,1)} className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm">+</button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">${(item.price*item.qty).toFixed(2)}</p>
                      <p className="text-xs text-gray-400">${item.price.toFixed(2)} / each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <p className="text-gray-500 text-lg mb-4">Your cart is empty!</p>
                <Link to="/products"><button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Continue Shopping</button></Link>
              </div>
            )}

            {/* Saved for later */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold text-gray-800 mb-3">Saved for later ({savedItems.length})</h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {savedItems.map(item => (
                  <div key={item.id} className="border rounded-lg p-3 w-44 shrink-0 hover:shadow-md">
                    <img src={item.img} alt={item.name} className="w-full h-28 object-contain mb-2" />
                    <p className="text-xs text-gray-700 mb-1 font-medium">{item.name}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-sm font-bold text-gray-800">${item.price}</p>
                      <p className="text-xs text-gray-400 line-through">${item.oldPrice}</p>
                    </div>
                    <button className="w-full text-xs bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700">Move to cart</button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — Order Summary */}
          <div className="w-full lg:w-80 shrink-0 space-y-3">

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold text-gray-800 mb-4 text-lg">Order Summary</h2>
              <div className="space-y-3 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.reduce((s,i) => s+i.qty, 0)} items)</span>
                  <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-gray-800 text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-3 text-sm">
                Checkout ({cartItems.reduce((s,i) => s+i.qty, 0)} items)
              </button>
              <Link to="/products">
                <button className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to shop
                </button>
              </Link>
            </div>

            {/* Promo */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Promo Code</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter code" className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 min-w-0" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 shrink-0">Apply</button>
              </div>
            </div>

            {/* Secure payment */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure payment
              </p>
              <div className="flex flex-wrap gap-2">
                {["Visa","Mastercard","PayPal","Stripe","Apple Pay"].map((p,i) => (
                  <span key={i} className="text-xs bg-gray-100 px-3 py-1.5 rounded border font-medium">{p}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}