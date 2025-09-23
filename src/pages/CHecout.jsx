import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
        {/* Personal Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-2 w-full md:col-span-2"
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded-lg px-4 py-2 w-full md:col-span-2"
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Payment Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <select className="border rounded-lg px-4 py-2 w-full">
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </div>
                 <Link
                  to={'/ThankYou'}
                  className="block px-4 py-2 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 "
        >
          Place Order
        </button></Link>
        {/* Place Order */}
        
      </form>
    </div>
  );
}












