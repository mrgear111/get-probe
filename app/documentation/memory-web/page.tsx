import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Brain, Search, Clock, Folder, MessageSquare, Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Memory Web | Probe Documentation",
    description: "Probe's Memory Web creates a smart, contextual browsing experience that remembers your intent and state locally.",
};

export default function MemoryWebPage() {
    const toc = [
        { id: "overview", label: "Overview" },
        {
            id: "key-features",
            label: "Key Features",
            items: [
                { id: "local-memory", label: "Local Memory Engine" },
                { id: "context-aware", label: "Context-Aware Assistance" },
                { id: "cross-tab", label: "Cross-Tab Intelligence" },
                { id: "smart-history", label: "Smart History & Recall" },
                { id: "smart-collections", label: "Smart Collections" },
                { id: "ask-probe", label: "Ask Probe (AI Search)" }
            ]
        },
        { id: "privacy", label: "Privacy-First Approach" }
    ];

    return (
        <DocsLayout tableOfContents={toc}>
            <div className="max-w-4xl relative">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

                <div className="mb-4">
                    <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Core Concepts</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Memory Web</h1>

                <div id="overview" className="prose prose-invert max-w-none mb-16 scroll-mt-24">
                    <p className="text-xl text-zinc-300 leading-relaxed">
                        Probe introduces a <strong>"Memory Web"</strong> — a smart, contextual browsing experience that <em>remembers what you do</em>, <em>understands how you work</em>, and <em>helps you pick up exactly where you left off</em>.
                    </p>
                    <p className="text-zinc-400 mt-4">
                        Instead of treating every tab and search as isolated, Probe connects your entire web activity with intelligence and context — securely, locally, and privately.
                    </p>
                </div>

                <div className="border-t border-white/10 pt-12 mb-16">
                    <h2 id="key-features" className="text-2xl font-bold text-white mb-12 scroll-mt-24">Key Features</h2>

                    <div className="space-y-20">
                        {/* Feature 1: Local Memory Engine */}
                        <div id="local-memory" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                                    <Brain className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">1. Local Memory Engine</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Probe stores your browsing context locally — not just URLs, but <em>intent</em> and <em>state</em>: what you were reading, debugging, or researching. Everything is saved securely on your device.
                                </p>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="space-y-3">
                                    <div className="h-2 w-2/3 bg-zinc-800 rounded animate-pulse" />
                                    <div className="h-2 w-1/2 bg-zinc-800 rounded animate-pulse delay-75" />
                                    <div className="h-2 w-3/4 bg-zinc-800 rounded animate-pulse delay-150" />
                                </div>
                                <div className="mt-6 flex gap-2">
                                    <span className="px-2 py-1 rounded bg-zinc-800 text-[10px] text-zinc-500 font-mono">ENCRYPTED</span>
                                    <span className="px-2 py-1 rounded bg-zinc-800 text-[10px] text-zinc-500 font-mono">LOCAL_ONLY</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Context-Aware Assistance */}
                        <div id="context-aware" className="scroll-mt-24">
                            <h3 className="text-xl font-semibold text-white mb-6">2. Context-Aware Assistance</h3>
                            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <p className="text-zinc-400 leading-relaxed mb-4">
                                            When you return to a site or project, Probe recalls your last actions and surfaces relevant context immediately.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        {/* Mock Suggestion Cards */}
                                        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-4 rounded-lg transform transition-transform hover:scale-[1.02] cursor-default">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                    <Clock className="w-4 h-4 text-blue-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-zinc-200 font-medium">Resume API Testing</p>
                                                    <p className="text-xs text-zinc-500 mt-0.5">You were testing the <code className="text-zinc-400">/users</code> endpoint yesterday.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-4 rounded-lg transform transition-transform hover:scale-[1.02] cursor-default opacity-60">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                    <Brain className="w-4 h-4 text-green-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-zinc-200 font-medium">Related Documentation</p>
                                                    <p className="text-xs text-zinc-500 mt-0.5">Found 3 docs related to your current error.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 & 4: Cross-Tab & Smart History */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div id="cross-tab" className="scroll-mt-24 bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <Search className="w-4 h-4 text-zinc-500" />
                                    3. Cross-Tab Intelligence
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    Probe links your activities across tabs. Debugging frontend? We'll surface your backend logs and related Stack Overflow tabs automatically.
                                </p>
                                <div className="h-32 bg-zinc-900 rounded-lg border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
                                    <span className="text-xs text-zinc-600 font-mono">Connecting Context...</span>
                                </div>
                            </div>

                            <div id="smart-history" className="scroll-mt-24 bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-zinc-500" />
                                    4. Smart History & Recall
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    A timeline of moments, not just URLs. Searchable, summarized, and easy to reopen complex sessions.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 p-2 rounded bg-zinc-900 border border-zinc-800/50">
                                        <div className="w-1 h-8 bg-purple-500 rounded-full" />
                                        <div>
                                            <div className="text-xs text-zinc-300">Debugging Auth Flow</div>
                                            <div className="text-[10px] text-zinc-600">Yesterday • 5 tabs • 2 docs</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 rounded bg-zinc-900 border border-zinc-800/50 opacity-50">
                                        <div className="w-1 h-8 bg-zinc-700 rounded-full" />
                                        <div>
                                            <div className="text-xs text-zinc-300">React Research</div>
                                            <div className="text-[10px] text-zinc-600">2 days ago • 12 tabs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: Smart Collections */}
                        <div id="smart-collections" className="scroll-mt-24">
                            <h3 className="text-xl font-semibold text-white mb-6">5. Smart Collections</h3>
                            <div className="flex flex-wrap gap-4">
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                                    <div className="relative flex items-center gap-3 px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-800 leading-none">
                                        <Folder className="w-4 h-4 text-purple-400" />
                                        <span className="text-zinc-200 text-sm font-medium">React Project</span>
                                        <span className="text-xs text-zinc-600 bg-zinc-800 px-1.5 py-0.5 rounded">12</span>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                                    <div className="relative flex items-center gap-3 px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-800 leading-none">
                                        <Folder className="w-4 h-4 text-blue-400" />
                                        <span className="text-zinc-200 text-sm font-medium">Portfolio Research</span>
                                        <span className="text-xs text-zinc-600 bg-zinc-800 px-1.5 py-0.5 rounded">8</span>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                                    <div className="relative flex items-center gap-3 px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-800 leading-none">
                                        <Folder className="w-4 h-4 text-green-400" />
                                        <span className="text-zinc-200 text-sm font-medium">ML Debugging</span>
                                        <span className="text-xs text-zinc-600 bg-zinc-800 px-1.5 py-0.5 rounded">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 6: Ask Probe */}
                        <div id="ask-probe" className="scroll-mt-24">
                            <h3 className="text-xl font-semibold text-white mb-6">6. Ask Probe (AI Search)</h3>
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-1 max-w-2xl">
                                <div className="bg-black rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MessageSquare className="w-4 h-4 text-purple-400" />
                                        <span className="text-xs text-zinc-500 font-mono">PROBE_AI_AGENT</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-end">
                                            <div className="bg-zinc-800 text-zinc-200 text-sm px-4 py-2 rounded-2xl rounded-tr-sm">
                                                Show me the last 5 things I researched about TypeScript.
                                            </div>
                                        </div>
                                        <div className="flex justify-start">
                                            <div className="bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                                                <p className="mb-2">Here are your recent TypeScript research items:</p>
                                                <ul className="space-y-1 list-disc list-inside text-purple-300/80 text-xs">
                                                    <li>Advanced Types & Generics (Official Docs)</li>
                                                    <li>"Mastering TS Utility Types" (Medium)</li>
                                                    <li>StackOverflow: "Fixing TS2322 error"</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 relative">
                                        <input
                                            type="text"
                                            placeholder="Ask Probe anything..."
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <kbd className="text-[10px] text-zinc-600 font-mono bg-zinc-800 px-1.5 py-0.5 rounded">↵</kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <h2 id="privacy" className="text-2xl font-bold text-white mb-6 scroll-mt-24">Privacy-First Approach</h2>
                    <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6 flex items-start gap-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-blue-200 font-semibold mb-2">Your Data Stays Local</h3>
                            <p className="text-blue-200/70 text-sm leading-relaxed">
                                All memory data is stored <strong>locally</strong> and is fully <strong>user-controlled</strong>. Probe never sends or processes your browsing data externally unless you choose to.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
