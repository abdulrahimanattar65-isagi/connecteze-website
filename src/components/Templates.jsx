import { Megaphone, MessageSquareCode, BellRing, ArrowUpRight } from "lucide-react";

const TEMPLATES = [
  {
    icon: Megaphone,
    title: "Flash Sales & Promotions",
    subtitle: "Marketing Broadcast",
    text: "Broadcast bulk promotional offers, catalog links, and discount codes directly to customer inboxes with rich CTAs.",
    from: "#25D366",
    via: "#128C7E",
    to: "#075E54",
    tab: "#25D366",
    tilt: "rotate-1",
  },
  {
    icon: MessageSquareCode,
    title: "Lead Generation & Chatbots",
    subtitle: "Automated Conversational Flow",
    text: "Qualify inbound leads instantly via automated conversational forms and sync lead details directly into your CRM.",
    from: "#3B82F6",
    via: "#1D4ED8",
    to: "#0E1F17",
    tab: "#3B82F6",
    tilt: "-rotate-1",
  },
  {
    icon: BellRing,
    title: "Utility & Order Updates",
    subtitle: "Transactional Messaging",
    text: "Deliver automated order confirmations, delivery tracking, and appointment reminders using verified utility templates.",
    from: "#F5A623",
    via: "#C97E10",
    to: "#0E1F17",
    tab: "#F5A623",
    tilt: "rotate-1",
  },
];

export default function Templates() {
  return (
    <section id="templates" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
          Turn WhatsApp into your primary revenue channel
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
          Pre-built Connecteze campaign workflows designed for high open rates, instant engagement, and automated conversions.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {TEMPLATES.map(({ icon: Icon, title, subtitle, text, from, via, to, tab, tilt }) => (
          <div
            key={title}
            className={`group relative pt-4 transition-transform duration-300 hover:rotate-0 ${tilt}`}
          >
            {/* Folder Tab */}
            <div
              className="absolute left-6 top-0 h-6 w-24 rounded-t-lg opacity-90"
              style={{ backgroundColor: tab }}
            />

            {/* Card Body */}
            <div className="relative h-80 overflow-hidden rounded-2xl rounded-tl-none shadow-lg shadow-[#0E1F17]/10 transition-shadow duration-300 group-hover:shadow-2xl">
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(155deg, ${from}, ${via} 55%, ${to})` }}
              />
              {/* Decorative Background Icon */}
              <div className="absolute inset-0 opacity-15">
                <Icon size={220} className="absolute -bottom-10 -right-10 text-white" strokeWidth={1} />
              </div>

              <div className="relative flex h-full flex-col justify-between p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                  <Icon size={18} />
                </span>

                <div>
                  <p className="text-[11.5px] font-semibold uppercase tracking-wide text-white/70">
                    {subtitle}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-bold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">{text}</p>
                  <a
                    href="#templates"
                    className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-white transition-transform group-hover:translate-x-0.5"
                  >
                    Launch campaign <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}