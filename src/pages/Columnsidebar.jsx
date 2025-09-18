import { useState } from "react";
import { Search, Calendar } from "lucide-react";

export default function Columnsidebar() {
  const postsData = [
    {
      img: "src/imgs/277.png",
      title: "Ice Cream Post",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montes...",
      date: "Dec 20, 2022",
    },
    {
      img: "src/imgs/284 (1).png",
      title: "Chocolate Dessert",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montes...",
      date: "Dec 20, 2022",
    },
    {
      img: "src/imgs/283.png",
      title: "Berry Ice",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montes...",
      date: "Dec 20, 2022",
    },
    {
      img: "src/imgs/281.png",
      title: "Fresh Flowers",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montes...",
      date: "Dec 20, 2022",
    },
    {
      img: "src/imgs/278.png",
      title: "Video Post",
      desc: "Cum sociis natoque penatibus et magnis dis parturient montes...",
      date: "Dec 20, 2022",
    },
  ];

  const [query, setQuery] = useState("");

  // Filter postlar
  const filteredPosts = postsData.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex  w-[70%] m-auto  min-h-screen p-8 gap-8">
      {/* Left side - posts */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl overflow-hidden p-4 flex flex-col"
            >
              <img
                src={post.img}
                alt={post.title}
                className="rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{post.desc}</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Calendar size={14} /> {post.date}
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            Hech narsa topilmadi 😢
          </p>
        )}
      </div>

      {/* Right side - sidebar */}
      <aside className="w-80 space-y-6">
        {/* Search */}
        <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-none outline-none text-sm"
          />
          <button className="bg-pink-500 p-2 rounded-lg text-white">
            <Search size={16} />
          </button>
        </div>

        {/* Popular posts */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h4 className="font-semibold mb-3">Popular Posts</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <img src="https://via.placeholder.com/50" className="rounded-lg" />
              <span>A new story that never been told</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="https://via.placeholder.com/50" className="rounded-lg" />
              <span>Beautiful places and icecream shots</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="https://via.placeholder.com/50" className="rounded-lg" />
              <span>The most happiest time of the day</span>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-between">
              <span>WordPress</span>
              <span>(11)</span>
            </li>
            <li className="flex justify-between">
              <span>Hosting</span>
              <span>(9)</span>
            </li>
            <li className="flex justify-between">
              <span>PHP</span>
              <span>(5)</span>
            </li>
            <li className="flex justify-between">
              <span>Photography</span>
              <span>(7)</span>
            </li>
          </ul>
        </div>

        {/* Recent tweets */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h4 className="font-semibold mb-3">Recent Tweets</h4>
          <p className="text-xs text-gray-600">
            ✦ Random tweet lorem ipsum dolor sit amet #design
          </p>
          <p className="text-xs text-gray-600 mt-2">
            ✦ Another short tweet goes here #uiux
          </p>
        </div>

        {/* Tags */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h4 className="font-semibold mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Tips",
              "WordPress",
              "Hosting",
              "PHP",
              "Products",
              "Photography",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-pink-100 text-pink-600 px-3 py-1 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
