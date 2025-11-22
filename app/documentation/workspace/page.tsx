import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Layers, Zap, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GuideCard = ({ title, description, icon: Icon, tag }: { title: string, description: string, icon: any, tag: string }) => (
    <div className="group p-6 bg-[#161b22] border border-zinc-800 rounded-md hover:border-zinc-600 hover:shadow-lg transition-all cursor-pointer flex flex-col h-full">
        <div className="mb-4 flex items-start justify-between">
            <div className="p-2 bg-zinc-800/50 rounded-md border border-zinc-700/50 group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-colors">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            {tag && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded bg-black/20">
                    {tag}
                </span>
            )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
            {description}
        </p>
        <div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-purple-400 transition-colors mt-auto">
            Read guide <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
    </div>
);

export default function WorkspacePage() {
    return (
        <DocsLayout>
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8 font-mono">
                <Link href="/documentation" className="hover:text-purple-400 transition-colors">Docs</Link>
                <span className="text-zinc-700">/</span>
                <span className="text-white">Workspace Mode</span>
            </div>

            <div className="mb-12 border-b border-zinc-800 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Workspace Mode</h1>
                <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                    Save and restore your entire project setup including tabs, console state, network filters, and debugging configurations.
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-md text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" /> Start Tutorial
                    </button>
                    <button className="px-4 py-2 bg-zinc-800 text-white font-semibold rounded-md text-sm border border-zinc-700 hover:bg-zinc-700 transition-colors">
                        View API Reference
                    </button>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <GuideCard
                        title="Creating Workspaces"
                        description="Learn how to save your current browser state as a reusable workspace."
                        icon={Layers}
                        tag="Basics"
                    />
                    <GuideCard
                        title="Team Collaboration"
                        description="Share workspace configurations with your team for consistent setups."
                        icon={Layers}
                        tag="Teams"
                    />
                    <GuideCard
                        title="Workspace Templates"
                        description="Create pre-configured workspaces for common development scenarios."
                        icon={Layers}
                        tag="Advanced"
                    />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Session Persistence</h3>
                        <p className="text-sm text-zinc-400">Save all open tabs, console history, and debugging state.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Quick Switch</h3>
                        <p className="text-sm text-zinc-400">Instantly switch between different project workspaces with a single click.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Cloud Sync</h3>
                        <p className="text-sm text-zinc-400">Sync workspaces across devices and access them anywhere.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Auto-Save</h3>
                        <p className="text-sm text-zinc-400">Automatically save workspace changes to prevent data loss.</p>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
