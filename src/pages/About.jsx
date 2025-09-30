import { Facebook, Instagram, MoveLeft, MoveRight, Youtube } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutHeader() {
  // Team data
  const team = [
    { id: 1, name: "Marvin Joner", role: "Bakery Worker", img: "src/imgs/110 (1).png" },
    { id: 2, name: "Patricia Woodrum", role: "Staff Worker", img: "src/imgs/112.png" },
    { id: 3, name: "Hannaz Stone", role: "Shop Worker", img: "src/imgs/114.png" },
    { id: 4, name: "Sophia Lee", role: "Ice Cream Designer", img: "src/imgs/team-image4.jpg.png" },
    { id: 5, name: "James Carter", role: "Marketing", img: "src/imgs/team-image5.jpg.png" },
    { id: 6, name: "Olivia Brown", role: "Cashier", img: "src/imgs/team-image6.jpg.png" },
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
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">About Us</h1>
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </section>

      {/* Journey */}
      <div className="mt-[5%] mb-[5%]">
        <div className="w-[70%] flex justify-center items-center m-auto">
          <div className="w-[90%]">
            <img src="src/imgs/love-icecream.png" alt="" />
          </div>
          <div className="ml-[10%]">
            <h1 className="text-5xl font-bold w-[80%] mb-5">
              Our <span className="text-red-500">Journey</span> Began With a Simple Dream
            </h1>
            <p className="w-[65%] mb-5">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous
              new creations, every flavor is meticulously crafted in-house to
              ensure the highest quality and freshness.
            </p>
            <p className="w-[45%] mb-5">
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </p>
            <Link to={"/Onecolumn"}>
              <button className="bg-[#F83D8E] rounded-full flex gap-6 p-3 items-center text-white">
                Read More <ArrowRight size={15} />
              </button>
            </Link>
          </div>
          <img className="absolute right-0" src="src/imgs/right-icecream.png" alt="" />
        </div>
      </div>

      {/* Mission */}
      <div className="w-[100%] bg-[#683292] flex justify-end">
        <div className="w-[75%] flex justify-end">
          <div className="m-auto items-center">
            <img src="src/imgs/mission-triangle.png.png" className="absolute left-[10%] mt-[3%]" alt="" />
            <img src="src/imgs/mission-cross.png.png" className="absolute left-[8%] mt-[11%]" alt="" />
            <h1 className="text-5xl w-[50%] text-white mb-[5%]">Our Mission is to Create Moments</h1>
            <p className="text-white w-[50%] mb-[5%]">
              We strive to foster a welcoming and joyful environment where customers of all ages can gather, celebrate, and make lasting memories. Our commitment extends beyond serving great ice cream.
            </p>
            <button className="bg-[#F83D8E] rounded-full flex gap-6 p-3 items-center text-white">
              Read More <ArrowRight size={15} />
            </button>
            <img src="src/imgs/mission-wave.png.png" className="absolute right-[30%] mt-[-3%]" alt="" />
          </div>
          <div>
            <img src="src/imgs/girls-icecream.png" alt="" />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-[5%] mb-[5%]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-2">
            Our <span className="text-[#F83D8E]">Statistics</span>
          </h1>
          <p>What makes us special through our impressive statistics.</p>
        </div>
        <div className="w-[50%] flex m-auto justify-between mt-[3%]">
          <div className="bg-white p-4 rounded-2xl border-b-2 border-[#F83D8E]">
            <h1 className="text-5xl flex font-bold justify-center">
              91<span className="text-[60%] text-[#F83D8E]">+</span>
            </h1>
            <p className="text-[#646464]">Awards Win</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border-b-2 border-[#F83D8E]">
            <h1 className="text-5xl flex font-bold justify-center">
              95<span className="text-[60%] text-[#F83D8E]">%</span>
            </h1>
            <p className="text-[#646464]">Satisfied Clients</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border-b-2 border-[#F83D8E]">
            <h1 className="text-5xl flex font-bold justify-center">
              48<span className="text-[60%] text-[#F83D8E]">+</span>
            </h1>
            <p className="text-[#646464]">Years of Experience</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border-b-2 border-[#F83D8E]">
            <h1 className="text-5xl flex font-bold justify-center">
              143<span className="text-[60%] text-[#F83D8E]">+</span>
            </h1>
            <p className="text-[#646464]">Employees Working</p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black font-serif">
            Our <span className="text-pink-500">Team</span> Members
          </h2>
          <p className="text-gray-500 mt-3">
            Get to know the friendly faces behind your favorite flavors.
          </p>
        </div>

        <div className="relative w-[90%] mx-auto flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="p-3  absolute left-0"
          >
            <MoveLeft />
          </button>

          {/* Team Members 3 per slide */}
          <div className="flex gap-10 justify-center">
            {team.slice(index, index + 3).map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center p-6 w-[280px]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>

                <div className="flex gap-4 mt-4 text-pink-500">
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
            className="p-3 rounded-full  hover:bg-pink-100 absolute right-0"
          >
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}
