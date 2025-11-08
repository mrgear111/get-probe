import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import probeLogo from '../assets/probe.png'

const Footer = () => {
  const sectionRef = React.useRef(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  })

  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, 0])

  const combinedRef = (node) => {
    sectionRef.current = node
    if (ref) ref(node)
  }

  return (
    <motion.footer
      ref={combinedRef}
      className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Gradient fade from top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={probeLogo} alt="Probe" className="w-10 h-10" />
              <span className="text-3xl font-bold text-white">Probe</span>
            </div>
            <p className="text-[#a0a0a0] mb-8 max-w-md leading-relaxed text-lg">
              The browser that remembers. Built for developers, researchers, and anyone who values their time.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-twitter text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-discord text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Community
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mb-12"></div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <p className="text-[#666] text-sm">
              © {new Date().getFullYear()} Probe. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-[#666] hover:text-white transition-colors relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6366f1] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#666] hover:text-white transition-colors relative group">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6366f1] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#666] hover:text-white transition-colors relative group">
              Cookie Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6366f1] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
