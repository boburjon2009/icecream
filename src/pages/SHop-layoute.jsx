import { useContext, useState } from "react";
import { Heart, ShoppingCart, Star, Search, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Classic Vanilla Ice Cream", desc: "Creamy vanilla ice cream topped with cherry.", price: 4.99, img: "src/imgs/prodect-4.png", rating: 4.9 },
  { id: 2, name: "Chocolate Brownie Sundae", desc: "Rich chocolate ice cream with chunks of brownie.", price: 5.49, img: "src/imgs/prodect-1.png", rating: 4.9 },
  { id: 3, name: "Strawberry Shortcake", desc: "Strawberry ice cream layered with shortcake.", price: 5.29, img: "src/imgs/prodect-2.png", rating: 4.9 },
  { id: 4, name: "Mint Chocolate Chip Cone", desc: "Refreshing mint ice cream with chocolate chips.", price: 3.99, img: "src/imgs/prodect-3.png", rating: 4.9 },
  { id: 5, name: "Strawberry Sundae", desc: "Strawberry ice cream with fresh strawberries.", price: 5.99, img: "src/imgs/41.png", rating: 4.9 },
  { id: 6, name: "Chocolate Chip Cookie Cone", desc: "Chocolate chip cookie dough ice cream in a cone.", price: 4.49, img: "src/imgs/isecream.png", rating: 4.9 },
  { id: 7, name: "Blueberry Bliss", desc: "Blueberry ice cream with creamy texture.", price: 6.49, img: "src/imgs/prodect-5.png", rating: 5 },
  { id: 8, name: "Caramel Crunch", desc: "Caramel swirls with crunchy toppings.", price: 6.99, img: "src/imgs/prodect-6.png", rating: 5 },
];

const categories = ["Canned Ice Cream", "Frozen Yogurt", "Ice Cream Cakes", "Milkshakes", "Popsicles", "Sundaes"];

export default function ShopPage() {
  const { setCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const addToCart = (p) => {
    setCart((prev) => [...prev, p]);
  };

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
          Shopping Page
        </h1>
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
          <span className="text-pink-500 font-medium cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Shop</span>
        </div>
      </section>

      <div className="flex gap-6 p-6 bg-gray-50 w-[90%] m-auto">
        {/* Sidebar — Desktop */}
        <aside className="hidden md:block w-64 bg-white shadow rounded-lg p-4">
          <SidebarContent products={products} categories={categories} />
        </aside>

        {/* Sidebar — Mobile */}
       {/* Sidebar — Mobile */}



        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="bg-white w-64 h-full p-4 shadow-lg overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => setSidebarOpen(false)}>
                  <X size={22} className="text-gray-600" />
                </button>
              </div>
              <SidebarContent products={products} categories={categories} />
            </div>
            <div
              onClick={() => setSidebarOpen(false)}
              className="flex-1"
            ></div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-full pl-10 pr-4 py-2 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            <select
              className="border rounded px-3 py-2 w-full md:w-auto"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
            <button
  onClick={() => setSidebarOpen(true)}
  className=" h-10 md:hidden flex items-center gap-1 bg-pink-500 text-white px-3 py-1.5 rounded-full shadow text-sm"
>
  <Menu size={16} /> Filters
</button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`, { state: p })}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition relative cursor-pointer"
              >
                <button className="absolute right-3 top-3 text-gray-400 hover:text-pink-500">
                  <Heart />
                </button>
                <img src={p.img} alt={p.name} className="w-full h-40 object-contain mb-4" />
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
                <div className="flex items-center gap-1 my-2">
                  <Star className="w-4 h-4 text-yellow-400" /> {p.rating}/5
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">${p.price.toFixed(2)}</span>
                  <button
                    className="bg-pink-500 text-white p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p);
                    }}
                  >
                    <ShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-pink-500 text-white" : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// 🔹 Sidebar tarkibi alohida komponent sifatida
function SidebarContent({ products, categories }) {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-bold mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-pink-500" /> {c}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Filter By Price</h3>
        <input type="range" min="3" max="10" className="w-full accent-pink-500" />
      </div>

      <div>
        <h3 className="font-bold mb-2">Featured Products</h3>
        <ul className="space-y-3 text-sm">
          {products.slice(0, 4).map((p) => (
            <li key={p.id} className="flex items-center gap-3">
              <img src={p.img} alt={p.name} className="w-10 h-10 object-cover rounded" />
              <div>
                <p>{p.name}</p>
                <p className="text-pink-500">${p.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
