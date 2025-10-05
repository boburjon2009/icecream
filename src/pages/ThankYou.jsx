import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import thankYouImage from "../imgs/thankyou-image.png.png";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6">
      <div className="flex flex-col items-center text-center max-w-xl">
        <div className="m-[5%]">
          <img src={thankYouImage} alt="Thank You" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 font-serif">
          Thank You!
        </h1>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
          We're delighted you've decided to treat yourself to our delectable ice creams.<br />
          Your order has been received and is now being prepared with care.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-md transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
