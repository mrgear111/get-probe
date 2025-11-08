import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import AICodeTerminal from './AICodeTerminal'
import './Hero.css'

const Hero = () => {
  const heroRef = React.useRef(null)
  const [viewportHeight, setViewportHeight] = React.useState(800)
  
  React.useEffect(() => {
    setViewportHeight(window.innerHeight)
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Use window scroll directly for immediate response
  const { scrollY } = useScroll()
  
  // Calculate progress based on scroll position - starts immediately
  // Use a smaller range so animation starts right away
  const scrollYProgress = useTransform(
    scrollY,
    [0, viewportHeight * 0.6],
    [0, 1]
  )

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  })

  const textX = useTransform(smoothProgress, [0, 1], [0, -200])
  const terminalX = useTransform(smoothProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0])
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, 150])

  return (
    <section className="hero" ref={heroRef}>
      {/* Floating Orbs Background */}
      <div className="floating-orbs hero-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>
      
      {/* Subtle abstract background with parallax */}
      <motion.div 
        className="hero-background"
        style={{ y: backgroundY, opacity: heroOpacity }}
      >
        <div className="hero-bg-gradient" />
      </motion.div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Left Side - Text and CTA */}
          <motion.div
            className="hero-text-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ x: textX, opacity: heroOpacity }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Built to make you extraordinarily productive, */}
              <br />
              <span className="gradient-text">Probe is the browser that remembers you.</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Because Chrome wasn't built for you.
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A smart, browser that remembers you and what you do,
              understands how you work, and helps you pick up exactly where you left.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-download">
                <i className="fas fa-download mr-2"></i>
                Download for macOS
              </button>
              <button className="btn-secondary-hero">
                Join Beta Waitlist
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal */}
          <motion.div
            className="hero-terminal-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ x: terminalX, opacity: heroOpacity }}
          >
            <div className="terminal-wrapper">
              <AICodeTerminal compact={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
