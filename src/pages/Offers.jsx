import React, { useState, useContext } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Strawberry Sundae",
    description: "Strawberry ice cream with fresh strawberries",
    oldPrice: 12.99,
    newPrice: 5.99,
    rating: 4.8,
    image: "src/imgs/41.png",
  },
  {
    id: 2,
    name: "Chocolate Chip Cookie Cone",
    description: "Chocolate chip cookie dough ice cream in a cone",
    oldPrice: 13.99,
    newPrice: 4.49,
    rating: 4.8,
    image: "src/imgs/isecream.png",
  },
  {
    id: 3,
    name: "Rocky Road Sundae",
    description: "Marshmallow and nutty rocky road ice cream",
    oldPrice: 14.99,
    newPrice: 5.69,
    rating: 4.8,
    image: "src/imgs/icecream2.png",
  },
  {
    id: 4,
    name: "Peach Melba Sundae",
    description: "Peach ice cream topped with raspberry sauce",
    oldPrice: 16.99,
    newPrice: 5.39,
    rating: 4.8,
    image: "src/imgs/icecreaqm3.png",
  },
  {
    id: 5,
    name: "Mango Sorbet",
    description: "Refreshing mango sorbet with tropical flavor",
    oldPrice: 10.99,
    newPrice: 4.29,
    rating: 4.7,
    image: "src/imgs/icecream5.png",
  },
];

export default function Offers() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [activeDot, setActiveDot] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleLike = (id) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((pid) => pid !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  const addToCart = (product) => {
    const newItem = {
      id: product.id,
      title: product.name,
      desc: product.description,
      img: product.image,
      price: product.newPrice,
      rating: product.rating,
    };
    setCart([...cart, newItem]);
  };

  const itemsPerPage = 4;
  const startIndex = activeDot * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12 px-6 text-center bg-amber-300 w-[90%] m-auto rounded-xl">
      <h2 className="text-3xl font-bold mb-2 ">
        Upto <span className="text-pink-500">30%</span> Discount
      </h2>
      <p className="text-gray-700 mb-10">
        Discover the favorites that keep our customers coming back for more.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            // ✅ faqat rasmni yuboryapmiz
            onClick={() => navigate(`/product/${product.id}`, { state: { image: product.image } })}
            className="bg-white rounded-2xl shadow-md p-4 relative hover:shadow-xl transition cursor-pointer"
          >
            <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-contain mb-4"
            />

            {/* Like button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(product.id);
              }}
              className="absolute top-4 left-4"
            >
              <Heart
                className={`w-6 h-6 transition ${
                  likedProducts.includes(product.id)
                    ? "text-pink-500 fill-pink-500"
                    : "text-gray-400 hover:text-pink-500"
                }`}
              />
            </button>

            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>

            <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm mb-2">
              <Star />
              <span>{product.rating}/5</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="line-through text-gray-400">
                ${product.oldPrice}
              </span>
              <span className="text-pink-600 font-bold">
                ${product.newPrice}
              </span>
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="flex justify-between items-center mt-4"
            >
              <p className="text-pink-600 font-bold text-lg">
                ${product.newPrice}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="p-3 rounded-full bg-[#683292] text-white hover:bg-pink-600 cursor-pointer"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {[0, 1].map((dot) => (
          <span
            key={dot}
            onClick={() => setActiveDot(dot)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              activeDot === dot ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
