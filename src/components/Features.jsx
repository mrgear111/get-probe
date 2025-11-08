import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './Features.css'

const FeatureCard = ({ visual, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {/* Visual Card */}
      <div className="w-full h-64 bg-[#111111] rounded-2xl border border-[#2a2a2a] mb-6 flex items-center justify-center overflow-hidden relative group hover:border-[#6366f1]/50 transition-all duration-300">
        {visual}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-3 text-center">{title}</h3>
      
      {/* Description */}
      <p className="text-[#a0a0a0] text-center leading-relaxed max-w-md">{description}</p>
    </motion.div>
  )
}

const Features = () => {
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

  // Slide up from below as you scroll - smoother with spring
  const sectionY = useTransform(smoothProgress, [0, 0.5, 1], [300, 0, -50])
  const sectionOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1])

  // Visual components for each feature
  const features = [
    {
      visual: (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 border-2 border-[#6366f1]/40 flex items-center justify-center backdrop-blur-sm">
              <i className="fas fa-database text-6xl text-[#6366f1]"></i>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center">
              <i className="fas fa-lock text-white text-xs"></i>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">Local</div>
            <div className="text-lg text-[#6366f1]">Storage</div>
          </div>
        </div>
      ),
      title: 'Local Memory Engine',
      description: 'All data is stored locally on your device. Your browsing context, intent, and state are saved securely with full user control.',
    },
    {
      visual: (
        <div className="w-full h-full p-6 bg-gradient-to-br from-[#0a0a0a] to-[#111111] relative overflow-hidden">
          {/* Mock dashboard UI */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
              <div className="text-sm text-white font-semibold">Probe Memory</div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-[#6366f1]/30 rounded-full" style={{ width: '80%' }}></div>
              <div className="h-3 bg-[#8b5cf6]/30 rounded-full" style={{ width: '60%' }}></div>
              <div className="h-3 bg-[#ec4899]/30 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
              <div className="text-xs text-[#a0a0a0] mb-1">Context saved</div>
              <div className="text-sm text-white">React debugging session</div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#6366f1]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#ec4899]/10 rounded-full blur-xl"></div>
        </div>
      ),
      title: 'Probe Memory',
      description: 'Probe Memory is a local memory engine that stores your browsing context, so that you can pick up exactly where you left.',
    },
    {
      visual: (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="relative mb-4">
            {/* Cloud icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 rounded-2xl border-2 border-[#6366f1]/40 flex items-center justify-center backdrop-blur-sm mb-4">
              <i className="fas fa-cloud text-5xl text-[#6366f1]"></i>
            </div>
            {/* Server racks below */}
            <div className="flex items-end justify-center gap-2">
              <div className="w-12 h-16 bg-[#111111] border border-[#2a2a2a] rounded flex flex-col items-center justify-end pb-2">
                <div className="w-2 h-2 rounded-full bg-[#6366f1] mb-1"></div>
                <div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
              </div>
              <div className="w-12 h-20 bg-[#111111] border border-[#2a2a2a] rounded flex flex-col items-center justify-end pb-2">
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6] mb-1"></div>
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
              </div>
              <div className="w-12 h-14 bg-[#111111] border border-[#2a2a2a] rounded flex flex-col items-center justify-end pb-2">
                <div className="w-2 h-2 rounded-full bg-[#ec4899] mb-1"></div>
                <div className="w-2 h-2 rounded-full bg-[#ec4899]"></div>
              </div>
            </div>
          </div>
        </div>
      ),
      title: 'Cross-Tab Intelligence',
      description: 'Your browser connects activities across tabs. Automatically surfaces related documentation and resources.',
    },
  ]

  return (
    <motion.section 
      id="features" 
      ref={sectionRef}
      className="py-32 px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden features-section"
      style={{ y: sectionY, opacity: sectionOpacity }}
    >
      {/* Floating Orbs Background */}
      <div className="floating-orbs features-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>
      
      {/* Blend transition from GradientReveal */}
      <div className="features-blend-top"></div>
      {/* Blend transition to FeatureShowcase */}
      <div className="features-blend-bottom"></div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            Key <span className="text-[#ec4899]">Features</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
            Everything you need for a smarter browsing experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              visual={feature.visual}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Features
