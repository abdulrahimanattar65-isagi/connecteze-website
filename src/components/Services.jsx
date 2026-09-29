import {
  MessageCircle, Megaphone, ContactRound, GitBranch, MessagesSquare,
  Bot, Sparkles, Workflow, Headset, ShoppingBag, BarChart3, Plug,
  ArrowUpRight, Smartphone, CodeXml, Send, BadgeCheck, UsersRound, UserRound,
  CalendarDays, CircleDollarSign, Check, ListChecks, WandSparkles, Zap,
  TicketCheck, Package, TrendingUp, Boxes,
} from "lucide-react";
import { useState } from "react";
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
  "WhatsApp Business API": [Smartphone, CodeXml, BadgeCheck],
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

function ServiceCard({ service, index }) {
  const { icon: Icon, title, description } = service;
  const AccentIcon = SERVICE_SCENES[title][1];
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <article
      ref={ref}
      className={`service-card service-card-tone-${index % 6} group relative overflow-hidden rounded-[20px] border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${inView ? "service-card-visible" : "translate-y-4 opacity-0"}`}
      style={{
        animationDelay: `${(index % 6) * 65}ms`,
      }}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="service-icon-chip"><Icon size={18} strokeWidth={1.8} /></span>
          <span className="service-icon-chip service-icon-chip-accent"><AccentIcon size={16} strokeWidth={1.8} /></span>
        </div>
        <ArrowUpRight size={15} className="service-card-corner" />
      </div>
      <h3 className="font-display relative z-10 mt-4 text-lg font-bold leading-tight text-[#151b18] dark:text-[#EAF6EE]">{title}</h3>
      <p className="relative z-10 mt-2 text-[13px] leading-relaxed text-[#53645b] dark:text-[#B8CFC1]">{description}</p>
    </article>
  );
}

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 6);

  return (
    <section id="services" className="services-section relative isolate overflow-hidden py-12 sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-emerald-300/25 blur-[100px] dark:bg-emerald-500/10" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
         
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#10251B] dark:text-white sm:text-4xl">
            Everything you need to grow through conversations
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#52665B] dark:text-[#A7BFB2] sm:text-base">
            Bring marketing, sales, and customer care together with WhatsApp-first tools built for the way your customers communicate.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>
        {!showAll && (
          <div className="mt-8 text-center">
            <button type="button" onClick={() => setShowAll(true)} className="service-show-more rounded-full border border-[#bedec8] bg-white/85 px-6 py-2.5 text-sm font-semibold text-[#168344] shadow-sm transition hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-md dark:border-white/15 dark:bg-[#10251b] dark:text-[#70E697]">
              Show more services <ArrowUpRight size={15} className="ml-1 inline-block" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
