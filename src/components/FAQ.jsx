import React, { useState } from "react";
import { CheckCheck, ChevronDown, HelpCircle, MessageCircle, MessageSquare, Sparkles } from "lucide-react";

const FAQ_ITEMS = [
 
  {
    question: "How does the pricing work for WhatsApp conversations?",
    answer:
      "Connecteze charges a flat platform subscription fee. WhatsApp conversation fees (marketing, utility, service) are determined by Meta's official country-based rate cards and deducted directly from your messaging balance without hidden markups. Note: Charges apply only to successfully delivered messages. No charges are incurred for messages that fail to deliver.",
  },
  {
    question: "Can I import existing contacts from Excel or CRM?",
    answer:
      "Yes. You can import contacts via CSV or Excel files with custom attributes (such as first name, order ID, or city). We also offer instant webhooks and integrations with Shopify, WooCommerce, and standard CRMs.",
  },
{
    question: "Can I use my existing WhatsApp phone number?",
    answer:
      "No. To use the Connecteze platform, you need to purchase and register a dedicated business phone number. Existing personal WhatsApp numbers cannot be used for this platform please note that only one Account can be created per phone number ",
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
      className="faq-section relative isolate overflow-hidden pb-12 pt-12 transition-colors sm:pb-28 sm:pt-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="faq-dot-grid absolute inset-0" />
        <div className="faq-glow faq-glow-one absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-[110px] dark:bg-emerald-500/10" />
        <div className="faq-glow faq-glow-two absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-lime-200/30 blur-[120px] dark:bg-teal-400/10" />
      </div>

      <div aria-hidden="true" className="faq-floating-art faq-floating-art-top pointer-events-none absolute right-[8%] top-4 z-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-700/15 bg-white/80 text-[#168344] shadow-lg shadow-emerald-950/10 backdrop-blur-md dark:border-white/10 dark:bg-[#10251b]/80 dark:text-[#70E697]">
        <MessageCircle size={19} />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#F2F8EF] bg-[#25D366] dark:border-[#10231a]" />
      </div>
      <div aria-hidden="true" className="faq-side-art pointer-events-none absolute left-[calc(50%-700px)] top-[35%] z-0 hidden w-44 rounded-2xl border border-emerald-900/10 bg-white/65 p-3 shadow-xl shadow-emerald-950/5 backdrop-blur-lg xl:block xl:left-4 dark:border-white/10 dark:bg-[#10251b]/60">
        <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#168344] dark:bg-[#1B3525] dark:text-[#70E697]"><HelpCircle size={17} /></span><div><p className="text-[10px] font-bold text-[#183324] dark:text-white">Need an answer?</p><p className="text-[9px] text-[#718176] dark:text-[#A7BFB2]">We’re here to help</p></div></div>
        <div className="mt-3 rounded-xl rounded-tl-sm bg-[#EAF7EE] px-2.5 py-2 text-[9px] leading-4 text-[#426250] dark:bg-white/5 dark:text-[#C1D5C7]">Ask us about setup, campaigns, or support.</div>
        <div className="mt-2 flex justify-end"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-[#06200F]"><MessageCircle size={14} /></span></div>
      </div>

      <div aria-hidden="true" className="faq-side-art faq-side-art-phone pointer-events-none absolute right-[calc(50%-700px)] top-[59%] z-0 hidden h-48 w-36 rounded-[1.8rem] border-[5px] border-[#153322]/60 bg-[#F8FBF7] p-1.5 shadow-2xl shadow-emerald-950/10 xl:block xl:right-4 dark:border-[#55715D]/50 dark:bg-[#122219]">
        <div className="flex h-full flex-col overflow-hidden rounded-[1.3rem] bg-[#E8F4EA] dark:bg-[#10251B]">
          <div className="flex items-center gap-1.5 bg-[#168344] px-2 py-2 text-white"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"><MessageCircle size={10} /></span><span className="text-[8px] font-bold">Connecteze help</span></div>
          <div className="flex flex-1 flex-col justify-end gap-1.5 p-2">
            <div className="self-start rounded-lg rounded-bl-sm bg-white px-2 py-1.5 text-[7px] text-[#315341]">How do I start a campaign?</div>
            <div className="self-end rounded-lg rounded-br-sm bg-[#D3F5D8] px-2 py-1.5 text-[7px] text-[#315341]">Start with a template <CheckCheck size={8} className="ml-1 inline text-sky-600" /></div>
            <div className="flex items-center gap-1 self-start rounded-lg bg-white px-2 py-1.5 text-[7px] text-[#315341]"><Sparkles size={8} className="text-[#168344]" /> Here’s how…</div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="faq-side-art faq-side-art-note pointer-events-none absolute right-[calc(50%-700px)] top-[31%] z-0 hidden w-44 rounded-2xl border border-emerald-900/10 bg-white/70 p-3 shadow-xl shadow-emerald-950/5 backdrop-blur-lg xl:block xl:right-4 dark:border-white/10 dark:bg-[#10251b]/65">
        <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-200"><MessageSquare size={14} /></span><div><p className="text-[9px] font-bold text-[#183324] dark:text-white">Quick answer</p><p className="text-[8px] text-[#718176] dark:text-[#A7BFB2]">WhatsApp setup</p></div><CheckCheck size={13} className="ml-auto text-emerald-500" /></div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-[#E8EFE8] dark:bg-white/10" /><div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-[#E8EFE8] dark:bg-white/10" />
      </div>

      <div aria-hidden="true" className="faq-side-art faq-side-art-topics pointer-events-none absolute left-[calc(50%-700px)] top-[70%] z-0 hidden w-44 rounded-2xl border border-emerald-900/10 bg-white/70 p-3 shadow-xl shadow-emerald-950/5 backdrop-blur-lg xl:block xl:left-4 dark:border-white/10 dark:bg-[#10251b]/65">
        <p className="text-[9px] font-bold uppercase tracking-wider text-[#168344] dark:text-[#70E697]">Popular topics</p>
        <div className="mt-2 flex flex-wrap gap-1.5"><span className="rounded-full bg-[#EAF7EE] px-2 py-1 text-[8px] font-medium text-[#426250] dark:bg-white/5 dark:text-[#C1D5C7]">WhatsApp API</span><span className="rounded-full bg-[#EAF7EE] px-2 py-1 text-[8px] font-medium text-[#426250] dark:bg-white/5 dark:text-[#C1D5C7]">Campaigns</span><span className="rounded-full bg-[#EAF7EE] px-2 py-1 text-[8px] font-medium text-[#426250] dark:bg-white/5 dark:text-[#C1D5C7]">Setup</span></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        
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
