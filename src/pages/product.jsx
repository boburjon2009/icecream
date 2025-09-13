import React, { useState } from "react";
import { Search, ShoppingCart, Star } from "lucide-react";

const product = {
  id: 101,
  name: "Classic Vanilla Ice Cream",
  price: 5.99,
  rating: 4.8,
  reviews: 4562,
  description:
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.",
  images: [
    "https://i.ibb.co/fSPvjqn/vanilla1.png",
    "https://i.ibb.co/qNcsS4L/vanilla2.png",
    "https://i.ibb.co/Yk90F6P/vanilla3.png",
    "https://i.ibb.co/QQvcL5y/vanilla4.png",
  ],
  colors: ["#fefefe", "#f28b82", "#a7c7e7"],
  sizes: ["S", "M", "L"],
};

const relatedProducts = [
  {
    id: 1,
    name: "Strawberry Sundae",
    description: "Strawberry ice cream with fresh strawberries",
    price: 5.99,
    image: "https://i.ibb.co/2St6cPH/strawberry.png",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Chocolate Chip Cookie Cone",
    description: "Chocolate chip cookie dough ice cream in a cone",
    price: 4.49,
    image: "https://i.ibb.co/RyzQkNw/choco-cone.png",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Rocky Road Sundae",
    description: "Marshmallow and nutty rocky road ice cream",
    price: 5.69,
    image: "https://i.ibb.co/VmG9G1L/rocky.png",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Peach Melba Sundae",
    description: "Peach ice cream topped with raspberry sauce",
    price: 5.39,
    image: "https://i.ibb.co/rdg3mhq/peach.png",
    rating: 4.6,
  },
];

export default function Product() {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product: product.name,
      qty,
      selectedColor,
      selectedSize,
    });
    alert(`${qty} × ${product.name} added to cart!`);
  };

  return (
    <div className="p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT IMAGE SECTION */}
        <div>
          <img
            src={mainImage}
            alt="main"
            className="rounded-xl shadow-lg w-full h-[400px] object-contain mb-4"
          />
          <div className="flex gap-3 justify-center">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className={`w-20 h-20 border rounded-lg cursor-pointer object-contain ${
                  img === mainImage ? "border-pink-500" : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT INFO SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center gap-2 mb-2 text-yellow-500">
            <Star />
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-pink-600 text-2xl font-bold mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* COLORS */}
          <div className="mb-4">
            <p className="font-semibold">Color:</p>
            <div className="flex gap-3 mt-2">
              {product.colors.map((c, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === c ? "border-pink-500" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                ></div>
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div className="mb-4">
            <p className="font-semibold">Size:</p>
            <div className="flex gap-3 mt-2">
              {product.sizes.map((s, i) => (
                <button
                  key={i}
                  className={`px-4 py-1 rounded border ${
                    selectedSize === s
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-3 mb-4">
            <button
              className="px-3 py-1 bg-gray-200 rounded"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              -
            </button>
            <span className="px-4">{qty}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
            >
              <ShoppingCart /> Add to Cart
            </button>
            <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-pink-500">
              {/* <Head /> Wishlist */}
            </button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-12">
        <div className="flex gap-6 border-b">
          <button
            className={`pb-2 ${
              activeTab === "description"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`pb-2 ${
              activeTab === "info"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Additional Information
          </button>
          <button
            className={`pb-2 ${
              activeTab === "reviews"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className="mt-4 text-gray-600">
          {activeTab === "description" && (
            <p>
              This is a detailed description of the product. It explains taste,
              ingredients and why you will love it!
            </p>
          )}
          {activeTab === "info" && (
            <p>Additional nutritional info, storage and allergy details.</p>
          )}
          {activeTab === "reviews" && (
            <p>Customer reviews will be shown here.</p>
          )}
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Related <span className="text-pink-500">Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((rp) => (
            <div
              key={rp.id}
              className="bg-white rounded-2xl shadow-md p-4 text-center"
            >
              <img
                src={rp.image}
                alt={rp.name}
                className="h-32 w-full object-contain mb-3"
              />
              <h3 className="font-semibold">{rp.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{rp.description}</p>
              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                <Star /> <span>{rp.rating}</span>
              </div>
              <p className="text-pink-600 font-bold mb-2">${rp.price}</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                <ShoppingCart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
