import { motion } from 'framer-motion'
import styled from 'styled-components'
import HolographicProfile from './HolographicProfile'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const PortfolioContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  z-index: 2;
`

const Portfolio = () => {
  return (
    <PortfolioContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </PortfolioContainer>
  )
}

export default Portfolio
