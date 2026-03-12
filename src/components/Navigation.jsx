import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useState } from 'react'

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(motion.div)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  letter-spacing: 1px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(12px);
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`

const NavLink = styled(motion.a)`
  color: ${props => props.theme.colors.grey};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: rgba(91, 164, 230, 0.08);
  }
`

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 22px;
    height: 2px;
    background: ${props => props.theme.colors.grey};
    border-radius: 1px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translateY(7px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'};
    }
  }
`

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavContent>
        <Logo
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          A R Bisoyi
        </Logo>

        <NavLinks $isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.2 }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <MobileToggle
          $isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </MobileToggle>
      </NavContent>
    </NavContainer>
  )
}

export default Navigation
