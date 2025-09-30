// src/pages/Cart.jsx
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { X, Minus, Plus, ArrowLeft, ArrowRight } from "lucide-react";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // miqdorni oshirish/kamaytirish
  const updateQty = (id, action) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty:
              action === "inc"
                ? item.qty + 1
                : item.qty > 1
                ? item.qty - 1
                : 1,
          };
        }
        return item;
      })
    );
  };

  // o‘chirish
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // hisoblash
  const subTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = cart.length > 0 ? 20 : 0;
  const grandTotal = (subTotal - discount + shipping).toFixed(2);

  // kupon funksiyasi
  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(subTotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 p-10">
      {/* chap tomon */}
      <div className="flex-1 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Shopping Cart <span className="text-gray-500">({cart.length} Items)</span>
        </h2>
        <div className="divide-y">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Color: <span className="font-medium">{item.color}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Size: <span className="font-medium">{item.size}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <p className="text-pink-500 font-semibold">{item.price.toFixed(2)}$</p>
                <div className="flex items-center border rounded-full">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="px-3 py-1"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="px-3 py-1"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <p className="font-semibold">
                  {(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  <X />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-purple-600 cursor-pointer">
          <ArrowLeft size={16} />
          <span>Continue Shopping</span>
        </div>
      </div>

      {/* o‘ng tomon */}
      <div className="w-full md:w-[350px] bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-4">Order Summary</h3>
        <div className="flex items-center mb-4 border rounded-lg overflow-hidden">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Apply Coupons"
            className="flex-1 px-3 py-2 outline-none"
          />
          <button
            onClick={applyCoupon}
            className="bg-purple-600 text-white px-4 py-2"
          >
            Apply
          </button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="flex justify-between font-semibold mt-4 border-t pt-4">
          <span>Grand Total</span>
          <span className="text-pink-500">${grandTotal}</span>
        </div>

        <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full flex items-center justify-center gap-2">
          Proceed to Checkout <ArrowRight size={16} />
        </button>

        <p className="text-xs text-gray-500 mt-4">
          🔒 Safe and Secure Payments, Easy Returns. 100% Authentic Products
        </p>
      </div>
    </div>
  );
}
