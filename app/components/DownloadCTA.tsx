"use client";

import React from "react";
import { useModal } from "../context/ModalContext";

export default function DownloadCTA() {
    const { openModal } = useModal();

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-black border-t border-zinc-900">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Ready to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">future?</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Join thousands of developers who have switched to Probe for a faster, smarter, and more productive workflow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <button
                        onClick={openModal}
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                        Register for Early Access
                    </button>
                    <button
                        onClick={openModal}
                        className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-lg font-bold text-lg hover:bg-zinc-800 transition-all hover:border-zinc-700 flex items-center justify-center gap-2"
                    >
                        <span>Join Waitlist</span>
                    </button>
                </div>

                <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <span className="font-semibold text-zinc-300">Probe</span>
                        <span>© 2024</span>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Features</a>
                        <a href="#" className="hover:text-white transition-colors">Changelog</a>
                        <a href="#" className="hover:text-white transition-colors">Docs</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
