import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  "Automobiles", "Clothes and wear", "Home interiors",
  "Computer and tech", "Tools & equipments", "Sports and outdoor",
  "Animal and pets", "Machinery tools", "More category"
];

const deals = [
  { name: "Smart watches", discount: "-25%", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { name: "Laptops", discount: "-15%", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150" },
  { name: "GoPro cameras", discount: "-40%", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150" },
  { name: "Headphones", discount: "-25%", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" },
  { name: "Canon cameras", discount: "-25%", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150" },
];

const featured = [
  { name: "Soft chairs", price: "USD 19", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150" },
  { name: "Sofa & chair", price: "USD 19", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=150" },
  { name: "Kitchen dishes", price: "USD 19", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=150" },
  { name: "Smart watches", price: "USD 19", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { name: "Kitchen mixer", price: "USD 100", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150" },
  { name: "Blenders", price: "USD 39", img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=150" },
  { name: "Home appliance", price: "USD 19", img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=150" },
  { name: "Coffee maker", price: "USD 10", img: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=150" },
];

const electronics = [
  { name: "Smart watches", price: "USD 80", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { name: "Cameras", price: "USD 80", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150" },
  { name: "Headphones", price: "USD 80", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" },
  { name: "Smart watches", price: "USD 80", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { name: "Laptops & PC", price: "USD 340", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150" },
  { name: "Smartphones", price: "USD 19", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150" },
  { name: "Electric kettle", price: "USD 240", img: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=150" },
  { name: "Smart watches", price: "USD 19", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
];

const recommended = [
  { name: "T-shirts with multiple colors", price: "$10.30", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150" },
  { name: "Casual brown jacket", price: "$11.90", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=150" },
  { name: "Jeans bag for travel", price: "$34.00", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150" },
  { name: "Leather wallet", price: "$99.00", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=150" },
  { name: "Canon camera", price: "$9.99", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150" },
  { name: "Headset for gaming", price: "$8.99", img: "https://images.unsplash.com/photo-1599669454699-248893623440?w=150" },
  { name: "Smartwatch silver", price: "$10.30", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { name: "Blue wallet for men", price: "$10.30", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=150" },
];

const extraServices = [
  { title: "Source from Industry Hubs", icon: "🔍", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400" },
  { title: "Customize Your Products", icon: "✏️", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
  { title: "Fast, reliable shipping by ocean or air", icon: "✈️", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400" },
  { title: "Product monitoring and inspection", icon: "🔧", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" },
];

const suppliers = [
  { country: "Arabic Emirates", domain: "shopname.ae", flag: "🇦🇪" },
  { country: "Australia", domain: "shopname.au", flag: "🇦🇺" },
  { country: "United States", domain: "shopname.us", flag: "🇺🇸" },
  { country: "Russia", domain: "shopname.ru", flag: "🇷🇺" },
  { country: "Italy", domain: "shopname.it", flag: "🇮🇹" },
  { country: "Denmark", domain: "denmark.com.dk", flag: "🇩🇰" },
  { country: "France", domain: "shopname.com.fr", flag: "🇫🇷" },
  { country: "Arabic Emirates", domain: "shopname.ae", flag: "🇦🇪" },
  { country: "China", domain: "shopname.cn", flag: "🇨🇳" },
  { country: "Great Britain", domain: "shopname.co.uk", flag: "🇬🇧" },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* SIDEBAR */}
          <div className="hidden md:block w-48 shrink-0 bg-white rounded shadow-sm p-3">
            {categories.map((cat, i) => (
              <div key={i} className="py-2 px-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer rounded">{cat}</div>
            ))}
          </div>

          {/* HERO */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-lg flex flex-col justify-center relative overflow-hidden min-h-56"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-teal-900 bg-opacity-60" />
              <div className="relative z-10 p-6 md:p-8">
                <p className="text-teal-200 text-sm mb-2">Latest trending</p>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Electronic items</h1>
                <Link to="/products">
                  <button className="bg-white text-gray-800 px-5 py-2 rounded shadow text-sm hover:bg-gray-50 w-fit">Learn more</button>
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex flex-col gap-3 w-44">
              <div className="bg-blue-50 rounded-lg p-4 text-sm">
                <p className="text-gray-500">Hi, user</p>
                <p className="font-semibold text-gray-700 mb-2">let's get started</p>
                <button className="w-full bg-blue-600 text-white py-1 rounded text-xs mb-1 hover:bg-blue-700">Join now</button>
                <button className="w-full border border-blue-600 text-blue-600 py-1 rounded text-xs">Log in</button>
              </div>
              <div className="bg-orange-400 text-white rounded-lg p-3 text-xs">
                <p className="font-bold">US $10 off</p>
                <p>with a new supplier</p>
              </div>
              <div className="bg-teal-500 text-white rounded-lg p-3 text-xs">
                <p className="font-semibold">Send quotes with</p>
                <p>supplier preferences</p>
              </div>
            </div>
          </div>
        </div>

        {/* DEALS */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div>
              <h2 className="font-bold text-gray-800">Deals and offers</h2>
              <p className="text-xs text-gray-500">Hygiene equipments</p>
            </div>
            <div className="flex gap-2">
              {["04","13","34","56"].map((t,i) => (
                <div key={i} className="bg-gray-800 text-white rounded px-2 py-1 text-sm font-mono text-center">
                  <div>{t}</div>
                  <div className="text-xs">{["Days","Hour","Min","Sec"][i]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {deals.map((item, i) => (
              <Link to="/products" key={i}>
                <div className="border rounded-lg p-3 text-center hover:shadow-md">
                  <img src={item.img} alt={item.name} className="w-full h-20 object-contain mb-2" />
                  <p className="text-xs text-gray-700">{item.name}</p>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded">{item.discount}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* HOME AND OUTDOOR */}
        <div className="bg-white rounded-lg shadow-sm mt-4 overflow-hidden flex flex-col md:flex-row">
          <div className="relative md:w-64 shrink-0 min-h-52 flex flex-col justify-between p-6"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-amber-800 bg-opacity-50" />
            <div className="relative z-10">
              <h3 className="font-bold text-white text-lg">Home and outdoor</h3>
              <button className="mt-3 bg-white text-gray-700 text-xs px-4 py-2 rounded border hover:bg-gray-50">Source now</button>
            </div>
          </div>
          <div className="flex-1 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {featured.map((item, i) => (
              <Link to={`/product/${i+1}`} key={i}>
                <div className="border rounded-lg p-2 hover:shadow-md">
                  <img src={item.img} alt={item.name} className="w-full h-16 object-contain mb-1" />
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">From {item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CONSUMER ELECTRONICS */}
        <div className="bg-white rounded-lg shadow-sm mt-4 overflow-hidden flex flex-col md:flex-row">
          <div className="relative md:w-64 shrink-0 min-h-52 flex flex-col justify-between p-6"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
            <div className="relative z-10">
              <h3 className="font-bold text-white text-lg">Consumer electronics and gadgets</h3>
              <button className="mt-3 bg-white text-gray-700 text-xs px-4 py-2 rounded border hover:bg-gray-50">Source now</button>
            </div>
          </div>
          <div className="flex-1 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {electronics.map((item, i) => (
              <Link to={`/product/${i+1}`} key={i}>
                <div className="border rounded-lg p-2 hover:shadow-md">
                  <img src={item.img} alt={item.name} className="w-full h-16 object-contain mb-1" />
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">From {item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEND INQUIRY */}
        <div className="mt-4 rounded-lg overflow-hidden flex flex-col md:flex-row bg-blue-500">
          <div className="flex-1 p-6 md:p-10 text-white flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">An easy way to send requests to all suppliers</h2>
            <p className="text-sm text-blue-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white m-3 md:m-4 rounded-lg p-4 md:w-80 shrink-0">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Send quote to suppliers</h3>
            <input type="text" placeholder="What item you need?" className="w-full border rounded px-3 py-2 text-sm mb-2 outline-none focus:border-blue-500" />
            <textarea placeholder="Type more details" className="w-full border rounded px-3 py-2 text-sm mb-2 outline-none focus:border-blue-500 h-16 resize-none" />
            <div className="flex gap-2 mb-3">
              <input type="text" placeholder="Quantity" className="flex-1 border rounded px-3 py-2 text-sm outline-none min-w-0" />
              <select className="border rounded px-2 py-2 text-sm shrink-0"><option>Pcs</option><option>Kg</option></select>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 font-semibold">Send inquiry</button>
          </div>
        </div>

        {/* RECOMMENDED */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          <h2 className="font-bold text-gray-800 mb-3">Recommended items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {recommended.map((item, i) => (
              <Link to={`/product/${i+1}`} key={i}>
                <div className="border rounded-lg p-2 hover:shadow-md">
                  <img src={item.img} alt={item.name} className="w-full h-20 object-contain mb-1" />
                  <p className="text-xs font-bold text-gray-800">{item.price}</p>
                  <p className="text-xs text-gray-500">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* EXTRA SERVICES */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          <h2 className="font-bold text-gray-800 mb-3">Our extra services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {extraServices.map((service, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden h-40 cursor-pointer group">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold">{service.title}</p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 bg-white bg-opacity-80 rounded-full flex items-center justify-center text-sm">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUPPLIERS BY REGION */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          <h2 className="font-bold text-gray-800 mb-3">Suppliers by region</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {suppliers.map((s, i) => (
              <div key={i} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <span className="text-2xl">{s.flag}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700">{s.country}</p>
                  <p className="text-xs text-gray-400">{s.domain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}