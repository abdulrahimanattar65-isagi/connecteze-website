import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const AUTO_REPLIES = [
  "Good question! Our team can walk you through pricing on a quick call — want me to arrange one?",
  "You can connect your existing WhatsApp Business number, or we'll help you set up a new one.",
  "Most businesses publish their first form within fifteen minutes of signing up.",
  "I've noted that — someone from our team will follow up on WhatsApp shortly.",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm the Connecteze assistant. Ask me anything about forms, campaigns, or pricing." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const replyCount = useRef(0);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = AUTO_REPLIES[replyCount.current % AUTO_REPLIES.length];
      replyCount.current += 1;
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 1100);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF55] text-white shadow-xl shadow-[#1FAF55]/40 transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[440px] w-[320px] flex-col overflow-hidden rounded-2xl border border-[#E4E8E1] bg-white shadow-2xl shadow-[#0E1F17]/20 dark:border-[#223A2E] dark:bg-[#13231C]">
          <div className="flex items-center gap-3 bg-[#1FAF55] px-4 py-3.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white">
              <MessageCircle size={16} />
            </span>
            <div>
              <p className="text-[13.5px] font-semibold text-white">Connecteze Assistant</p>
              <p className="text-[10.5px] text-white/80">Typically replies in a minute</p>
            </div>
          </div>

          <div ref={listRef} className="flex-1 space-y-2 overflow-y-auto bg-[#F6F8F5] px-3 py-4 dark:bg-[#0E1913]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
                  m.from === "user"
                    ? "ml-auto rounded-br-sm bg-[#DCF8C6] text-[#0E1F17]"
                    : "rounded-bl-sm bg-white text-[#0E1F17] dark:bg-[#13231C] dark:text-[#EAF6EE]"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm dark:bg-[#13231C]">
                <span className="dot-bounce h-1.5 w-1.5 rounded-full bg-[#8FA79A]" style={{ animationDelay: "0ms" }} />
                <span className="dot-bounce h-1.5 w-1.5 rounded-full bg-[#8FA79A]" style={{ animationDelay: "150ms" }} />
                <span className="dot-bounce h-1.5 w-1.5 rounded-full bg-[#8FA79A]" style={{ animationDelay: "300ms" }} />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-[#E4E8E1] bg-white p-2.5 dark:border-[#223A2E] dark:bg-[#13231C]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="w-full rounded-lg border border-[#E4E8E1] bg-[#FBFBF7] px-3 py-2 text-[13px] text-[#0E1F17] outline-none focus:border-[#1FAF55] dark:border-[#223A2E] dark:bg-[#0E1913] dark:text-[#EAF6EE]"
            />
            <button
              onClick={send}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1FAF55] text-white transition-colors hover:bg-[#12793A]"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
