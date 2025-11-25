import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Users, MousePointer2, Share2, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Probe Spaces | Probe Documentation",
    description: "Collaborate in real-time with Probe Spaces. Share tabs, scroll together, and debug like multiplayer browsing.",
};

export default function ProbeSpacesPage() {
    const toc = [
        { id: "overview", label: "Overview" },
        { id: "features", label: "Features" }
    ];

    return (
        <DocsLayout tableOfContents={toc}>
            <div className="max-w-4xl relative">
                <div className="mb-4">
                    <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Core Concepts</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Probe Spaces</h1>

                <div id="overview" className="prose prose-invert max-w-none mb-12 scroll-mt-24">
                    <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                        Collaborate in real-time — like multiplayer browsing.
                    </p>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                        <p className="text-lg text-zinc-200 italic">"Google Docs, but for browsing."</p>
                    </div>
                </div>

                {/* Visual Mockup: Multiplayer Browser */}
                <div className="mb-16 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                    <div className="relative bg-[#0A0A0A] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                        {/* Browser Chrome */}
                        <div className="bg-zinc-900/80 border-b border-zinc-800 p-3 flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="flex-1 bg-black/50 rounded-md h-6 flex items-center px-3 text-xs text-zinc-500 font-mono">
                                probe://space/dev-sync-01
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-zinc-900">DA</div>
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-zinc-900">JD</div>
                            </div>
                        </div>

                        {/* Browser Content */}
                        <div className="p-8 h-64 relative bg-zinc-950/50 grid place-items-center">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mb-2">
                                    <Globe className="w-8 h-8 text-zinc-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-700">Shared Viewport</h3>
                                <p className="text-zinc-600 max-w-sm mx-auto">Both users see the same content, scroll position, and interactions in real-time.</p>
                            </div>

                            {/* Cursor 1 */}
                            <div className="absolute top-1/3 left-1/4 animate-pulse">
                                <MousePointer2 className="w-5 h-5 text-purple-500 fill-purple-500/20 transform -rotate-12" />
                                <div className="absolute left-4 top-2 bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
                                    Daksh
                                </div>
                            </div>

                            {/* Cursor 2 */}
                            <div className="absolute bottom-1/3 right-1/4">
                                <MousePointer2 className="w-5 h-5 text-blue-500 fill-blue-500/20 transform -rotate-12" />
                                <div className="absolute left-4 top-2 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
                                    John
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <h2 id="features" className="text-2xl font-bold text-white mb-8 scroll-mt-24">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors">
                            <Share2 className="w-6 h-6 text-purple-400 mb-4" />
                            <h3 className="text-white font-medium mb-2">Instant Sharing</h3>
                            <p className="text-sm text-zinc-400">Share your tab session with someone instantly via a secure link.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors">
                            <Users className="w-6 h-6 text-blue-400 mb-4" />
                            <h3 className="text-white font-medium mb-2">Co-Browsing</h3>
                            <p className="text-sm text-zinc-400">Both can scroll, highlight, and debug together in real-time.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/30 transition-colors">
                            <Globe className="w-6 h-6 text-green-400 mb-4" />
                            <h3 className="text-white font-medium mb-2">Use Cases</h3>
                            <p className="text-sm text-zinc-400">Great for remote devs, students, or product demos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
