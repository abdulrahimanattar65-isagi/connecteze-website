import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
import Templates from "./components/Templates";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF5EC] text-slate-800 transition-colors duration-300 dark:bg-[#0B141A] dark:text-slate-100">
      <Navbar />
      <Hero />
      <LogoStrip />
      <WhatWeDo />
      <Features />
      <Templates />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}