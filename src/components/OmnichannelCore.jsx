import React from 'react';

export default function OmnichannelCore() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================= */}
          {/* LEFT COLUMN: Headings & Copy             */}
          {/* ========================================= */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              WhatsApp at the core.<br />
              <span className="text-slate-900">Conversations everywhere.</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Start with WhatsApp and naturally extend to every channel your customers love. Manage website chat, Instagram, Facebook, SMS, calls, and other social channels from one unified inbox.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#trial"
                className="px-8 py-3.5 rounded-full font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Connect All Channels
              </a>
              <a
                href="#channels"
                className="px-6 py-3.5 rounded-full font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all text-sm"
              >
                Explore Integrations →
              </a>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: Radar & Floating Orbit Icons*/}
          {/* ========================================= */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Main Stage Dimensions */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center">
              
              {/* Outer Faint Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-emerald-200/80 animate-[spin_60s_linear_infinite]" />

              {/* Middle Light-Green Halo Layer */}
              <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full bg-emerald-100/50 backdrop-blur-xs border border-emerald-200/50" />

              {/* Inner Soft Green Glow Sphere */}
              <div className="absolute w-[160px] h-[160px] sm:w-[210px] sm:h-[210px] rounded-full bg-gradient-to-tr from-emerald-200/80 to-emerald-100/90 shadow-inner flex items-center justify-center" />

              {/* ------------------------------------- */}
              {/* CENTER: Core WhatsApp Icon Emblem     */}
              {/* ------------------------------------- */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl shadow-emerald-500/25 flex items-center justify-center border-4 border-emerald-500 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </div>

              {/* ------------------------------------- */}
              {/* ORBITING CHANNEL BADGES WITH FLOATING */}
              {/* ------------------------------------- */}

              {/* 1. TikTok (Top Left) */}
              <div className="absolute top-2 sm:top-5 left-24 sm:left-32 animate-[float_4.2s_ease-in-out_infinite] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black shadow-lg flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.89-2.88 2.89 2.89 0 012.89-2.89c.3 0 .58.05.85.12V9.41a6.33 6.33 0 00-.85-.06A6.33 6.33 0 003 15.68 6.33 6.33 0 009.33 22a6.33 6.33 0 006.33-6.32V8.92a8.21 8.21 0 004.93 1.63V7.1a4.83 4.83 0 01-1-.41z"/>
                  </svg>
                </div>
              </div>

              {/* 2. Meta Ads (Top Right) */}
              <div className="absolute top-4 sm:top-6 right-20 sm:right-28 animate-[float_4.8s_ease-in-out_infinite_0.7s] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center p-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-[#0668E1] text-lg font-bold leading-none">∞</span >
                  <span className="text-[8px] font-bold text-slate-700 tracking-tighter">Ads</span>
                </div>
              </div>

              {/* 3. Messenger (Right) */}
              <div className="absolute right-0 sm:right-3 top-1/3 animate-[float_4.5s_ease-in-out_infinite_1.2s] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#00B2FF] via-[#006AFF] to-[#9900FF] shadow-xl flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.03 2 11c0 2.85 1.47 5.4 3.78 7.02V22l3.77-2.07c.78.22 1.6.34 2.45.34 5.52 0 10-4.03 10-9s-4.48-9-10-9zm1.06 12.15l-2.56-2.73-5 2.73 5.5-5.84 2.62 2.73 4.94-2.73-5.5 5.84z"/>
                  </svg>
                </div>
              </div>

              {/* 4. Google Ads (Bottom Right) */}
              <div className="absolute right-1 sm:right-6 bottom-1/4 animate-[float_5s_ease-in-out_infinite_0.4s] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center p-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-base font-bold bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 bg-clip-text text-transparent leading-none">
                    G
                  </span>
                  <span className="text-[8px] font-bold text-slate-700 tracking-tighter">Ads</span>
                </div>
              </div>

              {/* 5. Instagram (Bottom Right Core) */}
              <div className="absolute bottom-2 sm:bottom-4 right-20 sm:right-28 animate-[float_4.6s_ease-in-out_infinite_1.5s] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] shadow-xl flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>

              {/* 6. RCS Messaging (Bottom Left) */}
              <div className="absolute -bottom-2 sm:bottom-0 left-28 sm:left-36 animate-[float_4.4s_ease-in-out_infinite_1.8s] z-20">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1A73E8] shadow-lg flex items-center justify-center text-white font-bold text-[10px] tracking-wider hover:scale-110 transition-transform cursor-pointer">
                  RCS
                </div>
              </div>

              {/* 7. Facebook (Bottom Left) */}
              <div className="absolute left-0 sm:left-2 bottom-1/4 animate-[float_5.2s_ease-in-out_infinite_0.9s] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1877F2] shadow-xl flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>

              {/* 8. Phone / Voice Call (Top Left) */}
              <div className="absolute left-2 sm:left-6 top-1/4 animate-[float_4.9s_ease-in-out_infinite_1.1s] z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 shadow-xl flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}