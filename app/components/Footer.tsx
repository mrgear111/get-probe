import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[#050505] py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <div className="flex items-center gap-6 text-zinc-500 text-sm font-mono">
                    <span>&copy; {new Date().getFullYear()} Probe. All rights reserved.</span>
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    <span className="hidden md:inline text-zinc-700">|</span>
                    <a href="mailto:daksh@probebrowser.com" className="hover:text-white transition-colors">daksh@probebrowser.com</a>
                    <span className="hidden md:inline text-zinc-700">|</span>
                    <a href="mailto:sourav@probebrowser.com" className="hover:text-white transition-colors">sourav@probebrowser.com</a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors duration-200"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors duration-200"
                        aria-label="Discord"
                    >
                        <Disc className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
