import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useState } from "react";

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* ✅ faqat bitta Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        {/* ✅ CardsPage va boshqalarga searchQuery uzatiladi */}
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>
      <Footer />
    </div>
  );
}
