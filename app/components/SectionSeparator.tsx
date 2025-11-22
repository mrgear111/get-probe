"use client";

export default function SectionSeparator() {
    return (
        <div className="w-full h-12 bg-[#050505] border-y border-white/10 flex items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
                    backgroundSize: '200% 200%'
                }}
            ></div>
        </div>
    );
}
