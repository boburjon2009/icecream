import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const TOKEN = "7847488223:AAG2TEKN_odlEPyToNHojoW8meErJxR--ck"; // Bot token
  const CHAT_ID = "7737152230"; // Seniki chat_id
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const text = `
📩 Yangi Kontakt So'rovi:
👤 Ism: ${firstName} ${lastName}
📧 Email: ${email}
📞 Telefon: ${phone}
💬 Xabar: ${message}
    `;

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });
      const data = await res.json();
      console.log("Telegram javobi:", data);

      if (data.ok) {
        setSuccess("Xabaringiz muvaffaqiyatli yuborildi ✅");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setSuccess("Xatolik yuz berdi ❌");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Internetda xatolik ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Contact Section */}
      <section className="py-16 bg-white text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold">
          Get in <span className="text-pink-600">Touch</span> With Us
        </h2>
        <p className="text-gray-500 mt-2">
          Reach out and connect with us today for any inquiries or assistance!
        </p>

        {/* Contact Content */}
        <div className="mt-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6 text-left">
            {/* Location */}
            <div className="flex items-start gap-4 bg-white shadow rounded-xl p-6">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-gray-500 text-sm">
                  136 King Street, Melbourne
                  <br /> Victoria 3000, Australia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white shadow rounded-xl p-6">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p className="text-gray-500 text-sm">(+61 2) 8376 6284</p>
                <p className="text-gray-500 text-sm">(+61 2) 8376 6284</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white shadow rounded-xl p-6">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email us at</h4>
                <p className="text-gray-500 text-sm">info@yoursite.com</p>
                <p className="text-gray-500 text-sm">support@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-6 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full text-sm focus:outline-pink-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full text-sm focus:outline-pink-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full text-sm focus:outline-pink-500"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full text-sm focus:outline-pink-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full text-sm focus:outline-pink-500"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition disabled:opacity-50"
            >
              {loading ? "Yuborilmoqda..." : "Submit Now →"}
            </button>
            {success && <p className="text-green-600 mt-2">{success}</p>}
          </form>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531598!3d-37.81627937975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6f98d6e3e0!2sKing%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1673528594000!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-t-lg"
        ></iframe>
      </div>
    </div>
  );
}
