"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        P
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight">Probe</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
                    <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Blog</Link>
                    <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Changelog</Link>
                    <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Templates</Link>
                    <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Docs</Link>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 border-r border-white/10 pr-4">
                        <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            12.4k
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            4.2k
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors">
                        Download
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-50 bg-[#050505] flex flex-col p-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                                <span className="text-white font-bold text-lg">Probe</span>
                            </div>
                            <button
                                className="text-zinc-400 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-lg font-medium text-zinc-400">
                            <Link href="#" className="hover:text-white">Pricing</Link>
                            <Link href="#" className="hover:text-white">Blog</Link>
                            <Link href="#" className="hover:text-white">Changelog</Link>
                            <Link href="#" className="hover:text-white">Templates</Link>
                            <Link href="#" className="hover:text-white">Docs</Link>
                        </div>
                        <div className="mt-auto">
                            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                                Download Probe
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
