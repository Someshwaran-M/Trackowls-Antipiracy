import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./components/pages/Home";
import HowItWorks from "./components/navpages/howitworks/HowItWorks";
import About from "./components/pages/About";
import Services from "./components/navpages/services/Services";
import MonitoringTools from "./components/navpages/monitoringtools/MonitoringTools";
import Plans from "./components/navpages/plans/Plans";
import Contact from "./components/pages/Contact";
import RequestDemo from "./components/pages/RequestDemo";


function App() {
  return (
    <div className="min-h-screen bg-white text-[#152019] dark:bg-[#070A07] dark:text-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-[90px]">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/monitoring-tools" element={<MonitoringTools />} />
          <Route path="/plans" element={<Plans />} />
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