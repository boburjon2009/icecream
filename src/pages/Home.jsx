import { ArrowRight, Star, Heart, ShoppingCart, Locate, Facebook, Instagram } from "lucide-react";
import { MailOpen } from "lucide-react";
import { MapPin } from "lucide-react";
import { PhoneCall } from "lucide-react";
import Testimonials from "./Testimonials";
// product images
import product1 from '../imgs/prodect-1.png'
import product2 from '../imgs/prodect-2.png'
import product3 from '../imgs/prodect-3.png'
import product4 from '../imgs/prodect-4.png'
// context
import { CartContext } from '../context/CartContext'
import { useContext, useState } from "react";

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

  // product
  const products = [
    {
      id: 1,
      img: product1,
      title: "Chocolate Brownie Sundae",
      desc: "Rich chocolate ice cream with chunks of brownie.",
      price: 5.49,
      bg: "#F7F2F7"
    },
    {
      id: 2,
      img: product2,
      title: "Strawberry Shortcake",
      desc: "Strawberry ice cream layered with shortcake",
      price: 5.29,
      bg: "#F7F2F7"
    },
    {
      id: 3,
      img: product3,
      title: "Mint Chocolate Chip Cone",
      desc: "Refreshing mint ice cream with chocolate chips.",
      price: 3.99,
      bg: "#F7F2F7"
    },
    {
      id: 4,
      img: product4,
      title: "Classic Vanilla Ice Cream",
      desc: "Creamy vanilla ice cream topped with cherry.",
      price: 4.99,
      bg: "#F7F2F7"
    },
  ];

  // useContext
  const { setCart } = useContext(CartContext);

  // add to cart function
  const addToCart = (i) => {
    setCart((prev) => [...prev, i]);
  }

  // best sellers (demo data)
  const bestSellers = [
    {
      id: 1,
      title: "Chocolate Chip Cookie Cone",
      desc: "Chocolate chip cookie dough ice cream in a cone.",
      price: 4.49,
      img: "src/imgs/prodect-1.png",
      rating: 4,
    },
    {
      id: 2,
      title: "Rocky Road Sundae",
      desc: "Marshmallow and nutty rocky road ice cream.",
      price: 5.69,
      img: "src/imgs/prodect-2.png",
      rating: 5,
    },
    {
      id: 3,
      title: "Peach Melba Sundae",
      desc: "Peach ice cream topped with raspberry sauce.",
      price: 5.39,
      img: "src/imgs/prodect-3.png",
      rating: 4,
    },
    {
      id: 4,
      title: "Strawberry Sundae",
      desc: "Strawberry ice cream with fresh strawberries.",
      price: 5.99,
      img: "src/imgs/prodect-4.png",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div>
      {/* Hero section */}
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

      {/* About section */}
      <div className="horo">
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8">
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

      {/* Cart sections */}
      <div className="w-full h-[80vh] flex items-center justify-center bg-[linear-gradient(301.26deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)]">
        <img src="src/imgs/classic-leftimage.png.png" className="absolute left-0" alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-center">Our <span className="text-[#F83D8E]">Classic</span> Favorites</h1>
          <p className="text-sm text-[#646464] text-center">Check out our top products that our customers love.</p>

          {/* card  */}
          <div className="w-full grid grid-cols-4 gap-5 mt-10">
            {products.map((i, index) => (
              <div key={index} className="relative w-72 bg-white rounded-2xl shadow-md p-4">
                <div className="bg-[#F7F2F7] rounded-lg py-5">
                  <button className="absolute top-5 left-5 text-gray-500 hover:text-pink-500 bg-white p-2 rounded-full">
                    <Heart size={20} />
                  </button>

                  <img
                    src={i.img}
                    alt="Classic Vanilla Ice Cream"
                    className="w-full h-45 object-contain mx-auto  rounded-lg"
                  />
                </div>

                <div className="flex justify-between">
                  <h3 className="font-bold text-xl mt-4 max-w-40">{i.title}</h3>

                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>4.9/5</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  {i.desc}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-pink-600 font-bold text-lg">${i.price}</p>
                  <button onClick={() => addToCart(i)} className="p-3 rounded-full bg-[#683292] text-white hover:bg-pink-600 cursor-pointer">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
        <img src="src/imgs/classic-rightimage.png.png" className="absolute right-0" alt="" />
      </div>

      {/* Categories section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-2">
          Explore Our <span className="text-pink-500">Categories</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse through our different categories to find your favorite ice cream treats.
        </p>

        <div className="grid grid-cols-1 w-[90%] sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
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
              <div className="flex justify-between items-center p-4 ">
                <h3 className="font-semibold text-gray-800">{cat.title}</h3>
                <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>



      <div className="w-[100%] bg-[#683292] ">
        <div className=" w-[55%] m-auto flex">
          <div>
            <img src="src/imgs/dots.png" className="absolute left-[7%] mt-[15.5%]" alt="" />
            <img src="src/imgs/uchburchak.png" className="absolute left-[12%] mt-[9.5%]" alt="" />
            <h1 className="font-bold text-7xl w-[50%] mb-[5%] text-white mt-[20%]">Summer
              Special!</h1>
            <p className="text-2xl text-white">Buy One Sundae, Get One 50% Off!</p>
            <div className="flex items-center gap-2  mb-[20%]">
              <button className="bg-pink-500 flex gap-2 items-center mt-2  text-white p-3 rounded-full hover:bg-pink-600 transition">
                Get This Deal
                <ArrowRight size={18} />
              </button>
              <p className="text-white">Use code: SUMMER50 at checkout.</p>
            </div>
          </div>
          <img className="absolute left-[50%]  mt-[7%]" src="src/imgs/foiz.png" alt="" />
          <img src="src/imgs/line.png" className="absolute left-[54%]  mt-[2.9%]" alt="" />
          <img src="src/imgs/right-12.png " className="absolute right-0 mt-[5%]" alt="" />
        </div>
      </div>
      <section className="text-center py-15 w-[100%] mt-[5%]">
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-pink-500">Best</span> Sellers
        </h2>
        <p className="text-gray-500 mb-8">
          Discover the favorites that keep our customers coming back for more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 px-4 lg:px-20 w-[60%] m-auto ">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="bg-white   rounded-2xl shadow-md  p-4 flex flex-col relative"
            >
              <button className="absolute   top-3 left-3 bg-white rounded-full p-2 shadow hover:bg-pink-100">
                <Heart className="w-4 h-4 text-pink-500" />
              </button>

              <img
                src={item.img}
                alt={item.title}
                className="w-[100%]  bg-[#ff08ff]  rounded-lg  h-32 mx-auto  object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.desc}</p>

              <div className="flex   justify-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center  mt-auto">
                <span className="text-pink-600 font-semibold">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* dots */}
        <div className="flex justify-center mt-6 gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-pink-500" : "bg-gray-300"
                }`}
            ></span>
          ))}
        </div>
      </section >
      <Testimonials />
      <div className="w-[100%] py-15 flex relative justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold max-w-135 text-center">Sign up For <span className="text-[#ff08ff]"> Exclusive Deals</span> <br />
            and Updates</h1>
          <p className="text-[#646464] text-sm">Get 10% off your next order and stay updated with our latest offers.</p>
          <form className="flex justify-between mt-5 items-center gap-5">
            <input className="bg-[#FFFFFF] rounded-full flex-1 shadow-xl py-3 px-3" placeholder="Enter Your Email Address" type="text" />
            <button className="bg-pink-500 flex gap-2 items-center mt-2  text-white p-3 rounded-full hover:bg-pink-600 transition">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>
          <div className="flex gap-1  items-center justify-center">
            <input type="radio" />
            <p>I agree to the
              <span className="text-[#F83D8E] underline">
                Privacy Policy
              </span>
              .</p>
          </div>
        </div>
        <img src="src/imgs/round.png" className="absolute left-[20%] bottom-[25%]" alt="" />
        <img src="src/imgs/tringl.png" className="absolute right-[20%] top-[22%]" alt="" />
      </div>
      <div className="w-[100%] relative py-[10%]  flex flex-col items-center justify-center">
        <div className=" mb-6">
          <h1 className="text-5xl">Follow Us on Instagram</h1>
          <p className="text-[#646464] mt-7">Join our Instagram community for updates, special deals, and more!</p>

        </div>
        <div className="flex items-center gap-5 z-1 justify-between">
          <img src="src/imgs/Figure.png" alt="" />
          <img src="src/imgs/Figure.png" alt="" />
          <img src="src/imgs/Figure.png" alt="" />
          <img src="src/imgs/Figure.png" alt="" />
          <img src="src/imgs/Figure.png" alt="" />
        </div>
        <img src="src/imgs/round-2.png" className="absolute left-[10%] top-[25%]" alt="" />
        <img src="src/imgs/Background.png" className="absolute right-[10%] top-[65%]" alt="" />
      </div>

<div className="bg-[#683292]  p-9">

      <div className="w-[100%]  flex justify-center ">
        <div className="w-[70%]  flex justify-between items-center py-9">
        <div>
            <img src="src/imgs/Group 1 (1).png" alt="" />
        </div>
          <div className="flex">
        <div>
<h1 className="text-2xl">Navigation</h1>
           <div className="flex gap-15">
            <div>
             <p>Home</p>
            <p>Home</p>
            <p>Home</p>
           </div>
            <div>
              <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            </div>
           </div>
        </div>
          </div>
          <div className="flex flex-col gap-5" >
            <div className="flex items-center">
          <MapPin />
         <div>
           <h3>address</h3>
          <p>121 King Street Melbourne, 3000,
Australia</p>
         </div>
        
            </div >
             <div className="flex items-center">
              <MailOpen />
          <div><h3>address</h3>
          <p>121 King Street Melbourne, 3000,
Australia</p></div>
          
            </div>
        

          </div>
            <div  className="flex flex-col gap-5" >
              <div className="flex items-center "> 
                <PhoneCall />
                <div>
                  <h3>+123456780123</h3>
                <p>Got Questions? Call us 24/7</p>
                </div>
                </div>
                <div className="flex">
                  <Instagram className=" mx-2 flex items-center"/>
                  <div className="w-[30px] h-[30px] bg-[#FFFFFF1A] rounded-full mx-2 flex items-center"></div>
                  <Facebook/>
                </div>
            </div>
        </div>
     <img src="src/imgs/977b0075aff18e92a704e7c5b3f4e5bb61216844.png" className="absolute left-0 w-50 " alt="" />
      </div>
        <div className="w-[70%] h-[2px] bg-[#74737326] m-auto"></div>
      <div>
        <p className="flex justify-center text-[70%]">Copyright © 2024 BlackRise Themes Inc All rights reserved.</p>
     
      </div>
</div>

    </div>
  );
}
