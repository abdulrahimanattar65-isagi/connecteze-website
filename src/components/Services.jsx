import {
  MessageCircle, Megaphone, ContactRound, GitBranch, MessagesSquare,
  Bot, Sparkles, Workflow, Headset, ShoppingBag, BarChart3, Plug,
  ArrowUpRight, Smartphone, Send, BadgeCheck, UsersRound, UserRound,
  CalendarDays, CircleDollarSign, Check, ListChecks, WandSparkles, Zap,
  TicketCheck, Package, TrendingUp, Boxes,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const SERVICES = [
  { icon: MessageCircle, title: "WhatsApp Business API", description: "Connect your business number to reliable, scalable WhatsApp messaging and customer conversations." },
  { icon: Megaphone, title: "WhatsApp Marketing", description: "Plan personalized broadcasts and timely updates for customers who want to hear from you." },
  { icon: ContactRound, title: "CRM & Contacts", description: "Keep customer details, preferences, and conversation history organized in one place." },
  { icon: GitBranch, title: "Sales Pipeline", description: "Track prospects from first enquiry to follow-up and give every opportunity a clear next step." },
  { icon: MessagesSquare, title: "Shared Team Inbox", description: "Let teammates handle conversations together with clear ownership and context." },
  { icon: Bot, title: "Chatbots", description: "Welcome customers, answer common questions, and collect details with guided chat flows." },
  { icon: Sparkles, title: "AI Assistance", description: "Help your team draft replies, summarize conversations, and find useful customer context." },
  { icon: Workflow, title: "Automation", description: "Automate repetitive follow-ups and route messages based on customer actions." },
  { icon: Headset, title: "Customer Support", description: "Organize service requests, respond faster, and keep support conversations moving." },
  { icon: ShoppingBag, title: "E-commerce", description: "Bring product discovery, order updates, and customer conversations into the same journey." },
  { icon: BarChart3, title: "Analytics & Reports", description: "Understand campaign engagement, team activity, and the results of your messaging." },
  { icon: Plug, title: "Integrations", description: "Connect your messaging workflows with the CRM and commerce tools your team already uses." },
];

const SERVICE_SCENES = {
  "WhatsApp Business API": [Smartphone, MessageCircle, BadgeCheck],
  "WhatsApp Marketing": [Megaphone, UsersRound, Send],
  "CRM & Contacts": [ContactRound, UserRound, CalendarDays],
  "Sales Pipeline": [GitBranch, CircleDollarSign, Check],
  "Shared Team Inbox": [MessagesSquare, UsersRound, Check],
  Chatbots: [Bot, MessageCircle, ListChecks],
  "AI Assistance": [Sparkles, WandSparkles, MessageCircle],
  Automation: [Workflow, Zap, CalendarDays],
  "Customer Support": [Headset, TicketCheck, Check],
  "E-commerce": [ShoppingBag, Package, MessageCircle],
  "Analytics & Reports": [BarChart3, TrendingUp, CircleDollarSign],
  Integrations: [Plug, Boxes, Workflow],
};

function ServiceIllustration({ title }) {
  const [MainIcon, AccentIcon, EndIcon] = SERVICE_SCENES[title];
  return (
    <div aria-hidden="true" className="service-illustration pointer-events-none absolute -right-2 -top-2 h-[6.5rem] w-[9rem] text-[#655BFF] opacity-90 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 dark:text-[#AAA5FF]">
      <div className="absolute right-2 top-1 h-20 w-24 rounded-full bg-gradient-to-br from-violet-200/65 via-sky-100/60 to-emerald-100/70 blur-xl dark:from-violet-500/20 dark:via-sky-500/15 dark:to-emerald-400/15" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 120 72" fill="none">
        <path d="M23 43 C38 43 38 20 58 20 S77 48 96 48" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" />
        <circle cx="23" cy="43" r="3" fill="currentColor" />
        <circle cx="58" cy="20" r="3" fill="currentColor" />
        <circle cx="96" cy="48" r="3" fill="currentColor" />
      </svg>
      <span className="absolute left-1 top-9 flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200/80 bg-gradient-to-br from-white via-violet-50 to-sky-50 shadow-lg shadow-violet-900/10 dark:border-violet-300/15 dark:from-[#253044] dark:via-[#20253A] dark:to-[#18352B]">
        <MainIcon size={20} strokeWidth={1.7} />
      </span>
      <span className="absolute left-[3.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-sky-200/80 bg-gradient-to-br from-white to-sky-100 shadow-md shadow-sky-900/10 dark:border-sky-300/15 dark:from-[#23334A] dark:to-[#263451]">
        <AccentIcon size={15} strokeWidth={1.8} />
      </span>
      <span className="absolute right-0 top-9 flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-200/80 bg-gradient-to-br from-white to-emerald-100 text-emerald-700 shadow-md shadow-emerald-900/10 dark:border-emerald-300/15 dark:from-[#1C392B] dark:to-[#1A3028] dark:text-emerald-300">
        <EndIcon size={15} strokeWidth={1.8} />
      </span>
    </div>
  );
}

function ServiceCard({ service, index }) {
  const { icon: Icon, title, description } = service;
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <article
      ref={ref}
      className={`service-card group relative overflow-hidden rounded-2xl border border-[#DDE9DF] bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:shadow-lg hover:shadow-emerald-900/10 dark:border-white/10 dark:bg-[#10251b]/75 dark:hover:border-[#25D366]/40 ${inView ? "service-card-visible" : "translate-y-4 opacity-0"}`}
      style={{
        animationDelay: `${(index % 3) * 75}ms`,
      }}
    >
      <ServiceIllustration title={title} />
      <div className="flex items-start justify-between">
        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#168344] transition-colors group-hover:bg-[#25D366] group-hover:text-white dark:bg-[#1B3525] dark:text-[#70E697]">
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <ArrowUpRight size={17} className="relative z-10 mt-1 text-[#91A398] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#168344] dark:group-hover:text-[#70E697]" />
      </div>
      <h3 className="font-display relative z-10 mt-5 text-base font-bold text-[#10251B] dark:text-[#EAF6EE]">{title}</h3>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#5C6F64] dark:text-[#A7BFB2]">{description}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section relative isolate overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-emerald-300/25 blur-[100px] dark:bg-emerald-500/10" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/10 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#168344] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-[#4ADE80]">
            One connected platform
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#10251B] dark:text-white sm:text-4xl">
            Everything you need to grow through conversations
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#52665B] dark:text-[#A7BFB2] sm:text-base">
            Bring marketing, sales, and customer care together with WhatsApp-first tools built for the way your customers communicate.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>
      </div>
    </section>
  );
}
