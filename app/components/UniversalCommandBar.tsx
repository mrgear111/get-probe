"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CommandResult {
    action: string;
    value: string;
    explanation: string;
    confidence: number;
}

export default function UniversalCommandBar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<CommandResult | null>(null);
    const [error, setError] = useState<string | null>(null);

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

    // Process command with AI
    const processCommand = async (command: string) => {
        if (!command.trim()) return;

        setIsProcessing(true);
        setError(null);

        try {
            const response = await fetch('/api/command', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ command }),
            });

            if (!response.ok) {
                throw new Error('Failed to process command');
            }

            const data: CommandResult = await response.json();
            setResult(data);
        } catch (err) {
            setError('Failed to process command. Please try again.');
            console.error('Command processing error:', err);
        } finally {
            setIsProcessing(false);
        }
    };

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // Handle Enter key
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            processCommand(inputValue);
        } else if (e.key === 'Escape') {
            setInputValue("");
            setResult(null);
            setError(null);
        }
    };

    // Get action icon and label
    const getActionDisplay = (action: string) => {
        const displays: Record<string, { icon: string; label: string }> = {
            open_url: { icon: "🌐", label: "Open URL" },
            google_search: { icon: "🔍", label: "Google Search" },
            send_email: { icon: "📧", label: "Send Email" },
            search_tabs: { icon: "📑", label: "Search Tabs" },
            manage_extensions: { icon: "🧩", label: "Manage Extensions" },
            open_settings: { icon: "⚙️", label: "Open Settings" },
            summarize_content: { icon: "📝", label: "Summarize Content" },
            write_content: { icon: "✍️", label: "Write Content" },
            unknown: { icon: "❓", label: "Unknown Command" },
        };
        return displays[action] || displays.unknown;
    };

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
                                {isProcessing ? (
                                    <svg className="animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                ) : (
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                )}
                            </div>
                            <div className="h-6 w-px bg-white/10"></div>
                            <div className="flex-1 font-mono text-zinc-300 text-sm flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    placeholder={isProcessing ? "Processing..." : "Type a command or search..."}
                                    disabled={isProcessing}
                                    className="w-full bg-transparent outline-none placeholder:text-zinc-500 disabled:opacity-50"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-400">
                                    <span>ESC</span>
                                </kbd>
                            </div>
                        </div>

                        {/* Results Area */}
                        <div className="p-2 space-y-1 bg-[#0A0A0A]/95 backdrop-blur-xl min-h-[320px] text-left">
                            {error ? (
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">⚠️</span>
                                        <span className="text-red-400 text-sm">{error}</span>
                                    </div>
                                </div>
                            ) : result ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-3"
                                >
                                    {/* Main Result */}
                                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/20">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{getActionDisplay(result.action).icon}</span>
                                                <div>
                                                    <div className="text-white font-semibold text-sm">
                                                        {getActionDisplay(result.action).label}
                                                    </div>
                                                    <div className="text-zinc-400 text-xs mt-1 font-mono">
                                                        Action: {result.action}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <div className="text-xs text-zinc-500">Confidence</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-1.5 w-20 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${result.confidence * 100}%` }}
                                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                                            className={`h-full rounded-full ${result.confidence > 0.7 ? 'bg-green-500' :
                                                                result.confidence > 0.4 ? 'bg-yellow-500' : 'bg-red-500'
                                                                }`}
                                                        />
                                                    </div>
                                                    <span className="text-white text-sm font-mono">
                                                        {(result.confidence * 100).toFixed(0)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Explanation - Main Feature */}
                                        {result.explanation && (
                                            <div className="mt-3 pt-3 border-t border-white/10">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-purple-400 text-sm">💡</span>
                                                    <div className="flex-1">
                                                        <div className="text-xs text-zinc-500 mb-1">What will happen:</div>
                                                        <div className="text-zinc-200 text-sm leading-relaxed">
                                                            {result.explanation}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {result.value && (
                                            <div className="mt-3 pt-3 border-t border-white/10">
                                                <div className="text-xs text-zinc-500 mb-1">Value:</div>
                                                <div className="text-zinc-300 text-sm font-mono bg-black/30 p-2 rounded">
                                                    {result.value}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Suggestion to try another */}
                                    <div className="text-center text-zinc-600 text-xs">
                                        Press ESC to clear or type another command
                                    </div>
                                </motion.div>
                            ) : (
                                // Default suggestions when no result
                                [
                                    { icon: "🔍", text: "Try: 'search future of AI'", shortcut: "↵" },
                                    { icon: "🌐", text: "Try: 'open youtube'", shortcut: "" },
                                    { icon: "📧", text: "Try: 'email john about meeting'", shortcut: "" },
                                    { icon: "📑", text: "Try: 'find my tabs'", shortcut: "" },
                                    { icon: "✍️", text: "Try: 'write a blog post'", shortcut: "" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 cursor-pointer transition-all"
                                        onClick={() => {
                                            const command = item.text.replace("Try: '", "").replace("'", "");
                                            setInputValue(command);
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg w-6 text-center">{item.icon}</span>
                                            <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">
                                                {item.text}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            )}
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
