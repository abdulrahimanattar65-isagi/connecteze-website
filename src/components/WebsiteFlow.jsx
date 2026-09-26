import { 
  LogIn, 
  CreditCard, 
  FileBadge, 
  CalendarClock, 
  UserCheck, 
  Send 
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const NODES = [
  { 
    icon: LogIn, 
    step: "Step 1",
    label: "Log in to Connecteze" 
  },
  { 
    icon: CreditCard, 
    step: "Step 2",
    label: "Select your subscription" 
  },
  { 
    icon: FileBadge, 
    step: "Step 3",
    label: "Create & categorize template (Utility / Marketing)" 
  },
  { 
    icon: CalendarClock, 
    step: "Step 4",
    label: "Setup CRM campaign & schedule timing" 
  },
  { 
    icon: UserCheck, 
    step: "Step 5",
    label: "Upload & map contact list" 
  },
  { 
    icon: Send, 
    step: "Step 6",
    label: "Select approved template & dispatch broadcast" 
  },
];

export default function WebsiteFlow() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="flow" className="relative overflow-hidden bg-[#FAFBF7] py-24 dark:bg-[#0A1610]">
      {/* Pattern Wallpaper Background */}
      <div 
        className="pointer-events-none absolute inset-0 bg-repeat opacity-35 mix-blend-multiply dark:opacity-10 dark:mix-blend-screen"
        style={{
          backgroundImage: "url('/flow-pattern.jpg')",
          backgroundSize: "360px",
        }}
      />

      {/* Soft Radial Ambient Mask */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-[#FAFBF7]/60 to-[#FAFBF7] dark:via-[#0A1610]/70 dark:to-[#0A1610]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
            How Connecteze works
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
            From creating Meta-compliant templates to launching scheduled bulk WhatsApp broadcasts in 6 simple steps.
          </p>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* Mobile connecting line */}
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-[#DDE7E0] dark:bg-[#223A2E] md:hidden">
            {inView && (
              <div className="flow-runner-y absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#1FAF55] shadow-[0_0_10px_2px_rgba(31,175,85,0.6)]" />
            )}
          </div>

          {/* Desktop connecting line strictly from Icon 1 to Icon 6 */}
          <div className="absolute top-6 hidden h-px bg-[#DDE7E0] dark:bg-[#223A2E] md:block left-[8.33%] w-[83.33%]">
            {inView && (
              <div className="flow-runner-x absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#1FAF55] shadow-[0_0_12px_2px_rgba(31,175,85,0.7)]" />
            )}
          </div>

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-4">
            {NODES.map(({ icon: Icon, step, label }, i) => (
              <div
                key={label}
                className={`reveal relative flex items-start gap-4 md:flex-col md:items-center md:text-center ${
                  inView ? "reveal-visible" : ""
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1FAF55] bg-white text-[#12793A] shadow-md shadow-[#0E1F17]/5 dark:bg-[#0E1913] dark:text-[#4ADE80]">
                  <Icon size={18} />
                </span>
                
                <div className="rounded-lg bg-[#FAFBF7]/85 p-1 backdrop-blur-[2px] dark:bg-[#0A1610]/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1FAF55]">
                    {step}
                  </span>
                  <p className="max-w-[9.5rem] text-[13px] font-medium leading-snug text-[#0E1F17] dark:text-[#EAF6EE] md:mt-1">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}