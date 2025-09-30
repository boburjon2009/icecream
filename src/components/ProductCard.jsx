import { Heart, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  const addToCart = (item, e) => {
    e.stopPropagation();
    setCart((prev) => [...prev, item]);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`, { state: product })}
      className="relative w-72 bg-white rounded-2xl shadow-md p-4 cursor-pointer"
    >
      <div className="bg-[#F7F2F7] rounded-lg py-5">
        <button className="absolute top-5 left-5 text-gray-500 hover:text-pink-500 bg-white p-2 rounded-full">
          <Heart size={20} />
        </button>
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-45 object-contain mx-auto rounded-lg"
        />
      </div>

      <div className="flex justify-between">
        <h3 className="font-bold text-xl mt-4 max-w-40">{product.title}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <span>4.9/5</span>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-2">{product.desc}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-pink-600 font-bold text-lg">${product.price}</p>
        <button
          onClick={(e) => addToCart(product, e)}
          className="p-3 rounded-full bg-[#683292] text-white hover:bg-pink-600 cursor-pointer"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
