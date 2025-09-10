import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Sundaes",
    img: "src/imgs/sundes.png",
  },
  {
    title: "Ice Cream Cones",
    img: "src/imgs/cones.png",
  },
  {
    title: "Milkshakes",
    img: "src/imgs/mikshakes.png",
  },
  {
    title: "Seasonal Flavors",
    img: "src/imgs/flavers.png",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex justify-center bg-amber-50">
        <img
          src="src/imgs/shadow-icecreamchik.png"
          alt=""
          className="my-20 absolute left-0"
        />
        <main className="flex flex-col md:flex-row items-center justify-between py-16 max-w-9xl mx-30 gap-60">
          <div className="max-w-lg">
            <p className="text-gray-600 mb-3">— Welcome to The</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Discover <span className="text-pink-500">Sweet</span> Delights!
            </h1>
            <p className="text-gray-600 mb-8">
              Relish the timeless taste of handcrafted ice cream, made with passion
              and the finest ingredients.
            </p>
            <button className="px-6 py-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition">
              Browse Our Classic Flavors →
            </button>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10">
            <img
              src="src/imgs/shadowimg.png"
              className="w-[420px] drop-shadow-2xl"
            />
          </div>
        </main>
      </div>

      <div className="horo">
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-16">
          <div className="absolute -left-10 top-20 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          <div className="absolute -right-10 bottom-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          <img src="src/imgs/round.png" alt="" className="round" />
          <div className="flex-1 flex justify-center relative">
            <img
              src="src/imgs/girl-icecream.png"
              alt="Ice Cream Girl"
              className="w-[400px] relative z-10"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[380px] h-[380px] rounded-full bg-gray-100 -z-10"></div>
            </div>
          </div>

          <div className="flex-1 mt-10 md:mt-0 md:ml-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
              Relive the <span className="text-pink-500">Sweet</span> <br />
              Memories of Classic <br />
              <span className="text-pink-600">Ice Creams</span>
            </h1>
            <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations.
            </p>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition">
              Explore Our Menu →
            </button>
          </div>
          <img src="src/imgs/tringl.png" alt="" />
        </section>
        <img src="src/imgs/yarimaylana.png" className=" absolute right-0" alt="" />
      </div>

      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-2">
          Explore Our <span className="text-pink-500">Categories</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse through our different categories to find your favorite ice cream treats.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-56 object-cover"
              />
              <div className="flex justify-between items-center p-4">
                <h3 className="font-semibold text-gray-800">{cat.title}</h3>
                <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    
  );
}
