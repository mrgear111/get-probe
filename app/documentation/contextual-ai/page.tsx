import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Sparkles, Code, FileText, Image as ImageIcon } from 'lucide-react';

export default function ContextualAIPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Contextual AI</h1>

                <div id="overview" className="prose prose-invert max-w-none mb-12 scroll-mt-24">
                    <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                        AI that lives inside your tabs, not in a chatbox.
                    </p>
                    <p className="text-zinc-400">
                        Probe's AI isn't an app — it's part of your browsing <em>flow</em>.
                    </p>
                </div>

                {/* Visual Mockup: Code Explanation */}
                <div className="mb-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-xl pointer-events-none" />
                    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl font-mono text-sm relative">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-zinc-500 text-xs">utils.ts</span>
                        </div>
                        <div className="p-6 text-zinc-400 leading-relaxed">
                            <p><span className="text-purple-400">export const</span> <span className="text-blue-400">calculateMetric</span> = (data: <span className="text-yellow-400">any</span>[]) ={'>'} {'{'}</p>
                            <p className="pl-4"><span className="text-zinc-500">// Complex reduction logic</span></p>
                            <div className="relative group cursor-text">
                                <p className="pl-4 bg-blue-500/20 text-white rounded px-1 -mx-1 inline-block">
                                    <span className="text-purple-400">return</span> data.reduce((acc, curr) ={'>'} acc + curr.value, 0);
                                </p>

                                {/* Floating AI Tooltip */}
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 z-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                                        <Sparkles className="w-3 h-3 text-purple-400" />
                                        <span className="text-xs font-bold text-white">Probe AI Explanation</span>
                                    </div>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        This line calculates the sum of the 'value' property for all items in the array using a reducer.
                                    </p>
                                    <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-zinc-900 border-r border-b border-zinc-700 transform rotate-45" />
                                </div>
                            </div>
                            <p>{'}'}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <h2 id="capabilities" className="text-2xl font-bold text-white mb-8 scroll-mt-24">Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 group hover:bg-zinc-900/50 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Code className="w-5 h-5 text-purple-400" />
                            </div>
                            <h3 className="text-white font-medium mb-2">Highlight Code</h3>
                            <p className="text-sm text-zinc-400">"Explain this code" or "Find bugs here" directly in the editor.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 group hover:bg-zinc-900/50 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-white font-medium mb-2">Highlight Text</h3>
                            <p className="text-sm text-zinc-400">"Summarize this paragraph" or "Translate to Spanish".</p>
                        </div>
                        <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 group hover:bg-zinc-900/50 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ImageIcon className="w-5 h-5 text-green-400" />
                            </div>
                            <h3 className="text-white font-medium mb-2">Right-click Image</h3>
                            <p className="text-sm text-zinc-400">"Find similar images" or "Extract text from image".</p>
                        </div>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
