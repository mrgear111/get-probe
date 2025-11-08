import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './FeatureShowcase.css'

const FeatureShowcase = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })

  const sectionRef = React.useRef(null)
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
  const sectionY = useTransform(smoothProgress, [0, 0.5, 1], [300, 0, -50])
  const sectionOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1])

  return (
    <motion.section 
      id="showcase" 
      ref={sectionRef}
      className="feature-showcase"
      style={{ y: sectionY, opacity: sectionOpacity }}
    >
      {/* Floating Orbs Background */}
      <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
          <div className="orb orb-5"></div>
          <div className="orb orb-6"></div>
        </div>
      {/* Blend transition from Features section */}
      <div className="showcase-blend-top"></div>
      {/* Privacy First */}
      <motion.div
        ref={ref1}
        className="showcase-item"
        initial={{ opacity: 0, y: 100 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">Privacy-First</span>
            <h2 className="showcase-title">
              Your Data, <span className="gradient-text">Your Control</span>
            </h2>
            <p className="showcase-description">
              All memory data is stored locally and is fully user-controlled.
              Probe never sends or processes your browsing data externally unless you choose to.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="privacy-visual">
              <div className="lock-icon">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div className="data-flow">
                <div className="data-node local">Local Storage</div>
                <div className="data-arrow">→</div>
                <div className="data-node user">Your Device</div>
                <div className="data-arrow">→</div>
                <div className="data-node cloud blocked">
                  Cloud <i className="fas fa-ban"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Probe Spaces */}
      <motion.div
        ref={ref2}
        className="showcase-item reverse"
        initial={{ opacity: 0, y: 100 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">Collaboration</span>
            <h2 className="showcase-title">
              Probe <span className="gradient-text">Spaces</span>
            </h2>
            <p className="showcase-description">
              Collaborate in real-time — like multiplayer browsing. Share your tab session instantly.
              Both can scroll, highlight, and debug together. Great for remote devs, students, or product demos.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="spaces-visual">
              <div className="shared-browser">
                <div className="browser-header-small">
                  <div className="browser-dots-small">
                    <span className="dot-small" />
                    <span className="dot-small" />
                    <span className="dot-small" />
                  </div>
                </div>
                <div className="shared-content">
                  <div className="cursor-1">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  <div className="cursor-2">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  <div className="collab-indicator">2 users collaborating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contextual AI */}
      <motion.div
        ref={ref3}
        className="showcase-item"
        initial={{ opacity: 0, y: 100 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">AI Integration</span>
            <h2 className="showcase-title">
              Contextual <span className="gradient-text">AI Everywhere</span>
            </h2>
            <p className="showcase-description">
              AI that lives inside your tabs, not in a chatbox. Highlight code → "Explain this code."
              Highlight text → "Summarize this." Right-click image → "Find similar ones."
              Probe's AI isn't an app — it's part of your browsing flow.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="ai-visual">
              <div className="code-block">
                <div className="code-line highlighted">
                  <span className="code-text">const probe = new MemoryWeb();</span>
                  <div className="ai-popup">Explain this code</div>
                </div>
                <div className="code-line">
                  <span className="code-text">probe.remember(project-x);</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Workspace Mode & Command Bar */}
      <motion.div
        ref={ref4}
        className="showcase-item reverse command-bar-section"
        initial={{ opacity: 0, y: 100 }}
        animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        
        <div className="showcase-content command-bar-layout">
          {/* Left: Command K Input */}
          <div className="command-bar-left">
            <div className="command-bar-primary">
              <div className="command-prefix-btn">⌘K</div>
              <div className="command-input-field">
                <span className="command-prompt">probe.</span>
                <span className="command-input-text">go and open youtube</span>
                <span className="command-cursor">|</span>
              </div>
            </div>
            
            {/* Universal Command Bar Actions */}
            <div className="command-actions-section">
              <div className="command-actions-divider"></div>
              <div className="command-actions-title">Universal Command Bar</div>
              <div className="command-actions-list">
                <div className="command-action-item">
                  <i className="fas fa-search"></i>
                  <span>Search tabs & history</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-bolt"></i>
                  <span>Trigger extensions</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-globe"></i>
                  <span>Google queries</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-envelope"></i>
                  <span>Send emails</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-rocket"></i>
                  <span>Open apps & shortcuts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Text Description */}
          <div className="command-bar-middle">
            <span className="showcase-label">Power Features</span>
            <h2 className="showcase-title">
              Workspace Mode & <span className="gradient-text">Command Bar</span>
            </h2>
            <p className="showcase-description">
              Type <code>/workspace project-x</code> → Probe creates a focused view just for that project.
              Universal Command Bar (⌘K) to search tabs, trigger extensions, Google queries, send emails,
              open apps, or run shortcuts — all in one interface.
            </p>
          </div>

          {/* Right: Example Commands */}
          <div className="command-bar-right">
            <div className="command-examples">
            <div className="command-bar-primary">
              <div className="command-prefix-btn">⌘K</div>
              <div className="command-input-field">
                <span className="command-prompt">probe.</span>
                <span className="command-input-text">search for react hooks</span>
                <span className="command-cursor">|</span>
              </div>
              </div>
              <div className="command-actions-divider"></div>
              <div className="command-actions-title">Example Commands</div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">go and open youtube</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">search for react hooks</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">open my last project</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">open terminal in current project</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">run python script app.py</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default FeatureShowcase

