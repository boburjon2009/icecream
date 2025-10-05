import { useState } from "react";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

// Rasmlarni import qilamiz
import img277 from "../imgs/277.png";
import img278 from "../imgs/278.png";
import img279 from "../imgs/279 (1).png";
import img280 from "../imgs/280.png";
import img281 from "../imgs/281.png";
import img282 from "../imgs/282.png";
import img283 from "../imgs/283.png";
import img284 from "../imgs/284 (1).png";
import img285 from "../imgs/285.png";
import img290 from "../imgs/290.png";
import img293 from "../imgs/293.png";
import img301 from "../imgs/301.png";

export default function BlogCards() {
  const allPosts = [
    { id: 1, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img277 },
    { id: 2, title: "The Importance of Virtual Assistants", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img278 },
    { id: 3, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img279 },
    { id: 4, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img280 },
    { id: 5, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img281 },
    { id: 6, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img282 },
    { id: 7, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img283 },
    { id: 8, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img284 },
    { id: 9, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img285 },
    { id: 10, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img290 },
    { id: 11, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img293 },
    { id: 12, title: "Why You Need Virtual Assistant for Your Company", category: "Virtual Assistant", author: "Admin", date: "Dec 20, 2022", image: img301 },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.slice(0, visibleCount).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Author & Category */}
              <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
                <User size={14} className="text-pink-500" />
                <span>By : {post.author}</span>
                <span className="mx-1">|</span>
                <span className="text-pink-500">💖 {post.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-4">{post.title}</h3>

              {/* Date + Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1 text-pink-500" />
                  {post.date}
                </div>
                <Link
                  to={'/Columnsidebar'}
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  <button className="px-4 py-1 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < allPosts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
