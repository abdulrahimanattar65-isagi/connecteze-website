import { useEffect, useRef, useState } from "react";
import {
  MessageCircle, Megaphone, ContactRound, GitBranch, MessagesSquare,
  Bot, Sparkles, Workflow, Headset, ShoppingBag, BarChart3, Plug,
  Bell, CheckCheck, BadgeCheck,
} from "lucide-react";
import "./Services.css";

/* "c" = customer, "b" = business (Cake & Co.). Business messages show a typing indicator first. */
const SERVICES = [
  { icon: MessageCircle, title: "WhatsApp Business API", status: "Verified business connected", result: "Your business, connected", detail: "One verified number. Every customer conversation.", action: "Secure API connection ready",
    msgs: [["c", "Hi! Is this the official Cake & Co. number? I got a message from you."], ["b", "Yes, it is! You're chatting with Cake & Co.'s verified business account (look for the green tick)."], ["c", "Great. Can I place an order here on WhatsApp?"], ["b", "Absolutely! Tell us the cake, size and delivery date, and we'll take care of the rest."]] },
  { icon: Megaphone, title: "WhatsApp Marketing", status: "Personalized campaign delivered", result: "The right offer, at the right time", detail: "Weekend offer · Sent to opted-in customers", action: "Campaign scheduled and delivered",
    msgs: [["b", "Hi Priya! 🎂 Your favourite chocolate truffle cake is 15% off this weekend. Use code SWEET15 before Sunday."], ["c", "Oh nice, I was just about to order one!"], ["b", "Perfect timing! Tap below to order now and we'll apply SWEET15 automatically."], ["c", "Done, ordering now 😍"]] },
  { icon: ContactRound, title: "CRM & Contacts", status: "Customer profile updated", result: "Meet Priya", detail: "Eggless cakes · Returning customer", action: "Preference saved to contact",
    msgs: [["c", "Hi, it's Priya again. Please remember I only eat eggless cakes."], ["b", "Welcome back, Priya! Saved. Eggless it is, every time."], ["c", "Thank you! Last time I ordered the pineapple one, right?"], ["b", "Yes, a 1 kg eggless pineapple on 12 March. Want the same again?"]] },
  { icon: GitBranch, title: "Sales Pipeline", status: "Lead moved to quote sent", result: "Every enquiry has a next step", detail: "New enquiry → Quote sent → Order confirmed", action: "Follow-up assigned for tomorrow",
    msgs: [["c", "I need a cake for 30 guests this Saturday. Could you send a quote?"], ["b", "Sure! For 30 guests we recommend 3 kg. Quote: ₹3,600 including a custom message."], ["c", "That works. What happens next?"], ["b", "We've reserved Saturday for you. Our sales team will call tomorrow to finalise the design."]] },
  { icon: MessagesSquare, title: "Shared Team Inbox", status: "Conversation assigned to Maya", result: "One inbox. A connected team.", detail: "Assigned to Maya · Design team", action: "Conversation context shared",
    msgs: [["c", "Can someone help me with a custom cake design? I have a reference photo."], ["b", "Sharing this with our design team now, one moment."], ["b", "Hi, I'm Maya from the design team! I've read your chat and seen your photo, so no need to repeat anything."], ["c", "That's a relief, thanks Maya!"]] },
  { icon: Bot, title: "Chatbots", status: "Instant chatbot reply", result: "A helpful hello, around the clock", detail: "Opening hours · Delivery · Order enquiries", action: "Common questions answered instantly",
    msgs: [["c", "Hi! What time do you open, and do you deliver?"], ["b", "We're open 9 AM–9 PM every day and deliver within 5 km. What would you like to do?"], ["c", "Track my order"], ["b", "Sure! Please share your order number, e.g. #2048, and I'll check it right away."]] },
  { icon: Sparkles, title: "AI Assistance", status: "AI reply reviewed by your team", result: "A little help. A personal touch.", detail: "Context-aware draft · Reviewed before sending", action: "Suggested reply approved by agent",
    msgs: [["c", "I need a birthday cake but I'm not sure what to choose."], ["b", "Happy to help! You enjoyed our chocolate truffle last time, so you might love the chocolate hazelnut. How many guests?"], ["c", "About 12, and one is vegetarian."], ["b", "All our cakes are vegetarian. A 2 kg hazelnut cake will serve 12 nicely. Shall I add it to your order?"]] },
  { icon: Workflow, title: "Automation", status: "Appointment reminder scheduled", result: "Appointment confirmed", detail: "Cake tasting · Tomorrow, 5:30 PM", action: "Reminder scheduled automatically",
    msgs: [["c", "Can I book a cake tasting for tomorrow at 5:30 PM?"], ["b", "Your cake tasting is booked for tomorrow, 5:30 PM. We'll remind you beforehand."], ["b", "⏰ Reminder: your cake tasting at Cake & Co. is in 1 hour. See you soon!"], ["c", "On my way!"]] },
  { icon: Headset, title: "Customer Support", status: "Support ticket resolved", result: "Help that keeps things moving", detail: "Ticket #1042 · Address updated", action: "Customer updated · Request resolved",
    msgs: [["c", "My delivery address is wrong. Can you help?"], ["b", "Sorry about that! I've opened ticket #1042. Please send the correct address."], ["c", "Flat 4B, Lakeview Apartments, Vidyanagar."], ["b", "Updated, and our delivery partner has been informed. Your cake is on its way to the right address."]] },
  { icon: ShoppingBag, title: "E-commerce", status: "Order confirmed", result: "From chat to checkout", detail: "Order #2048 · Chocolate truffle · 1 kg", action: "Order updates sent on WhatsApp",
    msgs: [["c", "I'd like the chocolate truffle cake, please!"], ["b", "Great choice! 1 kg chocolate truffle · ₹850. Pay securely with UPI or card?"], ["c", "Paid via UPI ✅"], ["b", "Payment received. Order #2048 is confirmed, and we'll share tracking here once it's out for delivery."]] },
  { icon: BarChart3, title: "Analytics & Reports", status: "Campaign report ready", result: "See what starts conversations", detail: "240 delivered · 186 read · 32 replies", action: "Sample campaign engagement report",
    msgs: [["c", "How did our weekend cake campaign perform?"], ["b", "Here's your summary: 240 messages delivered, 186 read (78%) and 32 customer replies."], ["c", "Which offer worked best?"], ["b", "SWEET15 got the most replies. Use these insights to plan your next offer."]] },
  { icon: Plug, title: "Integrations", status: "Store order synced", result: "Your tools, working together", detail: "Online store → CRM → WhatsApp", action: "Order details synced automatically",
    msgs: [["c", "I just ordered on your website. Did it go through?"], ["b", "Yes! Your store order #2048 has synced to our system."], ["b", "You'll get confirmation and delivery updates right here on WhatsApp."], ["c", "Perfect, thanks!"]] },
];

const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const timeLabel = (i) => `10:${String(30 + i).padStart(2, "0")}`;

function ChatPreview({ service, index }) {
  const Icon = service.icon;
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const bodyRef = useRef(null);

  // Play the conversation one message at a time, with typing dots before every business reply.
  useEffect(() => {
    setShown(0); setTyping(false); setShowResult(false);
    if (reduceMotion()) { setShown(service.msgs.length); setShowResult(true); return; }
    const timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    let t = 500;
    service.msgs.forEach(([who, text], i) => {
      if (who === "b") {
        at(t, () => setTyping(true));
        t += Math.min(1700, 750 + text.length * 14);
        at(t, () => { setTyping(false); setShown(i + 1); });
        t += 650;
      } else {
        at(t, () => setShown(i + 1));
        t += 850;
      }
    });
    at(t + 150, () => setShowResult(true));
    return () => timers.forEach(clearTimeout);
  }, [service]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduceMotion() ? "auto" : "smooth" });
  }, [shown, typing, showResult]);

  return (
    <div className="services-chat-stage">
      <div className="services-chat-screen">
        <div className="services-chat-header">
          <span className="services-business-avatar"><MessageCircle size={24} /></span>
          <div><strong>Cake &amp; Co. <BadgeCheck size={15} /></strong><span><i /> {typing ? "typing…" : "online"}</span></div>
          <span className="services-chat-bell" aria-hidden="true"><Bell size={20} /><i /></span>
        </div>
        <div id="service-chat-content" role="region" aria-label={`${service.title} example conversation`} className="services-chat-content">
          <div className="services-chat-status" key={service.title}><span><Icon size={18} /></span>{service.status}<i /></div>
          <div className="services-chat-body" ref={bodyRef}>
            <span className="services-chat-date">TODAY</span>
            <div className="services-chat-messages" aria-live="polite">
              {service.msgs.slice(0, shown).map(([who, text], i) => (
                <div key={`${service.title}-${i}`} className={`services-message ${who === "c" ? "services-message-customer" : "services-message-business"}`}>
                  <span className="services-message-author">{who === "c" ? "Customer" : "Cake & Co."}</span>
                  <p>{text}</p>
                  <small>{timeLabel(i)} {who === "b" && <CheckCheck size={14} />}</small>
                </div>
              ))}
              {typing && <div className="services-typing" aria-label="Cake & Co. is typing"><span /><span /><span /></div>}
              {showResult && (
                <div className="services-chat-result">
                  <div><span className="services-result-icon"><Icon size={23} /></span><div><strong>{service.result}</strong><p>{service.detail}</p></div></div>
                  <span className="services-result-action"><BadgeCheck size={14} />{service.action}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="services-chat-progress" aria-hidden="true">{SERVICES.map((item, i) => <span key={item.title} className={index === i ? "is-active" : ""} />)}</div>
      </div>
      <p className="services-preview-caption">Example conversation · {index + 1} of {SERVICES.length}</p>
    </div>
  );
}

const Spark = ({ className }) => (
  <svg className={`services-deco services-deco-spark ${className}`} viewBox="0 0 24 24"><path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" /></svg>
);
const Bubble = ({ className }) => (
  <svg className={`services-deco services-deco-bubble ${className}`} viewBox="0 0 120 90">
    <path className="shell" d="M20 4h80a16 16 0 0116 16v30a16 16 0 01-16 16H52L30 84V66h-10A16 16 0 014 50V20A16 16 0 0120 4z" />
    <circle cx="40" cy="35" r="5" /><circle cx="60" cy="35" r="5" /><circle cx="80" cy="35" r="5" />
  </svg>
);

/* Decorative, purely visual background illustrations */
function Backdrop() {
  return (
    <div className="services-bg" aria-hidden="true">
      <span className="services-dots services-dots-1" />
      <span className="services-dots services-dots-2" />
      <span className="services-ring services-ring-1" />
      <span className="services-ring services-ring-2" />
      <Bubble className="services-deco-bubble-1" />
      <Bubble className="services-deco-bubble-2" />
      <Spark className="services-deco-spark-1" />
      <Spark className="services-deco-spark-2" />
      <Spark className="services-deco-spark-3" />
    </div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="services" className="services-section services-showcase">
      <Backdrop />
      <div className="services-showcase-inner">
        <div className="services-selection">
          <span className="services-kicker"><span /> OUR SERVICES</span>
          <h2 className="font-display services-heading">Better conversations.<br /><span>Bigger possibilities.</span></h2>
          <p className="services-intro">Everything you need to market, sell, and support on WhatsApp. Pick a service below and watch it play out in a real conversation.</p>
        </div>

        <div id="services-chat-preview" className="services-preview-column"><ChatPreview service={SERVICES[activeIndex]} index={activeIndex} /></div>

        <div className="services-selection-bottom">
          <div className="services-selection-grid" role="group" aria-label="Explore our services">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;
              return (
                <button key={service.title} type="button" className={`services-select-pill ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)}
                  onClick={() => {
                    setActiveIndex(index);
                    if (window.matchMedia("(max-width: 700px)").matches) {
                      document.getElementById("services-chat-preview")?.scrollIntoView({ behavior: reduceMotion() ? "instant" : "smooth", block: "start" });
                    }
                  }}
                  aria-pressed={isActive} aria-controls="service-chat-content">
                  <Icon size={16} strokeWidth={1.8} />{service.title}
                </button>
              );
            })}
          </div>
          <span className="sr-only" role="status" aria-live="polite">Showing {SERVICES[activeIndex].title} in the chat preview.</span>
          <p className="services-count">12 connected services. <span>One seamless customer experience.</span></p>
        </div>
      </div>
    </section>
  );
}