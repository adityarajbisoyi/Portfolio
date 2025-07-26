import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, 
    rgba(13, 20, 33, 0.9) 0%, 
    rgba(0, 0, 0, 0.95) 100%
  );
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 20px ${props => props.theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutText = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.metallic};
  
  p {
    margin-bottom: 1.5rem;
  }
`

const SkillsContainer = styled(motion.div)`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.2),
    inset 0 0 30px rgba(0, 255, 255, 0.05);
`

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`

const SkillItem = styled(motion.div)`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.metallic};
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 15px ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 107, 53, 0.05);
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(255, 107, 53, 0.2),
    inset 0 0 20px rgba(255, 107, 53, 0.05);
`

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
  text-shadow: 0 0 15px ${props => props.theme.colors.secondary};
`

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.metallic};
  font-weight: 600;
`

const About = () => {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python',
    'MongoDB', 'PostgreSQL', 'Docker', 'AWS',
    'Three.js', 'Next.js', 'GraphQL', 'Redis'
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Development Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Problem Solving' }
  ]

  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          VISION & EXPERTISE
        </SectionTitle>
        
        <AboutGrid>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am a full-stack developer with a passion for creating innovative and efficient 
              solutions. My journey in the digital realm began with curiosity and evolved into 
              expertise across multiple technologies and frameworks.
            </p>
            <p>
              I believe in using technology to protect and serve. Every line 
              of code I write is crafted with precision, performance, and user experience in mind. 
              I transform complex business requirements into elegant, scalable applications.
            </p>
            <p>
              My mission is to bridge the gap between imagination and reality, creating digital 
              experiences that not only function flawlessly but also inspire and engage users.
            </p>
          </AboutText>
          
          <SkillsContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillsTitle>CORE TECHNOLOGIES</SkillsTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </AboutGrid>
        
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsContainer>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
