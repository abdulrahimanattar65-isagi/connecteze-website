import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flow from "./components/Flow";
import WhatWeDo from "./components/WhatWeDo";     
import Templates from "./components/Templates";  
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LogoStrip from "./components/LogoStrip";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Services from "./components/Services";
import PlatformPreview from "./components/PlatformPreview";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F9F5] text-[#10251B] transition-colors dark:bg-[#091710] dark:text-[#EAF6EE]">
      <Navbar />
      <main className="relative overflow-hidden bg-[#F7F9F5] transition-colors dark:bg-[#091710]">
        <Hero />
        <LogoStrip />
        <HowItWorks />
        <Flow />
        <WhatWeDo />
        <Services />
        <PlatformPreview />
        <Templates />
      </main>
      <Reviews />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
