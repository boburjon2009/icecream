import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useContext(CartContext)

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
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
                  to={'/Ourteam'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to={'/Review'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  Review
                </Link>
                <Link
                  to={'/ShopPage'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  shopingcard
                </Link>
                <Link
                  to={'/Checkout'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Link> <Link
                  to={'/ShopPage'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  shopingcard
                </Link>
                <Link
                  to={'/Offers'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >special offers</Link>
                <Link
                  to={'/Checkout'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                ></Link> <Link
                  to={'/Product'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >Product</Link> <Link
                  to={'/Checkout'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                ></Link> <Link
                  to={'/Checkout'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                ></Link>
              </div>
            )}
          </div>

          <Link to={'/blog'}>
            <p className="hover:text-pink-500 transition">Blog</p>
          </Link>
          <Link to={'/faqs'}>
            <p className="hover:text-pink-500 transition">FAQ's</p>
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-pink-500 transition">
            <Search size={20} />
          </button>

          <Link to={'/shoppingcart'}>
            <button className="relative">
              <ShoppingCart size={22} className="text-gray-600 hover:text-pink-500 transition" />
              {cart && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>

          <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
