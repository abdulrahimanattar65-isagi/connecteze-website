const REVIEWS = [
  {
    quote: "We stopped losing orders in comment sections and DMs. Everything now lands in one WhatsApp inbox, and our response time dropped by half.",
    name: "Reema Anand",
    role: "Founder, Bakehouse Co.",
    initials: "RA",
  },
  {
    quote: "Connecteze made scheduling broadcasts and sending utility updates completely seamless. Our campaign conversion rates jumped by 40% in week one.",
    name: "Arjun Verma",
    role: "Marketing Lead, RetailKart",
    initials: "AV",
  },
  {
    quote: "The CRM integration and scheduled campaigns eliminated manual outreach entirely. Reliable delivery and real-time reply tracking are invaluable.",
    name: "Sneha Patel",
    role: "Operations Head, Nexa Health",
    initials: "SP",
  },
  {
    quote: "Setting up Meta-approved templates used to take days. With Connecteze, we launch targeted bulk campaigns in just minutes.",
    name: "Karan Mehta",
    role: "Growth Director, Pulse Media",
    initials: "KM",
  },
];

function ReviewCard({ review }) {
  return (
    <article className="flex w-[min(82vw,390px)] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/10 backdrop-blur-sm sm:p-7">
      <>
        <div aria-label="5 out of 5 stars" className="mb-4 flex gap-1 text-[#7DE6A2]">
          {Array.from({ length: 5 }, (_, index) => <span key={index}>★</span>)}
        </div>
        <blockquote className="text-[15px] leading-7 text-white/90">“{review.quote}”</blockquote>
      </>
      <div className="mt-7 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#138B43] text-xs font-bold text-white">
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="mt-0.5 text-xs text-[#A9BFB0]">{review.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section relative overflow-hidden bg-[#0A1610] py-12 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="reviews-glow absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="reviews-glow reviews-glow-late absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-teal-400/15 blur-[110px]" />
        <div className="absolute left-[8%] top-28 hidden -rotate-12 text-[7rem] font-black leading-none text-white/[0.055] lg:block">“</div>
        <div className="reviews-word-track absolute left-0 top-1/2 flex -translate-y-1/2 whitespace-nowrap text-[clamp(3rem,9vw,8rem)] font-black uppercase tracking-[0.12em] text-white/[0.09]">
          <span> TRUST · CONNECT · GROW · REPEAT ·&nbsp;</span><span>TRUST · CONNECT · GROW · REPEAT ·&nbsp;</span>
        </div>
        <div className="reviews-note absolute right-[12%] top-28 hidden rotate-6 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 text-sm text-white/70 shadow-xl backdrop-blur-md sm:block">
          <span className="mr-2 text-[#7DE6A2]">✦</span> Real feedback, real growth
        </div>
      </div>
      <div className="relative">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DE6A2]">Customer stories</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Good conversations. Better outcomes.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#A9BFB0] sm:text-base">See how teams use Connecteze to make every WhatsApp conversation count.</p>
        </div>

        <div className="reviews-marquee mt-12 overflow-hidden" aria-label="Customer reviews">
          <div className="reviews-track flex w-max gap-5">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-5" aria-hidden={copy === 1 ? "true" : undefined}>
                {REVIEWS.map((review) => <ReviewCard key={`${copy}-${review.initials}`} review={review} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
