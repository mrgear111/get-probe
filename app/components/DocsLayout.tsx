'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Book, Code, Terminal, Activity, Cpu, Layers, Search, Brain, Layout, Sparkles, Zap, Command, Share2 } from 'lucide-react';

export interface TOCItem {
    id: string;
    label: string;
    items?: TOCItem[];
}

interface DocsLayoutProps {
    children: React.ReactNode;
    tableOfContents?: TOCItem[];
}

const SidebarItem = ({ icon: Icon, label, href, active = false, hasSubmenu = false }: { icon?: any, label: string, href: string, active?: boolean, hasSubmenu?: boolean }) => (
    <Link href={href} className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}>
        <div className="flex items-center gap-3">
            {Icon && <Icon className="w-4 h-4" />}
            <span>{label}</span>
        </div>
        {hasSubmenu && <ChevronRight className="w-3 h-3 opacity-50" />}
    </Link>
);

const SidebarSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-6">
        <h3 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{title}</h3>
        <div className="space-y-0.5">
            {children}
        </div>
    </div>
);

export default function DocsLayout({ children, tableOfContents = [] }: DocsLayoutProps) {
    const pathname = usePathname();
    const [activeId, setActiveId] = React.useState<string>("");

    React.useEffect(() => {
        if (!tableOfContents || tableOfContents.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-10% 0% -80% 0%" }
        );

        const ids = tableOfContents.flatMap(item => [item.id, ...(item.items?.map(sub => sub.id) || [])]);
        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [tableOfContents]);

    const isActive = (path: string) => {
        if (path === '/documentation' && (pathname === '/documentation' || pathname === '/documentation/')) {
            return true;
        }
        return pathname === path;
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-purple-500/30 relative">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
                <div className="max-w-[1600px] mx-auto px-4 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg tracking-tight">
                            <div className="w-8 h-8 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-pink-500/30 blur-xl opacity-60 rounded-full"></div>
                                <img
                                    src="/probe.png"
                                    alt="Probe Logo"
                                    className="w-full h-full object-contain relative z-10"
                                />
                            </div>
                            Probe <span className="text-zinc-500">Docs</span>
                        </Link>
                        <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-[10px] font-mono text-zinc-400 border border-zinc-800">v1.0.0</span>
                    </div>

                    <div className="flex-1 max-w-md mx-8 hidden md:block">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-1.5 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-zinc-600"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-[10px] font-mono text-zinc-500">⌘</kbd>
                                <kbd className="px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-[10px] font-mono text-zinc-500">K</kbd>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/" className="px-4 py-1.5 bg-zinc-800 text-white font-medium rounded-md text-xs border border-zinc-700 hover:bg-zinc-700 transition-colors">
                            ← Return to Homepage
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-[1600px] mx-auto flex items-stretch relative z-10 min-h-screen">
                {/* Sidebar Background - Full Height */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-r border-white/5"></div>

                {/* Sidebar */}
                <aside className="hidden lg:flex flex-col w-72 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-4 z-10">
                    <SidebarSection title="Getting Started">
                        <SidebarItem label="Introduction" href="/documentation" active={isActive('/documentation')} icon={Book} />
                        <SidebarItem label="Installation" href="/documentation/installation" active={isActive('/documentation/installation')} />
                        <SidebarItem label="Quickstart" href="/documentation/quickstart" active={isActive('/documentation/quickstart')} />
                    </SidebarSection>

                    <SidebarSection title="Core Concepts">
                        <SidebarItem label="Memory Web" href="/documentation/memory-web" active={isActive('/documentation/memory-web')} icon={Brain} />
                        <SidebarItem label="Probe Spaces" href="/documentation/probe-spaces" active={isActive('/documentation/probe-spaces')} icon={Layout} />
                        <SidebarItem label="Contextual AI" href="/documentation/contextual-ai" active={isActive('/documentation/contextual-ai')} icon={Sparkles} />
                        <SidebarItem label="Instant Workspace" href="/documentation/instant-workspace" active={isActive('/documentation/instant-workspace')} icon={Zap} />
                        <SidebarItem label="Universal Command Bar" href="/documentation/command-bar" active={isActive('/documentation/command-bar')} icon={Command} />
                        <SidebarItem label="Cross-Tab Intelligence" href="/documentation/cross-tab" active={isActive('/documentation/cross-tab')} icon={Share2} />
                    </SidebarSection>

                    <SidebarSection title="Probe AI">
                        <SidebarItem label="Probe AI" href="/documentation/probeai" active={isActive('/documentation/probeai')} icon={Cpu} />
                    </SidebarSection>

                    <SidebarSection title="Developers">
                        <SidebarItem label="Probe Console" href="/documentation/probeconsole" active={isActive('/documentation/probeconsole')} icon={Terminal} />
                        <SidebarItem label="API Client" href="/documentation/apiclient" active={isActive('/documentation/apiclient')} icon={Code} />
                        <SidebarItem label="Network Analyzer" href="/documentation/network" active={isActive('/documentation/network')} icon={Activity} />
                        <SidebarItem label="Probe CLI" href="/documentation/cli" active={isActive('/documentation/cli')} icon={Terminal} />
                    </SidebarSection>

                    <SidebarSection title="Advanced">
                        <SidebarItem label="Workspaces" href="/documentation/workspace" active={isActive('/documentation/workspace')} icon={Layers} />
                        <SidebarItem label="Configuration" href="/documentation/config" active={isActive('/documentation/config')} />
                    </SidebarSection>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 py-10 px-6 md:px-12 lg:px-16 min-h-[calc(100vh-3.5rem)]">
                    {children}
                </main>

                {/* Right Table of Contents */}
                {tableOfContents.length > 0 && (
                    <aside className="hidden xl:block w-64 sticky top-14 h-[calc(100vh-3.5rem)] py-10 px-6 overflow-y-auto">
                        <h5 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                            On this page
                        </h5>
                        <div className="relative border-l border-white/10 ml-1">
                            <ul className="space-y-1 text-sm">
                                {tableOfContents.map((item) => (
                                    <li key={item.id} className="relative">
                                        <a
                                            href={`#${item.id}`}
                                            className={`block pl-4 py-1 -ml-px border-l-2 transition-all ${activeId === item.id
                                                    ? 'border-purple-500 text-purple-400 font-medium bg-purple-500/5 rounded-r'
                                                    : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                        {item.items && item.items.length > 0 && (
                                            <ul className="mt-1 space-y-1">
                                                {item.items.map((subItem) => (
                                                    <li key={subItem.id}>
                                                        <a
                                                            href={`#${subItem.id}`}
                                                            className={`block pl-8 py-1 transition-colors ${activeId === subItem.id
                                                                    ? 'text-purple-400 font-medium'
                                                                    : 'text-zinc-600 hover:text-zinc-400'
                                                                }`}
                                                        >
                                                            {subItem.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}
