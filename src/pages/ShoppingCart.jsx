// src/pages/Cart.jsx
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { X, Minus, Plus, ArrowLeft, ArrowRight } from "lucide-react";

export default function Cart() {
  const { cart, setCart, updateQty, removeFromCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // hisoblash (NaN bo‘lmasligi uchun Number(...))
  const subTotal = cart.reduce(
    (acc, item) => acc + (Number(item?.price) || 0) * (Number(item?.qty) || 1),
    0
  );
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
          Shopping Cart{" "}
          <span className="text-gray-500">({cart.length} Items)</span>
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
                    Color:{" "}
                    <span className="font-medium">{item?.color || "-"}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Size:{" "}
                    <span className="font-medium">{item?.size || "-"}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                {/* narx */}
                <p className="text-pink-500 font-semibold">
                  {(Number(item?.price) || 0).toFixed(2)} $
                </p>

                {/* qty boshqarish */}
                <div className="flex items-center border rounded-full">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="px-3 py-1"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-4">{Number(item?.qty) || 1}</span>

                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="px-3 py-1"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* umumiy narx */}
                <p className="font-semibold">
                  {(
                    (Number(item?.price) || 0) * (Number(item?.qty) || 1)
                  ).toFixed(2)}{" "}
                  $
                </p>

                {/* o‘chirish */}
                <button
                  onClick={() => removeFromCart(item.id)}
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
 <Link to={"/Checkout"}>
            <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full flex items-center justify-center gap-2">
          Proceed to Checkout <ArrowRight size={16} />
        </button>
          </Link>
       

        <p className="text-xs text-gray-500 mt-4">
          🔒 Safe and Secure Payments, Easy Returns. 100% Authentic Products
        </p>
      </div>
    </div>
  );
}
