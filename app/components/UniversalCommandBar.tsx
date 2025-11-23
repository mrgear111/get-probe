"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UniversalCommandBar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax & Transition effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

    // Subtle Connecting Line
    const lineHeight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

    // Header animations
    const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center py-32">

            {/* Connecting Line from Previous Section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-white/5">
                <motion.div
                    style={{ height: lineHeight }}
                    className="w-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
                />
            </div>

            {/* Background Elements - Clean Grid Only */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">

                {/* Main Title - Matching "World's first AI-MEMORY browser" style */}
                <motion.div
                    style={{ opacity, y: useTransform(scrollYProgress, [0, 0.3], [50, 0]) }}
                    className="mb-16 relative"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                        Universal <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">COMMAND BAR</span>
                    </h2>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-zinc-800"></div>
                        <p className="text-zinc-400 text-lg md:text-xl font-light italic">
                            "Control your browser like a pro."
                        </p>
                        <div className="h-px w-12 bg-zinc-800"></div>
                    </div>
                </motion.div>

                {/* Visual Animation - Centered */}
                <motion.div
                    style={{ y, scale, opacity, rotateX: 10 }}
                    className="relative w-full max-w-2xl perspective-[1000px]"
                >
                    {/* Command Bar UI */}
                    <div className="relative bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transform-style-3d group hover:border-white/20 transition-colors duration-500">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 blur-xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Input Area */}
                        <div className="p-5 border-b border-white/5 flex items-center gap-4 bg-white/5 backdrop-blur-sm">
                            <div className="w-5 h-5 text-zinc-400">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="h-6 w-px bg-white/10"></div>
                            <div className="flex-1 font-mono text-zinc-300 text-sm flex items-center">
                                <span className="animate-pulse mr-1 text-purple-400">|</span>
                                <span className="opacity-50">Type a command or search...</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-400">
                                    <span>ESC</span>
                                </kbd>
                            </div>
                        </div>

                        {/* Results Area */}
                        <div className="p-2 space-y-1 bg-[#0A0A0A]/95 backdrop-blur-xl min-h-[320px] text-left">
                            {[
                                { icon: "🔍", text: "Search Google for 'Probe Browser'", shortcut: "↵", active: true },
                                { icon: "📧", text: "Compose new email", shortcut: "C", active: false },
                                { icon: "📑", text: "Search open tabs", shortcut: "T", active: false },
                                { icon: "🧩", text: "Manage extensions", shortcut: "E", active: false },
                                { icon: "⚙️", text: "Open Settings", shortcut: ",", active: false },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`flex items-center justify-between p-3 rounded-lg group/item cursor-pointer transition-all ${item.active
                                        ? 'bg-white/10 border border-white/10'
                                        : 'hover:bg-white/5 border border-transparent hover:border-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg w-6 text-center">{item.icon}</span>
                                        <span className={`text-sm font-medium ${item.active ? 'text-white' : 'text-zinc-400 group-hover/item:text-zinc-200'}`}>
                                            {item.text}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.active && (
                                            <span className="text-[10px] text-zinc-400 font-mono hidden group-hover/item:inline-block">Run Command</span>
                                        )}
                                        <kbd className={`font-mono text-xs px-2 py-1 rounded min-w-[24px] text-center ${item.active ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-500'
                                            }`}>
                                            {item.shortcut}
                                        </kbd>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-12 -top-12 w-24 h-24 bg-zinc-800/20 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center z-20"
                    >
                        <span className="text-4xl text-zinc-500">⌘</span>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -left-12 -bottom-12 w-20 h-20 bg-zinc-800/20 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center z-20"
                    >
                        <span className="text-3xl text-zinc-500">K</span>
                    </motion.div>
                </motion.div>

                {/* Description Footer */}
                <motion.div
                    style={{ opacity }}
                    className="mt-16 max-w-2xl text-center"
                >
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        One command palette to search tabs, trigger extensions, Google queries, send emails, open apps, or run shortcuts.
                        <br />
                        <span className="text-zinc-600 text-sm font-mono mt-4 block">&gt; Adaptive learning engine active.</span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
