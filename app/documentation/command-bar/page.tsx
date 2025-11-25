import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Command, Search, Zap, Mail, Music, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Universal Command Bar | Probe Documentation",
    description: "Control your browser like a pro with Command+K. Search tabs, trigger extensions, and run shortcuts from one interface.",
};

export default function CommandBarPage() {
    const toc = [
        { id: "overview", label: "Overview" },
        { id: "capabilities", label: "Capabilities" }
    ];

    return (
        <DocsLayout tableOfContents={toc}>
            <div className="max-w-4xl relative">
                <div className="mb-4">
                    <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Core Concepts</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Universal Command Bar</h1>

                <div id="overview" className="prose prose-invert max-w-none mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                        <kbd className="px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-sm font-mono text-zinc-300 shadow-lg">⌘</kbd>
                        <span className="text-zinc-500">+</span>
                        <kbd className="px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-sm font-mono text-zinc-300 shadow-lg">K</kbd>
                    </div>
                    <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                        "Control your browser like a pro."
                    </p>
                    <p className="text-zinc-400">
                        One command palette to search tabs, trigger extensions, Google queries, send emails, open apps, or run shortcuts — all in one interface.
                    </p>
                </div>

                {/* Visual Mockup: Command Palette */}
                <div className="mb-16 relative py-12 px-4 bg-zinc-900/20 border border-zinc-800/50 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                    <div className="relative max-w-lg mx-auto bg-[#1a1a1a] border border-zinc-700/50 rounded-xl shadow-2xl overflow-hidden">
                        {/* Search Input */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
                            <Search className="w-5 h-5 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Type a command or search..."
                                className="bg-transparent border-none outline-none text-zinc-200 placeholder:text-zinc-600 w-full text-sm"
                                readOnly
                                value="Open"
                            />
                            <div className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500 font-mono">ESC</div>
                        </div>

                        {/* Results List */}
                        <div className="p-2 space-y-1">
                            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-4 h-4 text-purple-400" />
                                    <span className="text-zinc-200 text-sm">Open <strong>Twitter</strong></span>
                                </div>
                                <span className="text-xs text-zinc-500">Tab</span>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-zinc-400" />
                                    <span className="text-zinc-300 text-sm">Open <strong>Gmail</strong></span>
                                </div>
                                <span className="text-xs text-zinc-600">App</span>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <Music className="w-4 h-4 text-zinc-400" />
                                    <span className="text-zinc-300 text-sm">Play <strong>Spotify</strong></span>
                                </div>
                                <span className="text-xs text-zinc-600">Action</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-zinc-900/50 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
                            <div className="flex gap-3">
                                <span>Select ↵</span>
                                <span>Navigate ↑↓</span>
                            </div>
                            <span>Probe Command</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <h2 id="capabilities" className="text-2xl font-bold text-white mb-8 scroll-mt-24">Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors group">
                            <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">Search Everything</h3>
                            <p className="text-sm text-zinc-500">Tabs, history, bookmarks, and open apps.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors group">
                            <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">Trigger Actions</h3>
                            <p className="text-sm text-zinc-500">Run extensions, send emails, or control media.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors group">
                            <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">Smart Suggestions</h3>
                            <p className="text-sm text-zinc-500">It learns your patterns and suggests next actions.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors group">
                            <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">Total Control</h3>
                            <p className="text-sm text-zinc-500">Navigate and manage your workspace without a mouse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
