import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis for silky-smooth, physics-based 60fps momentum scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Clean exponential ease-out curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    })

    window.lenis = lenis

    let animId
    const raf = (time) => {
      lenis.raf(time)
      animId = requestAnimationFrame(raf)
    }
    animId = requestAnimationFrame(raf)

    // Smoothly route any anchor links through Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (anchor) {
        const hash = anchor.getAttribute('href')
        if (hash && hash !== '#' && hash.startsWith('#')) {
          const targetEl = document.querySelector(hash)
          if (targetEl) {
            e.preventDefault()
            lenis.scrollTo(targetEl, { offset: -20, duration: 1.15 })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(animId)
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return children
}

export default SmoothScroll
