"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openModal } = useModal();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md font-mono">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 mr-8 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-pink-500/30 blur-xl opacity-60 rounded-full"></div>
                        <Image
                            src="/probe.png"
                            alt="Probe Logo"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain relative z-10"
                            unoptimized
                        />
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight">Probe</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 mr-auto">
                    <Link href="/#memory-web" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wide" suppressHydrationWarning>Memory Web</Link>
                    {/* <Link href="/#probe-spaces" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wide" suppressHydrationWarning>Probe Spaces</Link> */}
                    <Link href="/#probe-for-developers" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wide" suppressHydrationWarning>Console</Link>
                    {/* <Link href="/documentation" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">DOCUMENTATION</Link> */}
                    <Link href="/architects" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">ARCHITECTS</Link>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Stats Badges */}
                    <div className="flex items-center gap-3 mr-4">

                        <a href="https://x.com/souravbhagat_4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs font-medium text-zinc-400 hover:text-white hover:border-zinc-700 transition-all" suppressHydrationWarning>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/probebrowser" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs font-medium text-zinc-400 hover:text-white hover:border-zinc-700 transition-all" suppressHydrationWarning>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            Follow
                        </a>
                    </div>

                    <button
                        onClick={openModal}
                        className="px-5 py-2 bg-white text-black text-xs font-bold rounded hover:bg-zinc-200 transition-colors uppercase tracking-wide"
                    >
                        Early Access
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
                        className="fixed inset-0 z-50 bg-[#050505] flex flex-col p-6 font-mono"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-pink-500/30 blur-xl opacity-60 rounded-full"></div>
                                    <Image
                                        src="/probe.png"
                                        alt="Probe Logo"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain relative z-10"
                                        unoptimized
                                    />
                                </div>
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
                            <Link href="/#memory-web" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white uppercase">Memory Web</Link>
                            <Link href="/#probe-spaces" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white uppercase">Probe Spaces</Link>
                            <Link href="/#probe-for-developers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white uppercase">Console</Link>
                            {/* <Link href="/documentation" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">DOCUMENTATION</Link> */}
                            <Link href="/architects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white uppercase">Architects</Link>
                        </div>
                        <div className="mt-auto">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    openModal();
                                }}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors uppercase tracking-wide"
                            >
                                Register for Early Access
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
