import { useOutletContext, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// 🖼 Rasm importlari
import img1 from "../imgs/image copy 2.png";
import img2 from "../imgs/image copy 3.png";
import img3 from "../imgs/image copy 4.png";
import img4 from "../imgs/image copy 5.png";
import img5 from "../imgs/image copy 6.png";
import img6 from "../imgs/image copy 7.png";
import img7 from "../imgs/image copy 8.png";
import img8 from "../imgs/image copy 9.png";
import img9 from "../imgs/image copy 10.png";
import img10 from "../imgs/image copy 11.png";
import img11 from "../imgs/image copy.png";
import img12 from "../imgs/278.png";
import img13 from "../imgs/321.png";
import img14 from "../imgs/280.png";
import img15 from "../imgs/41.png";
import img16 from "../imgs/284.png";
import img17 from "../imgs/323.png";
import img18 from "../imgs/362.png";
import img19 from "../imgs/322.png";
import img20 from "../imgs/284.png";

export default function CardsPage() {
  const { searchQuery = "" } = useOutletContext();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 20 ta mahsulot
  const products = [
    { id: 1, name: "Strawberry Sundae", price: 4.5, img: img1 },
    { id: 2, name: "Chocolate Cone", price: 3.8, img: img2 },
    { id: 3, name: "Vanilla Delight", price: 4.2, img: img3 },
    { id: 4, name: "Mango Shake", price: 5.0, img: img4 },
    { id: 5, name: "Blueberry Bliss", price: 4.9, img: img5 },
    { id: 6, name: "Caramel Crunch", price: 4.7, img: img6 },
    { id: 7, name: "Pistachio Heaven", price: 5.2, img: img7 },
    { id: 8, name: "Oreo Dream", price: 5.5, img: img8 },
    { id: 9, name: "Coffee Blast", price: 3.9, img: img9 },
    { id: 10, name: "Hazelnut Swirl", price: 4.8, img: img10 },
    { id: 11, name: "Matcha Magic", price: 5.1, img: img11 },
    { id: 12, name: "Banana Split", price: 4.6, img: img12 },
    { id: 13, name: "Mint Fresh", price: 4.3, img: img13 },
    { id: 14, name: "Peach Smoothie", price: 5.0, img: img14 },
    { id: 15, name: "Raspberry Tart", price: 4.7, img: img15 },
    { id: 16, name: "Coconut Cream", price: 4.9, img: img16 },
    { id: 17, name: "Brownie Fudge", price: 5.3, img: img17 },
    { id: 18, name: "Almond Joy", price: 4.8, img: img18 },
    { id: 19, name: "Lemon Zest", price: 4.4, img: img19 },
    { id: 20, name: "Cherry Blast", price: 5.0, img: img20 },
  ];

  // 🔍 qidiruv
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🛒 Savatga qo‘shish
  const handleBuy = (product) => {
    addToCart(product);
  };

  // 🔗 Card bosilganda Product sahifasiga otkazish
  // 🔗 Card bosilganda Product sahifasiga otkazish
const goToProduct = (product) => {
  navigate(`/product/${product.id}`, { state: product });
};


  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
            onClick={() => goToProduct(product)} // 📌 card bosilsa product page ga o‘tadi
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>

            {/* 🛒 Buy button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // ❌ card click ishlamasligi uchun
                handleBuy(product);
              }}
              className="mt-auto flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-lg transition"
            >
              <ShoppingCart size={18} />
              Buy
            </button>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          ❌ Mahsulot topilmadi
        </p>
      )}
    </div>
  );
}
