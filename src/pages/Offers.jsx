import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = [
  { id: 1, name: "Strawberry Sundae", description: "Strawberry ice cream with fresh strawberries", oldPrice: 12.99, newPrice: 5.99, rating: 4.8, image: "src/imgs/41.png" },
  { id: 2, name: "Chocolate Chip Cookie Cone", description: "Chocolate chip cookie dough ice cream in a cone", oldPrice: 13.99, newPrice: 4.49, rating: 4.8, image: "src/imgs/isecream.png" },
  { id: 3, name: "Rocky Road Sundae", description: "Marshmallow and nutty rocky road ice cream", oldPrice: 14.99, newPrice: 5.69, rating: 4.8, image: "src/imgs/icecream2.png" },
  { id: 4, name: "Peach Melba Sundae", description: "Peach ice cream topped with raspberry sauce", oldPrice: 16.99, newPrice: 5.39, rating: 4.8, image: "src/imgs/icecreaqm3.png" },
  { id: 5, name: "Mango Delight", description: "Fresh mango ice cream with creamy texture", oldPrice: 12.49, newPrice: 4.99, rating: 4.7, image: "src/imgs/276.png" },
  { id: 6, name: "Vanilla Classic", description: "Smooth vanilla ice cream with rich flavor", oldPrice: 10.99, newPrice: 3.99, rating: 4.6, image: "src/imgs/279.png" },
  { id: 7, name: "Blueberry Bliss", description: "Blueberry ice cream with fruity chunks", oldPrice: 15.49, newPrice: 5.59, rating: 4.9, image: "src/imgs/284.png" },
  { id: 8, name: "Caramel Crunch", description: "Caramel ice cream with crunchy bites", oldPrice: 13.49, newPrice: 4.79, rating: 4.8, image: "src/imgs/321.png" },
  { id: 9, name: "Pistachio Heaven", description: "Creamy pistachio ice cream with nutty flavor", oldPrice: 14.99, newPrice: 5.99, rating: 4.7, image: "src/imgs/322.png" },
  { id: 10, name: "Oreo Blast", description: "Oreo cookie ice cream with chocolate swirl", oldPrice: 13.99, newPrice: 4.99, rating: 4.9, image: "src/imgs/323.png" },
  { id: 11, name: "Minty Fresh", description: "Mint ice cream with chocolate chips", oldPrice: 12.99, newPrice: 4.29, rating: 4.6, image: "src/imgs/blog-image4.jpg.png" },
  { id: 12, name: "Coffee Crunch", description: "Coffee ice cream with crunchy bites", oldPrice: 15.99, newPrice: 6.29, rating: 4.8, image: "src/imgs/standard_post_img04.jpg.png" },
];

export default function Offers() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [activeDot, setActiveDot] = useState(0);

  const toggleLike = (id) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((pid) => pid !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  // Har safar 4 ta card
  const itemsPerPage = 4;
  const totalPages = 3; // faqat 3 ta dot
  const startIndex = activeDot * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <section className="py-12 px-6 text-center bg-amber-300 w-[90%] m-auto rounded-xl">
        <h2 className="text-3xl font-bold mb-2 ">
          Upto <span className="text-pink-500">30%</span> Discount
        </h2>
        <p className="text-gray-700 mb-10">
          Discover the favorites that keep our customers coming back for more.
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4 relative hover:shadow-xl transition"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                30% OFF
              </span>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-4"
              />

              {/* Heart Icon */}
              <button
                onClick={() => toggleLike(product.id)}
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

              {/* Info */}
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm mb-2">
                <Star /> <span>{product.rating}/5</span>
              </div>

              {/* Prices */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="line-through text-gray-400">
                  ${product.oldPrice}
                </span>
                <span className="text-pink-600 font-bold">
                  ${product.newPrice}
                </span>
              </div>

              {/* Add to cart */}
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full">
                <ShoppingCart />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[0, 1, 2].map((dot) => (
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
    </div>
  );
}
