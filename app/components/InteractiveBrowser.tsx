"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
type Tab = {
    id: string;
    title: string;
    icon: React.ReactNode;
    type: "dashboard" | "page";
    url?: string;
};

type Collection = {
    id: string;
    name: string;
    color: string;
    items: string[];
};

export default function InteractiveBrowser() {
    const [activeTab, setActiveTab] = useState<string>("dashboard");
    const [isCommandBarOpen, setIsCommandBarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const commandBarRef = useRef<HTMLDivElement>(null);

    // Mock Data
    const collections: Collection[] = [
        { id: "c1", name: "React Project", color: "bg-blue-500", items: ["localhost:3000", "Tailwind Docs", "Framer Motion"] },
        { id: "c2", name: "Portfolio Research", color: "bg-purple-500", items: ["Dribbble", "Awwwards", "Linear"] },
        { id: "c3", name: "ML Debugging", color: "bg-green-500", items: ["Hugging Face", "PyTorch Docs"] },
    ];

    const recentActivity = [
        { id: "1", title: "Testing API Endpoint", time: "Yesterday", type: "debug", desc: "POST /api/v1/users failed with 500" },
        { id: "2", title: "WebAssembly Performance", time: "2 days ago", type: "research", desc: "Article: Optimizing Rust for Web" },
        { id: "3", title: "Dashboard Layout", time: "3 days ago", type: "design", desc: "Figma File: Main Dashboard v2" },
    ];

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsCommandBarOpen((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Click outside to close command bar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isCommandBarOpen && commandBarRef.current && !commandBarRef.current.contains(event.target as Node)) {
                setIsCommandBarOpen(false);
            }
        };

        if (isCommandBarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCommandBarOpen]);

    return (
        <div className="w-full h-full bg-[#0A0A0A] flex flex-col overflow-hidden relative font-sans text-zinc-300 selection:bg-blue-500/30">
            {/* --- Toolbar --- */}
            <div className="h-12 bg-zinc-800/50 border-b border-white/5 flex items-center px-4 gap-4 shrink-0">
                {/* Window Controls */}
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/10"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/10"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/10"></div>
                </div>

                {/* Navigation Controls */}
                <div className="flex gap-2 text-zinc-600">
                    <button className="hover:text-zinc-300 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                    <button className="hover:text-zinc-300 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                    <button className="hover:text-zinc-300 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
                </div>

                {/* Address Bar */}
                <div className="flex-1 flex justify-center">
                    <div
                        className="bg-zinc-800/50 hover:bg-zinc-800 px-4 py-1.5 rounded-md text-xs text-zinc-400 w-full max-w-md text-center flex items-center justify-center gap-2 cursor-text border border-transparent hover:border-zinc-700 transition-colors"
                        onClick={() => setIsCommandBarOpen(true)}
                    >
                        <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        {activeTab === "dashboard" ? "probe://memory" : "localhost:3000"}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex gap-3 items-center">
                    <button
                        className={`p-1.5 rounded hover:bg-zinc-800 transition-colors ${sidebarOpen ? 'text-blue-400 bg-blue-500/10' : 'text-zinc-500'}`}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">DS</div>
                </div>
            </div>

            {/* --- Main Content Area --- */}
            <div className="flex-1 flex overflow-hidden">

                {/* Sidebar */}
                <AnimatePresence initial={false}>
                    {sidebarOpen && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 220, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="bg-[#0A0A0A] border-r border-white/5 flex flex-col"
                        >
                            <div className="p-4">
                                <div className="text-xs font-bold text-zinc-600 uppercase tracking-wider mb-4">Collections</div>
                                <div className="space-y-1">
                                    {collections.map(col => (
                                        <div key={col.id} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                                            <div className={`w-2 h-2 rounded-full ${col.color}`}></div>
                                            {col.name}
                                        </div>
                                    ))}
                                </div>

                                <div className="text-xs font-bold text-zinc-600 uppercase tracking-wider mt-8 mb-4">Spaces</div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                                        <span className="text-lg leading-none">👥</span> Team Engineering
                                    </div>
                                    <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                                        <span className="text-lg leading-none">🎨</span> Design Huddle
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Page Content */}
                <div className="flex-1 bg-[#0A0A0A] relative overflow-y-auto custom-scrollbar">
                    {activeTab === "dashboard" ? (
                        <div className="p-8 md:p-12 max-w-4xl mx-auto">
                            {/* Welcome Header */}
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Good morning, Daksh.</h2>
                                <p className="text-zinc-500 text-lg">Here's where you left off.</p>
                            </div>

                            {/* Resume Section */}
                            <div className="mb-12">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Resume Activity</h3>
                                    <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">View Timeline</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {recentActivity.map(item => (
                                        <div key={item.id} className="bg-zinc-900/30 border border-white/5 p-5 rounded-2xl hover:border-white/10 hover:bg-zinc-900/50 transition-all cursor-pointer">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className={`p-2 rounded-lg ${item.type === 'debug' ? 'bg-red-500/10 text-red-400' : item.type === 'research' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                                                    {item.type === 'debug' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
                                                    {item.type === 'research' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                                                    {item.type === 'design' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
                                                </div>
                                                <span className="text-[10px] text-zinc-600">{item.time}</span>
                                            </div>
                                            <h4 className="text-sm font-semibold text-zinc-200 mb-1">{item.title}</h4>
                                            <p className="text-xs text-zinc-500 line-clamp-2">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Suggestion */}
                            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-4 flex items-start gap-4">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-blue-200 mb-1">Probe AI Insight</h4>
                                    <p className="text-xs text-blue-300/80 leading-relaxed">
                                        I noticed you were debugging a 500 error on the API. I found a similar issue in the <code>backend-service</code> repo from 2 weeks ago. Want me to open that context?
                                    </p>
                                    <div className="mt-3 flex gap-2">
                                        <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded font-medium transition-colors">Open Context</button>
                                        <button className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs rounded font-medium transition-colors">Dismiss</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-600">
                            Page Content Placeholder
                        </div>
                    )}
                </div>
            </div>

            {/* --- Command Bar Overlay --- */}
            <AnimatePresence>
                {isCommandBarOpen && (
                    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32">
                        <motion.div
                            ref={commandBarRef}
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center px-4 py-3 border-b border-zinc-800 gap-3">
                                <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Type a command or search..."
                                    className="bg-transparent border-none outline-none text-white placeholder-zinc-600 flex-1 text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Escape") setIsCommandBarOpen(false);
                                    }}
                                />
                                <div className="flex gap-1">
                                    <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500 font-mono">ESC</span>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="text-[10px] font-bold text-zinc-600 px-2 py-1 uppercase tracking-wider">Suggestions</div>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between px-2 py-2 rounded hover:bg-blue-600/20 hover:text-blue-200 text-zinc-400 cursor-pointer transition-colors">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                            <span className="text-sm">Create new Workspace</span>
                                        </div>
                                        <span className="text-[10px] text-zinc-600">Workspace</span>
                                    </div>
                                    <div className="flex items-center justify-between px-2 py-2 rounded hover:bg-blue-600/20 hover:text-blue-200 text-zinc-400 cursor-pointer transition-colors">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm">Search History for "React"</span>
                                        </div>
                                        <span className="text-[10px] text-zinc-600">History</span>
                                    </div>
                                    <div className="flex items-center justify-between px-2 py-2 rounded hover:bg-blue-600/20 hover:text-blue-200 text-zinc-400 cursor-pointer transition-colors">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="text-sm">Share Session with Team</span>
                                        </div>
                                        <span className="text-[10px] text-zinc-600">Spaces</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-zinc-950 px-4 py-2 border-t border-zinc-800 flex justify-between items-center">
                                <div className="text-[10px] text-zinc-600">
                                    <span className="font-bold text-zinc-500">PRO TIP</span> Type <span className="bg-zinc-800 px-1 rounded text-zinc-400">/</span> for commands
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[10px] text-zinc-600">Navigate</span>
                                    <span className="text-[10px] text-zinc-600">Select</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
