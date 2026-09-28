import { useEffect, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SIGNUP_URL } from "./Navbar";
import HeroChatMockup from "./HeroChatMockup";

const SCRIPT = [
  { from: "them", text: "Hi! Do you deliver to Koramangala?" },
  { from: "typing" },
  { from: "us", text: "Yes! Free delivery on orders over ₹499 😊" },
  { from: "them", text: "Great, I'd like to order 2 combo meals" },
  { from: "typing" },
  { from: "us", text: "Order confirmed ✅ Out for delivery by 8:30 PM" },
];

function ChatMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setStep((s) => (s + 1) % (SCRIPT.length + 2));
      },
      step >= SCRIPT.length ? 1600 : 900
    );
    return () => clearTimeout(timer);
  }, [step]);

  const visible = SCRIPT.slice(0, Math.min(step + 1, SCRIPT.length));

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* Floating background card */}
      <div className="float-slow absolute -left-10 top-6 hidden w-48 rounded-2xl border border-[#E4E8E1] bg-white p-4 shadow-xl shadow-[#0E1F17]/5 dark:border-[#223A2E] dark:bg-[#13231C] sm:block">
        <div className="mb-3 h-2 w-16 rounded-full bg-[#EAF7EE] dark:bg-[#1B2E24]" />
        <div className="mb-2 h-2 w-full rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="mb-2 h-2 w-4/5 rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="mb-4 h-2 w-3/5 rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="rounded-lg bg-[#1FAF55] py-1.5 text-center text-[11px] font-semibold text-white">
          Submit on WhatsApp
        </div>
      </div>

      {/* Phone frame */}
      <div className="relative rounded-[2.2rem] border-[6px] border-[#0E1F17] bg-[#0E1F17] shadow-2xl shadow-[#0E1F17]/20 dark:border-[#0B1512] dark:shadow-black/40">
        <div className="overflow-hidden rounded-[1.7rem] bg-[#E7F5EB]">
          <div className="flex items-center gap-2 bg-[#1FAF55] px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white">
              <MessageCircle size={16} />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-white">Cake &amp; Co.</p>
              <p className="text-[10px] text-white/80">online</p>
            </div>
          </div>

          <div className="flex h-[340px] flex-col justify-end gap-2 px-3 py-4">
            {visible.map((msg, i) =>
              msg.from === "typing" ? (
                <div
                  key={i}
                  className="bubble-in flex items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm"
                >
                  <span className="dot-bounce h-1.5 w-1.5 rounded-full bg-[#8FA79A]" style={{ animationDelay: "0ms" }} />
                  <span className="dot-bounce h-1.5 w-1.5 rounded-full bg-[#8FA79A]" style={{ animationDelay: "150ms" }} />
                  <span className="dot-bounce h-1.5 w-1.5 rounded-full bg-[#8FA79A]" style={{ animationDelay: "300ms" }} />
                </div>
              ) : (
                <div
                  key={i}
                  className={`bubble-in max-w-[80%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug shadow-sm ${
                    msg.from === "us"
                      ? "self-end rounded-br-sm bg-[#DCF8C6] text-[#0E1F17]"
                      : "self-start rounded-bl-sm bg-white text-[#0E1F17]"
                  }`}
                >
                  {msg.text}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable animated counter component
function AnimatedStat({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth easeOutExpo formula
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-section relative isolate overflow-hidden bg-white dark:bg-[#091710]">
      <div className="pointer-events-none absolute -right-32 top-8 -z-0 h-96 w-96 rounded-full border border-[#25D366]/10 bg-[#25D366]/[0.04] blur-[1px]" />
      <div className="pointer-events-none absolute right-10 top-24 -z-0 h-64 w-64 rounded-full bg-[#25D366]/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-14 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:pt-20">
        <div>
          <div
            className="rise-in inline-flex items-center gap-2 rounded-full border border-[#D9F2E1] bg-white px-3 py-1 text-[13px] font-medium text-[#12793A] dark:border-[#1F3229] dark:bg-[#13231C] dark:text-[#4ADE80]"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1FAF55]" />
            Built for 2.5B+ WhatsApp users
          </div>

          <h1
            className="rise-in font-display mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#10251B] dark:text-white sm:text-5xl lg:text-[3.65rem]"
            style={{ animationDelay: "80ms" }}
          >
            Turn every chat into a customer
          </h1>

          <p
            className="rise-in mt-5 max-w-md text-[17px] leading-relaxed text-[#3F544A] dark:text-[#A7BFB2]"
            style={{ animationDelay: "160ms" }}
          >
            Build no-code forms, run broadcast campaigns, and manage orders — all delivered straight to your customer's WhatsApp. No developers, no waiting.
          </p>

          <div
            className="rise-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-center overflow-hidden rounded-lg border border-[#E4E8E1] bg-white pl-3 focus-within:border-[#1FAF55] dark:border-[#223A2E] dark:bg-[#13231C]">
              <span className="text-[15px] text-[#3F544A] dark:text-[#A7BFB2]">+91</span>
              <input
                type="tel"
                placeholder="Your WhatsApp number"
                className="w-full bg-transparent px-3 py-3 text-[15px] text-[#0E1F17] outline-none placeholder:text-[#8FA79A] dark:text-white"
              />
            </div>
            <a
              href={SIGNUP_URL}
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#1FAF55] px-6 py-3 text-[15px] font-semibold text-white shadow-sm shadow-[#1FAF55]/30 transition-all hover:bg-[#12793A] hover:shadow-md"
            >
              Start free
              <ArrowRight size={17} />
            </a>
          </div>

          <div
            className="rise-in mt-4 flex items-center gap-4 text-[13px] text-[#3F544A] dark:text-[#A7BFB2]"
            style={{ animationDelay: "300ms" }}
          >
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#1FAF55]" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#1FAF55]" /> No coding required
            </span>
          </div>

          {/* Animated Statistics Row */}
          <div
            className="rise-in mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-[#E4E8E1] pt-6 dark:border-white/10"
            style={{ animationDelay: "360ms" }}
          >
            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#0E1F17] dark:text-white tabular-nums tracking-tight">
                <AnimatedStat target={99} suffix="%" duration={1600} />
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-[#465E53] dark:text-[#9FB3A8]">
                delivery rate
              </p>
            </div>

            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#0E1F17] dark:text-white tabular-nums tracking-tight">
                <AnimatedStat target={30} suffix="%" duration={1800} />
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-[#465E53] dark:text-[#9FB3A8]">
                more conversions
              </p>
            </div>

            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#0E1F17] dark:text-white tabular-nums tracking-tight">
                <AnimatedStat target={10} suffix="×" duration={1400} />
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-[#465E53] dark:text-[#9FB3A8]">
                cheaper reach
              </p>
            </div>
          </div>
        </div>

        <div className="rise-in" style={{ animationDelay: "200ms" }}>
          <HeroChatMockup />
        </div>
      </div>
    </section>
  );
}
