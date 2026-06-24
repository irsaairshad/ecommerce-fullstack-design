import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { API_URL } from '../api';

export default function AdminPanel() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [msg, setMsg] = useState('');

  const emptyForm = { name: '', price: '', oldPrice: '', image: '', description: '', category: '', stock: '' };
  const [form, setForm] = useState(emptyForm);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchProducts();
    
  }, [user]);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/api/products`);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editProduct
      ? `${API_URL}/api/products/${editProduct._id}`
      : `${API_URL}/api/products`;
    const method = editProduct ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMsg(editProduct ? 'Product updated!' : 'Product added!');
      setShowForm(false);
      setEditProduct(null);
      setForm(emptyForm);
      fetchProducts();
      setTimeout(() => setMsg(''), 3000);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice || '',
      image: product.image,
      description: product.description,
      category: product.category,
      stock: product.stock,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    await fetch(`${API_URL}/api/products/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    setMsg('Product deleted!');
    fetchProducts();
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Admin Navbar */}
      <header className="bg-blue-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="bg-blue-600 px-2 py-0.5 rounded text-sm">B</span> Brand Admin
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-blue-200">👤 {user?.name}</span>
            <button
              onClick={() => { logout(); navigate('/login'); }}
              className="bg-red-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <p className="text-sm text-gray-500">Manage your products</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditProduct(null); setForm(emptyForm); }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm font-semibold"
          >
            + Add Product
          </button>
        </div>

        {msg && (
          <div className="bg-green-50 text-green-600 px-4 py-3 rounded mb-4 text-sm font-medium">
            ✓ {msg}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Products', value: products.length, color: 'bg-blue-500' },
            { label: 'In Stock', value: products.filter(p => p.stock > 0).length, color: 'bg-green-500' },
            { label: 'Out of Stock', value: products.filter(p => p.stock === 0).length, color: 'bg-red-500' },
            { label: 'Categories', value: [...new Set(products.map(p => p.category))].length, color: 'bg-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-4">
              <div className={`w-8 h-8 ${stat.color} rounded-lg mb-2`}></div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="font-bold text-gray-800 mb-4">
              {editProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                    placeholder="Product name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({...form, category: e.target.value})}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="">Select category</option>
                    {["Electronics","Computers","Smartphones","Furniture","Kitchen","Clothes","Accessories"].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({...form, price: e.target.value})}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Old Price</label>
                  <input
                    type="number"
                    value={form.oldPrice}
                    onChange={(e) => setForm({...form, oldPrice: e.target.value})}
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock *</label>
                  <input
                    type="number"
                    value={form.stock}
                    onChange={(e) => setForm({...form, stock: e.target.value})}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
                  <input
                    type="text"
                    value={form.image}
                    onChange={(e) => setForm({...form, image: e.target.value})}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                    placeholder="https://..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    required
                    rows={3}
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 resize-none"
                    placeholder="Product description..."
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm font-semibold">
                  {editProduct ? 'Update Product' : 'Add Product'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditProduct(null); setForm(emptyForm); }}
                  className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-bold text-gray-800">All Products ({products.length})</h2>
          </div>
          {loading ? (
            <div className="p-10 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Product</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Category</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Price</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Stock</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-10 h-10 object-contain border rounded" />
                          <span className="font-medium text-gray-800 line-clamp-1 max-w-xs">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{product.category}</span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-800">${product.price}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="text-blue-600 border border-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="text-red-600 border border-red-600 px-3 py-1 rounded text-xs hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}