"use client";

import React from "react";

export default function BentoGridFeatures() {
    return (
        <section className="py-32 bg-[#050505] flex justify-center">
            <div className="max-w-7xl w-full px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                        World's first <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">memory web</span> browser.
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        Used by 10k+ developers daily.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Left Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Card 1: Local Memory */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-8 h-[300px] flex flex-col justify-between relative group hover:border-white/10 transition-colors">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">MOD: CORE_V1</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8m0 0a8 8 0 00-8 8c0 2.472.345 4.865.99 7.131M8 8a8 8 0 008 8m0 0a8 8 0 01-8 8m8-8c0-2.472-.345-4.865-.99-7.131" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">LOCAL_MEMORY</h3>
                                <ul className="space-y-2">
                                    <li className="text-sm text-zinc-500 font-mono flex items-center gap-2">
                                        <span className="text-zinc-700">&gt;</span> Privacy First
                                    </li>
                                    <li className="text-sm text-zinc-500 font-mono flex items-center gap-2">
                                        <span className="text-zinc-700">&gt;</span> Zero Latency
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: Multi-Platform */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-8 h-[300px] flex flex-col justify-between relative group hover:border-white/10 transition-colors">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">OS: NATIVE</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">CROSS_PLATFORM</h3>
                                <div className="flex flex-col gap-2">
                                    <span className="px-2 py-1 bg-zinc-900 text-zinc-400 text-xs font-mono w-fit">macOS Native</span>
                                    <span className="px-2 py-1 bg-zinc-900 text-zinc-400 text-xs font-mono w-fit">Linux Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Column (Large) */}
                    <div className="md:col-span-2 h-full">
                        <div className="h-full bg-[#0A0A0A] border border-white/5 flex flex-col items-center justify-center text-center relative group hover:border-white/10 transition-colors p-12">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                {/* Logo */}
                                <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-3xl opacity-50 rounded-full"></div>
                                    <img
                                        src="/probe.png"
                                        alt="Probe Logo"
                                        className="w-full h-full object-contain relative z-10"
                                    />
                                </div>

                                <h3 className="text-5xl font-bold text-white mb-8 tracking-tight">probe-browser</h3>

                                <div className="flex items-center gap-8 mb-12 border border-white/10 px-6 py-3 bg-zinc-900/50">
                                    <div className="flex items-center gap-2 text-yellow-500 font-mono text-sm">
                                        <span>★</span> 12.4k
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                        v1.0.0
                                    </div>
                                </div>

                                <div className="font-mono text-zinc-600 text-sm">
                                    $ brew install probe
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Card 3: Context Aware */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-8 h-[300px] flex flex-col justify-between relative group hover:border-white/10 transition-colors">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">SYS: AI_INT</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">CONTEXT_AWARE</h3>
                                <p className="text-sm text-zinc-500 font-mono leading-relaxed">
                                    6x faster recall with local vector embeddings.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Managed Cloud */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-8 h-[300px] flex flex-col justify-between relative group hover:border-white/10 transition-colors">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">NET: SYNC</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">MANAGED_CLOUD</h3>
                                <ul className="space-y-2">
                                    <li className="text-sm text-zinc-500 font-mono flex items-center gap-2">
                                        <span className="text-zinc-700">&gt;</span> Scale to teams
                                    </li>
                                    <li className="text-sm text-zinc-500 font-mono flex items-center gap-2">
                                        <span className="text-zinc-700">&gt;</span> Always synced
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
