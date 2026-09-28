import { useEffect, useState } from "react";
import {
  ArrowRight, Bell, CalendarCheck, Check, CheckCheck, ChevronRight,
  CreditCard, MessageCircle, PackageCheck, Sparkles,
} from "lucide-react";

const SCENES = [
  { label: "New customer message", messages: [{ from: "customer", text: "Hi! Is the chocolate truffle cake available today?" }] },
  { label: "AI reply suggested", messages: [
    { from: "customer", text: "Hi! Is the chocolate truffle cake available today?" },
    { from: "business", ai: true, text: "Yes, it is! We can deliver it today. Want to see the size options?" },
  ] },
  { label: "Quick replies", messages: [{ from: "customer", text: "What would you like to do next?" }], replies: ["Browse cakes", "Track an order", "Book a visit"] },
  { label: "Product shared", messages: [{ from: "customer", text: "Here’s a customer favourite" }], type: "product" },
  { label: "Payment request", messages: [{ from: "customer", text: "Ready when you are — complete your order securely." }], type: "payment" },
  { label: "Order confirmed", messages: [{ from: "customer", text: "Your order is confirmed and being prepared." }], type: "order" },
  { label: "Appointment confirmed", messages: [{ from: "customer", text: "Your cake tasting is booked. We’ll see you soon!" }], type: "appointment" },
];

export default function HeroChatMockup() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = SCENES[sceneIndex];

  useEffect(() => {
    const timer = setTimeout(() => setSceneIndex((index) => (index + 1) % SCENES.length), 2800);
    return () => clearTimeout(timer);
  }, [sceneIndex]);

  const chooseReply = (reply) => {
    setSceneIndex(reply === "Browse cakes" ? 3 : reply === "Track an order" ? 5 : 6);
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="float-slow absolute -left-10 top-6 hidden w-48 rounded-2xl border border-[#E4E8E1] bg-white p-4 shadow-xl shadow-[#0E1F17]/5 dark:border-[#223A2E] dark:bg-[#13231C] sm:block">
        <div className="mb-3 h-2 w-16 rounded-full bg-[#EAF7EE] dark:bg-[#1B2E24]" />
        <div className="mb-2 h-2 w-full rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="mb-2 h-2 w-4/5 rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="mb-4 h-2 w-3/5 rounded-full bg-[#F1F3EF] dark:bg-[#1B2E24]" />
        <div className="rounded-lg bg-[#1FAF55] py-1.5 text-center text-[11px] font-semibold text-white">Submit on WhatsApp</div>
      </div>

      <div className="relative rounded-[2.2rem] border-[6px] border-[#0E1F17] bg-[#0E1F17] shadow-2xl shadow-[#0E1F17]/20 dark:border-[#0B1512] dark:shadow-black/40">
        <div className="overflow-hidden rounded-[1.7rem] bg-[#E7F5EB]">
          <div className="flex items-center gap-2 bg-[#1FAF55] px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white"><MessageCircle size={16} /></span>
            <div className="flex-1"><p className="text-[13px] font-semibold text-white">Cake &amp; Co.</p><p className="text-[10px] text-white/80">online</p></div>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white"><Bell size={15} /><span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#1FAF55] bg-[#FFDA6A]" /></span>
          </div>

          <div className="relative flex h-[360px] flex-col justify-end gap-2 overflow-hidden px-3 pb-3 pt-12">
            <div key={scene.label} className="bubble-in absolute left-3 right-3 top-3 flex items-center gap-2 rounded-xl border border-[#D7EBDD] bg-white/95 px-3 py-2 text-[10px] font-semibold text-[#426250] shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#168344]">
                {scene.type === "payment" ? <CreditCard size={13} /> : scene.type === "order" ? <PackageCheck size={13} /> : scene.type === "appointment" ? <CalendarCheck size={13} /> : scene.label.includes("AI") ? <Sparkles size={13} /> : <Bell size={13} />}
              </span>
              <span className="flex-1">{scene.label}</span><span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            </div>

            <div key={`messages-${sceneIndex}`} className="bubble-in flex flex-col gap-2">
              {scene.messages.map((message, index) => (
                <div key={index} className={`max-w-[86%] rounded-2xl px-3 py-2 text-[12px] leading-snug shadow-sm ${message.from === "business" ? "self-end rounded-br-sm bg-[#DCF8C6] text-[#0E1F17]" : "self-start rounded-bl-sm bg-white text-[#0E1F17]"}`}>
                  {message.ai && <span className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-[#168344]"><Sparkles size={10} /> AI assistant</span>}
                  {message.text}
                  {message.from === "business" && <span className="mt-1 flex items-center justify-end gap-1 text-[9px] text-[#5B8B71]">Delivered · Read <CheckCheck size={12} className="text-sky-600" /></span>}
                </div>
              ))}

              {scene.replies && <div className="flex max-w-full flex-wrap gap-1.5 self-end pt-1">{scene.replies.map((reply) => <button type="button" key={reply} onClick={() => chooseReply(reply)} className="rounded-full border border-[#1FAF55]/35 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-[#168344] shadow-sm transition hover:bg-[#EAF7EE]">{reply}</button>)}</div>}

              {scene.type === "product" && <div className="max-w-[88%] self-start overflow-hidden rounded-2xl rounded-bl-sm bg-white shadow-sm">
                <div className="flex h-20 items-center justify-center bg-gradient-to-br from-[#F9D7D0] via-[#F7E7D7] to-[#EAF7EE] text-3xl">🍰</div>
                <div className="p-2.5"><p className="text-[11px] font-bold text-[#183324]">Chocolate truffle cake</p><p className="mt-0.5 text-[10px] text-[#66766C]">From ₹599 · Freshly made</p><button type="button" onClick={() => setSceneIndex(4)} className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-[#EAF7EE] py-1.5 text-[10px] font-bold text-[#168344]">View product <ChevronRight size={12} /></button></div>
              </div>}

              {scene.type === "payment" && <div className="max-w-[88%] self-start rounded-2xl rounded-bl-sm bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#168344]"><CreditCard size={16} /></span><div><p className="text-[10px] font-bold text-[#183324]">Secure payment link</p><p className="text-[9px] text-[#66766C]">Order #CE-2048 · ₹599</p></div></div>
                <button type="button" onClick={() => setSceneIndex(5)} className="mt-2.5 flex w-full items-center justify-center gap-1 rounded-lg bg-[#1FAF55] py-2 text-[10px] font-bold text-white">Pay securely <ArrowRight size={12} /></button>
              </div>}

              {scene.type === "order" && <div className="max-w-[88%] self-start rounded-2xl rounded-bl-sm border border-[#DCEEE0] bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7EE] text-[#168344]"><PackageCheck size={17} /></span><div><p className="text-[10px] font-bold text-[#183324]">Order confirmed</p><p className="text-[9px] text-[#66766C]">#CE-2048 · Arrives by 4:30 PM</p></div></div>
                <div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-[#168344]"><Check size={11} /> Paid <span className="mx-1 h-px flex-1 bg-[#CFE4D4]" /><span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" /> Preparing</div>
              </div>}

              {scene.type === "appointment" && <div className="max-w-[88%] self-start rounded-2xl rounded-bl-sm border border-[#DCEEE0] bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600"><CalendarCheck size={16} /></span><div><p className="text-[10px] font-bold text-[#183324]">Appointment confirmed</p><p className="text-[9px] text-[#66766C]">Cake tasting · Today, 5:30 PM</p></div></div>
                <button type="button" onClick={() => setSceneIndex(0)} className="mt-2.5 w-full rounded-lg bg-[#F3F5F2] py-1.5 text-[9px] font-semibold text-[#52665B]">Add to calendar</button>
              </div>}
            </div>

            <div className="mt-1 flex items-center justify-center gap-1.5">{SCENES.map((item, index) => <span key={item.label} className={`h-1 rounded-full transition-all ${sceneIndex === index ? "w-4 bg-[#1FAF55]" : "w-1 bg-[#9AB5A2]/50"}`} />)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
