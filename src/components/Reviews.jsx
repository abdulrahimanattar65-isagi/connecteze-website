import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "We stopped losing orders in comment sections and DMs. Everything now lands in one WhatsApp inbox, and our response time dropped by half.",
    name: "Reema Anand",
    role: "Founder, Bakehouse Co.",
    initials: "RA",
  },
  {
    quote:
      "Connecteze made scheduling broadcasts and sending utility updates completely seamless. Our campaign conversion rates jumped by 40% in week one.",
    name: "Arjun Verma",
    role: "Marketing Lead, RetailKart",
    initials: "AV",
  },
  {
    quote:
      "The CRM integration and scheduled campaigns eliminated manual outreach entirely. Reliable delivery and real-time reply tracking are invaluable.",
    name: "Sneha Patel",
    role: "Operations Head, Nexa Health",
    initials: "SP",
  },
  {
    quote:
      "Setting up Meta-approved templates used to take days. With Connecteze, we launch targeted bulk campaigns in just minutes.",
    name: "Karan Mehta",
    role: "Growth Director, Pulse Media",
    initials: "KM",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = REVIEWS.length;

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-slide every 4 seconds without delay on initial mount
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      className="relative overflow-hidden bg-[#0A1610] py-20 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex items-center justify-between">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel Viewport */}
          <div className="mx-4 w-full flex-1 overflow-hidden">
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {REVIEWS.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-[0_0_100%] px-4 flex flex-col items-center text-center"
                >
                  <blockquote className="min-h-[110px] text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl flex items-center justify-center max-w-3xl">
                    "{item.quote}"
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1FAF55] text-xs font-bold text-white shadow-md shadow-[#1FAF55]/30">
                      {item.initials}
                    </div>
                    <div className="text-left">
                      <p className="text-[14px] font-bold text-white leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-white/60">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-[#1FAF55]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}