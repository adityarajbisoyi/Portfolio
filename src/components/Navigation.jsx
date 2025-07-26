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
  background: rgba(13, 20, 33, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
  letter-spacing: 2px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(13, 20, 33, 0.95);
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }
`

const NavLink = styled(motion.a)`
  color: ${props => props.theme.colors.metallic};
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 
      0 0 10px ${props => props.theme.colors.primary},
      inset 0 0 10px rgba(0, 255, 255, 0.1);
    text-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
`

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    border-radius: 2px;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translateY(7px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'};
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
      transition={{ duration: 0.8 }}
    >
      <NavContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          HONOR TO THE END
        </Logo>
        
        <NavLinks isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileToggle 
          isOpen={isOpen}
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
