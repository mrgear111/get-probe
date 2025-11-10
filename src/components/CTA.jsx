import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
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
      </div>
    </section>
  )
}

export default CTA
