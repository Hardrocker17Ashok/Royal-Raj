import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartBar from "./components/CartBar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Rooms from "./pages/Rooms";
import Cart from "./pages/Cart";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";
import Booking from "./pages/Booking";

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";

import SeedMenu from "./seed/SeedMenu";

import { CartProvider } from "./store/CartContext";

import EmojiLoader from "./components/EmojiLoader";  
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";



// 🔥 Layout Wrapper
function AppLayout() {
  const location = useLocation();

  // admin route check
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Navbar only for user pages */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-status" element={<OrderStatus />} />
         <Route path="/booking" element={<Booking />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* ⚠️ Seed route */}
        <Route path="/seed-menu" element={<SeedMenu />} />
      </Routes>

      {/* CartBar only for user pages */}
      {!isAdminRoute && <CartBar />}

      {/* Footer only for user pages */}
      {!isAdminRoute && <Footer />}
    </>
  );
}


function App() {
  const [loading, setLoading] = useState(true);

  // 🔥 GLOBAL LOADER (REAL-TIME DATA FETCHING)
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Yahan apni API calls likho jo app start hone par chahiye
        // Example: const menuData = await fetch('your-api/menu');
        
        // Simulation: Jab tak data fetch ho raha hai
        // Jese hi data aa jaye, setLoading(false) kar dena
        await new Promise((resolve) => setTimeout(resolve, 2500)); 
        
      } catch (error) {
        console.error("Data load failed:", error);
      } finally {
        setLoading(false); // Data aane ke baad loader band
      }
    };

    initializeApp();
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>

         <ScrollToTop />
        {loading && <EmojiLoader />}

        {!loading && <AppLayout />}

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;