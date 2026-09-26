import { Instagram, Linkedin, Youtube, Facebook, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "X" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "WhatsApp Broadcast", href: "#what-we-do" },
      { label: "CRM Campaigns", href: "#flow" },
      { label: "Ready Templates", href: "#templates" },
      { label: "Pricing Plans", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Spitel", href: "https://spitel.com" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E4E8E1] bg-[#E4ECEF] dark:border-[#223A2E] dark:bg-[#0B1512]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Brand & Social Media Column */}
          <div className="md:col-span-6">
            <div className="flex items-center">
              <img
                src="/connectezelogo.png"
                alt="Connecteze"
                className="h-10 w-auto object-contain mix-blend-multiply dark:brightness-0 dark:invert"
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE7E0] bg-white text-[#3F544A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1FAF55] hover:bg-[#1FAF55] hover:text-white shadow-sm dark:border-[#223A2E] dark:bg-[#13231C] dark:text-[#9FB3A8] dark:hover:bg-[#1FAF55] dark:hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:justify-end">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1F17] dark:text-[#EAF6EE]">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#556960] transition-colors hover:text-[#1FAF55] dark:text-[#8FA59A] dark:hover:text-[#4ADE80]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#E4E8E1] pt-8 text-[13px] text-[#556960] dark:border-[#223A2E] dark:text-[#8FA59A] sm:flex-row">
          <p>© 2026 Connecteze, all rights reserved.</p>

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
  );
}