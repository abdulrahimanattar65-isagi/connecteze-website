import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
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

// Append first item to the end for seamless continuous looping
const SLIDES = [...TESTIMONIALS, TESTIMONIALS[0]];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, current]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (current === 0) {
      // Jump invisibly to clone, then slide back to Karan Mehta
      setIsTransitioning(false);
      setCurrent(TESTIMONIALS.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrent(TESTIMONIALS.length - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrent((prev) => prev - 1);
    }
  };

  // When clone transition ends, silently snap to the real first slide (index 0)
  const handleTransitionEnd = () => {
    if (current === TESTIMONIALS.length) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  // Active indicator dot calculation
  const activeDotIndex = current % TESTIMONIALS.length;

  return (
    <section
      className="relative overflow-hidden bg-[#0A1610] py-24 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Carousel Viewport */}
          <div className="mx-4 flex-1 overflow-hidden">
            {/* Sliding Ribbon */}
            <div
              className={`flex ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{ transform: `translateX(-${current * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {SLIDES.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-[0_0_100%] px-4 flex flex-col items-center text-center"
                >
                  <blockquote className="min-h-[140px] text-xl font-bold leading-relaxed text-white sm:text-2xl md:text-3xl flex items-center justify-center">
                    "{item.quote}"
                  </blockquote>

                  <div className="mt-8 flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1FAF55] text-sm font-bold text-white shadow-md shadow-[#1FAF55]/30">
                      {item.initials}
                    </div>
                    <div className="text-left">
                      <p className="text-[15px] font-bold text-white">{item.name}</p>
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
            aria-label="Next slide"
            className="z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-12 flex justify-center items-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeDotIndex === index
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