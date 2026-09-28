import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ContactUsModal from "./ContactUsModal";

// Live Route URLs
export const SIGNIN_URL = "https://app.connecteze.in/login";
export const SIGNUP_URL = "https://app.connecteze.in/signup";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white transition-colors dark:border-white/10 dark:bg-[#0B1512]">
        {/* max-w-6xl px-6 matches the lower section cards */}
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          
          {/* Logo - aligns with the left edge of the 1st card */}
          <a href="/" className="flex items-center">
            {/* Light Mode Logo */}
            <img
              src="/connectezelogo.png"
              alt="Connecteze Logo"
              className="h-12 w-auto object-contain dark:hidden"
            />
            {/* Dark Mode Logo */}
            <img
              src="/WhiteConnectezelogo.png"
              alt="Connecteze Logo"
              className="hidden h-12 w-auto object-contain dark:block"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="/" className="hover:text-[#25D366] transition-colors">
              Home
            </a>
            <a href="#platform-preview" className="hover:text-[#25D366] transition-colors">
              Platform
            </a>
            <a href="#what-we-do" className="hover:text-[#25D366] transition-colors">
              What We Do
            </a>
            <a href="#services" className="hover:text-[#25D366] transition-colors">
              Services
            </a>
            <a href="#templates" className="hover:text-[#25D366] transition-colors">
              Templates
            </a>
            <a href="#faq" className="hover:text-[#25D366] transition-colors">
              FAQ
            </a>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="hover:text-[#25D366] transition-colors font-medium text-sm text-gray-700 dark:text-gray-300"
            >
              Contact
            </button>
          </nav>

          {/* Right Actions: Theme Toggle + Sign In & Sign Up Button */}
          {/* Sign Up button aligns with the right edge of the last card */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Sign In Link */}
            <a
              href={SIGNIN_URL}
              className="px-2.5 py-2 text-xs font-semibold text-gray-800 transition hover:text-[#25D366] dark:text-gray-200 dark:hover:text-[#25D366]"
            >
              Sign In
            </a>

            {/* Sign Up Button */}
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
            >
              Sign Up
            </a>
          </div>

        </div>
      </header>

      {/* Contact Us Modal */}
      <ContactUsModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
