import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const relatedProducts = [
  { id: 1, name: "Xiaomi Redmi 8 Original", price: "$32.00", oldPrice: "$40.00", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150" },
  { id: 2, name: "Samsung Galaxy A52", price: "$45.00", oldPrice: "$60.00", img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=150" },
  { id: 3, name: "Smart Watch Pro", price: "$89.00", oldPrice: "$120.00", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { id: 4, name: "MacBook Air M2", price: "$999.00", oldPrice: "$1199.00", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150" },
  { id: 5, name: "Sony Headphones", price: "$199.00", oldPrice: "$250.00", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" },
  { id: 6, name: "GoPro Hero 6", price: "$299.00", oldPrice: "$399.00", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150" },
];

const thumbnails = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=80",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=80",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=80",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=80",
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

export default function ProductDetails() {
  const [selectedImg, setSelectedImg] = useState("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400");
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="text-sm text-gray-500 mb-3">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt;{" "}
          <Link to="/products" className="hover:text-blue-600">Clothings</Link> &gt; Men's wear &gt; Summer clothing
        </div>

        {/* MAIN PRODUCT */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-6">
          <div className="flex flex-row gap-3 shrink-0">
            <div className="flex flex-col gap-2">
              {thumbnails.map((t,i) => (
                <img key={i} src={t} alt="thumb"
                  onClick={() => setSelectedImg(t.replace("w=80","w=400"))}
                  className="w-14 h-14 object-cover border-2 rounded cursor-pointer hover:border-blue-500"
                />
              ))}
            </div>
            <img src={selectedImg} alt="product" className="w-52 md:w-64 h-64 md:h-72 object-contain border rounded-lg" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs text-green-600 font-semibold mb-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              In stock
            </p>
            <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <Stars rating={4} />
              <span className="text-sm text-gray-500">32 reviews</span>
              <span className="text-sm text-gray-500">154 sold</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded p-3 mb-4 flex-wrap">
              <span className="text-gray-400 line-through text-sm">$96.00</span>
              <span className="text-2xl font-bold text-red-600">$80.00</span>
              <span className="text-gray-400 line-through text-sm">$78.00</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              {[
                ["Price","Negotiable"],["Type","Classic shoes"],["Material","Plastic material"],
                ["Design","Modern nice"],["Customization","Customized logo and design custom packages"],
                ["Protection","Refund Policy"],["Warranty","2 years full warranty"]
              ].map(([k,v],i) => (
                <div key={i} className="flex gap-2">
                  <span className="w-28 text-gray-400 shrink-0">{k}:</span>
                  <span className="text-gray-700">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mb-4 flex-wrap">
              {["#e5e7eb","#d1fae5","#dbeafe","#fef3c7","#f3f4f6"].map((c,i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 cursor-pointer hover:border-blue-500 shadow-sm" style={{backgroundColor: c}} />
              ))}
            </div>
            <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Save for later
            </button>
          </div>

          {/* Supplier */}
          <div className="w-full md:w-52 shrink-0 space-y-3">
            <div className="border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">S</div>
                <div>
                  <p className="text-xs font-semibold">Supplier</p>
                  <p className="text-xs text-gray-500">Jianpin Trading LLC</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">🇩🇪 Germany, Berlin</div>
              <div className="text-xs text-green-600 mb-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Verified seller
              </div>
              <div className="text-xs text-blue-600 mb-3 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                Worldwide shipping
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 mb-2">Send inquiry</button>
              <button className="w-full border border-gray-300 text-gray-600 py-2 rounded text-sm hover:bg-gray-50">Seller's profile</button>
            </div>
            <div className="border rounded-lg p-3 text-center">
              <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure payment
              </p>
              <div className="flex justify-center gap-1 flex-wrap">
                {["Visa","MC","PayPal","Stripe"].map((p,i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded border">{p}</span>
                ))}
              </div>
            </div>
            <Link to="/cart">
              <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Add to cart
              </button>
            </Link>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mt-4">
          <div className="flex gap-4 md:gap-6 border-b mb-4 overflow-x-auto">
            {["description","reviews","shipping","about seller"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm capitalize font-medium border-b-2 whitespace-nowrap ${activeTab===tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
                {tab.charAt(0).toUpperCase()+tab.slice(1)}
              </button>
            ))}
          </div>
          {activeTab==="description" && (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-3">
                  {[["Model #","#5766607"],["Style","Classic style"],["Certificate","ISO-98574512"],["Size","34mm x 450mm x 19mm"],["Memory","50GB ROM"]].map(([k,v],i) => (
                    <div key={i}><span className="text-gray-400">{k}: </span>{v}</div>
                  ))}
                </div>
                {["Some great feature name here","Some great feature name here","Some great feature name here"].map((f,i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </div>
                ))}
              </div>
              <div className="w-full md:w-52 shrink-0">
                <h4 className="font-semibold text-sm mb-2">You may like</h4>
                {[{name:"Men Blazers Sets",price:"$700-$350"},{name:"Men Shirt Sleeve",price:"$700-$350"},{name:"Apple Watch Series",price:"$700-$350"},{name:"Basketball Crew Socks",price:"$700-$350"}].map((item,i) => (
                  <div key={i} className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-50 rounded p-1">
                    <div className="w-10 h-10 bg-gray-100 rounded shrink-0" />
                    <div>
                      <p className="text-xs text-gray-700">{item.name}</p>
                      <p className="text-xs text-blue-600">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab==="reviews" && <p className="text-sm text-gray-500">No reviews yet.</p>}
          {activeTab==="shipping" && <p className="text-sm text-gray-500">Worldwide shipping available. Delivery in 5-7 business days.</p>}
          {activeTab==="about seller" && <p className="text-sm text-gray-500">Jianpin Trading LLC — Verified Seller from Germany, Berlin.</p>}
        </div>

        {/* RELATED */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mt-4">
          <h2 className="font-bold text-gray-800 mb-4">Related products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {relatedProducts.map(item => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="border rounded-lg p-2 hover:shadow-md text-center">
                  <img src={item.img} alt={item.name} className="w-full h-24 object-contain mb-2" />
                  <p className="text-xs text-gray-700 mb-1">{item.name}</p>
                  <p className="text-xs font-bold text-gray-800">{item.price}</p>
                  <p className="text-xs text-gray-400 line-through">{item.oldPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PROMO */}
        <div className="bg-blue-600 text-white rounded-lg p-4 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="font-bold">Super discount on more than 100 USD</p>
            <p className="text-sm text-blue-200">Have you ever finally just write dummy info</p>
          </div>
          <button className="bg-orange-400 text-white px-5 py-2 rounded hover:bg-orange-500 text-sm shrink-0">Shop now</button>
        </div>

        <Footer />
      </div>
    </div>
  );
}