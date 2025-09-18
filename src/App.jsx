import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayoute";

// sahifalarni import qilish kerak
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import  ShoppingCart from "./pages/ShoppingCart";
import Ourteam from "./pages/Ourteam";
import Review from "./pages/review";
import ShopPage from "./pages/SHop-layoute";
import Checkout from "./pages/CHecout";
import Offers from "./pages/Offers";
import Product from "./pages/product";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/block";
import Columnsidebar from "./pages/Columnsidebar";
import BlogSingle from "./pages/singleblog";
import Loadmore from "./pages/load-more";
import Onecolumn from "./pages/One-column";
import Faq from "./pages/Faqs";
import Contact from "./pages/Contactus";


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
                 <Route path="/checkout" element={<Checkout />} /> {/* ✅ */}
          <Route path="Offers" element={<Offers />} />
          <Route path="ThankYou" element={<ThankYou />} />
          <Route path="blog" element={<Blog />} />
          <Route path="Loadmore" element={<Loadmore />} />
          <Route path="Onecolumn" element={<Onecolumn />} />
          <Route path="faq" element={<Faq />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Columnsidebar" element={<Columnsidebar />} />
          <Route path="BlogSingle" element={<BlogSingle />} />
          <Route path="TermsAndConditions" element={<TermsAndConditions/>} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/product/:id" element={<Product />} /> 
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

