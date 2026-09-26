import React from "react";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "./ThemeToggle";

// Live Route URLs
export const SIGNIN_URL = "https://app.connecteze.in/login";
export const SIGNUP_URL = "https://app.connecteze.in/signup";

export default function Navbar() {
  const { isDark } = useTheme();

  // WhatsApp doodle stroke color: deep forest green in light mode, soft jade in dark mode
  const doodleStroke = isDark ? "%2325D366" : "%23285744";

  const navDoodleSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130' viewBox='0 0 130 130'%3E%3Cg fill='none' stroke='${doodleStroke}' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 15 h18 a5 5 0 0 1 5 5 v10 a5 5 0 0 1 -5 5 h-10 l-6 5 v-5 a5 5 0 0 1 -5 -5 v-10 a5 5 0 0 1 5 -5 z'/%3E%3Cpath d='M85 15 c-4 -5 -12 0 -7 6 l7 7 l7 -7 c5 -6 -3 -11 -7 -6 z'/%3E%3Crect x='80' y='75' width='22' height='15' rx='3'/%3E%3Ccircle cx='91' cy='82' r='3.5'/%3E%3Cpath d='M88 75 v-2 h6 v2'/%3E%3Cpath d='M18 78 v16 a4 4 0 1 1 -4 -4 h4'/%3E%3Cpath d='M50 78 h11 v9 a5 5 0 0 1 -5 5 h-1 a5 5 0 0 1 -5 -5 z'/%3E%3Cpath d='M61 80 h3 a2.5 2.5 0 0 1 0 5 h-3'/%3E%3Cpath d='M52 22 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 z'/%3E%3Cpath d='M48 112 l3 3 l8 -8'/%3E%3Cpath d='M54 112 l3 3 l8 -8'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      {/* Navbar Container with matching cream background */}
      <nav className="relative overflow-hidden rounded-2xl border border-[#285744]/15 bg-[#FAF5EC] p-3 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#0B141A]/95">
        
        {/* WhatsApp Doodle background */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: isDark ? 0.22 : 0.2,
            backgroundImage: navDoodleSvg,
            backgroundRepeat: "repeat",
            backgroundSize: "115px 115px",
          }}
        />

        {/* Navbar Content */}
        <div className="relative z-10 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="/" className="group flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-[#0E1F17] transition-colors dark:text-[#EAF6EE] font-sans">
            
            </span>
            <img
              src="/connectezelogo.png"
              alt="Connecteze Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#285744] dark:text-[#9FB3A8]">
            <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</a>
            <a href="#what-we-do" className="hover:text-black dark:hover:text-white transition-colors">What We Do</a>
            <a href="#templates" className="hover:text-black dark:hover:text-white transition-colors">Templates</a>
            <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Right Actions: Theme Toggle + Sign In & Sign Up */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Sign In Button */}
            <a
              href={SIGNIN_URL}
              className="rounded-xl px-3.5 py-2 text-xs font-semibold text-[#0E1F17] transition hover:bg-black/5 dark:text-[#EAF6EE] dark:hover:bg-white/10"
            >
              Sign In
            </a>

            {/* Sign Up Button */}
            <a
              href={SIGNUP_URL}
              className="rounded-xl bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}