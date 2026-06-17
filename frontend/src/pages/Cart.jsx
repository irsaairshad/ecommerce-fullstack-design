import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(saved);
  }, []);

  const updateQty = (id, delta) => {
    const updated = cartItems.map(item =>
      item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item._id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt; My cart
        </div>

        <h1 className="text-xl font-bold text-gray-800 mb-4">My cart ({cartItems.length})</h1>

        <div className="flex flex-col lg:flex-row gap-4">

          {/* LEFT */}
          <div className="flex-1 space-y-3 min-w-0">

            {cartItems.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                <p className="text-4xl mb-4">🛒</p>
                <p className="text-gray-500 text-lg mb-4">Your cart is empty!</p>
                <Link to="/products">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}

            {cartItems.map(item => (
              <div key={item._id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img src={item.image} alt={item.name} className="w-full sm:w-24 h-24 object-contain border rounded shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">Category: {item.category}</p>
                    <p className="text-xs text-green-600 mb-3">✓ {item.shipping}</p>
                    <div className="flex items-center gap-3">
                      <button onClick={() => removeItem(item._id)} className="text-xs text-red-500 hover:underline">🗑 Remove</button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item._id,-1)} className="px-3 py-2 bg-gray-50 hover:bg-gray-100 font-bold text-sm">-</button>
                      <span className="px-4 py-2 text-sm font-semibold border-x">{item.qty}</span>
                      <button onClick={() => updateQty(item._id,1)} className="px-3 py-2 bg-gray-50 hover:bg-gray-100 font-bold text-sm">+</button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">${(item.price * item.qty).toFixed(2)}</p>
                      <p className="text-xs text-gray-400">${item.price} each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT */}
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
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-3">
                Checkout ({cartItems.reduce((s,i) => s+i.qty, 0)} items)
              </button>
              <Link to="/products">
                <button className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50">
                  ← Back to shop
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Promo Code</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter code" className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 min-w-0" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 shrink-0">Apply</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <p className="text-sm font-semibold text-gray-700 mb-2">🔒 Secure payment</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {["Visa","MC","PayPal","Stripe","Apple Pay"].map((p,i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded border">{p}</span>
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