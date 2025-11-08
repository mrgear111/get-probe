import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './CTA.css'

const CTA = () => {
  const sectionRef = React.useRef(null)
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center']
  })

  // Use spring for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  })

  // Slide up from below - smoother with spring
  const y = useTransform(smoothProgress, [0, 0.5, 1], [300, 0, -50])
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1])

  // Combine refs
  const combinedRef = (node) => {
    sectionRef.current = node
    if (ref) ref(node)
  }

  return (
    <motion.section 
      className="cta" 
      ref={combinedRef}
      style={{ y, opacity }}
    >
      {/* Floating Orbs Background */}
      <div className="floating-orbs cta-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>
      
      <div className="cta-background">
        <div className="cta-gradient-orb" />
      </div>
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <h2 className="cta-title">
          Ready to Experience the
          <br />
          <span className="gradient-text">Memory Web?</span>
        </h2>
        <p className="cta-description">
          Join our beta waitlist and be among the first to experience browsing that remembers.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary-large">
            Join Beta Waitlist
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="btn-secondary-large">
            Learn More
          </button>
        </div>
        {/* <div className="cta-features">
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Early Access</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Free Forever</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Privacy First</span>
          </div>
        </div> */}
      </motion.div>
    </motion.section>
  )
}

export default CTA

