import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './Hero.css'

const Typewriter = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    let currentIndex = 0
    let isTyping = false

    const type = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
        timeoutRef.current = setTimeout(type, speed)
      } else {
        isTyping = false
        // Start blinking cursor after typing completes
        intervalRef.current = setInterval(() => {
          setShowCursor(prev => !prev)
        }, 530)
      }
    }

    const startTyping = () => {
      setDisplayedText('')
      setShowCursor(true)
      currentIndex = 0
      isTyping = true
      timeoutRef.current = setTimeout(() => {
        type()
      }, 1000)
    }

    // Initial start
    startTyping()

    // Loop: restart every ~8 seconds (1s delay + typing time + 2s pause)
    const loopInterval = setInterval(() => {
      clearTimeout(timeoutRef.current)
      clearInterval(intervalRef.current)
      startTyping()
    }, 4000)

    return () => {
      clearTimeout(timeoutRef.current)
      clearInterval(intervalRef.current)
      clearInterval(loopInterval)
    }
  }, [text, speed])

  return (
    <span className="typewriter-text">
      {displayedText}
      <span className={`typewriter-cursor ${showCursor ? 'visible' : ''}`}>_</span>
    </span>
  )
}

const Hero = () => {
  const heroRef = React.useRef(null)
  const [viewportHeight, setViewportHeight] = React.useState(800)
  
  React.useEffect(() => {
    setViewportHeight(window.innerHeight)
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const { scrollY } = useScroll()
  
  // Calculate progress based on scroll position - starts immediately
  const scrollYProgress = useTransform(
    scrollY,
    [0, viewportHeight * 0.8],
    [0, 1]
  )

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  })

  // Hero disappears on scroll
  const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.3, 0])
  const heroY = useTransform(smoothProgress, [0, 1], [0, -100])

  return (
    <section className="hero" ref={heroRef}>
      {/* Subtle radial gradient background */}
      <div className="hero-background-gradient"></div>
      
      <motion.div
        className="hero-container"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="hero-content">
          {/* Tagline */}
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Probe: because Chrome wasn't built for you.
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The browser that remembers you.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Probe reimagines the way you browse — one that remembers your context, recalls what you were doing, and connects your work across tabs and time. Built for focus, privacy, and intelligence — all locally on your device.
          </motion.p>

          {/* Typing Line */}
          <motion.div
            className="hero-typing-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typewriter text="> Launch your workspace " speed={80} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
