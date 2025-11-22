"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import {
    Terminal,
    Send,
    Activity,
    Sparkles,
    Columns,
    Save,
    WifiOff,
    Command
} from 'lucide-react';

export interface BentoCardProps {
    color?: string;
    title?: string;
    description?: string;
    label?: string;
    textAutoHide?: boolean;
    disableAnimations?: boolean;
    visual?: React.ReactNode;
    icon?: React.ElementType;
}

const ConsoleVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Terminal className="w-48 h-48 text-purple-500" strokeWidth={0.5} />
    </div>
);

const ApiClientVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Send className="w-48 h-48 text-green-500" strokeWidth={0.5} />
    </div>
);

const NetworkVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Activity className="w-48 h-48 text-blue-500" strokeWidth={0.5} />
    </div>
);

const AiVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Sparkles className="w-48 h-48 text-yellow-500" strokeWidth={0.5} />
    </div>
);

const SplitTabsVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Columns className="w-48 h-48 text-cyan-500" strokeWidth={0.5} />
    </div>
);

const WorkspaceVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Save className="w-48 h-48 text-orange-500" strokeWidth={0.5} />
    </div>
);

const OfflineVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <WifiOff className="w-48 h-48 text-red-500" strokeWidth={0.5} />
    </div>
);

const CliVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Command className="w-48 h-48 text-zinc-500" strokeWidth={0.5} />
    </div>
);

export interface BentoProps {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    enableTilt?: boolean;
    glowColor?: string;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData: BentoCardProps[] = [
    {
        color: '#060010',
        title: 'Probe Console',
        description: 'Unified devtools + terminal + AI',
        label: 'DEBUG: REALTIME',
        visual: <ConsoleVisual />
    },
    {
        color: '#060010',
        title: 'API Client',
        description: 'Test & replay API calls',
        label: 'API: NATIVE',
        visual: <ApiClientVisual />
    },
    {
        color: '#060010',
        title: 'Network Analyzer',
        description: 'Debug HTTP/WebSocket',
        label: 'NET: TRAFFIC',
        visual: <NetworkVisual />
    },
    {
        color: '#060010',
        title: 'Probe AI',
        description: 'Real-time debugging help',
        label: 'AI: ASSIST',
        visual: <AiVisual />
    },
    {
        color: '#060010',
        title: 'Split Tabs',
        description: 'Frontend & Backend side-by-side',
        label: 'VIEW: SPLIT',
        visual: <SplitTabsVisual />
    },
    {
        color: '#060010',
        title: 'Workspace Mode',
        description: 'Save full project setup',
        label: 'SYS: PERSIST',
        visual: <WorkspaceVisual />
    },
    {
        color: '#060010',
        title: 'Offline Dev',
        description: 'Local HTML/CSS/JS support',
        label: 'MODE: OFFLINE',
        visual: <OfflineVisual />
    },
    {
        color: '#060010',
        title: 'Probe CLI',
        description: 'Control browser from terminal',
        label: 'CLI: CONTROL',
        visual: <CliVisual />
    }
];

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
    children: React.ReactNode;
    className?: string;
    disableAnimations?: boolean;
    style?: React.CSSProperties;
    particleCount?: number;
    glowColor?: string;
    enableTilt?: boolean;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
    color?: string;
    enableStars?: boolean;
    enableBorderGlow?: boolean;
}> = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false,
    color,
    enableStars,
    enableBorderGlow
}) => {
        const cardRef = useRef<HTMLDivElement>(null);
        const particlesRef = useRef<HTMLDivElement[]>([]);
        const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
        const isHoveredRef = useRef(false);
        const memoizedParticles = useRef<HTMLDivElement[]>([]);
        const particlesInitialized = useRef(false);
        const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

        const initializeParticles = useCallback(() => {
            if (particlesInitialized.current || !cardRef.current) return;

            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({ length: particleCount }, () =>
                createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            );
            particlesInitialized.current = true;
        }, [particleCount, glowColor]);

        const clearAllParticles = useCallback(() => {
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
            magnetismAnimationRef.current?.kill();

            particlesRef.current.forEach(particle => {
                gsap.to(particle, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'back.in(1.7)',
                    onComplete: () => {
                        particle.parentNode?.removeChild(particle);
                    }
                });
            });
            particlesRef.current = [];
        }, []);

        const animateParticles = useCallback(() => {
            if (!cardRef.current || !isHoveredRef.current) return;

            if (!particlesInitialized.current) {
                initializeParticles();
            }

            memoizedParticles.current.forEach((particle, index) => {
                const timeoutId = setTimeout(() => {
                    if (!isHoveredRef.current || !cardRef.current) return;

                    const clone = particle.cloneNode(true) as HTMLDivElement;
                    cardRef.current.appendChild(clone);
                    particlesRef.current.push(clone);

                    gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

                    gsap.to(clone, {
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        rotation: Math.random() * 360,
                        duration: 2 + Math.random() * 2,
                        ease: 'none',
                        repeat: -1,
                        yoyo: true
                    });

                    gsap.to(clone, {
                        opacity: 0.3,
                        duration: 1.5,
                        ease: 'power2.inOut',
                        repeat: -1,
                        yoyo: true
                    });
                }, index * 100);

                timeoutsRef.current.push(timeoutId);
            });
        }, [initializeParticles]);

        useEffect(() => {
            if (disableAnimations || !cardRef.current) return;

            const element = cardRef.current;

            const handleMouseEnter = () => {
                isHoveredRef.current = true;
                animateParticles();

                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 5,
                        rotateY: 5,
                        duration: 0.3,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }
            };

            const handleMouseLeave = () => {
                isHoveredRef.current = false;
                clearAllParticles();

                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                if (enableMagnetism) {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleMouseMove = (e: MouseEvent) => {
                if (!enableTilt && !enableMagnetism) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;

                    gsap.to(element, {
                        rotateX,
                        rotateY,
                        duration: 0.1,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }

                if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.05;
                    const magnetY = (y - centerY) * 0.05;

                    magnetismAnimationRef.current = gsap.to(element, {
                        x: magnetX,
                        y: magnetY,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleClick = (e: MouseEvent) => {
                if (!clickEffect) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height)
                );

                const ripple = document.createElement('div');
                ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

                element.appendChild(ripple);

                gsap.fromTo(
                    ripple,
                    {
                        scale: 0,
                        opacity: 1
                    },
                    {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: () => ripple.remove()
                    }
                );
            };

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('click', handleClick);

            return () => {
                isHoveredRef.current = false;
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('click', handleClick);
                clearAllParticles();
            };
        }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

        return (
            <div
                ref={cardRef}
                className={`${className} relative overflow-hidden`}
                style={{ ...style, position: 'relative', overflow: 'hidden' }}
            >
                {children}
            </div>
        );
    };

const GlobalSpotlight: React.FC<{
    gridRef: React.RefObject<HTMLDivElement | null>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}> = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}) => {
        const spotlightRef = useRef<HTMLDivElement | null>(null);
        const isInsideSection = useRef(false);

        useEffect(() => {
            if (disableAnimations || !gridRef?.current || !enabled) return;

            const spotlight = document.createElement('div');
            spotlight.className = 'global-spotlight';
            spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;

            const handleMouseMove = (e: MouseEvent) => {
                if (!spotlightRef.current || !gridRef.current) return;

                const section = gridRef.current.closest('.bento-section');
                const rect = section?.getBoundingClientRect();
                const mouseInside =
                    rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

                isInsideSection.current = mouseInside || false;
                const cards = gridRef.current.querySelectorAll('.card');

                if (!mouseInside) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    cards.forEach(card => {
                        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                    });
                    return;
                }



                const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                let minDistance = Infinity;

                cards.forEach(card => {
                    const cardElement = card as HTMLElement;
                    const cardRect = cardElement.getBoundingClientRect();
                    const centerX = cardRect.left + cardRect.width / 2;
                    const centerY = cardRect.top + cardRect.height / 2;
                    const distance =
                        Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                    const effectiveDistance = Math.max(0, distance);

                    minDistance = Math.min(minDistance, effectiveDistance);

                    let glowIntensity = 0;
                    if (effectiveDistance <= proximity) {
                        glowIntensity = 1;
                    } else if (effectiveDistance <= fadeDistance) {
                        glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                    }

                    updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                });

                gsap.to(spotlightRef.current, {
                    left: e.clientX,
                    top: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });

                const targetOpacity =
                    minDistance <= proximity
                        ? 0.8
                        : minDistance <= fadeDistance
                            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                            : 0;

                gsap.to(spotlightRef.current, {
                    opacity: targetOpacity,
                    duration: targetOpacity > 0 ? 0.2 : 0.5,
                    ease: 'power2.out'
                });
            };

            const handleMouseLeave = () => {
                isInsideSection.current = false;
                gridRef.current?.querySelectorAll('.card').forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                if (spotlightRef.current) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseleave', handleMouseLeave);
                spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
            };
        }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

        return null;
    };

const BentoCardGrid: React.FC<{
    children: React.ReactNode;
    gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
    <div
        className="bento-section grid gap-2 p-3 w-full h-full max-h-full select-none relative"
        style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
        ref={gridRef}
    >
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    disableAnimations = false,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    particleCount = DEFAULT_PARTICLE_COUNT,
    enableTilt = true,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true,
    enableMagnetism = true
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden">
            {/* Technical Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}>
            </div>

            <style>
                {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 100%;
            margin: 0 auto;
            padding: 0.5rem;
            height: 100%;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(3, 1fr);
            }
            
            /* Probe Console: Top-Left (Span 2x2) */
            .card-responsive .card:nth-child(1) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            /* API Client: Top-Right (1x1) - Default placement */
            
            /* Network Analyzer: Top-Right (1x1) - Default placement */
            
            /* Probe AI: Middle-Right (Span 2x1) */
            .card-responsive .card:nth-child(4) {
              grid-column: span 2;
              grid-row: span 1;
            }
            
            /* Bottom Row: Split Tabs, Workspace, Offline, CLI (all 1x1) - Default placement */
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 90%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}
            </style>

            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <div className="w-full max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-12 text-center px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6 font-mono text-xs text-zinc-400">
                        <span className="text-green-500">$</span> npm install probe-sdk
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                        Probe for <span className="text-zinc-500">Developers</span><span className="animate-pulse text-purple-500">_</span>
                    </h2>
                    <p className="text-sm text-zinc-500 font-mono tracking-wide">
                        Build Faster. Browse Smarter. Ship Better.
                    </p>
                </div>

                <BentoCardGrid gridRef={gridRef}>
                    <div className="card-responsive grid gap-2">
                        {cardData.map((card, index) => {
                            const isParticleCard = index === 0; // First card gets particles
                            const Icon = card.icon;

                            if (isParticleCard) {
                                return (
                                    <ParticleCard
                                        key={index}
                                        color={card.color}
                                        enableStars={enableStars}
                                        enableBorderGlow={enableBorderGlow}
                                        disableAnimations={shouldDisableAnimations}
                                        particleCount={particleCount}
                                        clickEffect={clickEffect}
                                        enableMagnetism={enableMagnetism}
                                    >
                                        {/* Technical Label - Top Right */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase opacity-70">{card.label}</span>
                                        </div>

                                        {/* Icon - Top Left */}
                                        {Icon && (
                                            <div className="absolute top-6 left-6 z-20">
                                                <Icon className="w-6 h-6 text-purple-500/80" strokeWidth={1.5} />
                                            </div>
                                        )}

                                        {/* Content - Bottom Left */}
                                        <div className="card__content flex flex-col relative text-white z-10 mt-auto p-6">
                                            <h3 className={`card__title font-mono text-xl md:text-2xl font-bold uppercase tracking-tight mb-3 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                                                {card.title}
                                            </h3>
                                            <div className="flex gap-3">
                                                <div className="w-0.5 bg-purple-500/50 shrink-0"></div>
                                                <p className={`card__description text-sm text-zinc-400 font-mono leading-relaxed ${textAutoHide ? 'text-clamp-2' : ''}`}>
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </ParticleCard>
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className={`card ${enableBorderGlow ? 'card--border-glow' : ''} relative overflow-hidden rounded-xl bg-[#060010] border border-white/5 group`}
                                    >
                                        {/* Technical Label - Top Right */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase opacity-70">{card.label}</span>
                                        </div>

                                        {/* Icon - Top Left */}
                                        {Icon && (
                                            <div className="absolute top-6 left-6 z-20 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                            </div>
                                        )}

                                        {/* Content - Bottom Left */}
                                        <div className="card__content flex flex-col relative text-white z-10 mt-auto p-6">
                                            <h3 className={`card__title font-mono text-xl md:text-2xl font-bold uppercase tracking-tight mb-3 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                                                {card.title}
                                            </h3>
                                            <div className="flex gap-3">
                                                <div className="w-0.5 bg-purple-500/50 shrink-0"></div>
                                                <p className={`card__description text-sm text-zinc-400 font-mono leading-relaxed ${textAutoHide ? 'text-clamp-2' : ''}`}>
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </BentoCardGrid>
            </div >
        </div >
    );
};

export default MagicBento;
