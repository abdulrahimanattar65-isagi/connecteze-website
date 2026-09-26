import React from "react";
import { X, Headphones, Mail, Phone, MessageCircle, Globe, MapPin } from "lucide-react";

export default function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917892059939&text=Hi%20Connecteze%20Team,%20I%20have%20an%20inquiry&type=phone_number&app_absent=0";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="modal-card relative w-full max-w-lg max-h-[85vh] flex flex-col rounded-2xl bg-white dark:bg-[#0E1F17] shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 px-6 py-4 bg-gray-50 dark:bg-[#13231C]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] text-white">
              <Headphones size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Get in Touch
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

        {/* Modal Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-4 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-[#0E1F17]">
          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
            Need help onboarding, setting up Meta templates, or scaling broadcasts? Connect with our team directly:
          </p>

          {/* Quick WhatsApp Action Banner */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 p-3.5 transition-all hover:bg-emerald-100/60 dark:hover:bg-emerald-950/70 group"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Chat on WhatsApp
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Fastest response time (~15 mins)
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
              Open &rarr;
            </span>
          </a>

          {/* Contact Details List */}
          <div className="space-y-3 pt-2">
            {/* Phone */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <Phone size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Phone Support</p>
                <a
                  href="tel:+917892059939"
                  className="font-medium text-gray-900 hover:text-[#25D366] dark:text-white"
                >
                  +91 78920 59939
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <Mail size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Email Support</p>
                <a
                  href="mailto:support@connecteze.in"
                  className="font-medium text-gray-900 hover:text-[#25D366] dark:text-white"
                >
                  info.spitel@gmail.com
                </a>
              </div>
            </div>

            {/* Parent Company & Web */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <Globe size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Company</p>
                <a
                  href="https://spitel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 hover:text-[#25D366] dark:text-white"
                >
                  Spitel Pvt. Ltd. (spitel.com)
                </a>
              </div>
            </div>

            {/* Region */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <MapPin size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-gray-100 dark:border-white/10 px-6 py-3.5 bg-gray-50 dark:bg-[#13231C]">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#25D366] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1FAF55]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}