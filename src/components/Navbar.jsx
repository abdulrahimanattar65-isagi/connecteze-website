import React from "react";
import { MessageSquare } from "lucide-react";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "./ThemeToggle";

// Required by Hero.jsx and other components
export const SIGNUP_URL = "https://app.connecteze.com/signup";

export default function Navbar() {
  const { isDark } = useTheme();

  // WhatsApp doodle stroke color: deep forest green in light mode, soft jade in dark mode
  const doodleStroke = isDark ? "%2325D366" : "%23285744";

  const navDoodleSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130' viewBox='0 0 130 130'%3E%3Cg fill='none' stroke='${doodleStroke}' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 15 h18 a5 5 0 0 1 5 5 v10 a5 5 0 0 1 -5 5 h-10 l-6 5 v-5 a5 5 0 0 1 -5 -5 v-10 a5 5 0 0 1 5 -5 z'/%3E%3Cpath d='M85 15 c-4 -5 -12 0 -7 6 l7 7 l7 -7 c5 -6 -3 -11 -7 -6 z'/%3E%3Crect x='80' y='75' width='22' height='15' rx='3'/%3E%3Ccircle cx='91' cy='82' r='3.5'/%3E%3Cpath d='M88 75 v-2 h6 v2'/%3E%3Cpath d='M18 78 v16 a4 4 0 1 1 -4 -4 h4'/%3E%3Cpath d='M50 78 h11 v9 a5 5 0 0 1 -5 5 h-1 a5 5 0 0 1 -5 -5 z'/%3E%3Cpath d='M61 80 h3 a2.5 2.5 0 0 1 0 5 h-3'/%3E%3Cpath d='M52 22 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 z'/%3E%3Cpath d='M48 112 l3 3 l8 -8'/%3E%3Cpath d='M54 112 l3 3 l8 -8'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      {/* Navbar Container with Cream Base & Embedded Doodle Pattern */}
      <nav className="relative overflow-hidden rounded-2xl border border-[#285744]/20 bg-[#FAF5EC]/95 p-3 shadow-lg backdrop-blur-md transition-all dark:border-white/10 dark:bg-[#0B141A]/95">
        
        {/* Embedded WhatsApp Doodle background */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: isDark ? 0.22 : 0.35,
            backgroundImage: navDoodleSvg,
            backgroundRepeat: "repeat",
            backgroundSize: "115px 115px",
          }}
        />

        {/* Navbar Content */}
        <div className="relative z-10 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
              <MessageSquare size={19} className="fill-white/20" />
            </div>
            <span className="text-base font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
              Connecteze
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#285744] dark:text-[#9FB3A8]">
            <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</a>
            <a href="#what-we-do" className="hover:text-black dark:hover:text-white transition-colors">What We Do</a>
            <a href="#templates" className="hover:text-black dark:hover:text-white transition-colors">Templates</a>
            <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Right Action: Clean Theme Toggle only */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={SIGNUP_URL}
              className="rounded-xl bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}