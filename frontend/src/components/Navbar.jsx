import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/products?search=${searchText}`);
    } else {
      navigate('/products');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 md:gap-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl shrink-0">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">B</span>
          <span className="hidden sm:inline">Brand</span>
        </Link>

        {/* SEARCH BAR */}
        <div className="flex-1 flex gap-0 min-w-0">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => { if(e.key === 'Enter') handleSearch(); }}
            placeholder="Search"
            className="flex-1 border border-gray-300 rounded-l px-2 md:px-4 py-2 text-sm outline-none min-w-0"
          />
          <select
            className="hidden md:block border-t border-b border-gray-300 px-2 py-2 text-sm bg-white"
            onChange={(e) => navigate(`/products?category=${e.target.value}`)}
          >
            <option value="">All category</option>
            <option value="Electronics">Electronics</option>
            <option value="Computers">Computers</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Furniture">Furniture</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothes">Clothes</option>
            <option value="Accessories">Accessories</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-3 md:px-5 py-2 rounded-r text-sm hover:bg-blue-700 shrink-0"
          >
            Search
          </button>
        </div>

        {/* DESKTOP NAV ICONS */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-center cursor-pointer hover:text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>Admin</div>
                </Link>
              )}
              <div className="text-center cursor-pointer hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>{user.name}</div>
              </div>
              <Link to="/cart" className="text-center cursor-pointer hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>My cart</div>
              </Link>
              <button onClick={handleLogout} className="text-center cursor-pointer hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <div>Logout</div>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-center cursor-pointer hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>Profile</div>
              </Link>
              <div className="text-center cursor-pointer hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <div>Message</div>
              </div>
              <div className="text-center cursor-pointer hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <div>Orders</div>
              </div>
              <Link to="/cart" className="text-center cursor-pointer hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>My cart</div>
              </Link>
            </>
          )}
        </div>

        {/* MOBILE ICONS */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/cart" className="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          {user ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-2 py-1 rounded text-xs">Logout</button>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Login</Link>
          )}
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="bg-white border-t border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm min-w-max">
          <div className="flex items-center gap-4 md:gap-6 text-gray-600">
            <Link to="/products" className="cursor-pointer hover:text-blue-600 whitespace-nowrap font-medium">☰ All category</Link>
            <Link to="/products?category=Electronics" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Hot offers</Link>
            <Link to="/products?category=Accessories" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Gift boxes</Link>
            <Link to="/products" className="hidden md:inline cursor-pointer hover:text-blue-600">Projects</Link>
            <Link to="/products" className="hidden md:inline cursor-pointer hover:text-blue-600">Menu item</Link>
            <span className="hidden md:inline cursor-pointer hover:text-blue-600">
              Help ▾
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-gray-600 text-xs">
            <select className="border-none outline-none text-sm bg-transparent cursor-pointer">
              <option>English, USD</option>
              <option>Urdu, PKR</option>
              <option>Arabic, AED</option>
            </select>
            <select className="border-none outline-none text-sm bg-transparent cursor-pointer">
              <option>🇩🇪 Ship to Germany</option>
              <option>🇵🇰 Ship to Pakistan</option>
              <option>🇺🇸 Ship to USA</option>
              <option>🇬🇧 Ship to UK</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}