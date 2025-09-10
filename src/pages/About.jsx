import { MoveLeft, MoveRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function AboutHeader() {
  return (
    <div>
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
          About Us
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </section>
      <div className=" mt-[5%] mb-[5%]">
        <div className="w-[70%]  flex justify-center items-center m-auto ">
          <div className="w-[90%]">
            <img src="src/imgs/love-icecream.png" alt="" />
          </div>
          <div className=" ml-[10%]">
            <h1 className="text-5xl font-bold w-[80%] mb-5 ">
              Our <span className="text-red-500">Journey</span> Began
              With a Simple Dream
            </h1>
            <p className="w-[65%] mb-5">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous
              new creations, every flavor is meticulously crafted in-house to
              ensure the highest quality and freshness.
            </p>        <p className="w-[45%] mb-5">
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </p>
            <button className="bg-[#F83D8E] rounded-full flex gap-6 p-3 items-center text-white">Read More <ArrowRight size={15} /></button>
          </div>
          <img className="absolute right-0" src="src/imgs/right-icecream.png" alt="" />
        </div>



      </div>
      <div className="w-[100%] bg-[#683292] flex justify-end">
        <div className="w-[75%]  flex justify-end">
          <div className="m-auto items-center">
            <img src="src/imgs/mission-triangle.png.png" className="absolute left-[10%] mt-[3%]" alt="" />
            <img src="src/imgs/mission-cross.png.png"className="absolute left-[8%] mt-[11%]" alt="" />
            <h1 className="text-5xl w-[50%] text-white mb-[5%]">Our Mission is to
              Create Moments</h1>
            <p className="text-white w-[50%]  mb-[5%]">
              We strive to foster a welcoming and joyful environment
              where customers of all ages can gather, celebrate, and
              make lasting memories. Our commitment extends beyond
              serving great ice cream.</p>
            <button className="bg-[#F83D8E] rounded-full flex gap-6 p-3 items-center text-white">Read More <ArrowRight size={15} /></button>
          <img src="src/imgs/mission-wave.png.png" className="absolute right-[30%] mt-[-3%]" alt="" />    
          </div>
          <div>
            <img src="src/imgs/girls-icecream.png" alt="" />
          </div>
        </div>
      </div>

    

    <div className="">
      <div>
        <h1>Our Statistics</h1>
        <p>What makes us special through our impressive statistics.</p>
      </div>
      <div>
        <h1>91+</h1>
        <p>Awards Win</p>
      </div>
       <div>
        <h1>91+</h1>
        <p>Awards Win</p>
      </div>
       <div>
        <h1>91+</h1>
        <p>Awards Win</p>
      </div>
       <div>
        <h1>91+</h1>
        <p>Awards Win</p>
      </div>
    </div>
    </div>
  );
}
