import { useScroll, useTransform, useSpring } from 'framer-motion'

export const useParallax = (distance = 50) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, distance])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  return smoothY
}

export const useFadeInOnScroll = (offset = 100) => {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [offset, 0, 0, -offset])
  
  return { opacity, y }
}


