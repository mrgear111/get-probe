'use client';

import React from 'react';

export interface TOCItem {
    id: string;
    label: string;
    items?: TOCItem[];
}

interface DocsLayoutProps {
    children: React.ReactNode;
    tableOfContents?: TOCItem[];
}

export default function DocsLayout({ children, tableOfContents = [] }: DocsLayoutProps) {
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

    return (
        <>
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
        </>
    );
}
