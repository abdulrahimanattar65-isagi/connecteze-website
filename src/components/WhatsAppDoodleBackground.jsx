import React from "react";

export default function WhatsAppDoodleBackground({
  children,
  opacity = 0.35,
  bgColor = "bg-[#FAF5EC] dark:bg-[#0B141A]",
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden ${bgColor} ${className}`}>
      {/* SVG Doodle Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none transition-opacity duration-300"
        style={{
          opacity: opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%231b4d3e' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' opacity='0.75'%3E%3C!-- Chat Bubble --%3E%3Cpath d='M18 18 h20 a6 6 0 0 1 6 6 v12 a6 6 0 0 1 -6 6 h-12 l-8 7 v-7 h0 a6 6 0 0 1 -6 -6 v-12 a6 6 0 0 1 6 -6 z'/%3E%3C!-- Heart --%3E%3Cpath d='M95 18 C90 12, 80 18, 86 26 L95 35 L104 26 C110 18, 100 12, 95 18 Z'/%3E%3C!-- Music note --%3E%3Cpath d='M18 80 v18 a4 4 0 1 1 -4 -4 h4'/%3E%3Cpath d='M18 83 l12 -3 v18 a4 4 0 1 1 -4 -4 h4'/%3E%3C!-- Camera --%3E%3Crect x='85' y='75' width='24' height='16' rx='3'/%3E%3Ccircle cx='97' cy='83' r='4'/%3E%3Cpath d='M93 75 v-2 h8 v2'/%3E%3C!-- Coffee Mug --%3E%3Cpath d='M50 82 h12 v10 a6 6 0 0 1 -6 6 h0 a6 6 0 0 1 -6 -6 z'/%3E%3Cpath d='M62 84 h4 a3 3 0 0 1 0 6 h-4'/%3E%3C!-- Sparkles / Stars --%3E%3Cpath d='M55 22 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z'/%3E%3Cpath d='M120 110 l1.5 3.5 l3.5 1.5 l-3.5 1.5 l-1.5 3.5 l-1.5 -3.5 l-3.5 -1.5 l3.5 -1.5 z'/%3E%3C!-- Double Checkmark --%3E%3Cpath d='M48 118 l4 4 l10 -10'/%3E%3Cpath d='M55 118 l4 4 l10 -10'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "130px 130px",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}