import React, { useState } from "react";
import { Instagram, Linkedin, Facebook, ArrowUpRight, MessageCircle, Mail, Phone } from "lucide-react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";
import ContactUsModal from "./ContactUsModal";
import ProductDetailsModal from "./ProductDetailsModal";

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.54 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.37C16.32 14.25 15.1 13.65 14.88 13.57C14.65 13.48 14.49 13.44 14.32 13.69C14.16 13.93 13.69 14.49 13.54 14.65C13.4 14.82 13.25 14.84 13 14.71C12.75 14.59 11.95 14.33 11 13.49C10.26 12.83 9.76 12.02 9.61 11.77C9.47 11.53 9.6 11.39 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.68 10.26 10.58 10.35 10.41C10.43 10.25 10.39 10.11 10.33 9.98C10.26 9.86 9.77 8.66 9.57 8.16C9.37 7.68 9.17 7.74 9.02 7.74C8.88 7.73 8.71 7.73 8.55 7.73C8.38 7.79 8.12 7.79 7.89 8.04C7.67 8.29 7.03 8.88 7.03 10.09C7.03 11.3 7.91 12.47 8.04 12.63C8.16 12.8 9.77 15.28 12.24 16.34C12.83 16.59 13.28 16.74 13.64 16.85C14.23 17.04 14.77 17.01 15.2 16.95C15.68 16.88 16.67 16.35 16.88 15.77C17.08 15.19 17.08 14.7 17.02 14.59C16.96 14.49 16.81 14.43 16.57 14.37Z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/company.spitel/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/spitel_insta/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/spitel/?originalSubdomain=in", label: "LinkedIn" },
  { icon: WhatsAppIcon, href: "https://api.whatsapp.com/send/?phone=917892059939&text&type=phone_number&app_absent=0", label: "WhatsApp" },
];

const SERVICES = ["WhatsApp Business API", "WhatsApp Marketing", "CRM & Contacts", "Sales Pipeline", "Shared Team Inbox", "Chatbots", "AI Assistance", "Automation", "Customer Support", "E-commerce", "Analytics & Reports", "Integrations"];

function FooterLink({ children, onClick, href }) {
  const shared = "block text-left text-[13px] leading-6 text-[#B6C6BC] transition-colors hover:text-[#44E18A]";
  if (onClick) return <button type="button" onClick={onClick} className={shared}>{children}</button>;
  return <a href={href} className={shared}>{children}</a>;
}

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <>
      <footer className="connecteze-footer relative isolate overflow-hidden border-t border-white/10 bg-[#08130D] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-44 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#25D366]/70 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 pb-7 pt-14 sm:px-8 sm:pt-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-12 lg:gap-x-7">
            <div className="col-span-2 sm:col-span-3 lg:col-span-3">
              <a href="#top" className="inline-flex items-center" aria-label="Connecteze home">
                <img src="/WhiteConnectezelogo.png" alt="Connecteze" className="h-12 w-auto object-contain" />
              </a>
              <p className="mt-4 max-w-sm text-[13.5px] leading-6 text-[#B6C6BC]">
                Automate WhatsApp marketing, utility messaging, and CRM broadcasts effortlessly. Designed for high open rates and instant customer engagement.
              </p>
              <div className="mt-6 flex items-center gap-2.5">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#B6C6BC] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366]/70 hover:bg-[#25D366] hover:text-[#07130C]">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="footer-heading">Product</h4>
              <ul className="mt-4 space-y-2.5">
                <li><FooterLink onClick={() => setActiveProduct("broadcast")}>WhatsApp Broadcast</FooterLink></li>
                <li><FooterLink onClick={() => setActiveProduct("crm")}>CRM Campaigns</FooterLink></li>
                <li><FooterLink onClick={() => setActiveProduct("templates")}>Ready Templates</FooterLink></li>
                <li><FooterLink onClick={() => setActiveProduct("pricing")}>Pricing Plans</FooterLink></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 lg:col-span-3">
              <h4 className="footer-heading">Services</h4>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {SERVICES.map((service) => <li key={service}><FooterLink href="#services">{service}</FooterLink></li>)}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="footer-heading">Company</h4>
              <ul className="mt-4 space-y-2.5">
                <li><FooterLink href="https://spitel.com">About Spitel</FooterLink></li>
                <li><FooterLink onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</FooterLink></li>
                <li><FooterLink onClick={() => setIsTermsOpen(true)}>Terms of Service</FooterLink></li>
                <li><FooterLink onClick={() => setIsContactOpen(true)}>Contact Us</FooterLink></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <h4 className="footer-heading">Let’s talk</h4>
              <p className="mt-4 text-[13px] leading-5 text-[#B6C6BC]">Need help getting started? Our team is happy to help.</p>
              <button type="button" onClick={() => setIsContactOpen(true)} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold text-[#06200F] shadow-lg shadow-[#25D366]/10 transition hover:-translate-y-0.5 hover:bg-[#44E18A]">
                Contact our team <ArrowUpRight size={14} />
              </button>
              <div className="mt-5 space-y-2.5 text-xs text-[#B6C6BC]">
                <p className="flex items-center gap-2"><Phone size={13} className="text-[#25D366]" /> +91 78920 59939</p>
                <p className="flex items-center gap-2"><Mail size={13} className="text-[#25D366]" /> info.spitel@gmail.com</p>
                <a className="inline-flex items-center gap-2 text-[#B6C6BC] transition hover:text-[#44E18A]" href="https://api.whatsapp.com/send/?phone=917892059939&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><MessageCircle size={13} className="text-[#25D366]" /> Chat on WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#8FA59A] sm:flex-row">
            <p>© 2026 Connecteze, All Rights Reserved.</p>
            <p>Powered by <a href="https://spitel.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#25D366] hover:underline">Spitel Pvt.Ltd</a></p>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClickClose={() => setIsPrivacyOpen(false)} onClose={() => setIsPrivacyOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <ContactUsModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ProductDetailsModal activeProduct={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  );
}
