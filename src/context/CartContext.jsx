// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🛒 Har safar alohida qo‘shadi
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product }]);
  };

  // ❌ O‘chirish
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item, index) => index !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}