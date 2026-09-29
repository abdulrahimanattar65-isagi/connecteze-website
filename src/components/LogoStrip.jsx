const BRANDS = [
  "Northstar Retail",
  "Bakehouse Co.",
  "Verve Events",
  "Urban Fit Studio",
  "Palette Interiors",
  "Everline Travel",
  "Marsh & Co.",
  "Loop Electronics",
];

export default function LogoStrip() {
  const track = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-[#E4E8E1] bg-white py-6 sm:py-8 dark:border-[#223A2E] dark:bg-[#0B1512]">
      <p className="mx-auto mb-5 max-w-6xl px-6 text-center text-[13px] font-medium uppercase tracking-wide text-[#8FA79A]">
        Trusted by 800+ growing businesses
      </p>
      <div className="marquee-track overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14">
          {track.map((name, i) => (
            <span
              key={i}
              className="font-display shrink-0 text-lg font-600 text-[#3F544A]/70 dark:text-[#9FB3A8]/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
