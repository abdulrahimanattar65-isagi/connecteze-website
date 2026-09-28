import { useEffect, useState } from "react";
import {
  LogIn,
  CreditCard,
  FilePlus2,
  Megaphone,
  CalendarCheck,
  Send,
  CarFront,
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

  useEffect(() => {
    const timer = setInterval(() => setCurrentStep((step) => (step + 1) % STEPS.length), 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="flow" className="flow-section relative isolate overflow-hidden py-20 transition-colors sm:py-24">
      <div aria-hidden="true" className="flow-doodle absolute inset-0 -z-10" />
      <div aria-hidden="true" className="flow-glow flow-glow-one pointer-events-none absolute -left-40 top-8 -z-10 h-96 w-96 rounded-full bg-[#25D366]/15 blur-[110px]" />
      <div aria-hidden="true" className="flow-glow flow-glow-two pointer-events-none absolute -right-32 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-violet-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <header className="mb-10 text-center sm:mb-12">
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0E1F17] sm:text-3xl dark:text-[#EAF6EE]">
            How Connecteze Works
          </h2>
          <p className="mt-2 text-xs text-[#556960] sm:text-sm dark:text-[#9FB3A8]">
            An end-to-end walkthrough from authentication to message delivery
          </p>
        </header>

        <div className="flow-road relative mx-auto">
          <svg aria-hidden="true" viewBox="0 0 1000 340" preserveAspectRatio="none" className="flow-road-svg pointer-events-none absolute inset-0 h-full w-full">
            <path d="M0 170 H1000" fill="none" stroke="var(--flow-road-edge)" strokeWidth="42" strokeLinecap="round" />
            <path d="M0 170 H1000" fill="none" stroke="var(--flow-road-color)" strokeWidth="34" strokeLinecap="round" />
            <path d="M0 170 H1000" fill="none" stroke="rgba(255,255,255,.62)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 14" />
            <path id="flow-route" d="M58 170 H878" fill="none" />
            <g className="flow-car">
              <circle r="27" fill="#25D366" opacity=".2" />
              <circle r="20" fill="#fff" />
              <CarFront x="-13" y="-13" width="26" height="26" color="#168344" />
              <animateMotion dur="13.2s" repeatCount="indefinite" rotate="auto" keyTimes="0;0.1667;0.3333;0.5;0.6667;0.8333;1" keyPoints="0;0.2;0.4;0.6;0.8;1;1"><mpath href="#flow-route" /></animateMotion>
            </g>
          </svg>

          <div className="flow-stop flow-stop-0">
            <div role="group" aria-label="Step 1: User Login" className={`flow-label ${currentStep === 0 ? "is-active" : ""}`}>
              <span className="flow-label-number">01</span><span className="flow-label-icon"><LogIn size={20} /></span><span className="flow-label-copy"><b>User Login</b><small>Start with your account</small></span>
            </div>
          </div>
          <div className="flow-stop flow-stop-1">
            <div role="group" aria-label="Step 2: Subscription" className={`flow-label ${currentStep === 1 ? "is-active" : ""}`}>
              <span className="flow-label-number">02</span><span className="flow-label-icon"><CreditCard size={20} /></span><span className="flow-label-copy"><b>Subscription</b><small>Choose your plan</small></span>
            </div>
          </div>
          <div className="flow-stop flow-stop-2">
            <div role="group" aria-label="Step 3: Create Template" className={`flow-label ${currentStep === 2 ? "is-active" : ""}`}>
              <span className="flow-label-number">03</span><span className="flow-label-icon"><FilePlus2 size={20} /></span><span className="flow-label-copy"><b>Create Template</b><small>Build your message</small></span>
            </div>
          </div>
          <div className="flow-stop flow-stop-3">
            <div role="group" aria-label="Step 4: CRM Campaign" className={`flow-label ${currentStep === 3 ? "is-active" : ""}`}>
              <span className="flow-label-number">04</span><span className="flow-label-icon"><Megaphone size={20} /></span><span className="flow-label-copy"><b>CRM Campaign</b><small>Reach your audience</small></span>
            </div>
          </div>
          <div className="flow-stop flow-stop-4">
            <div role="group" aria-label="Step 5: Schedule & Contacts" className={`flow-label ${currentStep === 4 ? "is-active" : ""}`}>
              <span className="flow-label-number">05</span><span className="flow-label-icon"><CalendarCheck size={20} /></span><span className="flow-label-copy"><b>Schedule &amp; Contacts</b><small>Set when it goes out</small></span>
            </div>
          </div>
          <div className="flow-stop flow-stop-5">
            <div role="group" aria-label="Step 6: Channel Dispatch" className={`flow-label ${currentStep === 5 ? "is-active" : ""}`}>
              <span className="flow-label-number">06</span><span className="flow-label-icon"><Send size={20} /></span><span className="flow-label-copy"><b>Channel Dispatch</b><small>Messages on their way</small></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
