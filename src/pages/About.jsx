import { Facebook, Instagram, MoveLeft, MoveRight, Youtube } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Images import
import loveIcecream from "../imgs/love-icecream.png";
import missionTriangle from "../imgs/mission-triangle.png.png";
import girlsIcecream from "../imgs/girls-icecream.png";

// Team images
import member1 from "../imgs/110 (1).png";
import member2 from "../imgs/112.png";
import member3 from "../imgs/114.png";
import member4 from "../imgs/team-image4.jpg.png";
import member5 from "../imgs/team-image5.jpg.png";
import member6 from "../imgs/team-image6.jpg.png";

export default function AboutHeader() {
  const team = [
    { id: 1, name: "Marvin Joner", role: "Bakery Worker", img: member1 },
    { id: 2, name: "Patricia Woodrum", role: "Staff Worker", img: member2 },
    { id: 3, name: "Hannaz Stone", role: "Shop Worker", img: member3 },
    { id: 4, name: "Sophia Lee", role: "Ice Cream Designer", img: member4 },
    { id: 5, name: "James Carter", role: "Marketing", img: member5 },
    { id: 6, name: "Olivia Brown", role: "Cashier", img: member6 },
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
      <section className="w-full flex flex-col items-center justify-center py-16 md:py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black font-serif mb-4 md:mb-6">About Us</h1>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-sm md:text-base">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </section>

      {/* Journey */}
      <div className="mt-10 mb-10 px-4">
        <div className="w-full md:w-[85%] flex flex-col md:flex-row justify-center items-center m-auto gap-10">
          <div className="w-full md:w-[50%]">
            <img src={loveIcecream} alt="Love Icecream" className="w-full" />
          </div>

          <div className="w-full md:w-[50%] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              Our <span className="text-red-500">Journey</span> Began With a Simple Dream
            </h1>
            <p className="mb-5 text-gray-600">
              Our goal is to make the best ice cream using only the finest, natural ingredients.
              From rich, creamy classics to adventurous new creations, every flavor is meticulously crafted.
            </p>
            <p className="mb-5 text-gray-600">
              We take pride in offering a diverse range of options, including dairy-free, vegan, and gluten-free choices.
            </p>
            <Link to={"/Onecolumn"}>
              <button className="bg-[#F83D8E] rounded-full flex items-center justify-center md:justify-start gap-3 px-6 py-3 text-white m-auto md:m-0">
                Read More <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="w-full bg-[#683292] flex flex-col md:flex-row justify-center md:justify-end items-center px-4 md:px-0 py-10">
        <div className="w-full md:w-[75%] flex flex-col md:flex-row justify-between items-center relative">
          <div className="text-white w-full md:w-[50%] text-center md:text-left px-4 md:px-10">
            <img src={missionTriangle} className="absolute left-[5%] top-[10%] hidden md:block" alt="Mission Triangle" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Mission is to Create Moments</h1>
            <p className="mb-6 text-gray-200">
              We strive to foster a welcoming and joyful environment where customers can celebrate and make lasting memories.
            </p>
            <button className="bg-[#F83D8E] rounded-full flex items-center justify-center md:justify-start gap-3 px-6 py-3 text-white m-auto md:m-0">
              Read More <ArrowRight size={15} />
            </button>
          </div>
          <div className="mt-10 md:mt-0">
            <img src={girlsIcecream} alt="Girls Icecream" className="w-[80%] md:w-full mx-auto" />
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
            Our <span className="text-pink-500">Team</span> Members
          </h2>
          <p className="text-gray-500 mt-3">
            Get to know the friendly faces behind your favorite flavors.
          </p>
        </div>

        <div className="relative w-full md:w-[90%] mx-auto flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-3 absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow hover:bg-pink-100"
          >
            <MoveLeft />
          </button>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {team.slice(index, index + 3).map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center p-4 sm:p-6 w-[80%] sm:w-[260px] bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500 text-sm sm:text-base">{member.role}</p>

                <div className="flex gap-4 mt-4 text-pink-500">
                  <Facebook className="cursor-pointer hover:text-pink-700" />
                  <Instagram className="cursor-pointer hover:text-pink-700" />
                  <Youtube className="cursor-pointer hover:text-pink-700" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow hover:bg-pink-100"
          >
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}
