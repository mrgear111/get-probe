"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- Visualizations ---

// 1. Local Memory Engine: "The Crystalline Vault"
const LocalMemoryVisual = () => (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
        <div className="relative w-64 h-64 flex items-center justify-center transform-style-3d animate-float">
            {/* Outer Glass Cube */}
            <motion.div
                className="w-40 h-40 border border-blue-400/30 bg-blue-500/5 backdrop-blur-sm rounded-2xl shadow-[0_0_60px_rgba(59,130,246,0.2)] flex items-center justify-center relative z-10"
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Inner Core */}
                <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-[0_0_40px_rgba(34,211,238,0.6)] flex items-center justify-center"
                    animate={{ rotateX: [360, 0], rotateY: [360, 0] }} // Counter-rotate
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <svg className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Data Particles Swirling In */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={`p-${i}`}
                    className="absolute w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(103,232,249,1)]"
                    initial={{ opacity: 0, x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, z: 200 }}
                    animate={{ opacity: [0, 1, 0], x: 0, y: 0, z: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                />
            ))}
        </div>
    </div>
);

// 2. Context-Aware Assistance: "Holographic Scan"
const ContextAwareVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden">
        {/* Scanning Laser */}
        <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)] z-30"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative w-full max-w-md aspect-video bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Holographic Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-20 pointer-events-none"></div>

            {/* Content Being Constructed */}
            <div className="absolute inset-0 p-6 flex flex-col gap-4 z-10">
                <div className="flex items-center gap-4 mb-4">
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-cyan-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                    />
                    <div className="space-y-2">
                        <motion.div
                            className="w-32 h-3 bg-cyan-500/20 rounded"
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 1.5 }}
                        />
                        <motion.div
                            className="w-20 h-3 bg-cyan-500/20 rounded"
                            initial={{ width: 0 }}
                            animate={{ width: "40%" }}
                            transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                        <motion.div
                            key={i}
                            className="w-full h-16 bg-zinc-900/30 border border-white/5 rounded-lg backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + (i * 0.2), repeat: Infinity, repeatDelay: 1.5 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// 3. Cross-Tab Intelligence: "Constellation"
const CrossTabVisual = () => (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Glowing Central Node */}
            <div className="absolute z-20 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.8)] animate-pulse"></div>

            {/* Orbiting Nodes */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i / 6) * Math.PI * 2;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={i}
                        className="absolute z-10"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x,
                            y,
                            opacity: 1,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    >
                        <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>

                        {/* Energy Beam */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] -z-10 pointer-events-none overflow-visible" style={{ mixBlendMode: 'screen' }}>
                            <motion.line
                                x1="50%" y1="50%"
                                x2={150 - x} y2={150 - y} // Pointing back to center (approx)
                                stroke="url(#beam-gradient)"
                                strokeWidth="1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            />
                            <defs>
                                <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                                    <stop offset="50%" stopColor="rgba(34,211,238,0.8)" />
                                    <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                );
            })}

            {/* Background Nebula Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>
    </div>
);

// 4. Smart History: "Time Vortex"
const SmartHistoryVisual = () => (
    <div className="w-full h-full flex items-center justify-center overflow-hidden perspective-[500px]">
        <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-48 h-32 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md flex flex-col p-3 shadow-xl"
                    initial={{ z: -800, opacity: 0, rotateZ: i * 30 }}
                    animate={{
                        z: [-800, 300],
                        opacity: [0, 1, 0],
                        rotateZ: [i * 30, i * 30 + 60] // Spiral motion
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "linear"
                    }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                        <div className="w-16 h-1.5 bg-white/10 rounded"></div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="w-full h-1.5 bg-white/5 rounded"></div>
                        <div className="w-2/3 h-1.5 bg-white/5 rounded"></div>
                    </div>
                </motion.div>
            ))}
            {/* Vortex Center Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]"></div>
        </div>
    </div>
);

// 5. Smart Collections: "Gravity Well"
const SmartCollectionsVisual = () => (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        {/* The Black Hole / Folder */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] z-20 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]"></div>
        </motion.div>

        {/* Accretion Disk (Folder Outline) */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-white/10 rounded-full z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Tabs getting sucked in */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-8 bg-zinc-800/80 border border-white/20 rounded backdrop-blur-sm z-0"
                initial={{
                    x: Math.cos(i) * 200,
                    y: Math.sin(i) * 200,
                    opacity: 0,
                    scale: 1,
                    rotate: Math.random() * 360
                }}
                animate={{
                    x: 0,
                    y: 0,
                    opacity: [0, 1, 0],
                    scale: 0,
                    rotate: Math.random() * 360 + 720
                }}
                transition={{
                    duration: 2,
                    delay: i * 0.3,
                    ease: "easeIn",
                    repeat: Infinity
                }}
            />
        ))}
    </div>
);

// 6. Ask Probe: "The AI Core"
const AskProbeVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-8 perspective-[1000px]">
        <div className="relative flex flex-col items-center">
            {/* The Core Orb */}
            <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_60px_rgba(168,85,247,0.6)] relative z-20 mb-8"
                animate={{
                    scale: [1, 1.05, 1],
                    filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
            </motion.div>

            {/* Voice Waves */}
            <div className="flex items-center gap-1 h-8 mb-8">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-white/80 rounded-full shadow-[0_0_10px_white]"
                        animate={{ height: [10, 30, 10] }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Holographic Result */}
            <motion.div
                className="w-64 bg-black/80 border border-white/10 p-4 rounded-xl backdrop-blur-xl shadow-2xl transform-style-3d rotate-x-12"
                initial={{ opacity: 0, y: 20, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
                <div className="text-xs text-purple-300 mb-1 font-bold tracking-wider">AI ANALYSIS COMPLETE</div>
                <div className="text-sm text-white leading-relaxed">"Here are the top 3 articles about Rust performance optimization..."</div>
            </motion.div>
        </div>
    </div>
);

// --- Main Component ---

const features = [
    {
        title: "Local Memory Engine",
        description: "Probe stores your browsing context locally — not just URLs, but intent and state: what you were reading, debugging, or researching. Everything is saved securely on your device.",
        visual: LocalMemoryVisual
    },
    {
        title: "Context-Aware Assistance",
        description: "When you return to a site or project, Probe recalls your last actions: 'You were testing this API endpoint yesterday.' or 'You stopped reading here last time.'",
        visual: ContextAwareVisual
    },
    {
        title: "Cross-Tab Intelligence",
        description: "Probe links your activities across tabs. If you're debugging a frontend issue, Probe can automatically surface related documentation or your own previous notes.",
        visual: CrossTabVisual
    },
    {
        title: "Smart History & Recall",
        description: "Forget the endless scroll of Chrome history. Probe turns it into a timeline of moments — searchable, summarized, and easy to reopen.",
        visual: SmartHistoryVisual
    },
    {
        title: "Smart Collections",
        description: "Probe automatically groups your tabs and resources into AI-generated 'collections' — for example: React Project, Portfolio Research, ML Debugging.",
        visual: SmartCollectionsVisual
    },
    {
        title: "Ask Probe (AI Search)",
        description: "Ask Probe in natural language: 'Show me the last 5 things I researched about TypeScript.' or 'Find that article where I read about WebAssembly performance.'",
        visual: AskProbeVisual
    }
];

const FeatureSection = ({ feature, index, setFocusedIndex }: { feature: any, index: number, setFocusedIndex: (i: number) => void }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        if (isInView) {
            setFocusedIndex(index);
        }
    }, [isInView, index, setFocusedIndex]);

    return (
        <div ref={ref} className="h-[400px] flex items-center py-10">
            <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 font-mono text-sm border border-white/5 shadow-inner">
                        {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

export default function MemoryWebShowcase() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    return (
        <section className="bg-[#050505] py-32 flex justify-center relative">

            {/* Atmosphere: Nebula Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl w-full px-6 relative z-10">

                {/* Header */}
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        Introducing the <span className="text-zinc-500">MEMORY WEB</span>
                    </h2>
                    <p className="text-sm text-zinc-500 font-mono tracking-wide">
                        Used by 10k+ developers daily.
                    </p>
                </div>

                {/* Main Container Box */}
                <div className="border border-white/10 bg-zinc-900/40 backdrop-blur-xl rounded-3xl flex flex-col md:flex-row relative shadow-2xl group">

                    {/* Moving Spotlight Border Effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.1)_0%,transparent_50%)] rounded-3xl"></div>

                    {/* Left: Scrolling Text */}
                    <div className="w-full md:w-1/2 p-12 border-r border-white/5 md:rounded-l-3xl relative z-10">
                        <div className="flex flex-col">
                            {features.map((feature, index) => (
                                <FeatureSection
                                    key={index}
                                    feature={feature}
                                    index={index}
                                    setFocusedIndex={setFocusedIndex}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Sticky Visual */}
                    <div className="hidden md:block w-1/2 relative bg-black/20 md:rounded-r-3xl">
                        {/* Inner Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                        <div className="sticky top-24 h-[600px] flex items-center justify-center p-12">
                            <div className="w-full aspect-square rounded-2xl relative">

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={focusedIndex}
                                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        {React.createElement(features[focusedIndex].visual)}
                                    </motion.div>
                                </AnimatePresence>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
