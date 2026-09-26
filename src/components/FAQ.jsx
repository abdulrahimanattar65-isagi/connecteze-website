import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is Connecteze free to get started?",
    a: "Connecteze is not free to get started; pricing is based on a pay-as-you-go model at 1 paisa per message, or a flat monthly subscription of ₹2,000 for marketing and utility communication.",
  },
  {
    q: "Is my customer data secure?",
    a: "All messages and form data are encrypted in transit and at rest, and you can export or delete your data at any time.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses connect their WhatsApp number and publish their first form in under fifteen minutes — no code needed.",
  },
  {
    q: "Can I use my own WhatsApp Business number?",
    a: "Yes, you can connect an existing WhatsApp Business number, or we can help you register a new one during onboarding.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#E4ECEF] py-24 dark:bg-[#101A20]">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-center text-3xl font-bold tracking-tight text-[#0E1F17] dark:text-[#EAF6EE] sm:text-4xl">
          Questions, answered
        </h2>

        <div className="mt-10 divide-y divide-[#CCD7DC] border-t border-b border-[#CCD7DC] dark:divide-[#213540] dark:border-[#213540]">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] font-semibold text-[#0E1F17] dark:text-[#EAF6EE]">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-[#1FAF55] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[14.5px] leading-relaxed text-[#3B4D53] dark:text-[#9FB3BC]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}