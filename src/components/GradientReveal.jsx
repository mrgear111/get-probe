import React from 'react'
import { motion } from 'framer-motion'
import './GradientReveal.css'

const GradientReveal = () => {
  return (
    <section className="gradient-reveal-section">
      {/* Floating Orbs Background */}
      <div className="floating-orbs gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>
      
      {/* Text content */}
      <motion.div 
        className="gradient-reveal-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="gradient-reveal-title">
          Probe makes your browsing
          <br />
          <span className="gradient-reveal-highlight">Unforgettable</span>
        </h2>
        <p className="gradient-reveal-description">
          Experience a browser that remembers your context, understands your intent,
          and helps you pick up exactly where you left off. Built for developers,
          researchers, and anyone who values their time.
        </p>
      </motion.div>
    </section>
  )
}

export default GradientReveal

