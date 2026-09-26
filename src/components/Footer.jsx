import React, { useState } from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";
import ContactUsModal from "./ContactUsModal";
import ProductDetailsModal from "./ProductDetailsModal";

// WhatsApp icon component
const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.54 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.37C16.32 14.25 15.1 13.65 14.88 13.57C14.65 13.48 14.49 13.44 14.32 13.69C14.16 13.93 13.69 14.49 13.54 14.65C13.4 14.82 13.25 14.84 13 14.71C12.75 14.59 11.95 14.33 11 13.49C10.26 12.83 9.76 12.02 9.61 11.77C9.47 11.53 9.6 11.39 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.68 10.26 10.58 10.35 10.41C10.43 10.25 10.39 10.11 10.33 9.98C10.26 9.86 9.77 8.66 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.74C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.79 8.12 7.79 7.89 8.04C7.67 8.29 7.03 8.88 7.03 10.09C7.03 11.3 7.91 12.47 8.04 12.63C8.16 12.8 9.77 15.28 12.24 16.34C12.83 16.59 13.28 16.74 13.64 16.85C14.23 17.04 14.77 17.01 15.2 16.95C15.68 16.88 16.67 16.35 16.88 15.77C17.08 15.19 17.08 14.7 17.02 14.59C16.96 14.49 16.81 14.43 16.57 14.37Z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/company.spitel/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/spitel_insta/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/spitel/?originalSubdomain=in",
    label: "LinkedIn",
  },
  {
    icon: WhatsAppIcon,
    href: "https://api.whatsapp.com/send/?phone=917892059939&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
  },
];

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null); // 'broadcast' | 'crm' | 'templates' | 'pricing' | null

  return (
    <>
      <footer className="border-t border-[#E4E8E1] bg-[#E4ECEF] dark:border-[#223A2E] dark:bg-[#0B1512]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            
            {/* Brand & Social Media Column */}
            <div className="md:col-span-6">
              <div className="flex items-center">
                {/* Light Mode Logo */}
                <img
                  src="/connectezelogo.png"
                  alt="Connecteze"
                  className="h-12 w-auto object-contain dark:hidden"
                />
                {/* Dark Mode Logo */}
                <img
                  src="/WhiteConnectezelogo.png"
                  alt="Connecteze"
                  className="hidden h-12 w-auto object-contain dark:block"
                />
              </div>

              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#3F544A] dark:text-[#9FB3A8]">
                Automate WhatsApp marketing, utility messaging, and CRM broadcasts effortlessly. Designed for high open rates and instant customer engagement.
              </p>

              {/* Social Media Icons */}
              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE7E0] bg-white text-[#3F544A] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1FAF55] hover:bg-[#1FAF55] hover:text-white dark:border-[#223A2E] dark:bg-[#13231C] dark:text-[#9FB3A8] dark:hover:bg-[#1FAF55] dark:hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Columns */}
            <div className="grid grid-cols-2 gap-8 md:col-span-6 md:justify-end">
              {/* Product Column */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1F17] dark:text-[#EAF6EE]">
                  Product
                </h4>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveProduct("broadcast")}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      WhatsApp Broadcast
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveProduct("crm")}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      CRM Campaigns
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveProduct("templates")}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      Ready Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveProduct("pricing")}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      Pricing Plans
                    </button>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1F17] dark:text-[#EAF6EE]">
                  Company
                </h4>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a
                      href="https://spitel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      About Spitel
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setIsPrivacyOpen(true)}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setIsTermsOpen(true)}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setIsContactOpen(true)}
                      className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#E4E8E1] pt-8 text-[13px] text-[#556960] dark:border-[#223A2E] dark:text-[#8FA59A] sm:flex-row">
            <p>© 2026 Connecteze, All Rights Reserved.</p>

            <p>
              Powered by{" "}
              <a
                href="https://spitel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1FAF55] hover:underline"
              >
                Spitel Pvt.Ltd
              </a>
            </p>
          </div>

        </div>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClickClose={() => setIsPrivacyOpen(false)}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsOfServiceModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
      <ContactUsModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ProductDetailsModal
        activeProduct={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </>
  );
}