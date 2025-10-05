import { Facebook, Instagram, MoveLeft, MoveRight, Youtube } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import product1 from "../imgs/love-icecream.png";
import product2 from "../imgs/110 (1).png";
import product3 from "../imgs/112.png";
import product4 from "../imgs/114.png";
import product5 from "../imgs/team-image4.jpg.png";
import product6 from "../imgs/team-image5.jpg.png";
import product7 from "../imgs/team-image6.jpg.png";

export default function AboutHeader() {
  const team = [
    { id: 1, name: "Marvin Joner", role: "Bakery Worker", img: product2 },
    { id: 2, name: "Patricia Woodrum", role: "Staff Worker", img: product3 },
    { id: 3, name: "Hannaz Stone", role: "Shop Worker", img: product4 },
    { id: 4, name: "Sophia Lee", role: "Ice Cream Designer", img: product5 },
    { id: 5, name: "James Carter", role: "Marketing", img: product6 },
    { id: 6, name: "Olivia Brown", role: "Cashier", img: product7 },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? team.length - 3 : prev - 3));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 3 >= team.length ? 0 : prev + 3));
  };

  return (
    <div>
      {/* Top Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 md:py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-serif mb-4 md:mb-6 text-center">
          About Us
        </h1>
        <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 rounded-full shadow-md text-sm sm:text-base">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </section>

      {/* Journey Section */}
      <div className="mt-10 w-[70%] m-auto mb-10 flex flex-col md:flex-row items-center justify-center px-4 md:px-12 relative">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={product1} alt="Our Journey" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 lg:pl-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-500">Journey</span> Began With a Simple Dream
          </h1>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
            Our goal is to make the best ice cream using only the finest, natural ingredients. From rich, creamy classics to adventurous new creations, every flavor is meticulously crafted in-house.
          </p>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
            We take pride in offering a diverse range of options, including dairy-free, vegan, and gluten-free choices, so everyone can find their perfect scoop.
          </p>
          <Link to={"/Onecolumn"}>
            <button className="bg-[#F83D8E] rounded-full flex gap-3 px-6 py-3 items-center text-white mt-2 sm:mt-3 hover:bg-pink-600 transition">
              Read More <ArrowRight size={18} />
            </button>
          </Link>
        </div>
        <img className="absolute right-0 top-0 w-24 sm:w-32 md:w-48 lg:w-60 opacity-50" src="src/imgs/right-icecream.png" alt="" />
      </div>

      {/* Mission Section */}
      <div className="w-full bg-[#683292]  text-white py-12 md:py-16 px-4 md:px-12 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
        <div className=" relative   w-[50%] m-auto lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our Mission is to Create Moments
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            We strive to foster a welcoming and joyful environment where customers of all ages can gather, celebrate, and make lasting memories. Our commitment extends beyond serving great ice cream.
          </p>
          <button className="bg-[#F83D8E] rounded-full flex gap-3 px-6 py-3 items-center hover:bg-pink-600 transition mt-2 sm:mt-3">
            Read More <ArrowRight size={18} />
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src="src/imgs/girls-icecream.png" alt="Girls Icecream" className="w-full rounded-lg" />
        </div>
        {/* Decorative Images */}
        <img src="src/imgs/mission-triangle.png.png" className="absolute left-5 top-5 w-12 sm:w-16 md:w-24 opacity-70" alt="" />
        <img src="src/imgs/mission-cross.png.png" className="absolute left-5 top-32 w-10 sm:w-12 md:w-20 opacity-50" alt="" />
        <img src="src/imgs/mission-wave.png.png" className="absolute right-0 bottom-0 w-24 sm:w-32 md:w-48 opacity-50" alt="" />
      </div>

      {/* Statistics Section */}
      <div className="mt-10 mb-10 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
          Our <span className="text-[#F83D8E]">Statistics</span>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">What makes us special through our impressive statistics.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {[
            { label: "Awards Win", value: "91+" },
            { label: "Satisfied Clients", value: "95%" },
            { label: "Years of Experience", value: "48+" },
            { label: "Employees Working", value: "143+" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl w-36 sm:w-40 md:w-48 border-b-4 border-[#F83D8E]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</h2>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-10 md:py-20 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
            Our <span className="text-pink-500">Team</span> Members
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">Get to know the friendly faces behind your favorite flavors.</p>
        </div>

        <div className="relative w-full flex items-center justify-center overflow-hidden">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 p-2 md:p-3 bg-white rounded-full shadow hover:bg-gray-100 z-10"
          >
            <MoveLeft size={20} />
          </button>

          <div className="flex gap-4 sm:gap-6 md:gap-10 transition-transform duration-300 ease-in-out flex-wrap justify-center">
            {team.slice(index, index + 3).map((member) => (
              <div key={member.id} className="flex flex-col items-center p-4 w-40 sm:w-44 md:w-60 flex-shrink-0 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover mb-2 sm:mb-3"
                />
                <h3 className="font-semibold text-sm sm:text-lg md:text-xl">{member.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">{member.role}</p>
                <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3 text-pink-500">
                  <Facebook className="cursor-pointer hover:text-pink-700" />
                  <Instagram className="cursor-pointer hover:text-pink-700" />
                  <Youtube className="cursor-pointer hover:text-pink-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 md:p-3 bg-white rounded-full shadow hover:bg-gray-100 z-10"
          >
            <MoveRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
