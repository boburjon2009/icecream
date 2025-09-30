import { ShoppingCart, Heart, Star } from "lucide-react";
import { useMemo } from "react";

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  desc: `This is the description for product ${i + 1}`,
  price: (Math.random() * 10 + 2).toFixed(2),
  img: "https://via.placeholder.com/150",
  rating: Math.floor(Math.random() * 5) + 1,
}));

export default function SearchPage({ searchQuery, setCart }) {
  const filtered = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-pink-500">{searchQuery}</span>
      </h1>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col relative cursor-pointer hover:shadow-lg transition"
            >
              <button className="absolute top-3 left-3 bg-white rounded-full p-2 shadow hover:bg-pink-100">
                <Heart className="w-4 h-4 text-pink-500" />
              </button>

              <img
                src={item.img}
                alt={item.title}
                className="w-[100%] rounded-lg h-32 mx-auto object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.desc}</p>

              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <span className="text-pink-600 font-semibold">
                  ${item.price}
                </span>
                <button
                  onClick={() => setCart((prev) => [...prev, item])}
                  className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
