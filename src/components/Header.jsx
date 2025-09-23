import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // 🔍 input toggle
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="src/imgs/Group 1 (1).png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Navbar */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to={"/"}>
            <p className="hover:text-pink-500 transition">Home</p>
          </Link>
          <Link to={"/about"}>
            <p className="hover:text-pink-500 transition">About Us</p>
          </Link>

          {/* Pages dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-pink-500 transition cursor-pointer"
            >
              Pages
            </button>

            {isOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-32">
                <Link
                  to={"/Ourteam"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to={"/Review"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  Review
                </Link>
                <Link
                  to={"/ShopPage"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  shopingcard
                </Link>
                <Link
                  to={"/Offers"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  special offers
                </Link>
                <Link
                  to={"/Product"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  Product
                </Link>
                <Link
                  to={"/TermsAndConditions"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  TermsAndCond
                </Link>
              </div>
            )}
          </div>

          {/* Shop dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpenn(!isOpenn)}
              className="hover:text-pink-500 transition cursor-pointer"
            >
              shop
            </button>

            {isOpenn && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-32">
                <Link
                  to={"/Blog"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpenn(false)}
                >
                  Blog
                </Link>
                <Link
                  to={"/Loadmore"}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpenn(false)}
                >
                  load-more
                </Link>
              </div>
            )}
          </div>

          <Link to={"/faq"}>
            <p className="hover:text-pink-500 transition">FAQ's</p>
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* 🔍 Search tugmasi */}
          <div className="flex items-center gap-3 relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
            >
              <Search size={20} />
            </button>

            {/* 🔹 Search input toggle */}
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="absolute top-10 right-0 border rounded-full px-4 py-2 w-56 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            )}
          </div>

          <Link to={"/shoppingcart"}>
            <button className="relative">
              <ShoppingCart
                size={22}
                className="text-gray-600 hover:text-pink-500 transition"
              />
              {cart && cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>

          <Link to={"/Contact"}>
            <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:opacity-90 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
