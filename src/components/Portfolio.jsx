import { motion, useScroll, useSpring } from 'framer-motion'
import styled from 'styled-components'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Certifications from './Certifications'
import MeshBackground from './MeshBackground'

const PortfolioContainer = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 2;
`

/* Thin scroll-progress line at very top */
const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #C4A96B, #E8D5A3, #00E5CC);
  transform-origin: left;
  z-index: 10001;
  pointer-events: none;
`

const Footer = styled.footer`
  background: #0A0A0A;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 600px) {
    padding: 2rem 1.25rem;
  }
`

const FooterInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const FooterText = styled.p`
  font-size: 0.82rem;
  color: #999999;
  font-weight: 500;
  letter-spacing: 0.3px;
`

const FooterBrand = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #E8D5A3;
`

const BackToTop = styled.button`
  background: none;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #B0B0B0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: #E8D5A3;
  }
`

const Portfolio = () => {
  // Scroll progress spring
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40 })

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <PortfolioContainer>
      <MeshBackground />
      <ProgressBar style={{ scaleX }} />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <Footer>
        <FooterInner>
          <FooterText>
            &copy; {new Date().getFullYear()} <FooterBrand>Aditya Raj Bisoyi</FooterBrand>. All rights reserved.
          </FooterText>
          <BackToTop onClick={scrollToTop}>
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </BackToTop>
        </FooterInner>
      </Footer>
    </PortfolioContainer>
  )
}

export default Portfolio
