import React from "react";
import { X, Radio, Users2, LayoutTemplate, Tag, Check, Zap } from "lucide-react";

const PRODUCT_DATA = {
  broadcast: {
    title: "WhatsApp Broadcast",
    badge: "High Open Rate",
    icon: Radio,
    description:
      "Send bulk promotional and utility messages directly to thousands of opted-in customers using Meta’s Official Cloud API without risking number bans.",
    highlights: [
      "98% average message open rates within the first 10 minutes",
      "Dynamic personalization (tags, names, order numbers, custom links)",
      "Interactive Quick-Reply and Call-to-Action (CTA) buttons",
      "Real-time analytics: Track sent, delivered, read, and failed statuses",
      "Smart scheduling with automatic rate-limit throttling",
    ],
    ctaText: "Start Broadcasting",
    ctaLink: "https://app.connecteze.in/signup",
  },
  crm: {
    title: "CRM Campaigns & Automation",
    badge: "Lifecycle Messaging",
    icon: Users2,
    description:
      "Connect your customer data to automated WhatsApp drip sequences, triggered workflows, and event-based reminders.",
    highlights: [
      "Event triggers: Abandoned carts, order updates, payment confirmations",
      "Audience segmentation based on purchase history and interaction tags",
      "Multi-agent live inbox with conversation handover",
      "Webhooks and native integrations with Shopify, WooCommerce, and CRMs",
      "Automated chat routing and out-of-office autoreplies",
    ],
    ctaText: "Automate Campaigns",
    ctaLink: "https://app.connecteze.in/signup",
  },
  templates: {
    title: "Ready-to-Use Meta Templates",
    badge: "Pre-Approved",
    icon: LayoutTemplate,
    description:
      "Jumpstart your marketing with a library of high-converting, Meta-compliant templates categorized across industries.",
    highlights: [
      "Pre-formatted Marketing, Utility, and Authentication templates",
      "Rich media support: Images, PDFs, catalogs, and video attachments",
      "One-click template submission and approval sync with Meta",
      "Multilingual template variants for regional customer targeting",
      "Copy-paste best practices for retail, healthcare, education, and real estate",
    ],
    ctaText: "Explore Templates",
    ctaLink: "https://app.connecteze.in/signup",
  },
  pricing: {
    title: "Pricing Plans",
    badge: "Transparent Billing",
    icon: Tag,
    description:
      "Predictable subscription tiers paired with transparent Meta conversation costs. Scale as your business grows.",
    highlights: [
      "Starter: Ideal for small shops and local businesses getting started",
      "Growth: Unlimited broadcast campaigns, automated flows, and team seats",
      "Enterprise: Dedicated account manager, custom API limits, and SLA support",
      "Pay-per-conversation Meta wallet recharge with zero markup fee options",
      "No hidden setup or template approval fees",
    ],
    ctaText: "View Pricing Tiers",
    ctaLink: "https://app.connecteze.in/signup",
  },
};

export default function ProductDetailsModal({ activeProduct, onClose }) {
  if (!activeProduct || !PRODUCT_DATA[activeProduct]) return null;

  const data = PRODUCT_DATA[activeProduct];
  const Icon = data.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[85vh] flex flex-col rounded-2xl bg-[#FAF5EC] shadow-2xl border border-[#285744]/20 dark:bg-[#0B1512] dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#285744]/10 dark:border-white/10 px-6 py-4 bg-[#F2EDE2] dark:bg-[#13231C]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
              <Icon size={19} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
                  {data.title}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-[#1FAF55] dark:text-[#4ADE80] uppercase tracking-wider">
                {data.badge}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#556960] hover:bg-black/5 hover:text-black dark:text-[#8FA59A] dark:hover:bg-white/10 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-5 text-sm text-[#3F544A] dark:text-[#9FB3A8]">
          <p className="leading-relaxed text-[#285744] dark:text-[#EAF6EE]/90">
            {data.description}
          </p>

          <div className="space-y-2.5 rounded-xl border border-[#285744]/10 bg-white/70 p-4 dark:border-white/5 dark:bg-[#13231C]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1F17] dark:text-[#EAF6EE] mb-2 flex items-center gap-1.5">
              <Zap size={13} className="text-[#25D366]" /> Key Capabilities
            </h4>
            {data.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#285744]/10 dark:border-white/10 px-6 py-3.5 bg-[#F2EDE2] dark:bg-[#13231C]">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#556960] hover:text-[#0E1F17] dark:text-[#8FA59A] dark:hover:text-white transition-colors"
          >
            Close
          </button>
          <a
            href={data.ctaLink}
            className="rounded-xl bg-[#25D366] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
          >
            {data.ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}