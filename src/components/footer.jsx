import { MapPin, MailOpen, PhoneCall, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#683292] p-9 relative">
      <div className="w-full flex justify-center">
        <div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 py-9">
          {/* Logo */}
          <div>
            <img src="src/imgs/Group 1 (1).png" alt="Logo" className="w-32 sm:w-40" />
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h1 className="text-xl sm:text-2xl text-[#CFB6E2] mb-4">Navigation</h1>
              <div className="flex gap-10 text-[#CFB6E2] text-sm sm:text-base">
                <div>
                  <p>Home</p>
                  <p>About</p>
                  <p>Shop</p>
                </div>
                <div>
                  <p>Blog</p>
                  <p>Contact</p>
                  <p>FAQ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Mail */}
          <div className="flex flex-col gap-5 text-[#CFB6E2] text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>121 King Street Melbourne, 3000, Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailOpen />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-5 text-[#CFB6E2]">
            <div className="flex items-start gap-3">
              <PhoneCall />
              <div>
                <h3 className="font-semibold">+123456780123</h3>
                <p>Got Questions? Call us 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#FFFFFF1A] rounded-full flex items-center justify-center">
                <Instagram size={18} />
              </div>
              <div className="w-8 h-8 bg-[#FFFFFF1A] rounded-full flex items-center justify-center">
                <Facebook size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] lg:w-[70%] h-[2px] bg-[#74737326] m-auto"></div>

      {/* Copy */}
      <div className="mt-4">
        <p className="flex justify-center text-xs sm:text-sm text-[#CFB6E2]">
          Copyright © 2024 BlackRise Themes Inc. All rights reserved.
        </p>
      </div>

      {/* Dekor rasm */}
      <img
        src="src/imgs/977b0075aff18e92a704e7c5b3f4e5bb61216844.png"
        className="absolute left-0 bottom-0 w-32 sm:w-48 opacity-70"
        alt=""
      />
    </div>
  );
}
