import { Check, FormInput, MessageCircleMore, MousePointerClick } from "lucide-react";
import { useInView } from "../hooks/useInView";

const STEPS = [
  {
    icon: FormInput,
    title: "Create your form",
    text: "Build a booking, order, or feedback form and share the link anywhere — your site, Instagram bio, or an ad.",
    color: "peach",
  },
  {
    icon: MousePointerClick,
    title: "Customer fills it in",
    text: "They complete it in seconds and hit submit — no app to download, no account to create.",
    color: "pink",
  },
  {
    icon: MessageCircleMore,
    title: "You get it on WhatsApp",
    text: "Every response lands straight in your WhatsApp, ready for you to confirm, reply, or fulfil.",
    color: "blue",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="how-it-works" className="how-it-works-section relative isolate overflow-hidden py-20 sm:py-24">
      <div aria-hidden="true" className="how-it-works-paper absolute inset-0 -z-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/10 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-[#168344] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-[#70E697]">
            How it works
          </span>
          <h2 className="font-display mt-4 text-3xl font-700 tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
            From link to WhatsApp in three steps
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
            No setup calls, no code. Most teams are live the same afternoon they sign up.
          </p>
        </div>

        <div ref={ref} className="how-it-works-board relative mx-auto mt-14 max-w-5xl">
          <svg aria-hidden="true" viewBox="0 0 1000 440" preserveAspectRatio="none" className="how-it-works-path pointer-events-none absolute inset-0 h-full w-full">
            <path d="M215 105 C330 65 330 175 445 175 S575 75 685 120 S790 285 650 310 S450 260 315 330" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 8" />
          </svg>
          <div className="relative grid grid-cols-1 gap-9 md:min-h-[440px] md:grid-cols-2 md:gap-0">
            {STEPS.map(({ icon: Icon, title, text, color }, index) => (
              <article
                key={title}
                className={`how-it-works-note how-it-works-note-${index + 1} ${color} group relative mx-auto w-full max-w-[330px] rounded-[26px] p-5 pt-8 transition-transform duration-300 hover:scale-[1.035] ${inView ? "box-bounce" : "opacity-0"}`}
                style={{ animationDelay: inView ? `${index * 180}ms` : undefined }}
              >
                <span aria-hidden="true" className="how-it-works-pin" />
                <div className="relative z-10 flex items-start gap-3">
                  <span className="font-display text-3xl font-black leading-none text-[#18231e]">{index + 1}</span>
                  <div>
                    <h3 className="font-display text-[17px] font-700 leading-tight text-[#18231e]">{title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#34443b]">{text}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-[#34443b]/80">
                      <Check size={13} /> Ready in minutes
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-[#34443b]/70"><Icon size={16} strokeWidth={1.8} /></span>
              </article>
            ))}
          </div>
        </div>

        <div className="how-it-works-toast float-slow mx-auto mt-8 flex w-fit items-center gap-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#10251b]/85">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#168344] dark:bg-[#1B3525] dark:text-[#70E697]"><MessageCircleMore size={17} /></span>
          <div><p className="text-[11px] font-bold text-[#183324] dark:text-white">New response received</p><p className="mt-0.5 text-[10px] text-[#66766C] dark:text-[#A7BFB2]">Form submission · Just now</p></div>
          <span className="ml-2 h-2 w-2 rounded-full bg-[#25D366]" />
        </div>
      </div>
    </section>
  );
}
