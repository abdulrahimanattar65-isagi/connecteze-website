import { useState, useEffect, useRef } from "react";
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

// Structure: [ Clone(Last), Real(0), Real(1), Real(2), Real(3), Clone(First) ]
const SLIDES = [
  REVIEWS[REVIEWS.length - 1],
  ...REVIEWS,
  REVIEWS[0],
];

export default function Reviews() {
  // Start at index 1 (the first real review)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasTransition, setHasTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isJumpingRef = useRef(false);

  // Auto-slide forward every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    if (isJumpingRef.current) return;
    setHasTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isJumpingRef.current) return;
    setHasTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Called when the slide animation completes
  const handleTransitionEnd = () => {
    // If we just slid forward into the cloned first review (at the end)
    if (currentIndex === SLIDES.length - 1) {
      isJumpingRef.current = true;
      // Instantly jump to the real first review without animation
      setHasTransition(false);
      setCurrentIndex(1);
      // Re-enable transitions after paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumpingRef.current = false;
        });
      });
    }

    // If we just slid backward into the cloned last review (at index 0)
    if (currentIndex === 0) {
      isJumpingRef.current = true;
      setHasTransition(false);
      setCurrentIndex(REVIEWS.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumpingRef.current = false;
        });
      });
    }
  };

  // Calculate active indicator index (0 to REVIEWS.length - 1)
  let activeDot = currentIndex - 1;
  if (currentIndex === 0) activeDot = REVIEWS.length - 1;
  if (currentIndex === SLIDES.length - 1) activeDot = 0;

  return (
    <section
      id="reviews"
      className="reviews-section relative overflow-hidden bg-[#0A1610] py-20 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex items-center justify-between">
          
          {/* Left Arrow Button */}
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
              className={`flex ${
                hasTransition ? "transition-transform duration-600 ease-out" : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {SLIDES.map((item, index) => (
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
                      <p className="text-xs text-[#9FB3A8]">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
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
              onClick={() => {
                setHasTransition(true);
                setCurrentIndex(index + 1);
              }}
              aria-label={`Go to review ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeDot === index
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