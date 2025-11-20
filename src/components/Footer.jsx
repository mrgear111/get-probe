import React from 'react'
import probeLogo from '../assets/probe.png'

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden">
      {/* Gradient fade from top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
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
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
              >
                <i className="fab fa-twitter text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
              >
                <i className="fab fa-github text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
              >
                <i className="fab fa-discord text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6366f1]/50 transition-all group"
              >
                <i className="fab fa-linkedin text-lg group-hover:text-[#6366f1] transition-colors"></i>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#showcase" className="footer-link">How It Works</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
              <li><a href="#" className="footer-link">Download</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">Documentation</a></li>
              <li><a href="#" className="footer-link">API Reference</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mb-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-[#666] text-sm">
              © {new Date().getFullYear()} Probe. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
