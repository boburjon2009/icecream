import { Search, ShoppingCart } from "lucide-react";
import logo from "../assets/react.svg";

// react router dom 
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white  sticky top-0 z-50">
      <div className="w-[71%] mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="src/imgs/Group 1 (1).png" alt="Logo" className="h-10 w-auto" />
          
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to={'/'}>
          <a href="#" className="hover:text-pink-500 transition">Home</a>
          </Link>
          <Link to={'/about'}>
          <a href="#" className="hover:text-pink-500 transition">About Us</a>
          </Link>
          <Link to={'/pages'}>
          <a href="#" className="hover:text-pink-500 transition">Pages</a>
          </Link>
          <Link to={'/blog'}>
          <a href="#" className="hover:text-pink-500 transition">Blog</a>
          </Link>
          <Link to={'/faqs'}></Link>
          <a href="#" className="hover:text-pink-500 transition">FAQ's</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-pink-500 transition">
            <Search size={20} />
          </button>

          <button className="relative">
            <ShoppingCart size={22} className="text-gray-600 hover:text-pink-500 transition" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>

          <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
