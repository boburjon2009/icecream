import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../imgs/Group 1 (1).png";

export default function Header({ searchQuery, setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false); // Pages dropdown
  const [isOpenn, setIsOpenn] = useState(false); // Shop dropdown
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // 🔹 Mobil sidebar uchun
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const pagesRef = useRef(null);
  const shopRef = useRef(null);

  // 🔍 Input yozilganda qidirish
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() !== "") navigate("/cardpage");
  };

  // 🔍 Search icon bosilganda input ochiladi
  const handleOpenSearch = () => {
    setShowSearch(true);
    navigate("/cardpage");
  };

  // 🔹 Tashqariga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setSearchQuery("");
      }
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (shopRef.current && !shopRef.current.contains(event.target)) {
        setIsOpenn(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchQuery]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Navbar (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to={"/"} className="hover:text-pink-500 transition">Home</Link>
          <Link to={"/about"} className="hover:text-pink-500 transition">About Us</Link>

          {/* Pages dropdown */}
          <div className="relative" ref={pagesRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-pink-500 transition cursor-pointer"
            >
              Pages
            </button>
            {isOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40">
                <Link to={"/Ourteam"} className="block px-4 py-2 hover:bg-pink-50">Our Team</Link>
                <Link to={"/Review"} className="block px-4 py-2 hover:bg-pink-50">Review</Link>
                <Link to={"/ShopPage"} className="block px-4 py-2 hover:bg-pink-50">Shopping Card</Link>
                <Link to={"/Offers"} className="block px-4 py-2 hover:bg-pink-50">Special Offers</Link>
                <Link to={"/TermsAndConditions"} className="block px-4 py-2 hover:bg-pink-50">Terms & Cond</Link>
              </div>
            )}
          </div>

          {/* Shop dropdown */}
          <div className="relative" ref={shopRef}>
            <button
              onClick={() => setIsOpenn(!isOpenn)}
              className="hover:text-pink-500 transition cursor-pointer"
            >
              Shop
            </button>
            {isOpenn && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40">
                <Link to={"/Blog"} className="block px-4 py-2 hover:bg-pink-50">Blog</Link>
                <Link to={"/Loadmore"} className="block px-4 py-2 hover:bg-pink-50">Load More</Link>
              </div>
            )}
          </div>

          <Link to={"/faq"} className="hover:text-pink-500 transition">FAQ's</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* 🔍 Search */}
          <div className="flex items-center gap-3 relative" ref={searchRef}>
            <button
              onClick={handleOpenSearch}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
            >
              <Search size={20} />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                value={searchQuery}
                onChange={handleSearch}
                className="absolute top-10 right-0 border rounded-full px-4 py-2 w-56 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            )}
          </div>

          {/* 🛒 Cart */}
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

          {/* 📞 Contact */}
          <Link to={"/Contact"}>
            <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:opacity-90 transition">
              Contact Us
            </button>
          </Link>

          {/* 🍔 Hamburger (mobil) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-gray-700 hover:text-pink-500 transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* 🔹 Mobil Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0  bg-opacity-40 z-50 md:hidden">
          <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={26} className="text-gray-600 hover:text-pink-500" />
              </button>
            </div>

            <Link to={"/"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">Home</Link>
            <Link to={"/about"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">About Us</Link>
            <Link to={"/Ourteam"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">Our Team</Link>
            <Link to={"/ShopPage"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">Shop</Link>
            <Link to={"/Offers"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">Offers</Link>
            <Link to={"/faq"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">FAQ's</Link>
            <Link to={"/Contact"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
