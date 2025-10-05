import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "card",
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 💰 Umumiy narx hisoblash
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = (subtotal - discount).toFixed(2);

  // 🎟️ Kupon tekshirish (bir nechta kupon ishlaydi)
  const applyCoupon = () => {
    const validCoupons = {
      boburjon11: 30,
      boburjon12: 25,
      boburjon123: 10,
      boburjon44: 15,
      boburjon09: 50,
    };

    const codes = coupon
      .trim()
      .toLowerCase()
      .split(/\s+/) // bir nechta couponni bo‘lish uchun
      .filter(Boolean);

    if (codes.length === 0) {
      setMessage("⚠️ Kupon kiriting!");
      return;
    }

    let totalPercent = 0;
    let invalid = [];

    codes.forEach((code) => {
      if (validCoupons[code]) {
        totalPercent += validCoupons[code];
      } else {
        invalid.push(code);
      }
    });

    if (invalid.length > 0) {
      setMessage(`❌ Noto‘g‘ri coupon(lar): ${invalid.join(", ")}`);
    }

    if (totalPercent === 0) {
      setDiscount(0);
      return;
    }

    if (totalPercent > 100) totalPercent = 100; // 100% dan oshmasin

    const discountAmount = subtotal * (totalPercent / 100);
    setDiscount(discountAmount);
    setMessage(`✅ Kuponlar qo‘llandi! Jami ${totalPercent}% chegirma berildi.`);
  };

  // 🔹 Telegramga yuboruvchi funksiya
  const sendToTelegram = async (text) => {
    const token = "7847488223:AAG2TEKN_odlEPyToNHojoW8meErJxR--ck";
    const chatId = "7737152230"; // sening Telegram ID'ing
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  };

  // 🔹 Checkout bosilganda
  const handleCheckout = async (e) => {
    e.preventDefault();

    const productsList = cart.length
      ? cart
          .map(
            (item, i) =>
              `🧁 ${i + 1}. ${item.name || item.title || "Noma’lum"} — $${item.price}`
          )
          .join("\n")
      : "❌ Savatcha bo‘sh.";

    const message = `
🛍️ Yangi buyurtma!

👤 Ism: ${form.firstName} ${form.lastName}
📧 Email: ${form.email}
🏠 Manzil: ${form.address}, ${form.city}, ${form.zip}
💳 To‘lov turi: ${form.payment}

${productsList}

💵 Jami summa: $${subtotal.toFixed(2)}
💸 Chegirma: $${discount.toFixed(2)}
🧾 To‘lovdan keyingi umumiy: $${total}

—————————————
⏰ Buyurtma vaqti: ${new Date().toLocaleString()}
    `;

    await sendToTelegram(message);

    // 2 daqiqadan keyin avtomatik habar yuborish
    setTimeout(async () => {
      await sendToTelegram("🚚 ✅ Buyurtmangiz yo‘lda! Taxminan 15-20 daqiqada yetib boradi. 🍦");
    }, 2 * 60 * 1000);

    setCart([]);
    navigate("/ThankYou");
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form
        onSubmit={handleCheckout}
        className="space-y-6 bg-white p-8 rounded-xl shadow-md"
      >
        {/* Billing Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full md:col-span-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full md:col-span-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <select
            name="payment"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </div>

        {/* Coupon Input */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Coupon</h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Bir nechta couponni bo‘sh joy bilan yozing"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <button
              type="button"
              onClick={applyCoupon}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Apply
            </button>
          </div>
          {message && <p className="mt-2 text-sm">{message}</p>}
        </div>

        {/* Total */}
        <div className="mt-8 text-lg font-medium">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Discount: -${discount.toFixed(2)}</p>
          <p className="text-pink-600 text-xl font-bold">
            Total: ${total}
          </p>
        </div>

        {/* Proceed Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full flex items-center justify-center gap-2"
        >
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
}
