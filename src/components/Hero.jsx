import { motion } from 'framer-motion'
import styled from 'styled-components'
import HolographicProfile from './HolographicProfile'

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
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
  color: ${props => props.theme.colors.grey};
`

const Greeting = styled(motion.p)`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.white};
  line-height: 1.1;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const RoleText = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.grey};
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const CTAButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NameText = styled(motion.h3)`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  letter-spacing: 2px;
  text-align: center;
  margin-top: 0.5rem;
`

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroContainer id="home">
      <HeroContent>
        <TextContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>
            Hello, I am
          </Greeting>

          <Title variants={itemVariants}>
            Creator,<br />
            Developer &<br />
            Designer
          </Title>

          <RoleText variants={itemVariants}>
            Full-Stack Developer
          </RoleText>

          <Description variants={itemVariants}>
            I transform complex problems into elegant solutions.
            With cutting-edge technology and innovative thinking, I build
            applications that push the boundaries of what is possible.
          </Description>

          <motion.div variants={itemVariants}>
            <CTAButton
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Projects
            </CTAButton>
          </motion.div>
        </TextContent>

        <ProfileSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <HolographicProfile profileImage="/Portfolio/profile.jpg" />
          </motion.div>

          <NameText
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            ADITYA RAJ BISOYI
          </NameText>
        </ProfileSection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
