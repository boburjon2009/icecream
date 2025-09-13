import { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    { id: 1, name: "Classic Vanilla", qty: 3, desc: "Creamy vanilla ice cream topped with cherry.", price: 13.0 },
    { id: 2, name: "Chocolate Brownie", qty: 6, desc: "Rich chocolate ice cream with chunks of brownie.", price: 23.0 },
    { id: 3, name: "Strawberry Cake", qty: 4, desc: "Strawberry ice cream layered with shortcake.", price: 22.0 },
    { id: 4, name: "Mint Chocolate", qty: 2, desc: "Refreshing mint ice cream with chocolate chips.", price: 7.0 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
            <section className="w-full flex flex-col items-center justify-center py-50 bg-gradient-to-r from-pink-100 via-white to-blue-100">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
                 CHeckout
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
                    <span className="text-pink-500 font-medium">Home</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600">CHeckout</span>
                </div>
            </section>
    <div className="flex flex-col md:flex-row gap-10 p-10 w-[70%] m-auto">
      {/* Billing Form */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Billing Address:</h2>
        <form className="space-y-6">
          {/* Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="border rounded-lg p-3 w-full" />
            <input type="text" placeholder="Last name" className="border rounded-lg p-3 w-full" />
          </div>

          {/* Email & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email address" className="border rounded-lg p-3 w-full" />
            <select className="border rounded-lg p-3 w-full">
              <option>Select State</option>
              <option>Tashkent</option>
              <option>Samarkand</option>
              <option>Bukhara</option>
            </select>
          </div>

          {/* City & Zip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border rounded-lg p-3 w-full">
              <option>Select City</option>
              <option>Tashkent City</option>
              <option>Andijan</option>
              <option>Namangan</option>
            </select>
            <input type="text" placeholder="Zip/ postal code" className="border rounded-lg p-3 w-full" />
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method:</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Credit card
              </label>

              {paymentMethod === "card" && (
                <div className="space-y-4 border rounded-lg p-4">
                  <input type="text" placeholder="Card number" className="border rounded-lg p-3 w-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <select className="border rounded-lg p-3 w-full">
                      <option>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                    <select className="border rounded-lg p-3 w-full">
                      <option>Year</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                    </select>
                  </div>
                  <input type="text" placeholder="Security Code" className="border rounded-lg p-3 w-full" />
                </div>
              )}

              <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Place Order */}
          <button
            type="button"
            className="bg-pink-500 text-white w-full py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Place Order Now →
          </button>
        </form>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-96 bg-white rounded-xl shadow p-6 h-fit">
        <h3 className="text-lg font-semibold mb-4">Items</h3>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-start">
              <div>
                <p className="font-medium">
                  {item.qty} x {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
          <span>Grand Total</span>
          <span className="text-pink-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
    </div>
  );
}
