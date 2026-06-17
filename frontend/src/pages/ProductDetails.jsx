import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProduct, getProducts } from '../api';

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [cartMsg, setCartMsg] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const data = await getProduct(id);
      setProduct(data);
      const all = await getProducts('', data.category);
      setRelated(all.filter(p => p._id !== id).slice(0, 6));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item._id === product._id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartMsg('Added to cart! ✓');
    setTimeout(() => setCartMsg(''), 2000);
  };

  if (loading) return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );

  if (!product) return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="text-center py-20">
        <p className="text-gray-500">Product not found!</p>
        <Link to="/products" className="text-blue-600 hover:underline">Back to products</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="text-sm text-gray-500 mb-3">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt;{" "}
          <Link to="/products" className="hover:text-blue-600">Products</Link> &gt; {product.name}
        </div>

        {/* MAIN PRODUCT */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-6">
          <div className="shrink-0">
            <img src={product.image} alt={product.name} className="w-full md:w-72 h-72 object-contain border rounded-lg" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs text-green-600 font-semibold mb-1">
              {product.stock > 0 ? '✓ In stock' : '✗ Out of stock'}
            </p>
            <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <Stars rating={product.rating} />
              <span className="text-sm text-gray-500">{product.reviews} reviews</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded p-3 mb-4 flex-wrap">
              {product.oldPrice && <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>}
              <span className="text-2xl font-bold text-red-600">${product.price}</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex gap-2"><span className="w-28 text-gray-400 shrink-0">Category:</span><span>{product.category}</span></div>
              <div className="flex gap-2"><span className="w-28 text-gray-400 shrink-0">Stock:</span><span>{product.stock} units</span></div>
              <div className="flex gap-2"><span className="w-28 text-gray-400 shrink-0">Shipping:</span><span className="text-green-600">{product.shipping}</span></div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full md:w-52 shrink-0 space-y-3">
            <div className="border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">S</div>
                <div>
                  <p className="text-xs font-semibold">Supplier</p>
                  <p className="text-xs text-gray-500">Jianpin Trading LLC</p>
                </div>
              </div>
              <div className="text-xs text-green-600 mb-3">✓ Verified seller</div>
              <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 mb-2">Send inquiry</button>
              <button className="w-full border border-gray-300 text-gray-600 py-2 rounded text-sm hover:bg-gray-50">Seller's profile</button>
            </div>

            <div className="border rounded-lg p-3 text-center">
              <p className="text-xs font-semibold text-gray-700 mb-2">🔒 Secure payment</p>
              <div className="flex justify-center gap-1 flex-wrap">
                {["Visa","MC","PayPal","Stripe"].map((p,i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded border">{p}</span>
                ))}
              </div>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700"
            >
              🛒 {cartMsg || 'Add to cart'}
            </button>

            <Link to="/cart">
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded text-sm hover:bg-blue-50 mt-2">
                View Cart
              </button>
            </Link>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          <div className="flex gap-4 border-b mb-4 overflow-x-auto">
            {["description","reviews","shipping"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm capitalize font-medium border-b-2 whitespace-nowrap ${activeTab===tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"}`}>
                {tab.charAt(0).toUpperCase()+tab.slice(1)}
              </button>
            ))}
          </div>
          {activeTab==="description" && <p className="text-sm text-gray-600">{product.description}</p>}
          {activeTab==="reviews" && <p className="text-sm text-gray-500">No reviews yet.</p>}
          {activeTab==="shipping" && <p className="text-sm text-gray-500">Worldwide shipping available. Delivery in 5-7 business days.</p>}
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
            <h2 className="font-bold text-gray-800 mb-4">Related products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {related.map(item => (
                <Link to={`/product/${item._id}`} key={item._id}>
                  <div className="border rounded-lg p-2 hover:shadow-md text-center">
                    <img src={item.image} alt={item.name} className="w-full h-24 object-contain mb-2" />
                    <p className="text-xs text-gray-700 mb-1 line-clamp-2">{item.name}</p>
                    <p className="text-xs font-bold text-gray-800">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}