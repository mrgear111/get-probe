"use client";

import React from "react";
import Image from "next/image";

export default function BentoGridFeatures() {
    return (
        <section className="py-8 bg-[#050505] flex justify-center">
            <div className="max-w-7xl w-full px-6">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                        World's first <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">AI-MEMORY</span> browser.
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        The AI Browser That Remembers, Assists, and Builds.
                    </p>
                </div>

                {/* Grid Container - Unified Borders */}
                <div className="bg-white/10 border border-white/10 grid grid-cols-1 md:grid-cols-4 gap-[1px] overflow-hidden">

                    {/* Left Column */}
                    <div className="md:col-span-1 flex flex-col gap-[1px]">
                        {/* Card 1: Memory Web */}
                        <div className="bg-[#0A0A0A] p-8 h-[230px] flex flex-col justify-between relative group">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">MOD: CORE_V1</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8m0 0a8 8 0 00-8 8c0 2.472.345 4.865.99 7.131M8 8a8 8 0 008 8m0 0a8 8 0 01-8 8m8-8c0-2.472-.345-4.865-.99-7.131" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">MEMORY WEB</h3>
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

                        {/* Card 2: Probe Spaces */}
                        <div className="bg-[#0A0A0A] p-8 h-[230px] flex flex-col justify-between relative group">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">OS: NATIVE</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">PROBE SPACES</h3>
                                <div className="flex flex-col gap-2">
                                    <span className="px-2 py-1 bg-zinc-900 text-zinc-400 text-xs font-mono w-fit">macOS Native</span>
                                    <span className="px-2 py-1 bg-zinc-900 text-zinc-400 text-xs font-mono w-fit">Linux Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Column (Large) */}
                    <div className="md:col-span-2 h-full bg-[#0A0A0A] flex flex-col items-center justify-center text-center relative group p-8">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Logo */}
                            <div className="w-28 h-28 mb-6 relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-3xl opacity-50 rounded-full"></div>
                                <Image
                                    src="/probe.png"
                                    alt="Probe Logo"
                                    fill
                                    className="object-contain relative z-10"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <h3 className="text-5xl font-bold text-white mb-6 tracking-tight">probe-browser</h3>

                            <div className="flex items-center gap-8 mb-8 border border-white/10 px-6 py-3 bg-zinc-900/50">
                                <div className="flex items-center gap-2 text-yellow-500 font-mono text-sm">
                                    Still debugging in DevTools? Cute!
                                </div>
                                <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm">

                                </div>
                            </div>

                            <div className="font-mono text-zinc-600 text-sm">
                                $ brew install probe
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-1 flex flex-col gap-[1px]">
                        {/* Card 3: Context Aware */}
                        <div className="bg-[#0A0A0A] p-8 h-[230px] flex flex-col justify-between relative group">
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

                        {/* Card 4: Universal Command Bar */}
                        <div className="bg-[#0A0A0A] p-8 h-[230px] flex flex-col justify-between relative group">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">NET: SYNC</span>
                            </div>
                            <div className="text-zinc-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider">Universal Command Bar</h3>
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
