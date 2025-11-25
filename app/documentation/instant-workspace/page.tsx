import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Terminal, Layout, Save, Play } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Instant Workspace | Probe Documentation",
    description: "Switch contexts instantly with /workspace. Probe adapts to your project by opening relevant tabs and tools automatically.",
};

export default function InstantWorkspacePage() {
    const toc = [
        { id: "overview", label: "Overview" },
        { id: "how-it-works", label: "How It Works" }
    ];

    return (
        <DocsLayout tableOfContents={toc}>
            <div className="max-w-4xl relative">
                <div className="mb-4">
                    <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Core Concepts</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Instant Workspace Mode</h1>

                <div id="overview" className="prose prose-invert max-w-none mb-12 scroll-mt-24">
                    <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                        "Your browser adapts to your project."
                    </p>
                    <p className="text-zinc-400">
                        Like profiles, but smart and reusable. Switch contexts instantly with a single command.
                    </p>
                </div>

                {/* Visual Mockup: Command to Workspace */}
                <div className="mb-16 bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Step 1: Command */}
                        <div className="flex-1 w-full">
                            <div className="bg-black border border-zinc-800 rounded-lg p-4 shadow-lg font-mono text-sm">
                                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                                    <Terminal className="w-3 h-3" />
                                    <span>Command Bar</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-400">❯</span>
                                    <span className="text-white">/workspace</span>
                                    <span className="text-zinc-400">project-x</span>
                                    <span className="w-1.5 h-4 bg-zinc-500 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:block text-zinc-600">
                            <Play className="w-6 h-6" />
                        </div>

                        {/* Step 2: Result */}
                        <div className="flex-1 w-full">
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-lg">
                                <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
                                    <span className="text-xs font-bold text-white">Workspace: Project X</span>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-6 bg-zinc-800/50 rounded w-full flex items-center px-2 gap-2">
                                        <div className="w-3 h-3 bg-blue-500/20 rounded-full" />
                                        <div className="h-1.5 w-16 bg-zinc-700 rounded" />
                                    </div>
                                    <div className="h-6 bg-zinc-800/50 rounded w-full flex items-center px-2 gap-2">
                                        <div className="w-3 h-3 bg-yellow-500/20 rounded-full" />
                                        <div className="h-1.5 w-24 bg-zinc-700 rounded" />
                                    </div>
                                    <div className="h-6 bg-zinc-800/50 rounded w-full flex items-center px-2 gap-2">
                                        <div className="w-3 h-3 bg-purple-500/20 rounded-full" />
                                        <div className="h-1.5 w-12 bg-zinc-700 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <h2 id="how-it-works" className="text-2xl font-bold text-white mb-8 scroll-mt-24">How It Works</h2>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-green-500/30 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                <Layout className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Relevant Tabs Open</h3>
                                <p className="text-sm text-zinc-400">Probe automatically opens the tabs you saved for this project.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/30 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                <Terminal className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Tools Attached</h3>
                                <p className="text-sm text-zinc-400">Notes, todos, and terminal panels are restored instantly.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-purple-500/30 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                <Save className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Auto-Save State</h3>
                                <p className="text-sm text-zinc-400">Your environment is saved automatically, ready to reopen anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
