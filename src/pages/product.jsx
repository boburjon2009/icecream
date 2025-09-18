// 📌 src/pages/Product.jsx
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { state: product } = useLocation(); // navigate orqali kelgan product
  const { setCart } = useContext(CartContext);

  // 🖼 Default rasm va narx
  const defaultImage = "/src/imgs/prodect-1.png";
  const defaultPrice = product?.newPrice || product?.price || 0;

  // 🖼 Thumbnail massiv
  const thumbnails = [
    {
      img:
        product?.image && product?.image.trim() !== ""
          ? product.image
          : defaultImage,
      price: defaultPrice,
    },
    { img: "/src/imgs/prodect-1.png", price: 6.99 },
    { img: "/src/imgs/prodect-2.png", price: 7.49 },
    { img: "/src/imgs/prodect-3.png", price: 8.0 },
    { img: "/src/imgs/prodect-4.png", price: 9.5 },
  ];

  // 🔑 Boshlang‘ich rasm/price
  const [mainImage, setMainImage] = useState(thumbnails[0].img);
  const [mainPrice, setMainPrice] = useState(thumbnails[0].price);

  // 🛒 Cart ga qo‘shish
  const addToCart = () => {
    setCart((prev) => [
      ...prev,
      {
        ...product,
        img: mainImage,
        price: mainPrice,
      },
    ]);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row gap-10">
      {/* Chap tarafdagi rasmlar */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Kichkina rasmlar */}
        <div className="flex md:flex-col gap-3">
          {thumbnails.map((thumb, i) => (
            <img
              key={i}
              src={thumb.img}
              alt={`thumbnail-${i}`}
              onClick={() => {
                setMainImage(thumb.img);
                setMainPrice(thumb.price);
              }}
              className={`w-20 h-20 object-contain rounded-lg cursor-pointer border transition ${
                mainImage === thumb.img
                  ? "border-pink-500"
                  : "border-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Asosiy rasm */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={mainImage}
            alt={product?.name?.trim() || product?.title?.trim() || "Product image"}
            className="w-[400px] h-[400px] object-contain rounded-xl shadow-md bg-white"
          />
        </div>
      </div>

      {/* O‘ng tarafdagi ma’lumotlar */}
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-3xl font-bold">
          {product?.name?.trim() || product?.title?.trim() || "No name"}
        </h1>
        <p className="text-gray-600">
          {product?.description?.trim() ||
            product?.desc?.trim() ||
            "No description available"}
        </p>

        {/* Reyting */}
        <div className="flex items-center gap-2">
          <Star className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm text-gray-700">
            {(product?.rating || 4.8)}/5
          </span>
        </div>

        {/* Narx */}
        <p className="text-2xl font-bold text-pink-600">${mainPrice}</p>

        {/* Add to Cart tugmasi */}
        <button
          onClick={addToCart}
          className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition w-fit"
        >
          <ShoppingCart size={20} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
