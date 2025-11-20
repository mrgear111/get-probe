import { useEffect, useRef } from 'react'
import { useFrame } from 'framer-motion'
import Lenis from 'lenis'

export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Sync with Framer Motion
    useFrame(({ time }) => {
      lenis.raf(time * 1000)
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return lenisRef.current
}

