import { useState } from "react";
import { Search, MessageCircle, Heart, Share2 } from "lucide-react";

// BlogSingle.jsx
export default function BlogSingle() {
 const comments = [
  {
    id: 1,
    name: "Roseane Williams",
    text: "Lorem ipsum dolor sit amet...",
    image: "src/imgs/singleblog-review1.png", 
  },
  {
    id: 2,
    name: "Sarasha Noria",
    text: "Lorem ipsum dolor sit amet...",
    image: "src/imgs/singleblog-review2.png", 
  },
];


  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      { id: Date.now(), name: "You", text: newComment },
    ]);
    setNewComment("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-8">
        <img
          src="src/imgs/290.png"
          alt="Post"
          className="rounded-lg w-full object-cover"
        />

        <h1 className="text-3xl font-bold">
          Why You Need Virtual Assistant for Your Company
        </h1>
        <p className="text-gray-500 text-sm">
          📅 Sep 20, 2023 • 👤 Admin • 💬 2 Comments
        </p>

        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          labore tempora voluptatem id ratione officiis incidunt fugiat maxime.
        </p>

        <blockquote className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500 italic text-gray-600">
          “Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui.”
        </blockquote>

        <img
          src="src/imgs/293.png"
          alt="Post 2"
          className="rounded-lg w-full object-cover"
        />

        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque
          blanditiis odio error. Nostrum laboriosam, tempore.
        </p>

        {/* Tags + Social */}
        <div className="flex flex-wrap justify-between items-center border-t pt-4">
          <div className="flex gap-2">
            {["Business", "Articles", "Design"].map((tag) => (
              <span
                key={tag}
                className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-gray-500">
            <Share2 className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <MessageCircle className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-pink-100 p-6 rounded-xl flex items-center gap-4">
          <img
            src="src/imgs/297.png"
            alt="Author"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">Billy Watson</h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              nihil, dolorum saepe laudantium labore maiores?
            </p>
          </div>
        </div>

        {/* Comments */}
        <h3 className="text-xl font-bold">💬 {comments.length} Comments</h3>
<div className="space-y-6">
  {comments.map((c) => (
    <div key={c.id} className="flex gap-4 items-start">
      <img
        src="src/imgs/singleblog-review2.png.png" 
        alt={c.name}
        className="w-12 h-12 rounded-full object-cover"
      />
         
      <div>
        <h4 className="font-semibold">{c.name}</h4>
        <p className="text-gray-600">{c.text}</p>
        <button className="text-sm text-pink-500 mt-1">Reply</button>
      </div>
    </div>
  ))}
</div>


        {/* Comment Form */}
        <form
          onSubmit={handleAddComment}
          className="bg-gray-50 p-6 rounded-xl space-y-4"
        >
          <textarea
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded-lg p-3 text-sm"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border rounded-lg p-3 text-sm"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Search */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-3">Search News</h4>
          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 outline-none"
            />
            <button className="bg-pink-500 text-white px-4">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-3">Popular Category</h4>
          <ul className="space-y-2 text-gray-700">
            <li>Digital Marketing</li>
            <li>Consultation</li>
            <li>Business Strategy</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-3">Follow Us</h4>
          <div className="flex gap-3 text-pink-500">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        {/* Tags */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {["Design", "News", "Trends", "Business", "Consulting"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Feeds */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="font-bold mb-3">Feeds</h4>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 items-center">
                <img
                  src="src/imgs/302.png"
                  alt="feed"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-sm font-medium">
                  Why You Need Virtual Assistant for Your Company
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
