import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flow from "./components/Flow";
import Features from "./components/Features";     
import WhatWeDo from "./components/WhatWeDo";     
import Templates from "./components/Templates";  
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0E1F17] transition-colors dark:bg-[#0B1512] dark:text-[#EAF6EE]">
      {/* 1. Header (Clean White / Flat) */}
      <Navbar />

      {/* 2. Main Content Sections with the WhatsApp Doodle Background Pattern */}
      <main
        className="relative bg-[#F8F5EE] bg-repeat transition-colors dark:bg-[#0B141A]"
        style={{
          backgroundImage: "url('/whatsapp-doodle-bg.png')",
          backgroundSize: "450px auto", // controls doodle pattern density
        }}
      >
        <Hero />
        <Flow />
         <Features /> 
         <WhatWeDo /> 
         <Templates /> 
      </main>

      {/* 3. Sections Kept Exactly as They Are */}
      <Reviews />
      <FAQ />
      
      <Footer />
    </div>
  );
}