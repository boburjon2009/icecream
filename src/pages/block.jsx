import { useState } from "react";

// Rasmlarni import qilamiz
import img276 from "../imgs/276.png";
import img277 from "../imgs/277.png";
import img278 from "../imgs/278.png";
import img279 from "../imgs/279 (1).png";
import img280 from "../imgs/280.png";
import img281 from "../imgs/281.png";
import img282 from "../imgs/282.png";
import img283 from "../imgs/283.png";
import img284 from "../imgs/284 (1).png";
import img285 from "../imgs/285.png";

const categories = ["All", "Articles", "Announcements", "News", "Consultation", "Development"];

const posts = [
  { title: "Our strength: Your Business", date: "September 20, 2023", category: "Announcements", img: img276 },
  { title: "How's the Economy?", date: "September 18, 2023", category: "News", img: img277 },
  { title: "Our strength: Your Business", date: "September 17, 2023", category: "Articles", img: img278 },
  { title: "How's the Economy?", date: "September 16, 2023", category: "News", img: img279 },
  { title: "How's the Economy?", date: "September 15, 2023", category: "Announcements", img: img280 },
  { title: "How's the Economy?", date: "September 14, 2023", category: "Development", img: img281 },
  { title: "Our strength: Your Business", date: "September 13, 2023", category: "Consultation", img: img282 },
  { title: "Our strength: Your Business", date: "September 12, 2023", category: "Development", img: img283 },
  { title: "Our strength: Your Business", date: "September 11, 2023", category: "News", img: img284 },
  { title: "Our strength: Your Business", date: "September 10, 2023", category: "Articles", img: img285 },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-52 sm:h-60 md:h-64 object-cover"
            />
            <div className="p-4 sm:p-5">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-pink-500 font-medium">{post.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
