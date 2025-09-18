import { useState } from "react";

const categories = ["All", "Articles", "Announcements", "News", "Consultation", "Development"];

const posts = [
  {
    title: "Our strength: Your Business",
    date: "September 20, 2023",
    category: "Announcements",
    img: "src/imgs/276.png",
  },
  {
    title: "How's the Economy?",
    date: "September 18, 2023",
    category: "News",
    img: "src/imgs/277.png",
  },
  {
    title: "Our strength: Your Business",
    date: "September 17, 2023",
    category: "Articles",
    img: "src/imgs/278.png",
  },
  {
    title: "How's the Economy?",
    date: "September 16, 2023",
    category: "News",
    img: "src/imgs/279 (1).png",
  },
  {
    title: "How's the Economy?",
    date: "September 15, 2023",
    category: "Announcements",
    img: "src/imgs/280.png",
  },
  {
    title: "How's the Economy?",
    date: "September 14, 2023",
    category: "Development",
    img: "src/imgs/281.png",
  },
  {
    title: "Our strength: Your Business",
    date: "September 13, 2023",
    category: "Consultation",
    img: "src/imgs/282.png",
  },
  {
    title: "Our strength: Your Business",
    date: "September 12, 2023",
    category: "Development",
    img: "src/imgs/283.png",
  },
  {
    title: "Our strength: Your Business",
    date: "September 11, 2023",
    category: "News",
    img: "src/imgs/284 (1).png",
  },
  {
    title: "Our strength: Your Business",
    date: "September 10, 2023",
    category: "Articles",
    img: "src/imgs/285.png",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="p-6 max-w-6xl  mx-auto">
      {/* Categories */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-pink-500 font-medium">{post.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
