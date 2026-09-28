import { Check, FormInput, MessageCircleMore, MousePointerClick, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

const STEPS = [
  {
    icon: FormInput,
    title: "Create your form",
    text: "Build a booking, order, or feedback form and share the link anywhere — your site, Instagram bio, or an ad.",
  },
  {
    icon: MousePointerClick,
    title: "Customer fills it in",
    text: "They complete it in seconds and hit submit — no app to download, no account to create.",
  },
  {
    icon: MessageCircleMore,
    title: "You get it on WhatsApp",
    text: "Every response lands straight in your WhatsApp, ready for you to confirm, reply, or fulfil.",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="how-it-works" className="how-it-works-section relative isolate overflow-hidden py-24 sm:py-28">
      <div aria-hidden="true" className="how-it-works-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="how-it-works-orb how-it-works-orb-left pointer-events-none absolute -left-36 top-10 -z-10 h-96 w-96 rounded-full bg-[#72D697]/30 blur-[110px] dark:bg-[#25D366]/10" />
      <div aria-hidden="true" className="how-it-works-orb how-it-works-orb-right pointer-events-none absolute -right-36 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#BCEBCC]/50 blur-[120px] dark:bg-teal-400/10" />
      <svg aria-hidden="true" viewBox="0 0 1100 400" className="how-it-works-path pointer-events-none absolute right-0 top-16 -z-10 hidden h-[360px] w-[86%] lg:block">
        <path d="M80 278C235 278 211 142 382 142s184 124 345 124 178-101 293-101" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 11" />
        <circle cx="80" cy="278" r="7" fill="currentColor" />
        <circle cx="382" cy="142" r="7" fill="currentColor" />
        <circle cx="727" cy="266" r="7" fill="currentColor" />
        <circle cx="1020" cy="165" r="7" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/10 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-[#168344] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-[#70E697]">
            <Sparkles size={13} /> Simple by design
          </span>
          <h2 className="font-display mt-4 text-3xl font-700 tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
            From link to WhatsApp in three steps
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
            No setup calls, no code. Most teams are live the same afternoon they sign up.
          </p>
        </div>

        <div ref={ref} className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div className="how-it-works-track absolute left-[7%] right-[7%] top-11 hidden h-px md:block" />
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`how-it-works-step group relative overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_12px_36px_rgba(24,72,42,.06)] backdrop-blur-md transition duration-300 hover:border-[#25D366]/40 hover:shadow-[0_18px_42px_rgba(24,72,42,.12)] dark:border-white/10 dark:bg-[#10251b]/75 dark:shadow-black/10 dark:hover:border-[#25D366]/35 ${inView ? "box-bounce" : "opacity-0"}`}
              style={{ animationDelay: inView ? `${index * 200}ms` : undefined }}
            >
              <span aria-hidden="true" className="absolute -right-2 -top-5 font-display text-7xl font-black leading-none text-emerald-950/[0.035] dark:text-white/[0.035]">0{index + 1}</span>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#25D366]/25 bg-gradient-to-br from-white to-[#DFF5E5] text-[#168344] shadow-[0_6px_18px_rgba(31,175,85,.12)] transition-transform duration-300 group-hover:scale-105 dark:from-[#193322] dark:to-[#10251b] dark:text-[#70E697]">
                <Icon size={20} strokeWidth={2} />
              </div>
              <h3 className="font-display relative z-10 mt-5 text-[17px] font-700 text-[#0E1F17] dark:text-[#EAF6EE]">
                {index + 1}. {title}
              </h3>
              <p className="relative z-10 mt-2 max-w-xs text-[14.5px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
                {text}
              </p>
              <div className="relative z-10 mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-[#168344]/80 dark:text-[#70E697]/80">
                <Check size={13} /> Ready in minutes
              </div>
            </article>
          ))}
        </div>

        <div className="how-it-works-toast float-slow absolute right-8 top-14 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-xl shadow-emerald-900/10 backdrop-blur-xl xl:flex dark:border-white/10 dark:bg-[#10251b]/85">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#168344] dark:bg-[#1B3525] dark:text-[#70E697]"><MessageCircleMore size={17} /></span>
          <div><p className="text-[11px] font-bold text-[#183324] dark:text-white">New response received</p><p className="mt-0.5 text-[10px] text-[#66766C] dark:text-[#A7BFB2]">Form submission · Just now</p></div>
          <span className="ml-2 h-2 w-2 rounded-full bg-[#25D366]" />
        </div>
      </div>
    </section>
  );
}
