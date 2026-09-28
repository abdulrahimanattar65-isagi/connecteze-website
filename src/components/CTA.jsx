import React from "react";
import { CheckCheck, MessageCircle, MessageSquare, Phone, Sparkles } from "lucide-react";
import { SIGNUP_URL } from "./Navbar";

export default function CTA() {
  return (
    <section id="cta" className="cta-section mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1FAF55] px-8 py-16 text-center text-white shadow-xl transition-colors duration-300 dark:border dark:border-white/10 dark:bg-[#132A1C] sm:px-16 sm:py-20">
        <div aria-hidden="true" className="cta-art pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="cta-dot-grid absolute inset-0 opacity-25" />
          <div className="cta-glow cta-glow-one absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/25 blur-[90px] dark:bg-[#25D366]/20" />
          <div className="cta-glow cta-glow-two absolute -bottom-28 left-[28%] h-72 w-72 rounded-full bg-[#B6FFD0]/20 blur-[100px] dark:bg-emerald-400/10" />

          <div className="cta-float absolute left-[5%] top-[27%] hidden w-44 rounded-2xl border border-white/35 bg-white/15 p-3 text-left shadow-xl shadow-emerald-950/10 backdrop-blur-md xl:block">
            <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20"><MessageCircle size={15} /></span><div><p className="text-[10px] font-bold text-white">New chat received</p><p className="text-[9px] text-white/65">Customer · just now</p></div><span className="ml-auto h-2 w-2 rounded-full bg-[#B6FFD0]" /></div>
            <div className="mt-2 rounded-xl rounded-tl-sm bg-white/15 px-2.5 py-2 text-[9px] leading-4 text-white/90">Hi! Can you help me choose a plan?</div>
          </div>

          <div className="cta-float cta-float-late absolute bottom-[19%] left-[12%] hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[9px] font-semibold text-white/85 backdrop-blur-md xl:flex">
            <Sparkles size={13} className="text-[#D7FFE4]" /> Helpful replies, right on time
          </div>

          <div className="cta-phone absolute -bottom-12 right-[8%] hidden h-52 w-32 rotate-6 rounded-[1.7rem] border-[5px] border-[#0B2415]/60 bg-[#F1F8F2] p-1.5 shadow-2xl shadow-emerald-950/25 xl:block">
            <div className="flex h-full flex-col overflow-hidden rounded-[1.2rem] bg-[#E6F3E8]">
              <div className="flex items-center gap-1.5 bg-[#168344] px-2 py-2 text-white"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"><Phone size={10} /></span><span className="text-[8px] font-bold">Connecteze</span></div>
              <div className="flex flex-1 flex-col justify-end gap-1.5 p-2">
                <div className="self-start rounded-lg rounded-bl-sm bg-white px-2 py-1.5 text-[7px] text-[#315341]">Thanks, that helps!</div>
                <div className="self-end rounded-lg rounded-br-sm bg-[#D3F5D8] px-2 py-1.5 text-[7px] text-[#315341]">Happy to help <CheckCheck size={8} className="ml-1 inline text-sky-600" /></div>
                <div className="self-start rounded-lg rounded-bl-sm bg-white px-2 py-1.5 text-[7px] text-[#315341]">See you soon 👋</div>
              </div>
            </div>
          </div>

          <div className="cta-chat-icon absolute right-[24%] top-[16%] hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white/80 shadow-lg backdrop-blur-sm xl:flex"><MessageSquare size={21} /></div>
        </div>

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
           
          </div>
        </div>
      </div>
    </section>
  );
}
