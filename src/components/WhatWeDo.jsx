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
    illustrationType: "build",
    title: "You build",
    tagline: "Visual Form & Template Canvas",
    text: "Design dynamic booking, order, and lead generation forms with our intuitive builder. Categorize by Utility or Marketing, configure rich media buttons, and sync instantly with Meta.",
    illustration: <BuilderGlassIllustration />,
  },
  {
    icon: Send,
    illustrationType: "deliver",
    title: "We deliver",
    tagline: "Verified Cloud API Routing",
    text: "Every submission and broadcast routes directly into WhatsApp with automated fallback and verified delivery receipts — reaching customers right where they check first.",
    illustration: <DeliveryGlassIllustration />,
  },
  {
    icon: TrendingUp,
    illustrationType: "grow",
    title: "You grow",
    tagline: "Real-Time Analytical Insights",
    text: "Track your campaign ROI in real time. Watch open rates, click-through conversions, and customer inquiries directly inside a live analytical dashboard.",
    illustration: <GrowthGlassIllustration />,
  },
];

function StatementIllustration({ type }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 150"
      fill="none"
      className={`statement-illustration statement-illustration-${type} absolute right-0 top-1/2 h-28 w-32 sm:h-36 sm:w-40`}
    >
      <ellipse cx="132" cy="139" rx="78" ry="7" fill="currentColor" fillOpacity=".08" />
      {type === "build" && <>
        <rect x="70" y="27" width="87" height="87" rx="9" fill="white" fillOpacity=".72" stroke="currentColor" strokeOpacity=".2" strokeWidth="2" />
        <rect x="81" y="40" width="65" height="10" rx="3" fill="#7665F6" fillOpacity=".78" />
        <rect x="81" y="57" width="29" height="41" rx="4" fill="#7665F6" fillOpacity=".16" />
        <path d="M117 61h28M117 70h22M117 79h25M117 88h18" stroke="currentColor" strokeOpacity=".3" strokeWidth="3" strokeLinecap="round" />
        <circle cx="42" cy="58" r="10" fill="#F0B7A7" />
        <path d="M32 56c1-14 21-17 22-2l-7 5-3-7-12 7v-3Z" fill="#233047" />
        <path d="m37 69 15 2 10 31-12 4-15-17 2-20Z" fill="#7665F6" />
        <path d="m37 73-12 19 15 9M51 75l14 12" stroke="#F0B7A7" strokeWidth="5" strokeLinecap="round" />
        <path d="m41 104-5 27M54 103l9 26" stroke="#263147" strokeWidth="7" strokeLinecap="round" />
        <path d="M35 132h-8M64 131h8" stroke="#263147" strokeWidth="4" strokeLinecap="round" />
        <path d="M160 110h21" stroke="#25D366" strokeWidth="3" strokeLinecap="round" />
        <circle cx="172" cy="41" r="13" fill="#25D366" fillOpacity=".16" />
        <path d="m166 41 4 4 8-9" stroke="#159447" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>}
      {type === "deliver" && <>
        <path d="M34 77c0-25 21-46 47-46" stroke="#25D366" strokeOpacity=".42" strokeWidth="2" strokeDasharray="4 6" />
        <path d="M32 63c8-29 33-48 62-48" stroke="#25D366" strokeOpacity=".22" strokeWidth="2" strokeDasharray="4 7" />
        <rect x="75" y="18" width="62" height="111" rx="12" fill="#263147" fillOpacity=".12" stroke="currentColor" strokeOpacity=".35" strokeWidth="2" />
        <rect x="81" y="29" width="50" height="88" rx="7" fill="white" fillOpacity=".8" />
        <rect x="88" y="43" width="35" height="20" rx="7" fill="#25D366" fillOpacity=".28" />
        <path d="M93 51h20M93 56h13" stroke="#159447" strokeWidth="2" strokeLinecap="round" />
        <rect x="91" y="72" width="33" height="25" rx="7" fill="#7665F6" fillOpacity=".2" />
        <path d="m99 83 5 5 11-12" stroke="#7665F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="173" cy="58" r="10" fill="#F0B7A7" />
        <path d="M163 56c1-13 19-14 20-2l-7 4-3-5-10 6v-3Z" fill="#233047" />
        <path d="m167 69 15 1 8 30-13 4-13-17 3-18Z" fill="#7665F6" />
        <path d="m168 75-18 8M184 76l11 13" stroke="#F0B7A7" strokeWidth="5" strokeLinecap="round" />
        <path d="m174 103-5 27M186 102l8 27" stroke="#263147" strokeWidth="7" strokeLinecap="round" />
        <path d="M168 131h-8M194 130h8" stroke="#263147" strokeWidth="4" strokeLinecap="round" />
        <circle cx="46" cy="112" r="14" fill="#25D366" fillOpacity=".16" />
        <path d="m40 112 4 4 8-9" stroke="#159447" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>}
      {type === "grow" && <>
        <path d="M49 120h108M58 120V54" stroke="currentColor" strokeOpacity=".28" strokeWidth="2" strokeLinecap="round" />
        <rect x="69" y="91" width="15" height="29" rx="4" fill="#25D366" fillOpacity=".55" />
        <rect x="94" y="75" width="15" height="45" rx="4" fill="#7665F6" fillOpacity=".55" />
        <rect x="119" y="57" width="15" height="63" rx="4" fill="#25D366" fillOpacity=".75" />
        <path d="m67 74 24-13 20 4 31-28" stroke="#159447" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M132 37h10v10" stroke="#159447" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="177" cy="66" r="10" fill="#F0B7A7" />
        <path d="M167 64c1-13 20-15 21-2l-7 5-4-6-10 6v-3Z" fill="#233047" />
        <path d="m170 77 15 1 9 30-13 4-14-17 3-18Z" fill="#7665F6" />
        <path d="m172 81-16-8M187 83l10 12" stroke="#F0B7A7" strokeWidth="5" strokeLinecap="round" />
        <path d="m176 110-4 20M188 109l8 21" stroke="#263147" strokeWidth="7" strokeLinecap="round" />
        <path d="M171 131h-8M197 131h8" stroke="#263147" strokeWidth="4" strokeLinecap="round" />
        <circle cx="151" cy="34" r="13" fill="#25D366" fillOpacity=".16" />
        <path d="m145 34 4 4 8-9" stroke="#159447" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>}
    </svg>
  );
}

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
        <div className={`relative isolate min-h-[250px] overflow-hidden rounded-2xl py-2 pr-[8.5rem] sm:pr-[10.5rem] ${reversed ? "md:order-1" : ""}`}>
          <StatementIllustration type={item.illustrationType} />
          <div className="relative z-10">
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
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="what-we-do-section relative isolate overflow-hidden py-24 sm:py-28">
      <div className="what-we-do-grid pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-25" />
      <div className="what-we-do-orb what-we-do-orb-one pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-emerald-300/40 blur-[100px] dark:bg-emerald-500/15" />
      <div className="what-we-do-orb what-we-do-orb-two pointer-events-none absolute -right-32 bottom-12 -z-10 h-[28rem] w-[28rem] rounded-full bg-lime-200/50 blur-[110px] dark:bg-teal-400/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
      <div aria-hidden="true" className="what-we-do-art pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <svg className="absolute -right-8 top-16 h-[24rem] w-[24rem] text-emerald-800/[0.14] dark:text-emerald-200/[0.13] sm:right-[2%]" viewBox="0 0 420 420" fill="none">
          <path d="M52 210C106 210 100 118 164 118s58 104 121 104 49-74 92-74" stroke="currentColor" strokeWidth="2" strokeDasharray="7 9" />
          <path d="M68 306c49 0 56-74 110-74s45 65 95 65 61-40 97-40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 9" />
          <circle cx="52" cy="210" r="8" fill="currentColor" /><circle cx="164" cy="118" r="8" fill="currentColor" />
          <circle cx="285" cy="222" r="8" fill="currentColor" /><circle cx="377" cy="148" r="8" fill="currentColor" />
          <circle cx="68" cy="306" r="6" fill="currentColor" /><circle cx="273" cy="297" r="6" fill="currentColor" />
          <rect x="112" y="35" width="94" height="58" rx="18" stroke="currentColor" strokeWidth="2" />
          <path d="M137 58h44M137 71h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <rect x="238" y="324" width="112" height="58" rx="18" stroke="currentColor" strokeWidth="2" />
          <path d="M263 347h55M263 360h37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className="absolute -left-12 bottom-12 h-64 w-64 text-[#1FAF55]/[0.12] dark:text-emerald-200/[0.12] sm:left-[2%]" viewBox="0 0 260 260" fill="none">
          <circle cx="130" cy="130" r="91" stroke="currentColor" strokeWidth="2" strokeDasharray="4 9" />
          <circle cx="130" cy="130" r="61" stroke="currentColor" strokeWidth="2" />
          <circle cx="130" cy="130" r="31" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="2" />
          <path d="M130 15v42M245 130h-42M130 245v-42M15 130h42" stroke="currentColor" strokeWidth="2" />
          <circle cx="130" cy="39" r="7" fill="currentColor" /><circle cx="221" cy="130" r="7" fill="currentColor" />
        </svg>
        <div className="what-we-do-art-chip absolute right-[8%] top-[42%] hidden items-center gap-2 rounded-full border border-emerald-700/15 bg-white/60 px-3 py-2 text-[11px] font-semibold text-emerald-900/60 shadow-lg shadow-emerald-900/5 backdrop-blur-md dark:border-white/10 dark:bg-[#12271b]/60 dark:text-emerald-100/60 md:flex">
          <span className="h-2 w-2 rounded-full bg-[#25D366]" /> Message delivered
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
      {/* Section Header */}
      <div className="mb-16 max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1FAF55] dark:text-[#4ADE80]">
          Core Platform
        </span>
        <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[#0E1F17] sm:text-4xl dark:text-white">
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
      </div>
    </section>
  );
}
