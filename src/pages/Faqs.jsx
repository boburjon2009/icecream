import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Faq() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const faqs = [
    "Do you offer dairy-free or vegan options?",
    "Can I order ice cream online?",
    "What ingredients do you use in your ice cream?",
    "Do you have nutritional information available?",
    "Do you have gluten-free ice cream?",
    "Can I book your store for private events?",
  ];

  // --- Telegramga yuborish funksiyasi ---
  const sendToTelegram = async (email) => {
    const token = "7847488223:AAG2TEKN_odlEPyToNHojoW8meErJxR--ck"; // token
    const chatId = "7737152230"; // o‘zingning Telegram ID'ing (sendMessage dan kelgan ID)
    const message = `📩 Yangi obunachi!\nEmail: ${email}`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      });
      console.log("Email Telegramga yuborildi!");
    } catch (error) {
      console.error("Telegramga yuborishda xatolik:", error);
    }
  };

  // --- Submit funksiyasi ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }

    // Telegramga yuborish
    sendToTelegram(email);

    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="w-full">
      {/* ================== FAQ SECTION ================== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Some of the queries you want to know about us.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto px-5">
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

      {/* ================== OFFER SECTION ================== */}
      <section className="bg-pink-600 relative overflow-hidden py-16 text-center text-white">
        <div className="relative z-10 w-[85%] md:w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src="src/imgs/361.png"
            alt="ice cream left"
            className="w-48 md:w-72 lg:w-80 transition-all"
          />

          <img
            className="absolute left-[25%] top-[20%] w-16 md:w-24 opacity-70"
            src="src/imgs/359.png"
            alt=""
          />

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Limited <br /> Time{" "}
              <span className="text-yellow-300">Offer!</span>
            </h3>
            <p className="mt-4 text-lg">
              Get <span className="font-bold">20% Off</span> All Vegan Ice Creams!
            </p>
            <button className="mt-6 bg-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition">
              Get This Deal
            </button>
            <p className="mt-2 text-sm">
              Use code: <b>VEGAN20</b> at checkout.
            </p>
          </div>

          <img
            className="absolute right-[30%] bottom-[20%] w-16 md:w-24 opacity-70"
            src="src/imgs/360.png"
            alt=""
          />

          <img
            src="src/imgs/362.png"
            alt="ice cream right"
            className="w-48 md:w-72 lg:w-80 transition-all"
          />
        </div>
      </section>

      {/* ================== SUBSCRIBE SECTION ================== */}
      <div className="w-full py-16 flex relative justify-center items-center bg-white">
        <div className="flex flex-col gap-5 w-[90%] md:w-[70%] text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Sign up For{" "}
            <span className="text-[#ff08ff]">Exclusive Deals</span> <br />
            and Updates
          </h1>
          <p className="text-[#646464] text-sm md:text-base">
            Get 10% off your next order and stay updated with our latest offers.
          </p>

          {subscribed ? (
            <p className="text-green-600 font-medium">
              ✅ Thank you for subscribing!
            </p>
          ) : (
            <form
              className="flex flex-col md:flex-row justify-between mt-5 items-center gap-4"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-[#FFFFFF] rounded-full flex-1 shadow-xl py-3 px-4 w-full outline-none"
                placeholder="Enter Your Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-pink-500 flex gap-2 items-center justify-center text-white px-6 py-3 rounded-full hover:bg-pink-600 transition w-full md:w-auto"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          <div className="flex gap-2 items-center justify-center text-sm">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <span className="text-[#F83D8E] underline cursor-pointer">
                Privacy Policy
              </span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
  