import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[#050505] py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <div className="text-zinc-500 text-sm font-mono">
                    &copy; {new Date().getFullYear()} Probe. All rights reserved.
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
