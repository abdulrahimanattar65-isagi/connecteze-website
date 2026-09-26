import { FormInput, MousePointerClick, MessageCircleMore } from "lucide-react";
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
    <section id="how-it-works" className="bg-[#EAF7EE] py-24 dark:bg-[#0F1F18]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-700 tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
            From link to WhatsApp in three steps
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
            No setup calls, no code. Most teams are live the same afternoon they sign up.
          </p>
        </div>

        <div ref={ref} className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#C9E6D1] dark:bg-[#1F3229] md:block" />
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`relative rounded-2xl border border-transparent p-5 ${inView ? "box-bounce" : "opacity-0"}`}
              style={{ animationDelay: inView ? `${i * 200}ms` : undefined }}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1FAF55] bg-white text-[#12793A] dark:bg-[#0F1F18] dark:text-[#4ADE80]">
                <Icon size={20} strokeWidth={2} />
              </div>
              <h3 className="font-display mt-5 text-[17px] font-700 text-[#0E1F17] dark:text-[#EAF6EE]">
                {i + 1}. {title}
              </h3>
              <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
