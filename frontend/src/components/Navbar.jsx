import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 md:gap-4">
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl shrink-0">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">B</span>
          <span className="hidden sm:inline">Brand</span>
        </Link>
        <div className="flex-1 flex gap-1 md:gap-2">
          <input type="text" placeholder="Search"
            className="flex-1 border border-gray-300 rounded-l px-2 md:px-4 py-2 text-sm outline-none min-w-0"
            onKeyDown={(e) => { if(e.key === 'Enter') navigate('/products'); }}
          />
          <select className="hidden md:block border border-gray-300 px-2 py-2 text-sm">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothes</option>
          </select>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-3 md:px-5 py-2 rounded-r text-sm hover:bg-blue-700 shrink-0">
            Search
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
          <Link to="/" className="text-center cursor-pointer hover:text-blue-600">
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
        </div>
        <Link to="/cart" className="md:hidden text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
      </div>

      {/* NAV LINKS */}
      <div className="bg-white border-t border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm min-w-max">
          <div className="flex items-center gap-4 md:gap-6 text-gray-600">
            <Link to="/products" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">☰ All category</Link>
            <Link to="/products" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Hot offers</Link>
            <Link to="/products" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Gift boxes</Link>
            <Link to="/products" className="hidden md:inline cursor-pointer hover:text-blue-600">Projects</Link>
            <Link to="/products" className="hidden md:inline cursor-pointer hover:text-blue-600">Menu item</Link>
            <Link to="/" className="hidden md:inline cursor-pointer hover:text-blue-600">Help</Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-gray-600">
            <span>English, USD</span>
            <span>Ship to 🇩🇪</span>
          </div>
        </div>
      </div>
    </header>
  );
}