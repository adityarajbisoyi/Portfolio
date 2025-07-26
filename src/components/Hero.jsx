import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import HolographicProfile from './HolographicProfile'

const HeroContainer = styled.section`
  id: home;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  color: ${props => props.theme.colors.metallic};
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const TitleWord = styled(motion.span)`
  display: inline-block;
  position: relative;
  margin: 0 0.2rem;
  perspective: 1000px;
  transform-style: preserve-3d;
`

const TitleLetter = styled(motion.span)`
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  
  &::before {
    content: attr(data-letter);
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #c0c0c0, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(1px);
    opacity: 0.3;
  }
`

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.metallic};
  opacity: 0.9;
`

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary}
  );
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    height: 200px;
    margin-top: 0.25rem;
  }
`

const NameLetter = styled(motion.span)`
  position: absolute;
  font-size: 1.8rem;
  font-weight: 900;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 15px ${props => props.theme.colors.primary};
  letter-spacing: 2px;
  z-index: 10;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const BackgroundCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

function FloatingCube() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[5, 0, -5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#00ffff"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  )
}

const Hero = () => {
  const name = 'ADITYA RAJ BISOYI'
  const nameLetters = name.split('')
  
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const titleWords = ['CREATOR', 'DEVELOPER','DESIGNER']
  
  // Create starting positions for each letter (from different corners and edges)
  const getStartPosition = (index) => {
    const positions = [
      { x: -300, y: -300 }, // Top-left
      { x: 300, y: -300 },  // Top-right
      { x: -300, y: 300 },  // Bottom-left
      { x: 300, y: 300 },   // Bottom-right
      { x: -350, y: 0 },    // Left center
      { x: 350, y: 0 },     // Right center
      { x: 0, y: -350 },    // Top center
      { x: 0, y: 350 },     // Bottom center
      { x: -250, y: -150 }, // Top-left inner
      { x: 250, y: -150 },  // Top-right inner
      { x: -250, y: 150 },  // Bottom-left inner
      { x: 250, y: 150 },   // Bottom-right inner
      { x: -400, y: -100 }, // Far left top
      { x: 400, y: -100 },  // Far right top
      { x: -400, y: 100 },  // Far left bottom
      { x: 400, y: 100 },   // Far right bottom
      { x: -150, y: -400 }, // Top far left
    ]
    return positions[index % positions.length]
  }

  // Create circular path positions around the profile photo
  const getCircularPosition = (index, total, radius = 140) => {
    const angle = (index / total) * 2 * Math.PI
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    }
  }

  // Create final position for letters in a line
  const getFinalPosition = (index, total) => {
    const letterWidth = 22 // Approximate width per letter including spacing
    const totalWidth = total * letterWidth
    const startX = -(totalWidth / 2)
    return {
      x: startX + (index * letterWidth),
      y: 0
    }
  }

  const nameLetterVariants = {
    initial: (index) => {
      const startPos = getStartPosition(index)
      return {
        x: startPos.x,
        y: startPos.y,
        opacity: 0,
        scale: 0.3,
        rotate: Math.random() * 720 - 360
      }
    },
    appear: (index) => {
      const startPos = getStartPosition(index)
      return {
        x: startPos.x,
        y: startPos.y,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          delay: index * 0.1 + 2,
          duration: 0.8,
          ease: "easeOut"
        }
      }
    },
    circling: (index) => {
      const circularPos = getCircularPosition(index, nameLetters.length)
      return {
        x: circularPos.x,
        y: circularPos.y,
        opacity: 1,
        scale: 1.1,
        rotate: 0,
        transition: {
          delay: index * 0.05 + 4,
          duration: 1.5,
          ease: "easeInOut"
        }
      }
    },
    rotating: (index) => {
      const circularPos = getCircularPosition(index, nameLetters.length, 140)
      const rotationAngle = (index / nameLetters.length) * 360 + 360
      return {
        x: circularPos.x,
        y: circularPos.y,
        opacity: 1,
        scale: 1,
        rotate: rotationAngle,
        transition: {
          delay: index * 0.02 + 6,
          duration: 2,
          ease: "easeInOut"
        }
      }
    },
    final: (index) => {
      const finalPos = getFinalPosition(index, nameLetters.length)
      return {
        x: finalPos.x,
        y: finalPos.y,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          delay: index * 0.03 + 8.5,
          duration: 1,
          ease: "easeInOut"
        }
      }
    }
  }
  
  const letterVariants = {
    initial: { 
      rotateY: 0,
      x: 0,
      opacity: 1,
      scale: 1
    },
    animate: { 
      rotateY: [0, 180, 360, 180, 0],
      x: [0, -50, 50, 0],
      opacity: [1, 0.3, 0.3, 0.3, 1],
      scale: [1, 0.8, 1.2, 0.9, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }
    }
  }

  const wordVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: custom * 0.3 + 0.5
      }
    })
  }

  return (
    <HeroContainer id="home">
      <BackgroundCanvas>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <FloatingCube />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        </Canvas>
      </BackgroundCanvas>
      
      <HeroContent>
        <TextContent>
          <Title>
            {titleWords.map((word, wordIndex) => (
              <TitleWord
                key={wordIndex}
                custom={wordIndex}
                variants={wordVariants}
                initial="initial"
                animate="animate"
              >
                {word.split('').map((letter, letterIndex) => (
                  <TitleLetter
                    key={letterIndex}
                    data-letter={letter}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: wordIndex * 0.3 + letterIndex * 0.1 + 1,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    {letter}
                  </TitleLetter>
                ))}
                {wordIndex === 0 && <br />}
              </TitleWord>
            ))}
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            Transforming Ideas Into Digital Reality
          </Subtitle>
          
          <Description
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            I'm a passionate developer who transforms complex problems into elegant solutions. 
            With cutting-edge technology and innovative thinking, I build applications that push 
            the boundaries of what's possible.
          </Description>
          
          <CTAButton
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            EXPLORE PROJECTS
          </CTAButton>
        </TextContent>
        
        <ProfileSection>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <HolographicProfile profileImage="/Portfolio/profile.jpg" />
          </motion.div>
          
          <NameContainer>
            {nameLetters.map((letter, index) => (
              <NameLetter
                key={index}
                custom={index}
                variants={nameLetterVariants}
                initial="initial"
                animate={["appear", "circling", "rotating", "final"]}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </NameLetter>
            ))}
          </NameContainer>
        </ProfileSection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
