"use client";

import React from "react";
import { motion } from "framer-motion";

const Cursor = ({ color, label, x, y, delay = 0 }: { color: string, label: string, x: number[], y: number[], delay?: number }) => (
    <motion.div
        className="absolute z-20 pointer-events-none"
        initial={{ x: x[0], y: y[0], opacity: 0 }}
        animate={{ x, y, opacity: 1 }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }}
    >
        <svg
            className={`w-5 h-5 transform -translate-x-1 -translate-y-1 drop-shadow-md`}
            style={{ color: color }}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" />
        </svg>
        <div
            className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap ml-2 mt-1 shadow-sm"
            style={{ backgroundColor: color }}
        >
            {label}
        </div>
    </motion.div>
);

const Highlight = ({ x, y, width, delay = 0 }: { x: number, y: number, width: number, delay?: number }) => (
    <motion.div
        className="absolute h-4 bg-yellow-500/30 rounded-sm pointer-events-none"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: width, opacity: [0, 1, 1, 0] }}
        style={{ left: x, top: y }}
        transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 4,
            delay: delay,
            ease: "easeInOut"
        }}
    />
);

export default function ProbeSpaces() {
    return (
        <section id="probe-spaces" className="bg-[#050505] relative overflow-hidden">
            <div className="w-full relative z-10">

                {/* Main Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-y border-white/10 bg-zinc-900/20 backdrop-blur-sm">

                    {/* Left Panel - Text Content */}
                    <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col relative">

                        {/* Metadata Header */}
                        <div className="flex justify-between items-center mb-16 text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                                <span>SYS: MULTIPLAYER_V2</span>
                            </div>
                            <span>STATUS: ACTIVE</span>
                        </div>

                        {/* Main Title */}
                        <div className="mb-12">
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-[0.9]">
                                PROBE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">SPACES</span>
                            </h2>
                            <div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent mb-6"></div>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Real-time state synchronization engine. <br />
                                <span className="text-zinc-500 text-sm font-mono mt-2 block">&gt; Latency: &lt;30ms optimized</span>
                            </p>
                        </div>

                        {/* Modules Grid */}
                        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 mb-12">
                            {/* Module 1 */}
                            <div className="bg-[#080808] p-6 group hover:bg-zinc-900/80 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-0.5 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-[10px] font-mono text-blue-500">MOD_01</span>
                                    <svg className="w-3 h-3 text-zinc-700 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1 tracking-wide">INSTANT_SESSION_LINK</h3>
                                <p className="text-zinc-500 text-xs font-mono">Ephemeral secure invites generated in 200ms.</p>
                            </div>

                            {/* Module 2 */}
                            <div className="bg-[#080808] p-6 group hover:bg-zinc-900/80 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-0.5 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-[10px] font-mono text-purple-500">MOD_02</span>
                                    <svg className="w-3 h-3 text-zinc-700 group-hover:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1 tracking-wide">MULTI_CURSOR_SYNC</h3>
                                <p className="text-zinc-500 text-xs font-mono">Full DOM state replication across clients.</p>
                            </div>
                        </div>

                        {/* Footer Status */}
                        <div className="mt-auto">
                            <div className="font-mono text-[10px] text-zinc-600 border-t border-white/5 pt-4 flex justify-between">
                                <span>&gt; "Google Docs for Browsing"</span>
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Visual */}
                    <div className="lg:col-span-7 bg-[#030303] relative overflow-hidden flex items-center justify-center p-8 md:p-16 min-h-[500px]">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        {/* Browser Mockup */}
                        <div className="relative w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl aspect-[4/3] z-10 group">
                            {/* Browser Chrome */}
                            <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/5"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/5"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/5"></div>
                                </div>
                                <div className="ml-4 flex-1 max-w-md h-6 bg-black/50 rounded flex items-center px-3 text-[10px] text-zinc-600 font-mono border border-white/5">
                                    probe://spaces/shared-session-id
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-zinc-900 flex items-center justify-center text-[8px] font-bold text-white">YO</div>
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-2 border-zinc-900 flex items-center justify-center text-[8px] font-bold text-white">AL</div>
                                </div>
                            </div>

                            {/* Browser Content */}
                            <div className="p-8 font-mono text-sm text-zinc-400 relative h-full bg-[#050505]">
                                <div className="space-y-4 max-w-md mx-auto opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                                    <div className="h-4 w-3/4 bg-zinc-800 rounded"></div>
                                    <div className="h-32 bg-zinc-900/50 rounded border border-zinc-800 p-4 relative">
                                        <div className="absolute top-4 left-4 right-4 space-y-2">
                                            <div className="h-2 w-full bg-zinc-800 rounded"></div>
                                            <div className="h-2 w-5/6 bg-zinc-800 rounded"></div>
                                            <div className="h-2 w-4/6 bg-zinc-800 rounded"></div>

                                            {/* Highlight Effect */}
                                            <Highlight x={0} y={0} width={200} delay={2} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-20 bg-zinc-900/30 rounded border border-zinc-800"></div>
                                        <div className="h-20 bg-zinc-900/30 rounded border border-zinc-800"></div>
                                    </div>
                                </div>

                                {/* Animated Cursors */}
                                <Cursor
                                    color="#3B82F6"
                                    label="You"
                                    x={[50, 150, 150, 200, 50]}
                                    y={[100, 120, 200, 150, 100]}
                                    delay={0}
                                />
                                <Cursor
                                    color="#A855F7"
                                    label="Alex"
                                    x={[200, 100, 50, 150, 200]}
                                    y={[200, 150, 100, 120, 200]}
                                    delay={1}
                                />
                            </div>

                            {/* Connection Status Overlay */}
                            <div className="absolute bottom-4 right-4 px-3 py-1 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded flex items-center gap-3 text-[9px] text-zinc-400 font-mono uppercase tracking-wider shadow-lg">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
                                    <span>Connected</span>
                                </div>
                                <div className="h-3 w-px bg-zinc-700"></div>
                                <span>24ms</span>
                            </div>
                        </div>

                        {/* Decorative Corner Marks */}
                        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20"></div>
                        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
