import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

// Rasmlarni import qilamiz
import img1 from "../imgs/prodect-1.png";
import img2 from "../imgs/prodect-2.png";
import img3 from "../imgs/prodect-3.png";
import img4 from "../imgs/prodect-4.png";

export default function Product() {
  const { state: product } = useLocation();
  const { setCart } = useContext(CartContext);

  const defaultImage = img1;
  const defaultPrice = product?.newPrice || product?.price || 0;

  const [mainPrice, setMainPrice] = useState(defaultPrice);
  const [mainImage, setMainImage] = useState(product?.img || defaultImage);

  const thumbnails = [
    { img: product?.img || defaultImage, price: defaultPrice },
    { img: img1, price: 6.99 },
    { img: img2, price: 7.49 },
    { img: img3, price: 8.0 },
    { img: img4, price: 9.5 },
  ];

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
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Kichkina rasmlar */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
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
                mainImage === thumb.img ? "border-pink-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Asosiy rasm */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={mainImage}
            alt={product?.name || "Product image"}
            className="w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-contain rounded-xl shadow-md bg-white"
          />
        </div> 
      </div>

      {/* O‘ng tarafdagi ma’lumotlar */}
      <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">{product?.name || "No name"}</h1>
        <p className="text-gray-600 text-sm sm:text-base">{product?.description || product?.desc}</p>

        {/* Reyting */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Star className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm text-gray-700">
            {(product?.rating || 4.8)}/5
          </span>
        </div>

        {/* Narx */}
        <p className="text-xl sm:text-2xl font-bold text-pink-600">${mainPrice}</p>

        {/* Add to Cart */}
        <button
          onClick={addToCart}
          className="flex items-center justify-center md:justify-start gap-2 bg-pink-500 text-white px-6 py-2.5 sm:py-3 rounded-full hover:bg-pink-600 transition w-full sm:w-fit"
        >
          <ShoppingCart size={20} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
