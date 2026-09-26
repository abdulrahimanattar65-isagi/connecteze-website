import React from "react";
import { SIGNUP_URL } from "./Navbar";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1FAF55] px-8 py-16 text-center text-white shadow-xl transition-colors duration-300 dark:border dark:border-white/10 dark:bg-[#132A1C] sm:px-16 sm:py-20">
        
        {/* Decorative ambient glow in dark mode */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl dark:bg-[#25D366]/15" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-2xl dark:bg-emerald-400/5" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white dark:text-[#EAF6EE] sm:text-4xl">
            Ready to turn chats into sales?
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/90 dark:text-[#9FB3A8] sm:text-base">
            Set up your first WhatsApp campaign in under 5 minutes. No code, live support, guaranteed results.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SIGNUP_URL || "https://app.connecteze.com/signup"}
              className="w-full rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#1FAF55] shadow-sm transition hover:bg-gray-100 hover:shadow-md dark:bg-[#25D366] dark:text-black dark:hover:bg-[#1FAF55] sm:w-auto"
            >
              Get Started Free
            </a>
            <a
              href="#demo"
              className="w-full rounded-xl border border-white/60 bg-transparent px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/15 dark:border-white/20 dark:text-[#EAF6EE] dark:hover:bg-white/10 sm:w-auto"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}