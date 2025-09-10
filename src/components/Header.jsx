import { Search, ShoppingCart } from "lucide-react";

// react router dom 
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to={'/'}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="src/imgs/Group 1 (1).png" alt="Logo" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Navbar */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to={'/'}>
            <p className="hover:text-pink-500 transition">Home</p>
          </Link>
          <Link to={'/about'}>
            <p className="hover:text-pink-500 transition">About Us</p>
          </Link>
          <Link to={'/pages'}>
            <p className="hover:text-pink-500 transition">Pages</p>
          </Link>
          <Link to={'/blog'}>
            <p className="hover:text-pink-500 transition">Blog</p>
          </Link>
          <Link to={'/faqs'}></Link>
          <p className="hover:text-pink-500 transition">FAQ's</p>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-pink-500 transition">
            <Search size={20} />
          </button>

<<<<<<< HEAD
          <button className="relative">
            <ShoppingCart size={22} className="text-gray-600 hover:text-pink-500 transition" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>
=======
          <Link to={'shoppingcart'}>
            <button className="relative">
              <ShoppingCart size={22} className="text-gray-600 hover:text-pink-500 transition" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </button>
          </Link>
>>>>>>> 574301e (functions)

          <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
