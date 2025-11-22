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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">SPACES</span>
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
                    <div className="lg:col-span-7 bg-[#030303] relative overflow-hidden flex items-center justify-center p-8 md:p-16 min-h-[600px] perspective-[2000px]">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-transparent to-transparent opacity-50"></div>

                        {/* 3D Container */}
                        <motion.div
                            className="relative w-full max-w-lg aspect-[4/3] preserve-3d"
                            initial={{ rotateX: 20, rotateY: -15, rotateZ: 5 }}
                            animate={{
                                rotateX: [20, 25, 20],
                                rotateY: [-15, -20, -15],
                                y: [0, -20, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Layer 1: Back Glow/Shadow */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 transform translate-z-[-50px]"></div>

                            {/* Layer 2: Browser Window Base */}
                            <div className="absolute inset-0 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform translate-z-[0px]">
                                {/* Browser Chrome */}
                                <div className="h-10 bg-zinc-900/90 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
                                    </div>
                                    <div className="ml-4 flex-1 max-w-md h-6 bg-black/50 rounded flex items-center px-3 text-[10px] text-zinc-600 font-mono border border-white/5">
                                        probe://spaces/multiplayer-demo
                                    </div>
                                </div>
                                {/* Code Editor Background */}
                                <div className="p-6 font-mono text-xs text-zinc-500 space-y-1 opacity-30">
                                    <div className="flex gap-4"><span className="text-zinc-700">01</span> <span>import React from 'react';</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">02</span> <span>import &#123; motion &#125; from 'framer-motion';</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">03</span> <span></span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">04</span> <span>export default function Space() &#123;</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">05</span> <span className="pl-4">return (</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">06</span> <span className="pl-8">&lt;div className="space-container"&gt;</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">07</span> <span className="pl-12">&lt;h1&gt;Hello World&lt;/h1&gt;</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">08</span> <span className="pl-8">&lt;/div&gt;</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">09</span> <span className="pl-4">);</span></div>
                                    <div className="flex gap-4"><span className="text-zinc-700">10</span> <span>&#125;</span></div>
                                </div>
                            </div>

                            {/* Layer 3: Active UI Elements (Floating) */}
                            <div className="absolute inset-0 transform translate-z-[40px] pointer-events-none">
                                {/* Floating Card 1 */}
                                <motion.div
                                    className="absolute top-20 left-10 w-48 h-32 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-xl"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="w-8 h-8 bg-blue-500/20 rounded mb-3 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                                    </div>
                                    <div className="h-2 w-24 bg-zinc-700 rounded mb-2"></div>
                                    <div className="h-2 w-16 bg-zinc-800 rounded"></div>
                                </motion.div>

                                {/* Floating Card 2 */}
                                <motion.div
                                    className="absolute bottom-20 right-10 w-40 h-40 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-xl"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="w-full h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded mb-3 border border-white/5"></div>
                                    <div className="flex gap-2">
                                        <div className="w-6 h-6 rounded-full bg-zinc-800"></div>
                                        <div className="space-y-1">
                                            <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                            <div className="h-1.5 w-8 bg-zinc-800 rounded"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Layer 4: Multiplayer Cursors (Highest Z) */}
                            <div className="absolute inset-0 transform translate-z-[80px] pointer-events-none">
                                {/* Cursor 1: You (Blue) */}
                                <motion.div
                                    className="absolute"
                                    animate={{
                                        x: [100, 200, 150, 100],
                                        y: [150, 100, 200, 150]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg className="w-4 h-4 text-blue-500 fill-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" viewBox="0 0 24 24"><path d="M0 0L10 24L14 14L24 10L0 0Z" /></svg>
                                    <div className="ml-3 px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap">You</div>
                                </motion.div>

                                {/* Cursor 2: Alex (Purple) */}
                                <motion.div
                                    className="absolute"
                                    animate={{
                                        x: [300, 250, 350, 300],
                                        y: [250, 300, 200, 250]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <svg className="w-4 h-4 text-purple-500 fill-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" viewBox="0 0 24 24"><path d="M0 0L10 24L14 14L24 10L0 0Z" /></svg>
                                    <div className="ml-3 px-2 py-0.5 bg-purple-500 text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap">Alex</div>
                                </motion.div>

                                {/* Cursor 3: Sarah (Pink) */}
                                <motion.div
                                    className="absolute"
                                    animate={{
                                        x: [150, 100, 200, 150],
                                        y: [300, 350, 300, 300]
                                    }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                >
                                    <svg className="w-4 h-4 text-pink-500 fill-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" viewBox="0 0 24 24"><path d="M0 0L10 24L14 14L24 10L0 0Z" /></svg>
                                    <div className="ml-3 px-2 py-0.5 bg-pink-500 text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap">Sarah</div>
                                </motion.div>
                            </div>
                        </motion.div>

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
