import React, { useState, useEffect } from "react";
import {
  LogIn,
  CreditCard,
  FilePlus2,
  Megaphone,
  CalendarCheck,
  Send,
  BarChart3,
  CheckCheck,
  MessageCircle,
} from "lucide-react";

const STEPS = [
  { id: 0, title: "User Login", icon: LogIn },
  { id: 1, title: "Subscription", icon: CreditCard },
  { id: 2, title: "Create Template", icon: FilePlus2 },
  { id: 3, title: "CRM Campaign", icon: Megaphone },
  { id: 4, title: "Schedule & Contacts", icon: CalendarCheck },
  { id: 5, title: "Channel Dispatch", icon: Send },
];

export default function Flow() {
  const [currentStep, setCurrentStep] = useState(0);

  // Smoothly step the cursor from 0 to 5, then loop back to 0
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STEPS.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  // Calculate percentage: exactly 0% at first icon center, exactly 100% at last icon center
  const cursorPositionPercent = (currentStep / (STEPS.length - 1)) * 100;

  return (
    <section id="flow" className="flow-section relative isolate overflow-hidden py-20 transition-colors sm:py-24">
      <div aria-hidden="true" className="flow-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="flow-orb flow-orb-left pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-300/30 blur-[110px] dark:bg-emerald-500/10" />
      <div aria-hidden="true" className="flow-orb flow-orb-right pointer-events-none absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-lime-200/35 blur-[120px] dark:bg-teal-400/10" />

      <div aria-hidden="true" className="flow-illustration flow-illustration-campaign absolute left-[4%] top-[54%] z-0 hidden w-36 rounded-2xl border border-emerald-900/10 bg-white/75 p-3 shadow-xl shadow-emerald-950/5 backdrop-blur-xl 2xl:block dark:border-white/10 dark:bg-[#10251b]/75">
        <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#168344] dark:bg-[#1B3525] dark:text-[#70E697]"><Megaphone size={14} /></span><div><p className="text-[9px] font-bold text-[#183324] dark:text-white">Campaign sent</p><p className="text-[8px] text-[#718176] dark:text-[#A7BFB2]">Just now</p></div></div>
        <div className="mt-3 flex items-end gap-1"><span className="text-xs font-extrabold text-[#183324] dark:text-white">2,480</span><span className="mb-0.5 text-[8px] text-[#718176] dark:text-[#A7BFB2]">delivered</span><BarChart3 size={14} className="ml-auto text-[#1FAF55]" /></div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EAF1E9] dark:bg-white/10"><div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#1FAF55] to-[#6DE397]" /></div>
      </div>

      <div aria-hidden="true" className="flow-illustration flow-illustration-message absolute right-[4%] top-[24%] z-0 hidden w-36 rounded-2xl border border-emerald-900/10 bg-white/75 p-3 shadow-xl shadow-emerald-950/5 backdrop-blur-xl 2xl:block dark:border-white/10 dark:bg-[#10251b]/75">
        <div className="flex items-start gap-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#168344] dark:text-[#70E697]"><MessageCircle size={14} /></span><div><p className="text-[9px] font-bold text-[#183324] dark:text-white">Order update</p><p className="mt-1 text-[9px] leading-4 text-[#5C6F64] dark:text-[#A7BFB2]">Your order is on its way!</p></div></div>
        <div className="mt-2 flex items-center justify-end gap-1 text-[8px] text-[#829287]">Delivered <CheckCheck size={11} className="text-sky-600" /></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        
        {/* Professional Section Header */}
        <div className="text-center mb-14">
          
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0E1F17] sm:text-3xl dark:text-[#EAF6EE]">
            How Connecteze Works
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#556960] dark:text-[#9FB3A8]">
            An end-to-end walkthrough from authentication to message delivery
          </p>
        </div>

        {/* Horizontal Pipeline Track */}
        <div className="relative">
          
          {/* Base Track Line - constrained strictly between the center of 1st and last icons */}
          <div className="flow-track absolute top-5 left-[32px] right-[32px] sm:left-[40px] sm:right-[40px] h-[3px] -translate-y-1/2">
            
            {/* Active Progress Fill */}
            <div
              className="h-full bg-[#25D366] transition-all duration-700 ease-in-out"
              style={{ width: `${cursorPositionPercent}%` }}
            />

            {/* Glowing Slider Cursor / Pointer - never overflows beyond 0% or 100% */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#25D366] ring-4 ring-[#25D366]/30 shadow-[0_0_10px_#25D366] transition-all duration-700 ease-in-out"
              style={{ left: `${cursorPositionPercent}%` }}
            />
          </div>

          {/* Icons & 1-2 Word Labels */}
          <div className="relative z-10 flex items-start justify-between">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;
              const isPassed = currentStep >= index;

              return (
                <div
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className="group flex flex-col items-center cursor-pointer select-none"
                  style={{ width: "80px" }}
                >
                  {/* Small Circular Icon */}
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#25D366] text-white scale-110 shadow-lg shadow-[#25D366]/40 ring-4 ring-[#25D366]/20"
                        : isPassed
                        ? "bg-[#25D366] text-white shadow-sm"
                        : "bg-[#FAF5EC] dark:bg-[#13231C] border border-[#285744]/20 dark:border-white/10 text-[#556960] dark:text-[#9FB3A8]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* 1-2 Words Title */}
                  <span
                    className={`mt-3 text-center text-xs font-semibold leading-tight transition-colors ${
                      isActive
                        ? "text-[#0E1F17] dark:text-white font-bold"
                        : isPassed
                        ? "text-[#1FAF55] dark:text-[#4ADE80]"
                        : "text-[#556960] dark:text-[#8FA59A]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
