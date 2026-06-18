import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white rounded-lg mt-4 p-6">
      {/* Newsletter */}
      <div className="text-center mb-6 pb-6 border-b border-blue-700">
        <h2 className="font-bold text-white mb-1">Subscribe on our newsletter</h2>
        <p className="text-xs text-blue-300 mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <div className="flex-1 flex items-center bg-white rounded-lg px-3 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <input type="email" placeholder="Email" className="flex-1 py-2 text-sm outline-none text-gray-700" />
          </div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-400 shrink-0">Subscribe</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm mb-6">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-2">
            <span className="bg-blue-600 px-2 py-0.5 rounded text-sm">B</span> Brand
          </Link>
          <p className="text-gray-400 text-xs mb-3">Best information about the company goes here but now lorem ipsum is used</p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
            </a>
          </div>
        </div>
        {[
          { title: "About", links: ["About Us","Find store","Categories","Blogs"] },
          { title: "Partnership", links: ["About Us","Find store","Categories","Blogs"] },
          { title: "Information", links: ["Help Center","Money Refund","Shipping","Contact us"] },
          { title: "For users", links: ["Login","Register","Settings","My Orders"] },
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-3">{col.title}</h4>
            {col.links.map((l, j) => (
              <p key={j} className="text-gray-400 text-xs mb-2 cursor-pointer hover:text-white">{l}</p>
            ))}
          </div>
        ))}
        <div>
          <h4 className="font-semibold mb-3">Get app</h4>
          <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded mb-2 text-xs w-full hover:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded text-xs w-full hover:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Google Play
          </button>
        </div>
      </div>

      <div className="border-t border-blue-700 pt-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
        <span>© 2026 Ecommerce.</span>
        <span>🇺🇸 English</span>
      </div>
    </footer>
  );
}
