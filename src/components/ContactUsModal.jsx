import React from "react";
import { X, Headphones, Mail, Phone, MessageCircle, Globe, MapPin } from "lucide-react";

export default function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917892059939&text=Hi%20Connecteze%20Team,%20I%20have%20an%20inquiry&type=phone_number&app_absent=0";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[85vh] flex flex-col rounded-2xl bg-[#FAF5EC] shadow-2xl border border-[#285744]/20 dark:bg-[#0B1512] dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#285744]/10 dark:border-white/10 px-6 py-4 bg-[#F2EDE2] dark:bg-[#13231C]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] text-white">
              <Headphones size={18} />
            </div>
            <h3 className="text-lg font-bold text-[#0E1F17] dark:text-[#EAF6EE]">
              Get in Touch
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

        {/* Modal Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-4 text-sm text-[#3F544A] dark:text-[#9FB3A8]">
          <p className="leading-relaxed">
            Need help onboarding, setting up Meta templates, or scaling broadcasts? Connect with our team directly:
          </p>

          {/* Quick WhatsApp Action Banner */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 p-3.5 transition-all hover:bg-[#25D366]/25 group"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#0E1F17] dark:text-[#EAF6EE]">
                  Chat on WhatsApp
                </p>
                <p className="text-xs text-[#285744] dark:text-[#9FB3A8]">
                  Fastest response time (~15 mins)
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1FAF55] group-hover:translate-x-0.5 transition-transform">
              Open &rarr;
            </span>
          </a>

          {/* Contact Details List */}
          <div className="space-y-3 pt-2">
            {/* Phone */}
            <div className="flex items-center gap-3 rounded-xl border border-[#285744]/10 bg-white/60 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <Phone size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-[#556960] dark:text-[#8FA59A]">Phone Support</p>
                <a
                  href="tel:+917892059939"
                  className="font-medium text-[#0E1F17] hover:text-[#1FAF55] dark:text-[#EAF6EE]"
                >
                  +91 78920 59939
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-xl border border-[#285744]/10 bg-white/60 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <Mail size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-[#556960] dark:text-[#8FA59A]">Email Support</p>
                <a
                  href="mailto:support@connecteze.in"
                  className="font-medium text-[#0E1F17] hover:text-[#1FAF55] dark:text-[#EAF6EE]"
                >
                  support@connecteze.in
                </a>
              </div>
            </div>

            {/* Parent Company & Web */}
            <div className="flex items-center gap-3 rounded-xl border border-[#285744]/10 bg-white/60 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <Globe size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-[#556960] dark:text-[#8FA59A]">Company</p>
                <a
                  href="https://spitel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0E1F17] hover:text-[#1FAF55] dark:text-[#EAF6EE]"
                >
                  Spitel Pvt. Ltd. (spitel.com)
                </a>
              </div>
            </div>

            {/* Region */}
            <div className="flex items-center gap-3 rounded-xl border border-[#285744]/10 bg-white/60 p-3 dark:border-white/5 dark:bg-[#13231C]">
              <MapPin size={18} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-xs text-[#556960] dark:text-[#8FA59A]">Location</p>
                <p className="font-medium text-[#0E1F17] dark:text-[#EAF6EE]">
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-[#285744]/10 dark:border-white/10 px-6 py-3.5 bg-[#F2EDE2] dark:bg-[#13231C]">
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