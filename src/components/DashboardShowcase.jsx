import React, { useState } from 'react';

export default function DashboardShowcase() {
  const [activeDashboardTab, setActiveDashboardTab] = useState('inbox'); // 'inbox' | 'kanban' | 'automation'
  const [activeSolutionTab, setActiveSolutionTab] = useState('support'); // 'marketing' | 'sales' | 'support'

  return (
    <section className="relative py-24 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-100/40 via-teal-50/50 to-blue-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* PART 1: THREE DASHBOARD VIEWS WITH VIEW SWITCHER (Inbox, Kanban, Automation) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Meta Verified Enterprise Suite
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for modern customer communication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Switch between shared team inboxes, visual CRM deal stages, and no-code drag & drop bot workflows.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveDashboardTab('inbox')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
              activeDashboardTab === 'inbox'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20 shadow-md ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            📥 Team Inbox & Phone
          </button>
          <button
            onClick={() => setActiveDashboardTab('kanban')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
              activeDashboardTab === 'kanban'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20 shadow-md ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            📋 Kanban Lead Stages
          </button>
          <button
            onClick={() => setActiveDashboardTab('automation')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
              activeDashboardTab === 'automation'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20 shadow-md ring-2 ring-emerald-500/30'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            ⚡ Bot Automations
          </button>
        </div>

        {/* Outer Dashboard Window Container */}
        <div className="relative mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
            
            {/* Top Shared SaaS Application Header */}
            <div className="h-14 px-6 border-b border-slate-200 bg-white flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    WG
                  </div>
                  <span className="font-bold text-base tracking-tight text-slate-900">
                    WhatsApp<span className="text-emerald-500">Grow</span>
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
                  <span className={`cursor-pointer pb-1 ${activeDashboardTab === 'inbox' ? 'text-emerald-600 border-b-2 border-emerald-500' : 'hover:text-slate-900'}`} onClick={() => setActiveDashboardTab('inbox')}>
                    Team Inbox
                  </span>
                  <span className="cursor-pointer hover:text-slate-900">Broadcast</span>
                  <span className="cursor-pointer hover:text-slate-900">Contacts</span>
                  <span className={`cursor-pointer pb-1 ${activeDashboardTab === 'automation' ? 'text-emerald-600 border-b-2 border-emerald-500' : 'hover:text-slate-900'}`} onClick={() => setActiveDashboardTab('automation')}>
                    Automations
                  </span>
                  <span className="cursor-pointer hover:text-slate-900">Ads</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-md text-slate-700 font-semibold border border-slate-200/80">
                  Meta Verified Partner
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-600">
                  🔔
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                  TH
                </div>
              </div>
            </div>

            {/* ======================================================= */}
            {/* VIEW 1: TEAM INBOX WITH LIVE PHONE OVERLAY              */}
            {/* ======================================================= */}
            {activeDashboardTab === 'inbox' && (
              <div className="relative grid grid-cols-12 min-h-[550px] bg-slate-50/50 animate-fadeIn">
                {/* Left Inbox List */}
                <div className="hidden md:block md:col-span-3 border-r border-slate-200 bg-white p-3.5 space-y-3">
                  <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                    <span className="bg-white text-slate-900 px-3 py-1 rounded-lg shadow-xs">All</span>
                    <span className="cursor-pointer hover:text-emerald-600">WhatsApp</span>
                    <span className="cursor-pointer hover:text-pink-600">Instagram</span>
                    <span className="cursor-pointer hover:text-blue-600">Messenger</span>
                  </div>
                  <div className="bg-slate-100 rounded-lg px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                    <span>🔍</span> Search Name or Phone
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    All Chats • 1,669 Total
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-100 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 font-bold text-xs flex items-center justify-center">
                          EW
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Emma Walker</div>
                          <div className="text-[11px] text-slate-500 truncate max-w-[120px]">Thanks, Tim! Let me...</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400">08:43 AM</span>
                    </div>
                    <div className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between opacity-60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                          MR
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Marcus Reed</div>
                          <div className="text-[11px] text-slate-500">Need quote for policy...</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400">08:20 AM</span>
                    </div>
                  </div>
                </div>

                {/* Center Chat Thread */}
                <div className="col-span-12 md:col-span-6 flex flex-col justify-between border-r border-slate-200 bg-white">
                  <div className="h-14 px-4 border-b border-slate-100 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm">🎧</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Tim Halpert (Sales Rep)</div>
                        <div className="text-[10px] text-emerald-600 font-medium">● Available</div>
                      </div>
                    </div>
                    <span className="text-xs bg-slate-100 px-2.5 py-1 rounded-md text-slate-700 font-medium border border-slate-200">
                      Status: Open ▾
                    </span>
                  </div>

                  <div className="p-6 space-y-4 bg-slate-50/50 flex-1 flex flex-col justify-center text-xs">
                    <div className="mx-auto bg-white border border-slate-200 shadow-xs px-4 py-1.5 rounded-full font-bold text-slate-700">
                      Comprehensive Home Plan
                    </div>
                    <div className="text-center text-[11px] text-slate-400">
                      Lead Qualified & assigned to Sales Rep – Tim Halpert
                    </div>

                    <div className="max-w-md ml-auto bg-[#D9FDD3] border border-emerald-100 text-slate-800 p-4 rounded-2xl rounded-tr-none shadow-xs space-y-2">
                      <p>
                        Hi Emma! 👋<br />
                        Thanks for the details. I'm Tim from SecureCover Insurance. Based on the info, here's the preliminary overview of our Comprehensive Home Protection policy.
                      </p>
                      <p className="text-[10px] text-emerald-800 font-semibold">~ Tim Halpert</p>

                      <div className="bg-white/90 border border-emerald-200/80 p-2.5 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                          PDF
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Comp_Home_Protection_policy</div>
                          <div className="text-[10px] text-slate-400">2.4 MB • Complete Brochure</div>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-sm mr-auto bg-white border border-slate-200 text-slate-800 p-3 rounded-2xl rounded-tl-none shadow-xs">
                      Thanks, Tim! Let me have a look at the brochure.
                    </div>
                  </div>

                  <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Type a message or use / for quick replies..."
                      className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none"
                      readOnly
                    />
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-semibold">
                      Send
                    </button>
                  </div>
                </div>

                {/* Right CRM Contact Details */}
                <div className="hidden md:block md:col-span-3 bg-white p-4 space-y-5 text-xs">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center">
                      EW
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">Emma Walker</div>
                      <div className="text-[10px] text-slate-400">+1 (555) 019-4321</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Sales Attributes</div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between text-slate-600">
                        <span>Lead Stage:</span>
                        <span className="font-semibold text-emerald-600">Interested (Demo Sent)</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Contact Owner:</span>
                        <span className="font-semibold text-slate-800">Lead Qualifier Bot</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tags</div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                        VIP
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-200">
                        Home Insurance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile WhatsApp Smartphone (Overlaid on bottom left) */}
                <div className="absolute -bottom-6 -left-4 sm:left-4 md:-left-6 w-[270px] sm:w-[300px] rounded-[2.6rem] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 ring-2 ring-black/10 z-20 transform hover:-translate-y-1 transition-transform">
                  <div className="w-20 h-3.5 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-700 rounded-full" />
                  </div>
                  <div className="bg-emerald-800 text-white p-2.5 rounded-t-2xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">‹</span>
                      <div className="w-7 h-7 rounded-full bg-white text-emerald-800 font-bold flex items-center justify-center text-[10px]">
                        SC
                      </div>
                      <div>
                        <div className="font-bold text-[11px] flex items-center gap-1">
                          SCInsure <span className="text-blue-300 text-[8px]">☑</span>
                        </div>
                        <div className="text-[9px] text-emerald-200">Official Account</div>
                      </div>
                    </div>
                    <span>⋮</span>
                  </div>
                  <div className="bg-[#EFEAE2] p-2.5 min-h-[350px] flex flex-col justify-end gap-2 text-[10px] rounded-b-2xl">
                    <div className="bg-[#D9FDD3] text-slate-800 p-2 rounded-xl rounded-tr-none ml-auto max-w-[80%] shadow-xs">
                      Comprehensive
                    </div>
                    <div className="bg-white text-slate-800 p-2.5 rounded-xl rounded-tl-none mr-auto max-w-[90%] shadow-xs space-y-1.5 leading-snug">
                      <p>Hi Emma! 👋 Thanks for the details. Here is your Comprehensive Protection overview.</p>
                      <p className="text-[9px] text-emerald-700 font-semibold">~ Tim Halpert</p>
                      <div className="bg-slate-50 border border-slate-200 p-1.5 rounded-lg flex items-center gap-2">
                        <span className="bg-red-100 text-red-600 font-bold px-1 rounded text-[9px]">PDF</span>
                        <span className="truncate text-[9px] font-semibold text-slate-700">Comp_Home_Protection.pdf</span>
                      </div>
                    </div>
                    <div className="bg-[#D9FDD3] text-slate-800 p-2 rounded-xl rounded-tr-none ml-auto max-w-[80%] shadow-xs">
                      Thanks, Tim! Let me have a look at the brochure.
                    </div>
                    <div className="mt-1 bg-white rounded-full px-3 py-1.5 border border-slate-200 flex items-center justify-between text-slate-400 text-[9px]">
                      <span>Type a message...</span>
                      <span>🎙️</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================= */}
            {/* VIEW 2: KANBAN LEAD STAGES CRM                          */}
            {/* ======================================================= */}
            {activeDashboardTab === 'kanban' && (
              <div className="p-6 bg-slate-50 min-h-[550px] animate-fadeIn">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Lead Stages • Kanban View</h3>
                    <p className="text-xs text-slate-500">Track and nurture WhatsApp prospects through automated pipelines</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-medium text-slate-700">All Agents ▾</span>
                    <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-medium text-slate-700">Status: Open ▾</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
                  {/* Column 1: New Lead */}
                  <div className="bg-amber-50/50 rounded-2xl p-3 border border-amber-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-900 pb-1">
                      <span>● NEW LEAD</span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px]">14</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-amber-200/80 shadow-xs space-y-1.5 hover:shadow-md transition">
                      <div className="font-bold text-xs text-slate-800">Liam O'Connor</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Hi there! I noticed your insurance ad and I'm interested in..."</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">Open</span>
                        <span className="text-slate-400">👤 Aisha Khan</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-amber-200/80 shadow-xs space-y-1.5">
                      <div className="font-bold text-xs text-slate-800">Anya Patel</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Hello! Can I get more information regarding your plans..."</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">Open</span>
                        <span className="text-slate-400">👤 Nora Kim</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Qualified */}
                  <div className="bg-emerald-50/50 rounded-2xl p-3 border border-emerald-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-900 pb-1">
                      <span>● QUALIFIED</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px]">8</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-emerald-200/80 shadow-xs space-y-1.5 hover:shadow-md transition">
                      <div className="font-bold text-xs text-slate-800">Nina Patel</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"As a caretaker of housing society, I often get queries..."</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">Open</span>
                        <span className="text-slate-400">👤 James Smith</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-emerald-200/80 shadow-xs space-y-1.5">
                      <div className="font-bold text-xs text-slate-800">Oliver Brown</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Can I get a quick overview of prices for home insurance?"</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">Open</span>
                        <span className="text-slate-400">👤 Isabella Davis</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Proposal Sent */}
                  <div className="bg-blue-50/50 rounded-2xl p-3 border border-blue-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-blue-900 pb-1">
                      <span>● PROPOSAL SENT</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-[10px]">12</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-blue-200/80 shadow-xs space-y-1.5 hover:shadow-md transition">
                      <div className="font-bold text-xs text-slate-800">Ava White</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Can I get a quick overview of the pricing options?"</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">Open</span>
                        <span className="text-slate-400">👤 Lucas Martin</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-blue-200/80 shadow-xs space-y-1.5">
                      <div className="font-bold text-xs text-slate-800">Elijah Wilson</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Please let know what are the different plans for condo."</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">Open</span>
                        <span className="text-slate-400">👤 Charlotte T.</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 4: Deal Won */}
                  <div className="bg-purple-50/50 rounded-2xl p-3 border border-purple-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-purple-900 pb-1">
                      <span>● DEAL WON</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-[10px]">26</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-purple-200/80 shadow-xs space-y-1.5 hover:shadow-md transition">
                      <div className="font-bold text-xs text-slate-800">Emma Walker</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"I'm interested in finalizing the comprehensive package."</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-semibold">Won</span>
                        <span className="text-slate-400">👤 Tim Halpert</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-purple-200/80 shadow-xs space-y-1.5">
                      <div className="font-bold text-xs text-slate-800">Mia Anderson</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Premium paid via payment link. Thanks team!"</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-semibold">Won</span>
                        <span className="text-slate-400">👤 Benjamin Lee</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 5: Deal Lost */}
                  <div className="bg-slate-100/60 rounded-2xl p-3 border border-slate-200 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-1">
                      <span>● DEAL LOST</span>
                      <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-[10px]">4</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1.5 opacity-70">
                      <div className="font-bold text-xs text-slate-800">Sophia Chang</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">"Went with another regional policy provider."</div>
                      <div className="flex justify-between items-center pt-1 text-[10px]">
                        <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-semibold">Closed</span>
                        <span className="text-slate-400">👤 Liam Johnson</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================= */}
            {/* VIEW 3: DRAG & DROP BOT AUTOMATION WORKFLOW             */}
            {/* ======================================================= */}
            {activeDashboardTab === 'automation' && (
              <div className="grid grid-cols-12 min-h-[550px] bg-[#F4F5F9] animate-fadeIn">
                {/* Left Automation Library */}
                <div className="col-span-12 md:col-span-3 bg-white border-r border-slate-200 p-4 space-y-4 text-xs">
                  <div className="font-bold text-slate-800 text-sm">Automations Library</div>
                  <div className="space-y-1 text-slate-600">
                    <div className="font-bold text-slate-400 text-[10px] uppercase">Triggers</div>
                    <div className="bg-emerald-50 text-emerald-800 font-semibold p-2 rounded-lg border border-emerald-200">
                      ⚡ Keyword Match / Rules
                    </div>
                  </div>
                  <div className="space-y-1 text-slate-600">
                    <div className="font-bold text-slate-400 text-[10px] uppercase">AI Support Agent</div>
                    <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">🤖 Chatbot Flow Builder</div>
                    <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">⚙️ Rule Management</div>
                  </div>
                  <div className="space-y-1 text-slate-600">
                    <div className="font-bold text-slate-400 text-[10px] uppercase">Action Modules</div>
                    <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">📨 WhatsApp Interactive Flows</div>
                    <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">🔀 Smart Agent Routing</div>
                    <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">📁 Reply Media & PDF Materials</div>
                  </div>
                </div>

                {/* Center Canvas Flow */}
                <div className="col-span-12 md:col-span-6 p-8 flex flex-col items-center justify-center space-y-6">
                  {/* Step 1 Node */}
                  <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border border-slate-200/90 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      💬
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold text-emerald-600 uppercase">Trigger Event</div>
                      <div className="text-xs font-bold text-slate-800">When new WhatsApp message is received</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Matching keywords: "Where is my order", "Track #", "Delivery status"</div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-6 bg-slate-300 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-400" />
                  </div>

                  {/* Step 2 Node */}
                  <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border border-slate-200/90 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      🔻
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold text-red-600 uppercase">Condition / Filter</div>
                      <div className="text-xs font-bold text-slate-800">Filter Properties</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">If customer has active order within last 14 days</div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-6 bg-slate-300 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-400" />
                  </div>

                  {/* Step 3 Node */}
                  <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border border-slate-200/90 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold text-blue-600 uppercase">Action</div>
                      <div className="text-xs font-bold text-slate-800">Fetch Shopify Tracking & Send Interactive WhatsApp Card</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Include Live Tracking Button + Instant Return Option</div>
                    </div>
                  </div>
                </div>

                {/* Right Filter Properties Inspector */}
                <div className="hidden md:block md:col-span-3 bg-white border-l border-slate-200 p-5 space-y-4 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-slate-800">Filter Properties</span>
                    <span className="text-slate-400">✕</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Add a filter to narrow down exactly when the automated response triggers.
                  </p>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1 text-[11px]">Filter Criteria</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-700 focus:outline-none">
                      <option>Message contains exact phrase</option>
                      <option>Customer has Shopify tag</option>
                      <option>Business hours: Outside 9am - 6pm</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: SOLUTIONS SHOWCASE SECTION (Marketing, Sales, Support Tabs)       */}
        {/* ========================================================================= */}
        <div className="mt-32 max-w-5xl mx-auto">
          
          {/* Solution Tabs */}
          <div className="flex items-center justify-center gap-12 border-b border-slate-200 pb-4 mb-16 text-lg sm:text-2xl font-bold">
            <button
              onClick={() => setActiveSolutionTab('marketing')}
              className={`pb-2 transition-all relative ${
                activeSolutionTab === 'marketing'
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Marketing
            </button>
            <button
              onClick={() => setActiveSolutionTab('sales')}
              className={`pb-2 transition-all relative ${
                activeSolutionTab === 'sales'
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setActiveSolutionTab('support')}
              className={`pb-2 transition-all relative ${
                activeSolutionTab === 'support'
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Support
            </button>
          </div>

          {/* TAB 1: SUPPORT (Floating Omnichannel Messages Animation) */}
          {activeSolutionTab === 'support' && (
            <div className="relative min-h-[380px] flex items-center justify-center overflow-hidden rounded-3xl bg-white p-8 border border-slate-200/80 shadow-lg">
              
              {/* Central Floating WhatsApp Query Bubble */}
              <div className="relative z-10 bg-[#D9FDD3] text-slate-800 px-6 py-4 rounded-2xl shadow-xl border border-emerald-200 text-lg sm:text-xl font-medium animate-bounce [animation-duration:3.5s]">
                Where is my order?
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  42
                </div>
              </div>

              {/* Floating Instagram Query Bubble */}
              <div className="absolute right-12 sm:right-24 top-16 bg-[#EDE9FE] text-purple-900 px-5 py-3.5 rounded-2xl shadow-lg border border-purple-200 text-sm sm:text-base font-medium animate-pulse [animation-duration:4s]">
                Hey, Where is my order?
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-[10px] shadow">
                  21
                </div>
              </div>

              {/* Floating Messenger Query Bubble */}
              <div className="absolute left-10 sm:left-24 bottom-14 bg-white text-slate-800 px-6 py-3.5 rounded-2xl shadow-xl border border-slate-200 text-sm sm:text-base font-medium">
                Hi, where's my order?
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[10px] shadow">
                  17
                </div>
              </div>

              {/* Ambient Background Faded Bubbles */}
              <div className="absolute top-6 left-1/3 text-slate-300 text-xs select-none">Hi, where's my order?</div>
              <div className="absolute bottom-6 right-1/4 text-slate-300 text-xs select-none">Where is my order?</div>
              <div className="absolute top-24 left-8 text-slate-300 text-xs select-none">Hey, where is my order?</div>
              <div className="absolute right-8 bottom-28 text-slate-300 text-xs select-none">Where is my package?</div>
            </div>
          )}

          {/* TAB 2: MARKETING (Click-To-WhatsApp Ads & Scanning QR Animation) */}
          {activeSolutionTab === 'marketing' && (
            <div className="relative min-h-[380px] bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg flex flex-wrap items-center justify-center gap-8 overflow-hidden">
              
              {/* Ad Card 1: Instagram Click to WhatsApp Ad */}
              <div className="w-56 bg-white border border-slate-200 rounded-2xl shadow-md p-3 text-xs space-y-2 transform hover:-translate-y-1 transition">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-[9px] flex items-center justify-center">
                    NB
                  </div>
                  <div>
                    <div className="font-bold text-[10px] text-slate-800">Natural Beauty</div>
                    <div className="text-[8px] text-slate-400">Sponsored • WhatsApp Ads</div>
                  </div>
                </div>
                <div className="w-full h-24 bg-gradient-to-tr from-amber-100 to-rose-100 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
                  Skincare Product Carousel
                </div>
                <button className="w-full bg-[#E7FCE8] text-emerald-800 font-bold py-1.5 rounded-lg text-[10px] border border-emerald-200 flex items-center justify-center gap-1.5 hover:bg-[#d8f9da]">
                  💬 Chat on WhatsApp
                </button>
              </div>

              {/* Central QR Code with Animated Scanning Laser */}
              <div className="relative p-4 bg-white rounded-2xl border-2 border-slate-200 shadow-xl flex flex-col items-center">
                <div className="relative w-36 h-36 bg-slate-900 rounded-xl p-2 flex items-center justify-center overflow-hidden">
                  {/* Faux QR Matrix pattern */}
                  <div className="w-full h-full bg-slate-800 rounded grid grid-cols-4 gap-1 p-2">
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-emerald-400 rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-emerald-400 rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-emerald-400 rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-emerald-400 rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs" />
                  </div>
                  
                  {/* WhatsApp center badge */}
                  <div className="absolute w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shadow-lg">
                    ✆
                  </div>

                  {/* Animated Green Laser Scan Line */}
                  <div className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_12px_#34d399] animate-[scan_2.5s_ease-in-out_infinite]" />
                </div>
                <span className="mt-2 text-[10px] font-bold text-slate-600">Scan to initiate WhatsApp chat</span>
              </div>

              {/* Ad Card 2: Masterclass Course Lead Card */}
              <div className="w-56 bg-white border border-slate-200 rounded-2xl shadow-md p-3 text-xs space-y-2 transform hover:-translate-y-1 transition">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">
                    PM
                  </div>
                  <div>
                    <div className="font-bold text-[10px] text-slate-800">PM Masterclass</div>
                    <div className="text-[8px] text-slate-400">Sponsored</div>
                  </div>
                </div>
                <div className="w-full h-24 bg-gradient-to-tr from-blue-900 to-indigo-800 text-white rounded-lg p-2 flex flex-col justify-end text-[10px]">
                  <span className="font-bold">Product Management Boot Camp</span>
                </div>
                <button className="w-full bg-[#E7FCE8] text-emerald-800 font-bold py-1.5 rounded-lg text-[10px] border border-emerald-200 flex items-center justify-center gap-1.5 hover:bg-[#d8f9da]">
                  💬 Register on WhatsApp
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: SALES (Instant Lead Routing Pipeline) */}
          {activeSolutionTab === 'sales' && (
            <div className="min-h-[380px] bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg flex items-center justify-around flex-wrap gap-6 text-center">
              <div className="max-w-xs space-y-2">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-sm">
                  ⚡
                </div>
                <h4 className="text-base font-bold text-slate-800">Instant Lead Qualification</h4>
                <p className="text-xs text-slate-500">Automate qualification queries and book demos immediately without human delay.</p>
              </div>
              <div className="max-w-xs space-y-2">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-sm">
                  👥
                </div>
                <h4 className="text-base font-bold text-slate-800">Round-Robin Assignment</h4>
                <p className="text-xs text-slate-500">Automatically distribute high-intent conversations among available sales reps.</p>
              </div>
              <div className="max-w-xs space-y-2">
                <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-sm">
                  📈
                </div>
                <h4 className="text-base font-bold text-slate-800">3.8x Higher Conversion</h4>
                <p className="text-xs text-slate-500">Close deals 4x faster with automated quote generation and follow-up templates.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}