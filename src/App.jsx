import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";


import Insights from "./components/pages/Insights";
import Contact from "./components/pages/Contact";
import RequestDemo from "./components/pages/RequestDemo";
import HowItWorks from "./components/pages/HowItWorks";
import Services from "./components/navpages/services/Services";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#152019] dark:bg-[#070A07] dark:text-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-[90px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<RequestDemo />} />
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default App;