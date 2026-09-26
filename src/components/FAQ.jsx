import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
 
  {
    question: "How does the pricing work for WhatsApp conversations?",
    answer:
      "Connecteze charges a flat platform subscription fee. WhatsApp conversation fees (marketing, utility, service) are determined by Meta's official country-based rate cards and deducted directly from your messaging balance without hidden markups.",
  },
  {
    question: "Can I import existing contacts from Excel or CRM?",
    answer:
      "Yes. You can import contacts via CSV or Excel files with custom attributes (such as first name, order ID, or city). We also offer instant webhooks and integrations with Shopify, WooCommerce, and standard CRMs.",
  },
{
    question: "Can I use my existing WhatsApp phone number?",
    answer:
      "Yes. You can migrate an existing phone number to the official WhatsApp Business API, provided you first delete or unlink the number from your standard WhatsApp or WhatsApp Business mobile app so Meta can register it on Cloud API.",
  },
  {
    question: "How fast do bulk WhatsApp messages get delivered?",
    answer:
      "Messages are dispatched through Meta's high-throughput Cloud API servers in real time, delivering thousands of notifications and marketing broadcasts within seconds to minutes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="faq-section relative py-20 bg-[#FAF5EC] dark:bg-[#0B1512] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E1F17] dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3F544A] dark:text-[#9FB3A8]">
            Everything you need to know about Connecteze and the official WhatsApp Business API.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#25D366]/50 bg-white shadow-md dark:border-[#25D366]/40 dark:bg-[#13231C]"
                    : "border-gray-200/80 bg-white/70 hover:border-gray-300 dark:border-white/10 dark:bg-[#13231C]/60 dark:hover:border-white/20"
                }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900 dark:text-white sm:text-lg pr-4">
                    {item.question}
                  </span>
                  
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#25D366] text-white"
                        : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="border-t border-gray-100 px-6 pb-6 pt-3 dark:border-white/5">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-[#9FB3A8] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}