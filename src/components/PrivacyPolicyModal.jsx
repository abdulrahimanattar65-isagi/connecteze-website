import React from "react";
import { X, ShieldCheck, CheckCircle2, Lock, Smartphone } from "lucide-react";

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-[#FAF5EC] shadow-2xl border border-[#285744]/20 dark:bg-[#0B1512] dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#285744]/10 dark:border-white/10 px-6 py-4 bg-[#F2EDE2] dark:bg-[#13231C]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] text-white">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-lg font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
              Privacy Policy
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#556960] hover:bg-black/5 hover:text-black dark:text-[#8FA59A] dark:hover:bg-white/10 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-[#3F544A] dark:text-[#9FB3A8] space-y-6">
          
          {/* Meta Approved Badge Highlight */}
          <div className="rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 p-4 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#25D366] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#0E1F17] dark:text-[#EAF6EE]">
                Official Meta Tech Partner & WhatsApp Business API Compliant
              </h4>
              <p className="mt-1 text-xs text-[#285744] dark:text-[#9FB3A8]">
                Connecteze operates strictly in compliance with Meta’s Business Messaging & WhatsApp Commerce policies. We only transmit approved templates to opted-in users through authorized Meta Cloud API endpoints.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <h4 className="text-sm font-bold text-[#0E1F17] dark:text-[#EAF6EE] flex items-center gap-2">
              <Lock size={15} className="text-[#25D366]" /> 1. Information We Collect
            </h4>
            <p className="mt-1.5">
              We collect information you provide directly, including name, business phone number, business email, and billing details when signing up for Connecteze. For WhatsApp campaigns, we process contact phone numbers provided by you solely to deliver messages on your behalf.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-sm font-bold text-[#0E1F17] dark:text-[#EAF6EE] flex items-center gap-2">
              <Smartphone size={15} className="text-[#25D366]" /> 2. WhatsApp Messaging & User Consent
            </h4>
            <p className="mt-1.5">
              In accordance with Meta regulations:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 pl-1 text-xs sm:text-sm">
              <li>Businesses must obtain explicit opt-in consent from end users prior to sending non-transactional messages.</li>
              <li>Every broadcast supports explicit opt-out keywords (e.g., STOP/UNSUBSCRIBE) to protect consumer privacy.</li>
              <li>We never share, sell, or rent contact databases to any third parties or advertisers.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-sm font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
              3. Data Security & Storage
            </h4>
            <p className="mt-1.5">
              All messages transmitted through Connecteze are encrypted during transit using TLS 1.3 encryption. Customer databases and API keys are stored in secure cloud environments with strict role-based access control.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h4 className="text-sm font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
              4. Contact & Compliance Officer
            </h4>
            <p className="mt-1.5">
              If you have queries regarding our data protection policies or compliance with Meta's developer terms, contact our support team at <span className="font-semibold text-[#0E1F17] dark:text-[#EAF6EE]">support@connecteze.in</span> or via Spitel Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-[#285744]/10 dark:border-white/10 px-6 py-3.5 bg-[#F2EDE2] dark:bg-[#13231C]">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#25D366] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}