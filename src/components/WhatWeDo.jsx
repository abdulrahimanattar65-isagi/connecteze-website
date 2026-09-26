import React from "react";
import { LayoutTemplate, Send, TrendingUp, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const ITEMS = [
  {
    icon: LayoutTemplate,
    title: "You build",
    text: "Design dynamic booking, order, and lead generation forms with our intuitive builder. Categorize by Utility or Marketing, configure rich media buttons, and sync instantly with Meta.",
    illustration: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl p-4">
        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-[#1FAF55]/20 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#FF6B00]/15 blur-2xl" />
        <div 
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(#1FAF55 1.5px, transparent 1.5px)`, 
            backgroundSize: '14px 14px' 
          }} 
        />
        <div className="relative z-10 w-full max-w-[260px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#13231C]">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 dark:border-white/5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Template Form
            </span>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              Live Builder
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <div>
              <div className="mb-0.5 text-[10px] font-medium text-gray-500 dark:text-gray-400">Campaign Type</div>
              <div className="h-7 w-full rounded-md border border-gray-200 bg-gray-50 px-2 flex items-center text-[11px] text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                Marketing Utility
              </div>
            </div>
            <div>
              <div className="mb-0.5 text-[10px] font-medium text-gray-500 dark:text-gray-400">Recipient Phone</div>
              <div className="h-7 w-full rounded-md border-2 border-dashed border-[#1FAF55] bg-[#1FAF55]/5 px-2 flex items-center text-[11px] text-[#1FAF55] font-semibold">
                <span className="animate-pulse">+91 98765 43210</span>
              </div>
            </div>
          </div>
          <button className="mt-3.5 w-full rounded-lg bg-[#1FAF55] py-2 text-center text-[11px] font-semibold text-white shadow-sm hover:opacity-95">
            Save & Connect Template
          </button>
        </div>
      </div>
    ),
  },
  {
    icon: Send,
    title: "We deliver",
    text: "Every submission and broadcast routes directly into WhatsApp with automated fallback and verified delivery receipts — reaching customers right where they check first.",
    illustration: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl p-4">
        <div className="absolute h-40 w-40 animate-ping rounded-full bg-[#1FAF55]/15" />
        <div className="absolute h-28 w-28 rounded-full bg-[#1FAF55]/20 blur-sm" />
        <div className="relative z-10 w-full max-w-[270px] rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#13231C]">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-2 dark:border-white/5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1FAF55] text-white">
              <MessageSquare size={13} />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#0E1F17] dark:text-[#EAF6EE]">Connecteze Broadcast</p>
              <span className="flex items-center gap-1 text-[9px] text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Delivered instantly
              </span>
            </div>
          </div>
          <div className="mt-2.5 rounded-xl rounded-tl-none bg-[#EAF7EE] p-2.5 text-[11px] text-[#0E1F17] dark:bg-[#0E2819] dark:text-[#EAF6EE]">
            <p className="leading-snug">
              Special Offer! 🎉 Tap below to claim your discount voucher today.
            </p>
            <div className="mt-2 flex items-center justify-between border-t border-emerald-200/50 pt-1.5 text-[9px] text-gray-500 dark:border-emerald-800/40 dark:text-gray-400">
              <span>Just now</span>
              <span className="flex items-center gap-0.5 text-emerald-600 font-bold">
                <CheckCircle2 size={11} /> Read
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: "You grow",
    text: "Track your campaign ROI in real time. Watch open rates, click-through conversions, and customer inquiries directly inside a live analytical dashboard.",
    illustration: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl p-4">
        <div className="relative z-10 w-full max-w-[260px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#13231C]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Total Reach</p>
              <h4 className="text-xl font-bold text-[#0E1F17] dark:text-[#EAF6EE]">98.4%</h4>
            </div>
            <span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <ArrowUpRight size={12} /> +24%
            </span>
          </div>
          <div className="mt-4 flex h-20 items-end gap-2.5 border-b border-gray-100 pb-2 dark:border-white/5">
            {[45, 68, 55, 92, 80].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-[#1FAF55] transition-all duration-500 hover:brightness-110"
                  style={{ height: `${h}%`, opacity: 0.6 + i * 0.1 }}
                />
                <span className="text-[8px] text-gray-400">D{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
            <span>Dispatched: <b>12,400</b></span>
            <span className="text-emerald-600 font-semibold">Replied: <b>3,120</b></span>
          </div>
        </div>
      </div>
    ),
  },
];

function Item({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const reversed = index % 2 === 1;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`reveal grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
        inView ? "reveal-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={`h-64 rounded-3xl bg-[#F6F8F5] dark:bg-[#101C16] ${reversed ? "md:order-2" : ""}`}>
        {item.illustration}
      </div>
      <div className={reversed ? "md:order-1" : ""}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1FAF55] text-white shadow-sm shadow-[#1FAF55]/30">
          <Icon size={20} />
        </div>
        <h3 className="font-display mt-5 text-2xl font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
          What we do
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
          Three moving parts, one simple job: get you closer to the customers who are already on WhatsApp.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {ITEMS.map((item, i) => (
          <Item key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}