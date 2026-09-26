import React, { useState, useEffect, useRef } from "react";
import {
  LayoutTemplate,
  Send,
  TrendingUp,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

// Inline resilient IntersectionObserver hook
function useLocalInView(options = { threshold: 0.25 }) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, options);

    observer.observe(target);
    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isInView];
}

// 1. "You build" Glass Card Illustration
function BuilderGlassIllustration() {
  const [phoneIndex, setPhoneIndex] = useState(0);
  const sampleNumbers = ["+91 98765 43210", "+91 87654 32109", "+91 91234 56789"];

  useEffect(() => {
    const timer = setInterval(() => {
      setPhoneIndex((prev) => (prev + 1) % sampleNumbers.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [sampleNumbers.length]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl p-4">
      {/* Dynamic blurred orbs under the glass */}
      <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-[#1FAF55]/30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-emerald-400/25 blur-3xl" />

      {/* Floating Glassmorphic Inner Widget */}
      <div className="relative z-10 w-full max-w-[280px] rounded-2xl border border-white/60 bg-white/40 p-4 shadow-[0_8px_32px_0_rgba(31,175,85,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] dark:border-white/20 dark:bg-black/40">
        <div className="flex items-center justify-between border-b border-white/40 pb-2.5 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            <Sparkles size={13} className="text-[#1FAF55]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Template Form
            </span>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-[#1FAF55] dark:text-emerald-300">
            Live Builder
          </span>
        </div>

        <div className="mt-3 space-y-2.5">
          <div>
            <div className="mb-1 text-[10px] font-semibold text-gray-700 dark:text-gray-300">
              Campaign Category
            </div>
            <div className="flex h-7 w-full items-center justify-between rounded-lg border border-white/60 bg-white/50 px-2.5 text-[11px] font-medium text-gray-800 shadow-inner backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <span>Marketing &amp; Utility</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#1FAF55]" />
            </div>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold text-gray-700 dark:text-gray-300">
              Recipient Destination
            </div>
            <div className="flex h-7 w-full items-center rounded-lg border-2 border-dashed border-[#1FAF55]/70 bg-[#1FAF55]/10 px-2.5 text-[11px] font-semibold text-[#12793A] dark:text-[#4ADE80]">
              <span className="animate-pulse">{sampleNumbers[phoneIndex]}</span>
            </div>
          </div>
        </div>

        <button className="mt-3.5 w-full rounded-xl bg-gradient-to-r from-[#1FAF55] to-[#169646] py-2 text-center text-[11px] font-bold text-white shadow-md shadow-[#1FAF55]/30 transition-transform active:scale-95">
          Save &amp; Connect Template
        </button>
      </div>
    </div>
  );
}

// 2. "We deliver" Glass Card Illustration
function DeliveryGlassIllustration() {
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsRead((prev) => !prev);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl p-4">
      {/* Concentric radar wave rings */}
      <div className="absolute h-44 w-44 animate-ping rounded-full bg-[#1FAF55]/20 duration-1000" />
      <div className="absolute h-32 w-32 rounded-full bg-[#1FAF55]/25 blur-md" />

      {/* Floating Glassmorphic Inner Widget */}
      <div className="relative z-10 w-full max-w-[280px] rounded-2xl border border-white/60 bg-white/40 p-4 shadow-[0_8px_32px_0_rgba(31,175,85,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] dark:border-white/20 dark:bg-black/40">
        <div className="flex items-center gap-2.5 border-b border-white/40 pb-2.5 dark:border-white/10">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1FAF55] text-white shadow-sm shadow-[#1FAF55]/40">
            <MessageSquare size={13} />
          </div>
          <div>
            <p className="text-[12px] font-bold text-gray-900 dark:text-white">
              Connecteze Broadcast
            </p>
            <span className="flex items-center gap-1 text-[9px] font-medium text-emerald-700 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              Meta Cloud API Live
            </span>
          </div>
        </div>

        <div className="mt-3 rounded-2xl rounded-tl-sm border border-emerald-500/20 bg-emerald-500/15 p-3 text-[11px] text-gray-900 shadow-inner backdrop-blur-md dark:border-emerald-400/20 dark:bg-emerald-950/40 dark:text-emerald-100">
          <p className="leading-snug">
            Special Promo! 🎉 Claim your 25% launch voucher today.
          </p>
          <div className="mt-2.5 flex items-center justify-between border-t border-emerald-400/30 pt-1.5 text-[9.5px]">
            <span className="text-gray-600 dark:text-gray-400">Just now</span>
            <span
              className={`flex items-center gap-1 font-bold transition-colors ${
                isRead ? "text-sky-500" : "text-emerald-700 dark:text-emerald-400"
              }`}
            >
              <CheckCircle2 size={11} />
              {isRead ? "Read (Blue Tick)" : "Delivered"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. "You grow" Glass Card Illustration
function GrowthGlassIllustration() {
  const [barHeights, setBarHeights] = useState([45, 68, 55, 92, 80]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBarHeights([
        Math.floor(Math.random() * 35) + 40,
        Math.floor(Math.random() * 30) + 60,
        Math.floor(Math.random() * 40) + 45,
        Math.floor(Math.random() * 20) + 78,
        Math.floor(Math.random() * 30) + 65,
      ]);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl p-4">
      {/* Blurred background glow */}
      <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#1FAF55]/30 blur-3xl" />

      {/* Floating Glassmorphic Inner Widget */}
      <div className="relative z-10 w-full max-w-[280px] rounded-2xl border border-white/60 bg-white/40 p-4 shadow-[0_8px_32px_0_rgba(31,175,85,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] dark:border-white/20 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Total Conversion
            </p>
            <h4 className="text-xl font-extrabold text-gray-900 dark:text-white">
              98.4%
            </h4>
          </div>
          <span className="flex items-center gap-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-[#1FAF55] dark:text-emerald-300">
            <ArrowUpRight size={12} /> +24% ROI
          </span>
        </div>

        {/* Live Eased Bar Chart */}
        <div className="mt-4 flex h-20 items-end gap-2 border-b border-white/40 pb-2 dark:border-white/10">
          {barHeights.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-[#1FAF55] to-emerald-400 shadow-sm transition-all duration-700 ease-out hover:brightness-110"
                style={{ height: `${h}%`, opacity: 0.7 + i * 0.07 }}
              />
              <span className="text-[8px] font-semibold text-gray-600 dark:text-gray-400">
                D{i + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2.5 flex justify-between text-[10px] text-gray-700 dark:text-gray-300 font-medium">
          <span>Sent: <strong className="text-gray-900 dark:text-white">12,400</strong></span>
          <span className="text-[#1FAF55] dark:text-emerald-400 font-bold">Replied: 3,120</span>
        </div>
      </div>
    </div>
  );
}

const ITEMS = [
  {
    icon: LayoutTemplate,
    title: "You build",
    tagline: "Visual Form & Template Canvas",
    text: "Design dynamic booking, order, and lead generation forms with our intuitive builder. Categorize by Utility or Marketing, configure rich media buttons, and sync instantly with Meta.",
    illustration: <BuilderGlassIllustration />,
  },
  {
    icon: Send,
    title: "We deliver",
    tagline: "Verified Cloud API Routing",
    text: "Every submission and broadcast routes directly into WhatsApp with automated fallback and verified delivery receipts — reaching customers right where they check first.",
    illustration: <DeliveryGlassIllustration />,
  },
  {
    icon: TrendingUp,
    title: "You grow",
    tagline: "Real-Time Analytical Insights",
    text: "Track your campaign ROI in real time. Watch open rates, click-through conversions, and customer inquiries directly inside a live analytical dashboard.",
    illustration: <GrowthGlassIllustration />,
  },
];

function GlassCardItem({ item, index }) {
  const [ref, inView] = useLocalInView({ threshold: 0.2 });
  const reversed = index % 2 === 1;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`group relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white/70 via-white/40 to-white/20 p-6 sm:p-10 shadow-[0_8px_32px_0_rgba(14,31,23,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#1FAF55]/60 hover:shadow-[0_16px_40px_0_rgba(31,175,85,0.15)] dark:border-white/15 dark:bg-gradient-to-br dark:from-[#13231C]/80 dark:via-[#13231C]/50 dark:to-[#0B1512]/60 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] dark:hover:border-[#1FAF55]/50 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Specular glass reflection line at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
        {/* Interactive Illustration Container (Frosted Well) */}
        <div
          className={`relative h-64 sm:h-72 w-full rounded-2xl border border-white/50 bg-white/30 p-2 shadow-inner backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.03] ${
            reversed ? "md:order-2" : ""
          }`}
        >
          {item.illustration}
        </div>

        {/* Content Column */}
        <div className={reversed ? "md:order-1" : ""}>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#1FAF55] text-white shadow-lg shadow-[#1FAF55]/30 transition-transform duration-300 group-hover:scale-110">
              <Icon size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1FAF55] dark:text-[#4ADE80]">
              {item.tagline}
            </span>
          </div>

          <h3 className="font-display mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0E1F17] dark:text-white">
            {item.title}
          </h3>

          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
            {item.text}
          </p>

          {/* Quick checklist points */}
          <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-gray-700 dark:text-gray-300">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#1FAF55]" /> Meta Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#1FAF55]" /> Instant Sync
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Section Header */}
      <div className="max-w-xl mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1FAF55] dark:text-[#4ADE80]">
          Core Platform
        </span>
        <h2 className="font-display mt-1 text-3xl font-extrabold tracking-tight text-[#0E1F17] sm:text-4xl dark:text-white">
          What we do
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
          Three moving parts, one simple job: get you closer to the customers who are already on WhatsApp.
        </p>
      </div>

      {/* Glassmorphic Cards Stack */}
      <div className="flex flex-col gap-10">
        {ITEMS.map((item, i) => (
          <GlassCardItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}