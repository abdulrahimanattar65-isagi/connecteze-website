import { useEffect, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SIGNUP_URL } from "./Navbar";

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
    const timer = setTimeout(() => {
      setStep((s) => (s + 1) % (SCRIPT.length + 2));
    }, step >= SCRIPT.length ? 1600 : 900);
    return () => clearTimeout(timer);
  }, [step]);

  const visible = SCRIPT.slice(0, Math.min(step + 1, SCRIPT.length));

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* floating background card, echoes the layered-composition of the reference */}
      <div className="float-slow absolute -left-10 top-6 hidden w-48 rounded-2xl border border-[#E4E8E1] bg-white p-4 shadow-xl shadow-[#0E1F17]/5 dark:border-[#223A2E] dark:bg-[#13231C] sm:block">
        <div className="mb-3 h-2 w-16 rounded-full bg-[#EAF7EE] dark:bg-[#1B2E24]" />
        <div className="mb-2 h-2 w-full rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="mb-2 h-2 w-4/5 rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="mb-4 h-2 w-3/5 rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="rounded-lg bg-[#1FAF55] py-1.5 text-center text-[11px] font-semibold text-white">
          Submit on WhatsApp
        </div>
      </div>

      {/* phone frame */}
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
                <div key={i} className="bubble-in flex items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
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

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-[#EAF7EE] to-transparent dark:from-[#0F1F18]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-16">
        <div>
          <div
            className="rise-in inline-flex items-center gap-2 rounded-full border border-[#D9F2E1] bg-white px-3 py-1 text-[13px] font-medium text-[#12793A] dark:border-[#1F3229] dark:bg-[#13231C] dark:text-[#4ADE80]"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1FAF55]" />
            Built for 2.5B+ WhatsApp users
          </div>

          <h1
            className="rise-in font-display mt-5 text-4xl font-800 leading-[1.08] tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Turn every chat into a customer
          </h1>

          <p
            className="rise-in mt-5 max-w-md text-[17px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]"
            style={{ animationDelay: "160ms" }}
          >
            Build no-code forms, run broadcast campaigns, and manage orders — all delivered straight to your customer's WhatsApp. No developers, no waiting.
          </p>

          <div
            className="rise-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-center overflow-hidden rounded-lg border border-[#E4E8E1] bg-white pl-3 focus-within:border-[#1FAF55] dark:border-[#223A2E] dark:bg-[#13231C]">
              <span className="text-[15px] text-[#3F544A] dark:text-[#9FB3A8]">+91</span>
              <input
                type="tel"
                placeholder="Your WhatsApp number"
                className="w-full bg-transparent px-3 py-3 text-[15px] text-[#0E1F17] outline-none placeholder:text-[#8FA79A] dark:text-[#EAF6EE]"
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
            className="rise-in mt-4 flex items-center gap-4 text-[13px] text-[#3F544A] dark:text-[#9FB3A8]"
            style={{ animationDelay: "300ms" }}
          >
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#1FAF55]" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#1FAF55]" /> No coding required
            </span>
          </div>

          <div
            className="rise-in mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-[#E4E8E1] pt-6 dark:border-[#223A2E]"
            style={{ animationDelay: "360ms" }}
          >
            {[
              ["99%", "delivery rate"],
              ["30%", "more conversions"],
              ["10×", "cheaper reach"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-700 text-[#0E1F17] dark:text-[#EAF6EE]">{stat}</p>
                <p className="text-[12.5px] text-[#3F544A] dark:text-[#9FB3A8]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rise-in" style={{ animationDelay: "200ms" }}>
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}
