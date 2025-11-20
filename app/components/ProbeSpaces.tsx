"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

// --- Assets ---

const Cursor = ({ color, label, x, y, delay = 0 }: { color: string, label: string, x: number[], y: number[], delay?: number }) => (
    <motion.div
        className="absolute z-50 pointer-events-none"
        initial={{ x: x[0], y: y[0], opacity: 0 }}
        animate={{ x, y, opacity: 1 }}
        transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay
        }}
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill={color} stroke="white" strokeWidth="1" />
        </svg>
        <div className="absolute left-4 top-4 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-lg whitespace-nowrap border border-white/10 backdrop-blur-md" style={{ backgroundColor: color }}>
            {label}
        </div>
    </motion.div>
);

export default function ProbeSpaces() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section className="bg-[#050505] py-32 flex justify-center relative overflow-hidden" onMouseMove={handleMouseMove}>

            {/* Atmosphere: Dynamic Spotlight Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-900/5 rounded-full blur-[120px] opacity-30"></div>
                <motion.div
                    className="absolute bg-blue-500/10 rounded-full blur-[100px] w-[600px] h-[600px] opacity-20"
                    style={{
                        left: mouseX,
                        top: mouseY,
                        translateX: "-50%",
                        translateY: "-50%"
                    }}
                />
            </div>

            <div className="max-w-7xl w-full px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Visual (The Multiplayer Browser) */}
                    <div className="relative perspective-[2000px] group order-2 lg:order-1">

                        {/* 3D Tilted Browser Window */}
                        <motion.div
                            className="relative bg-[#0A0A0A]/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden transform-style-3d backdrop-blur-xl"
                            initial={{ rotateY: 10, rotateX: 5 }}
                            whileHover={{ rotateY: 5, rotateX: 2, scale: 1.01 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Spotlight Overlay on Border */}
                            <motion.div
                                className="absolute inset-0 rounded-xl opacity-50 pointer-events-none z-50"
                                style={{
                                    background: useMotionTemplate`
                                        radial-gradient(
                                            600px circle at ${mouseX}px ${mouseY}px,
                                            rgba(255,255,255,0.06),
                                            transparent 40%
                                        )
                                    `
                                }}
                            />

                            {/* Browser Toolbar (Premium) */}
                            <div className="h-10 bg-zinc-900/50 border-b border-white/5 flex items-center px-3 gap-3 backdrop-blur-md relative z-20">
                                <div className="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                                </div>

                                {/* URL Bar */}
                                <div className="flex-1 max-w-md mx-auto h-6 bg-black/40 rounded border border-white/5 flex items-center px-2 text-[10px] text-zinc-400 font-mono group-hover:border-white/10 transition-colors shadow-inner">
                                    <span className="text-zinc-600 mr-1.5">🔒</span>
                                    <span className="text-zinc-500">probe.new/</span>
                                    <span className="text-white">space/design-review</span>
                                </div>

                                {/* Avatars */}
                                <div className="flex -space-x-1.5">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-6 h-6 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-[8px] font-bold text-white relative z-${10 - i} shadow-lg`} style={{ backgroundColor: i === 1 ? '#3B82F6' : i === 2 ? '#EC4899' : '#10B981' }}>
                                            {i === 1 ? 'YO' : i === 2 ? 'SA' : 'DE'}
                                            {i === 2 && <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Browser Content: Collaborative Web App */}
                            <div className="h-[400px] bg-[#09090B] relative flex">

                                {/* App Sidebar (Navigation) */}
                                <div className="w-12 border-r border-white/5 bg-zinc-900/50 flex flex-col items-center py-4 gap-4">
                                    <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/20">P</div>
                                    <div className="flex flex-col gap-3 w-full items-center">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded hover:bg-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors cursor-pointer">
                                                <div className="w-3 h-3 bg-current rounded-sm opacity-50"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main App Area */}
                                <div className="flex-1 p-6 relative overflow-hidden">

                                    {/* App Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h1 className="text-lg font-bold text-white mb-0.5">Q4 Launch Plan</h1>
                                            <p className="text-zinc-500 text-[10px]">Marketing • Updated just now</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="px-2 py-1 rounded bg-blue-600 text-[10px] text-white font-medium shadow-[0_0_10px_rgba(37,99,235,0.3)]">Deploy</div>
                                        </div>
                                    </div>

                                    {/* Dashboard Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {/* Stat Card 1 */}
                                        <div className="p-3 rounded-lg bg-zinc-900/30 border border-white/5 relative group/card hover:border-white/10 transition-colors">
                                            <div className="text-zinc-500 text-[10px] font-medium mb-1">Total Visitors</div>
                                            <div className="text-xl font-bold text-white mb-0.5">124k</div>
                                            <div className="text-green-400 text-[10px] flex items-center gap-1">
                                                +12.5%
                                            </div>

                                            {/* Sarah's Interaction */}
                                            <motion.div
                                                className="absolute inset-0 border border-pink-500/50 rounded-lg"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 1, 1, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                            />
                                            <motion.div
                                                className="absolute -right-4 -top-4 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1.5 rounded shadow-xl flex flex-col gap-0.5 z-50"
                                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [10, 0, 0, 10] }}
                                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                            >
                                                <div className="flex items-center gap-1 border-b border-white/5 pb-0.5 mb-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-pink-500 flex items-center justify-center text-[6px] font-bold">S</div>
                                                    <span className="font-bold text-zinc-300 text-[8px]">Sarah</span>
                                                </div>
                                                <span className="text-zinc-400 text-[8px]">"Great numbers!"</span>
                                            </motion.div>
                                        </div>

                                        {/* Stat Card 2 */}
                                        <div className="p-3 rounded-lg bg-zinc-900/30 border border-white/5">
                                            <div className="text-zinc-500 text-[10px] font-medium mb-1">Bounce Rate</div>
                                            <div className="text-xl font-bold text-white mb-0.5">42%</div>
                                            <div className="text-green-400 text-[10px]">-2.1%</div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full h-32 rounded-lg bg-zinc-900/20 border border-white/5 p-4 relative">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-xs font-bold text-zinc-300">Deployments</div>
                                        </div>
                                        <div className="space-y-2">
                                            {[1, 2].map(i => (
                                                <div key={i} className="flex items-center justify-between p-1.5 hover:bg-white/5 rounded transition-colors cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
                                                        <div className="text-[10px] text-zinc-400">
                                                            {i === 1 ? 'Building...' : 'Deployed'}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* DevTools Overlay (Slide Up) */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 bg-[#0F0F0F] border-t border-white/10 shadow-2xl z-40"
                                        initial={{ height: 0 }}
                                        animate={{ height: 100 }}
                                        transition={{ duration: 0.8, delay: 1, ease: "circOut" }}
                                    >
                                        <div className="flex h-6 bg-zinc-900/50 border-b border-white/5 px-2 items-center gap-1">
                                            {['Network', 'Console'].map((tab, i) => (
                                                <div key={tab} className={`px-2 py-0.5 text-[10px] cursor-pointer ${i === 0 ? 'text-white border-b border-blue-500' : 'text-zinc-500'}`}>
                                                    {tab}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-2 font-mono text-[9px] space-y-0.5 overflow-y-auto h-[calc(100%-24px)]">
                                            <motion.div
                                                className="flex gap-4 text-zinc-400 px-1"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                            >
                                                <span className="text-green-400">200</span>
                                                <span className="text-white">/api/analytics</span>
                                                <span className="ml-auto">45ms</span>
                                            </motion.div>
                                            <motion.div
                                                className="flex gap-4 text-zinc-400 px-1"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 3.5 }}
                                            >
                                                <span className="text-yellow-400">101</span>
                                                <span className="text-white">wss://sync</span>
                                                <span className="ml-auto">Pending</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                </div>

                                {/* Animated Cursors */}
                                <Cursor
                                    color="#EC4899"
                                    label="Sarah"
                                    x={[100, 140, 120]}
                                    y={[100, 80, 90]}
                                    delay={0}
                                />
                                <Cursor
                                    color="#10B981"
                                    label="Dev"
                                    x={[300, 320, 310]}
                                    y={[200, 180, 210]}
                                    delay={1.5}
                                />

                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="order-1 lg:order-2 text-left pl-0 lg:pl-12">
                        <div className="mb-8 inline-flex items-center justify-center px-3 py-1 border border-orange-500/30 bg-orange-500/10 text-orange-400 font-mono text-xs tracking-widest uppercase rounded">
                            [ PROBE_SPACES ]
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05]">
                            Browsing is <br /> better together.
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-md mb-10">
                            Turn any tab into a multiplayer room. Debug, research, and build with your team in real-time.
                        </p>

                        <div className="flex flex-col gap-5">
                            {[
                                "Shared Context & History",
                                "Real-time Cursor Presence",
                                "Instant Session Handover"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-zinc-300">
                                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400">
                                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
