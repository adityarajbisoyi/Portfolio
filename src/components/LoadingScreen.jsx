import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0D0D0D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
`

const gridPulse = keyframes`
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.06; }
`

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(91, 164, 230, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 164, 230, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${gridPulse} 3s ease-in-out infinite;
`

const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 2;
`

const Initials = styled(motion.div)`
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 8px;
  color: #FFFFFF;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 6px;
  }
`

const InitialLetter = styled(motion.span)`
  display: inline-block;
  position: relative;
`

const glowLine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

const Underline = styled(motion.div)`
  width: 120px;
  height: 2px;
  background: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  border-radius: 1px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #FFFFFF, transparent);
    animation: ${glowLine} 1.5s ease-in-out infinite;
  }
`

const LoadingBarContainer = styled(motion.div)`
  width: 200px;
  height: 2px;
  background: rgba(91, 164, 230, 0.15);
  border-radius: 1px;
  overflow: hidden;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    width: 160px;
  }
`

const pulse = keyframes`
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
`

const LoadingBarFill = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #5BA4E6, transparent);
  animation: ${pulse} 1.5s ease-in-out infinite;
`

const StatusText = styled(motion.p)`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.grey};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 1.5rem;
  font-weight: 500;
`

const cornerFloat = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`

const CornerAccent = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: rgba(91, 164, 230, 0.2);
  border-style: solid;
  animation: ${cornerFloat} 3s ease-in-out infinite;
  
  &.top-left {
    top: 40px;
    left: 40px;
    border-width: 2px 0 0 2px;
  }
  
  &.top-right {
    top: 40px;
    right: 40px;
    border-width: 2px 2px 0 0;
    animation-delay: 0.5s;
  }
  
  &.bottom-left {
    bottom: 40px;
    left: 40px;
    border-width: 0 0 2px 2px;
    animation-delay: 1s;
  }
  
  &.bottom-right {
    bottom: 40px;
    right: 40px;
    border-width: 0 2px 2px 0;
    animation-delay: 1.5s;
  }
`

const letterVariants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    filter: 'blur(8px)'
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const LoadingScreen = () => {
  const letters = ['A', 'R', 'B']

  return (
    <LoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.5, ease: 'easeInOut' }
      }}
    >
      <GridBackground />
      
      <CornerAccent className="top-left" />
      <CornerAccent className="top-right" />
      <CornerAccent className="bottom-left" />
      <CornerAccent className="bottom-right" />
      
      <LogoContainer>
        <Initials>
          {letters.map((letter, i) => (
            <InitialLetter
              key={letter}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              {letter}
            </InitialLetter>
          ))}
        </Initials>
        
        <Underline
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        
        <LoadingBarContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <LoadingBarFill />
        </LoadingBarContainer>
        
        <StatusText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Loading
        </StatusText>
      </LogoContainer>
    </LoadingContainer>
  )
}

export default LoadingScreen
