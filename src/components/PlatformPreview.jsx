import { Activity, ArrowUpRight, Bot, Check, CircleHelp, Clock3, MessageCircle, Send, ShoppingBag, Sparkles, Workflow } from "lucide-react";
import { useInView } from "../hooks/useInView";

const STATS = [
  { label: "Messages delivered", value: "24,680", change: "+12.8%" },
  { label: "Replies received", value: "3,842", change: "+8.4%" },
  { label: "Active conversations", value: "1,204", change: "+16.2%" },
];

function AnalyticsMockup() {
  const bars = [36, 51, 44, 70, 57, 82, 66, 94, 73, 88, 62, 100];
  return (
    <div className="platform-card rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6" style={{ animationDelay: "80ms" }}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Workspace overview</p>
          <h3 className="font-display mt-2 text-lg font-bold text-white sm:text-xl">Your conversations, at a glance</h3>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 sm:inline-flex"><Clock3 size={13} /> Last 7 days</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-black/10 p-3 sm:p-4">
            <p className="text-[10px] leading-4 text-white/50 sm:text-[11px]">{stat.label}</p>
            <p className="mt-2 text-lg font-bold text-white sm:text-2xl">{stat.value}</p>
            <p className="mt-1 text-[10px] font-semibold text-emerald-300">{stat.change}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-white/[0.08] bg-[#0C1B12]/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div><p className="text-xs font-semibold text-white">Message activity</p><p className="mt-1 text-[10px] text-white/45">Delivered messages this week</p></div>
          <span className="flex items-center gap-1 text-[10px] text-emerald-300"><Activity size={13} /> +18%</span>
        </div>
        <div className="flex h-28 items-end gap-1.5 sm:h-32 sm:gap-2">
          {bars.map((height, index) => (
            <div key={index} className="relative flex h-full flex-1 items-end overflow-hidden rounded-t-md bg-white/[0.035]">
              <div className="platform-bar w-full rounded-t-md bg-gradient-to-t from-[#168344] to-[#58E891]" style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }} />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-white/35"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
      </div>
    </div>
  );
}

function AiChatMockup() {
  return (
    <div className="platform-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#13291B] to-[#0D1B12] p-5 shadow-2xl shadow-black/10 sm:p-6" style={{ animationDelay: "170ms" }}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/15 blur-[70px]" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#138B43] text-white shadow-lg shadow-emerald-900/30"><Bot size={20} /></div>
          <div><h3 className="text-sm font-bold text-white">AI reply assistant</h3><p className="mt-0.5 text-[10px] text-emerald-200/60">Ready when your team needs it</p></div>
        </div>
        <span className="flex h-2.5 w-2.5 rounded-full bg-[#4ADE80] ring-4 ring-emerald-400/10" />
      </div>
      <div className="relative mt-5 space-y-3 rounded-2xl border border-white/[0.07] bg-[#08130D]/60 p-4">
        <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/[0.08] px-3.5 py-2.5 text-xs leading-5 text-white/75">Hi! Can I change the delivery address for my order?</div>
        <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-[#137A3C]/35 px-3.5 py-2.5 text-xs leading-5 text-white">Of course. Share your order number and the new address, and I’ll help update it.</div>
        <div className="flex items-center gap-2 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-2 text-[10px] text-emerald-100/70"><Sparkles size={12} className="shrink-0 text-emerald-300" /> Suggested response · Review before sending</div>
      </div>
      <div className="relative mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
        <span className="text-[10px] text-white/40">Write a reply…</span>
        <button type="button" aria-label="Send sample reply" className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#25D366] text-[#07200F]"><Send size={13} /></button>
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="platform-card rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6" style={{ animationDelay: "250ms" }}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/15 text-violet-200"><Workflow size={19} /></div>
        <div><h3 className="text-sm font-bold text-white">A workflow that keeps moving</h3><p className="mt-1 text-[10px] text-white/45">A simple example automation</p></div>
      </div>
      <div className="mt-5 space-y-0">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1910]/75 p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/15 text-blue-200"><MessageCircle size={15} /></span>
          <div className="min-w-0"><p className="text-xs font-semibold text-white">New WhatsApp enquiry</p><p className="mt-0.5 text-[10px] text-white/40">Trigger · Message received</p></div>
          <Check size={15} className="ml-auto shrink-0 text-emerald-300" />
        </div>
        <div className="ml-[27px] h-5 w-px border-l border-dashed border-emerald-300/35" />
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1910]/75 p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-400/15 text-violet-200"><ShoppingBag size={15} /></span>
          <div className="min-w-0"><p className="text-xs font-semibold text-white">Check order intent</p><p className="mt-0.5 text-[10px] text-white/40">Condition · Customer is shopping</p></div>
          <ArrowUpRight size={14} className="ml-auto shrink-0 text-white/35" />
        </div>
        <div className="ml-[27px] h-5 w-px border-l border-dashed border-emerald-300/35" />
        <div className="flex items-center gap-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.07] p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-emerald-200"><Send size={15} /></span>
          <div className="min-w-0"><p className="text-xs font-semibold text-white">Send product options</p><p className="mt-0.5 text-[10px] text-white/40">Action · WhatsApp message</p></div>
          <Check size={15} className="ml-auto shrink-0 text-emerald-300" />
        </div>
      </div>
    </div>
  );
}

function IntegrationMockup() {
  const apps = [
    { name: "Shopify", className: "bg-[#95BF47]/15 text-[#B9DF7A]" },
    { name: "HubSpot", className: "bg-[#FF7A59]/15 text-[#FFAA91]" },
    { name: "WooCommerce", className: "bg-violet-400/15 text-violet-200" },
    { name: "CRM", className: "bg-blue-400/15 text-blue-200" },
  ];
  return (
    <div className="platform-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6" style={{ animationDelay: "330ms" }}>
      <div className="flex items-center justify-between gap-2">
        <div><h3 className="text-sm font-bold text-white">Keep your tools in sync</h3><p className="mt-1 text-[10px] text-white/45">Connect the customer journey</p></div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] text-white/50">Integration network</span>
      </div>
      <div className="relative mt-4 flex min-h-[170px] items-center justify-center overflow-hidden rounded-2xl bg-[#0B1910]/65">
        <svg aria-hidden="true" viewBox="0 0 500 180" className="absolute inset-0 h-full w-full text-emerald-300/25">
          <path d="M250 90C180 90 170 38 96 38M250 90c70 0 80-52 154-52M250 90c-70 0-80 52-154 52M250 90c70 0 80 52 154 52" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" />
          <circle cx="96" cy="38" r="4" fill="currentColor" /><circle cx="404" cy="38" r="4" fill="currentColor" /><circle cx="96" cy="142" r="4" fill="currentColor" /><circle cx="404" cy="142" r="4" fill="currentColor" />
        </svg>
        <div className="relative grid w-full grid-cols-3 items-center gap-2 px-3 sm:px-5">
          <div className="col-start-1 row-start-1 flex justify-center"><span className={`rounded-xl border border-white/10 px-2.5 py-2 text-[9px] font-semibold sm:px-3 sm:text-[10px] ${apps[0].className}`}>{apps[0].name}</span></div>
          <div className="col-start-3 row-start-1 flex justify-center"><span className={`rounded-xl border border-white/10 px-2.5 py-2 text-[9px] font-semibold sm:px-3 sm:text-[10px] ${apps[1].className}`}>{apps[1].name}</span></div>
          <div className="col-start-1 row-start-3 flex justify-center"><span className={`rounded-xl border border-white/10 px-2.5 py-2 text-[9px] font-semibold sm:px-3 sm:text-[10px] ${apps[2].className}`}>{apps[2].name}</span></div>
          <div className="col-start-3 row-start-3 flex justify-center"><span className={`rounded-xl border border-white/10 px-2.5 py-2 text-[9px] font-semibold sm:px-3 sm:text-[10px] ${apps[3].className}`}>{apps[3].name}</span></div>
          <div className="col-start-2 row-span-3 row-start-1 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#25D366]/35 bg-[#25D366]/10 text-[#52E58A] shadow-lg shadow-[#25D366]/10"><MessageCircle size={24} /></div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformPreview() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  return (
    <section id="platform-preview" ref={sectionRef} className="platform-preview relative isolate overflow-hidden py-12 sm:py-24">
      <div aria-hidden="true" className="platform-grid pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <div className="pointer-events-none absolute -left-28 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal-400/10 blur-[110px]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className={`mx-auto mb-12 max-w-2xl text-center ${inView ? "platform-reveal" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/[0.07] px-3 py-1 text-xs font-semibold uppercase tracking-[.16em] text-emerald-200"><CircleHelp size={13} /> A closer look</span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">One workspace. Every conversation connected.</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">See how insights, helpful AI, and thoughtful automation can work together across your customer journey.</p>
        </div>
        <div className={`grid gap-4 lg:grid-cols-12 ${inView ? "platform-visible" : ""}`}>
          <div className="lg:col-span-7"><AnalyticsMockup /></div>
          <div className="space-y-4 lg:col-span-5">
            <AiChatMockup />
            <div className="platform-card flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-xl shadow-black/10 backdrop-blur-xl" style={{ animationDelay: "210ms" }}>
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300"><Clock3 size={18} /></span>
                <div className="min-w-0"><p className="text-xs font-semibold text-white">Fast team responses</p><p className="mt-1 text-[10px] text-white/45">Average first reply this week</p></div>
              </div>
              <div className="shrink-0 text-right"><p className="text-xl font-bold text-white">2m 14s</p><p className="mt-0.5 text-[10px] font-semibold text-emerald-300">↓ 18% faster</p></div>
            </div>
          </div>
          <div className="lg:col-span-5"><AutomationMockup /></div>
          <div className="lg:col-span-7"><IntegrationMockup /></div>
        </div>
      </div>
    </section>
  );
}
