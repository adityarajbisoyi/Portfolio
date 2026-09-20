import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'

/* ---- Top Bar ---- */
const NavBar = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 2rem;
  transition: background 0.4s ease, border-color 0.4s ease;
  background: ${props => props.$scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${props => props.$scrolled ? 'rgba(232, 213, 163, 0.1)' : 'transparent'};
  transform: translateZ(0);
  will-change: background, border-color;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`

const NavInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(motion.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #E8D5A3;
    border-radius: 50%;
    animation: pulseDot 2s ease-in-out infinite;
  }

  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(18, 18, 18, 0.7);
  border: 1px solid rgba(232, 213, 163, 0.16);
  padding: 0.3rem 0.35rem;
  border-radius: 100px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06);

  @media (max-width: 860px) {
    display: none;
  }
`

const NavItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const NavLink = styled.button`
  background: none;
  border: none;
  outline: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${props => props.$active ? '#FFFFFF' : '#A3A3A3'};
  cursor: pointer;
  padding: 0.45rem 1.15rem;
  border-radius: 100px;
  position: relative;
  z-index: 2;
  transition: color 0.25s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  &:focus-visible,
  &:active {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  &:hover {
    color: #FFFFFF;
  }
`

const ActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(232, 213, 163, 0.22) 0%, rgba(196, 169, 107, 0.14) 100%);
  border: 1px solid rgba(232, 213, 163, 0.4);
  border-radius: 100px;
  box-shadow: 0 0 16px rgba(232, 213, 163, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  z-index: 1;
  pointer-events: none;
`

const HamburgerBtn = styled.button`
  background: none;
  border: 1px solid rgba(232, 213, 163, 0.3);
  border-radius: 8px;
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.7);
  }

  @media (min-width: 821px) {
    display: none;
  }
`

const HamburgerLine = styled.span`
  display: block;
  width: 18px;
  height: 1.5px;
  background: #E8D5A3;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${props => props.$open ? 'rotate(45deg) translateY(6.5px)' : 'none'};
    width: ${props => props.$open ? '18px' : '18px'};
  }
  &:nth-child(2) {
    opacity: ${props => props.$open ? 0 : 1};
    transform: ${props => props.$open ? 'scaleX(0)' : 'none'};
  }
  &:nth-child(3) {
    transform: ${props => props.$open ? 'rotate(-45deg) translateY(-6.5px)' : 'none'};
  }
`

/* ---- Full-screen overlay menu ---- */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: #0A0A0A;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10vw;
  overflow: hidden;
`

const OverlayLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(232, 213, 163, 0.1);
`

const MenuNum = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #E8D5A3;
  opacity: 0.5;
  margin-right: 1.5rem;
`

const MenuItem = styled(motion.div)`
  display: flex;
  align-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.15;
  cursor: none;
  transition: color 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #E8D5A3;
    transition: width 0.4s ease;
  }

  &:hover {
    color: #E8D5A3;
    &::after { width: 100%; }
    ${MenuNum} { opacity: 1; }
  }
`

const MenuFooter = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 10vw;
  display: flex;
  gap: 2rem;
`

const FooterLink = styled(motion.a)`
  font-size: 0.8rem;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: #E8D5A3;
  }
`

/* ---- Dot Nav ---- */
const DotNav = styled(motion.div)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 998;

  @media (max-width: 1100px) {
    display: none;
  }
`

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  cursor: none;
`

const DotLabel = styled(motion.span)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  white-space: nowrap;
  pointer-events: none;
`

const Dot = styled(motion.div)`
  width: ${props => props.$active ? '24px' : '6px'};
  height: 6px;
  border-radius: 3px;
  background: ${props => props.$active ? '#E8D5A3' : 'rgba(232, 213, 163, 0.25)'};
  transition: width 0.3s ease, background 0.3s ease;
  flex-shrink: 0;
`

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredDot, setHoveredDot] = useState(null)

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 50)

      const offsets = sections.map(s => {
        const el = document.getElementById(s.id)
        if (!el) return { id: s.id, top: Infinity }
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const closest = offsets.reduce((a, b) => a.top < b.top ? a : b)
      setActiveSection(closest.id)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    if (window.lenis) {
      window.lenis.on('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const scrollTo = (id) => {
    setIsOpen(false)
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, { offset: -20, duration: 1.15 })
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const overlayVariants = {
    closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }
  }

  const itemVariants = {
    closed: { y: 60, opacity: 0 },
    open: (i) => ({
      y: 0, opacity: 1,
      transition: { delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
  }

  return (
    <>
      <NavBar
        $scrolled={scrolled}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavInner>
          <Logo whileHover={{ scale: 1.03 }} onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
            A R Bisoyi
            <span />
          </Logo>

          <DesktopNav>
            {sections.map(s => {
              const isActive = activeSection === s.id
              return (
                <NavItemWrapper key={s.id}>
                  <NavLink
                    $active={isActive}
                    onClick={() => scrollTo(s.id)}
                  >
                    {s.label}
                  </NavLink>
                  {isActive && (
                    <ActivePill
                      layoutId="activeNavIndicator"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 32
                      }}
                    />
                  )}
                </NavItemWrapper>
              )
            })}
          </DesktopNav>

          <NavRight>
            <HamburgerBtn
              onClick={() => setIsOpen(o => !o)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              style={{ position: 'relative', zIndex: 1001 }}
            >
              <HamburgerLine $open={isOpen} />
              <HamburgerLine $open={isOpen} />
              <HamburgerLine $open={isOpen} />
            </HamburgerBtn>
          </NavRight>
        </NavInner>
      </NavBar>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <Overlay
            key="overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
          >
            <OverlayLine />
            {sections.map((s, i) => (
              <MenuItem
                key={s.id}
                custom={i}
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => scrollTo(s.id)}
              >
                <MenuNum>0{i + 1}</MenuNum>
                {s.label}
              </MenuItem>
            ))}

            <MenuFooter>
              <FooterLink href="mailto:learnerbisoyi@gmail.com" whileHover={{ y: -2 }}>Email</FooterLink>
              <FooterLink href="https://github.com/adityarajbisoyi" target="_blank" whileHover={{ y: -2 }}>GitHub</FooterLink>
              <FooterLink href="https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/" target="_blank" whileHover={{ y: -2 }}>LinkedIn</FooterLink>
            </MenuFooter>
          </Overlay>
        )}
      </AnimatePresence>

      {/* Dot nav sidebar */}
      <DotNav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {sections.map(s => (
          <DotContainer
            key={s.id}
            onClick={() => scrollTo(s.id)}
            onMouseEnter={() => setHoveredDot(s.id)}
            onMouseLeave={() => setHoveredDot(null)}
          >
            <AnimatePresence>
              {hoveredDot === s.id && (
                <DotLabel
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  {s.label}
                </DotLabel>
              )}
            </AnimatePresence>
            <Dot $active={activeSection === s.id} />
          </DotContainer>
        ))}
      </DotNav>
    </>
  )
}

export default Navigation
