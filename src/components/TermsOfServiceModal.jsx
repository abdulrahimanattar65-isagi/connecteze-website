import React from "react";
import { X, FileText, AlertTriangle, CheckCircle, Ban, RefreshCw } from "lucide-react";

export default function TermsOfServiceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="modal-card relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-white dark:bg-[#0E1F17] shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 px-6 py-4 bg-gray-50 dark:bg-[#13231C]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] text-white">
              <FileText size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-black/5 hover:text-black dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-gray-700 dark:text-gray-200 space-y-6 bg-white dark:bg-[#0E1F17]">
          
          {/* Agreement Notice */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 p-4 flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Acceptance of Agreement
              </h4>
              <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                By registering or using Connecteze (operated by Spitel Pvt. Ltd.), you agree to be bound by these Terms of Service and Meta’s WhatsApp Business Terms.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              1. Platform Usage & Account Responsibilities
            </h4>
            <p className="mt-1.5 text-gray-600 dark:text-gray-300">
              You are responsible for maintaining the confidentiality of your account credentials and for all campaign activities initiated under your profile. You agree to provide accurate business details for Meta WhatsApp Business verification.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Ban size={15} className="text-red-500" /> 2. Prohibited Content & Anti-Spam Rules
            </h4>
            <p className="mt-1.5 text-gray-600 dark:text-gray-300">
              Connecteze strictly enforces Meta’s Commercial Messaging Guidelines. You agree not to send:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 pl-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <li>Unsolicited spam or messages to users who haven't explicitly opted-in.</li>
              <li>Content involving illegal drugs, weapons, unauthorized financial schemes, adult material, or deceptive claims.</li>
              <li>Automated messages after a recipient has texted "STOP" or opted out.</li>
            </ul>
            <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
              Violations may result in immediate suspension of your WhatsApp Business Account (WABA) without refund.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <RefreshCw size={15} className="text-[#25D366]" /> 3. Subscriptions & WhatsApp Conversation Fees
            </h4>
            <p className="mt-1.5 text-gray-600 dark:text-gray-300">
              Connecteze provides software subscription tiers. Meta conversation charges (Marketing, Utility, Service, Authentication) are billed per Meta's country-specific rate card and consumed via your active billing wallet.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <AlertTriangle size={15} className="text-amber-500" /> 4. Service Availability & Meta API Dependency
            </h4>
            <p className="mt-1.5 text-gray-600 dark:text-gray-300">
              While we target a 99.9% uptime, message delivery speeds and operational statuses depend on Meta's official WhatsApp Cloud API servers. Spitel Pvt. Ltd. is not liable for disruptions or message deliverability blocks enforced by Meta.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-gray-100 dark:border-white/10 px-6 py-3.5 bg-gray-50 dark:bg-[#13231C]">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#25D366] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}