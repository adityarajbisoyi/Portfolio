import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import FullPageSkeleton from './Skeleton'

const PortfolioContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  z-index: 2;
`

const Portfolio = ({ isContentReady }) => {
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    if (isContentReady) {
      // Brief delay to let skeleton be visible
      const timer = setTimeout(() => {
        setShowSkeleton(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isContentReady])

  return (
    <PortfolioContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {showSkeleton ? (
          <FullPageSkeleton key="skeleton" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </PortfolioContainer>
  )
}

export default Portfolio
