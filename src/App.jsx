import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayoute";

// sahifalarni import qilish kerak
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import  ShoppingCart from "./pages/ShoppingCart";
import Ourteam from "./pages/Ourteam";
import Review from "./pages/Review";
import ShopPage from "./pages/SHop-layoute";
import Checkout from "./pages/CHecout";
import Offers from "./pages/Offers";
import Product from "./pages/product";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ourteam" element={<Ourteam />} />
          <Route path="Review" element={<Review />} />
          <Route path="SHopPage" element={<ShopPage />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Offers" element={<Offers />} />
          <Route path="Product" element={<Product />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  )
}
