import React from "react";
import { MessageSquare, ShieldCheck, Zap, BarChart3, Bot, Globe } from "lucide-react";

const FEATURE_LIST = [
  {
    icon: Zap,
    title: "Instant WhatsApp Routing",
    description: "Every form submission and order reaches your WhatsApp chat instantly with zero latency.",
  },
  {
    icon: Bot,
    title: "Automated Triggers",
    description: "Auto-respond with interactive menus, order status lookups, and customized templates.",
  },
  {
    icon: BarChart3,
    title: "Read & Click Analytics",
    description: "Real-time visibility on broadcast delivered, read, and conversion rates.",
  },
  {
    icon: ShieldCheck,
    title: "Meta Verified Delivery",
    description: "Official WhatsApp Business Cloud API integration ensuring 99.9% inbox delivery.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
          Built for conversion
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
          Everything you need to turn WhatsApp conversations into paying customers.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_LIST.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#0E1F17] dark:text-[#EAF6EE]">
                {feat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
                {feat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}