"use client";

import React from "react";

export default function DownloadCTA() {
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
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.06.05-2.31.71-3.06 1.58-.69.8-1.27 2.09-1.1 3.07 1.17.09 2.36-.73 3.08-1.54z" /></svg>
                        Download for macOS
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-lg font-bold text-lg hover:bg-zinc-800 transition-all hover:border-zinc-700 flex items-center justify-center gap-2">
                        <span>Download for Windows</span>
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
