import { ArrowRight, Star, Heart, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Testimonials from "./Testimonials";
import shadowimg from "../imgs/shadowimg.png";

// product images
import product1 from "../imgs/prodect-1.png";
import product2 from "../imgs/prodect-2.png";
import product3 from "../imgs/prodect-3.png";
import product4 from "../imgs/prodect-4.png";

// best sellers images
import bs1 from "../imgs/prodect-1.png";
import bs2 from "../imgs/prodect-2.png";
import bs3 from "../imgs/prodect-3.png";
import bs4 from "../imgs/prodect-4.png";
import bs5 from "../imgs/image copy 12.png";
import bs6 from "../imgs/image copy 13.png";
import bs7 from "../imgs/image copy 14.png";
import bs8 from "../imgs/image copy 15.png";
import bs9 from "../imgs/image copy 16.png";
import bs10 from "../imgs/image copy 17.png";
import bs11 from "../imgs/image copy 18.png";
import bs12 from "../imgs/image copy 19.png";

// context
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import Header from "../components/Header"; // ✅ Header import

export default function Home() {
  // products
  const products = [
    { id: 1, img: product1, title: "Chocolate Brownie Sundae", desc: "Rich chocolate ice cream with chunks of brownie.", price: 5.49, bg: "#F7F2F7" },
    { id: 2, img: product2, title: "Strawberry Shortcake", desc: "Strawberry ice cream layered with shortcake", price: 5.29, bg: "#F7F2F7" },
    { id: 3, img: product3, title: "Mint Chocolate Chip Cone", desc: "Refreshing mint ice cream with chocolate chips.", price: 3.99, bg: "#F7F2F7" },
    { id: 4, img: product4, title: "Classic Vanilla Ice Cream", desc: "Creamy vanilla ice cream topped with cherry.", price: 4.99, bg: "#F7F2F7" },
  ];

  const { setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [current, setCurrent] = useState(0);

  const addToCart = (i) => setCart((prev) => [...prev, i]);

  // ✅ 12 ta best sellers
  const bestSellers = [
    { id: 1, title: "Chocolate Chip Cookie Cone", desc: "Chocolate chip cookie dough ice cream in a cone.", price: 4.49, img: bs1, rating: 4 },
    { id: 2, title: "Rocky Road Sundae", desc: "Marshmallow and nutty rocky road ice cream.", price: 5.69, img: bs2, rating: 5 },
    { id: 3, title: "Peach Melba Sundae", desc: "Peach ice cream topped with raspberry sauce.", price: 5.39, img: bs3, rating: 4 },
    { id: 4, title: "Strawberry Sundae", desc: "Strawberry ice cream with fresh strawberries.", price: 5.99, img: bs4, rating: 5 },
    { id: 5, title: "Chocolate Fudge Cone", desc: "Dark chocolate ice cream with fudge drizzle.", price: 4.79, img: bs5, rating: 5 },
    { id: 6, title: "Vanilla Delight", desc: "Classic vanilla with crunchy almonds.", price: 4.99, img: bs6, rating: 4 },
    { id: 7, title: "Mango Cream Swirl", desc: "Tropical mango and creamy swirl.", price: 5.19, img: bs7, rating: 4 },
    { id: 8, title: "Cookies & Cream", desc: "Vanilla with crushed cookies.", price: 5.59, img: bs8, rating: 5 },
    { id: 9, title: "Blueberry Bliss", desc: "Fresh blueberry ice cream swirl.", price: 5.49, img: bs9, rating: 4 },
    { id: 10, title: "Caramel Dream", desc: "Caramel flavored creamy ice cream.", price: 5.79, img: bs10, rating: 5 },
    { id: 11, title: "Pistachio Heaven", desc: "Nutty pistachio classic flavor.", price: 4.89, img: bs11, rating: 4 },
    { id: 12, title: "Choco Swirl", desc: "Chocolate ice cream with vanilla ribbons.", price: 5.29, img: bs12, rating: 5 },
  ];

  // 🔎 Qidiruv
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Pagination for Best Sellers
  const itemsPerPage = 4;
  const totalPages = Math.ceil(bestSellers.length / itemsPerPage);
  const startIndex = current * itemsPerPage;
  const visibleItems = bestSellers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Hero section */}
      <div className="flex justify-center bg-amber-50">
        <main className="flex flex-col md:flex-row items-center justify-between py-16 max-w-9xl mx-30 gap-60">
          <div className="max-w-lg">
            <p className="text-gray-600 mb-3">— Welcome to The</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Discover <span className="text-pink-500">Sweet</span> Delights!
            </h1>
            <p className="text-gray-600 mb-8">
              Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.
            </p>
            <Link to={"/blog"} onClick={() => setSidebarOpen(false)} className="hover:text-pink-500">
              <button className="px-6 py-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition">
                Browse Our Classic Flavors →
              </button>
            </Link>
          </div>
          <div className="mt-10 md:mt-0 md:ml-10">
            <img src={shadowimg} className="w-[420px] drop-shadow-2xl" />

          </div>
        </main>
      </div>

      {/* Product section */}
      <div className="w-full min-h-[80vh] flex items-center justify-center bg-[linear-gradient(301.26deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)]">
        <div className="flex flex-col gap-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Our <span className="text-[#F83D8E]">Classic</span> Favorites
          </h1>
          <p className="text-sm text-[#646464] text-center max-w-xl mx-auto">
            Check out our top products that our customers love.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {filteredProducts.map((i) => (
              <div
                key={i.id}
                onClick={() => navigate(`/product/${i.id}`, { state: i })}
                className="relative w-full sm:w-72 bg-white rounded-2xl shadow-md p-4 cursor-pointer mx-auto"
              >
                <div className="bg-[#F7F2F7] rounded-lg py-5 relative">
                  <button className="absolute top-5 left-5 text-gray-500 hover:text-pink-500 bg-white p-2 rounded-full">
                    <Heart size={20} />
                  </button>
                  <img src={i.img} alt={i.title} className="w-full h-40 md:h-45 object-contain mx-auto rounded-lg" />
                </div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-xl mt-4 max-w-40">{i.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>4.9/5</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">{i.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-pink-600 font-bold text-lg">${i.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(i);
                    }}
                    className="p-3 rounded-full bg-[#683292] text-white hover:bg-pink-600 cursor-pointer"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Best Sellers (12 ta card / 4 ta per slide) */}
      <section className="text-center py-15 w-[100%] mt-[5%]">
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-pink-500">Best</span> Sellers
        </h2>
        <p className="text-gray-500 mb-8">
          Discover the favorites that keep our customers coming back for more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-20 w-[60%] m-auto">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col relative cursor-pointer hover:shadow-lg transition"
            >
              <button className="absolute top-3 left-3 bg-white rounded-full p-2 shadow hover:bg-pink-100">
                <Heart className="w-4 h-4 text-pink-500" />
              </button>
              <img src={item.img} alt={item.title} className="w-[100%] bg-[#ff08ff] rounded-lg h-32 mx-auto object-contain mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-pink-600 font-semibold">${item.price.toFixed(2)}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots (3 ta) */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-pink-500" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
