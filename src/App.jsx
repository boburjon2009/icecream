import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayoute";

// sahifalarni import qilish
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import ShoppingCart from "./pages/ShoppingCart";   // ✅ qo‘shilgan
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
import CardsPage from "./components/CardsPage";   // ✅ qo‘shilgan
import Contact from "./pages/Contactus";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* ✅ Bitta Header faqat shu yerda */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ourteam" element={<Ourteam />} />
          <Route path="review" element={<Review />} />
          <Route path="ShopPage" element={<ShopPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="offers" element={<Offers />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="blog" element={<Blog />} />
          <Route path="loadmore" element={<Loadmore />} />
          <Route path="onecolumn" element={<Onecolumn />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="columnsidebar" element={<Columnsidebar />} />
          <Route path="blogsingle" element={<BlogSingle />} />
          <Route path="termsandconditions" element={<TermsAndConditions/>} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />   {/* ✅ savatcha sahifa */}
          <Route path="cardpage" element={<CardsPage />} />         {/* ✅ CardsPage sahifa */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}
