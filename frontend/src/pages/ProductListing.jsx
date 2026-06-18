import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category') || '';
    const q = params.get('search') || '';
    setCategory(cat);
    setSearch(q);
    fetchProducts(q, cat);
  }, [location.search]);

  const fetchProducts = async (s = '', c = '') => {
    setLoading(true);
    try {
      let url = 'http://localhost:5000/api/products';
      const params = [];
      if (s) params.push(`search=${s}`);
      if (c) params.push(`category=${c}`);
      if (params.length > 0) url += '?' + params.join('&');
      
      const res = await fetch(url);
      const data = await res.json();
      
      // Agar category set hai aur products nahi mile
      if (c && data.length === 0) {
        setProducts([]);
      } else if (!c && !s) {
        setProducts(data);
      } else {
        setProducts(data);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(search, category);
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    fetchProducts(search, cat);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* BREADCRUMB */}
        <div className="text-sm text-gray-500 mb-3">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt; Products
        </div>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-sm p-3 mb-4 flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products by name or category..."
            className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm outline-none focus:border-blue-500"
          />
          <select
            value={category}
            onChange={(e) => handleCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm outline-none"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Computers">Computers</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Furniture">Furniture</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothes">Clothes</option>
            <option value="Accessories">Accessories</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700">
            Search
          </button>
        </form>

        <button
          onClick={() => setShowFilter(!showFilter)}
          className="md:hidden mb-3 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm w-full"
        >
          {showFilter ? "Hide Filters ▲" : "Show Filters ▼"}
        </button>

        <div className="flex gap-4">
          {/* SIDEBAR */}
          <div className={`${showFilter ? 'block' : 'hidden'} md:block w-full md:w-52 shrink-0 space-y-4`}>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
              {["Electronics","Computers","Smartphones","Furniture","Kitchen","Clothes","Accessories"].map((c,i) => (
                <div
                  key={i}
                  onClick={() => handleCategory(c)}
                  className={`flex items-center gap-2 text-sm mb-2 cursor-pointer hover:text-blue-600 ${category===c ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
                >
                  <input type="radio" name="category" checked={category===c} onChange={() => handleCategory(c)} /> {c}
                </div>
              ))}
              <div onClick={() => handleCategory('')} className="text-blue-600 text-sm cursor-pointer mt-1">Clear filter</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Brands</h3>
              {["Samsung","Apple","Huawei","Pocco","Lenovo"].map((b,i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-2"><input type="checkbox" /> {b}</div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Price range</h3>
              <input type="range" className="w-full accent-blue-600" />
              <div className="flex gap-2 mt-2">
                <input type="text" placeholder="Min" className="w-full border rounded px-2 py-1 text-xs" />
                <input type="text" placeholder="Max" className="w-full border rounded px-2 py-1 text-xs" />
              </div>
              <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded text-sm">Apply</button>
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
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{products.length} items</span> found
              </div>
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

            {/* Loading */}
            {loading && (
              <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-3"></div>
                <p className="text-gray-500 text-sm">Loading products...</p>
              </div>
            )}

            {/* Products List */}
            {!loading && products.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                <p className="text-4xl mb-3">📦</p>
                <p className="text-gray-700 font-semibold mb-1">No products found!</p>
                <p className="text-gray-500 text-sm mb-4">
                  {category ? `No products in "${category}" category yet.` : 'No products match your search.'}
                </p>
                <button 
                  onClick={() => { setSearch(''); setCategory(''); fetchProducts('', ''); }} 
                  className="text-blue-600 text-sm hover:underline"
                >
                  View all products
                </button>
              </div>
            )}

            <div className="space-y-3">
              {!loading && products.map(product => (
                <div key={product._id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md">
                  <img src={product.image} alt={product.name} className="w-full sm:w-40 h-40 object-contain border rounded" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Stars rating={product.rating} />
                      <span className="text-xs text-gray-500">{product.reviews} reviews</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                    <span className="text-xs text-green-600 font-semibold">✓ {product.shipping}</span>
                    <span className="ml-3 text-xs text-gray-500">Stock: {product.stock}</span>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start shrink-0 gap-2">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">${product.price}</p>
                      {product.oldPrice && <p className="text-sm text-gray-400 line-through">${product.oldPrice}</p>}
                    </div>
                    <Link to={`/product/${product._id}`}>
                      <button className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 whitespace-nowrap">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}