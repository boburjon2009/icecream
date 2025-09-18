import {ArrowRight } from "lucide-react";
export default function Faq() {
  const faqs = [
    "Do you offer dairy-free or vegan options?",
    "Can I order ice cream online?",
    "What ingredients do you use in your ice cream?",
    "Do you have nutritional information available?",
    "Do you have gluten-free ice cream?",
    "Can I book your store for private events?",
  ];

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Some of the queries you want to know about us.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((q, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-gray-100 transition rounded-lg shadow-sm py-4 px-6 text-left cursor-pointer"
            >
              <p className="text-gray-700 font-medium">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-pink-600 relative overflow-hidden py-16 w-[100%] text-center text-white">
        {/* Background decoration */}

        {/* Content */}
        <div className="relative z-10 w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            
          {/* Left Ice Cream */}
          <img
            src="src/imgs/361.png"
            alt="ice cream left"
            className="w-90 lg:w-90"
          />
       <img className="absolute left-[25%] top-[20%]" src="src/imgs/359.png" alt="" />

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-4xl font-bold leading-snug">
              Limited <br /> Time <span className="text-yellow-300">Offer!</span>
            </h3>
            <p className="mt-4 text-lg">
              Get <span className="font-bold">20% Off</span> All Vegan Ice Creams!
            </p>
            <button className="mt-6 bg-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition">
              Get This Deal
            </button>
            <p className="mt-2 text-sm">Use code: <b>VEGAN20</b> at checkout.</p>
          </div>
<img className="absolute right-[30%] bottom-[20%]" src="src/imgs/360.png" alt="" />
          {/* Right Ice Cream */}
           <img 
            src="src/imgs/362.png"
            alt="ice cream left"
            className="w-90  lg:w-90"
          />
        </div>
        
      </section>
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
    </div>
  );
}
