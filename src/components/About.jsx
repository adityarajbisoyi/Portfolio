import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.dark};
  position: relative;
`

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.5px;

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
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.grey};

  p {
    margin-bottom: 1.5rem;
  }
`

const SkillsContainer = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
`

const SkillsTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
  font-weight: 600;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 0.75rem;
`

const SkillItem = styled(motion.div)`
  background: rgba(91, 164, 230, 0.06);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  color: ${props => props.theme.colors.greyLight};
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(91, 164, 230, 0.12);
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
`

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.grey};
  font-weight: 500;
`

const About = () => {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python',
    'MongoDB', 'PostgreSQL', 'Docker', 'AWS',
    'Three.js', 'Next.js', 'GraphQL', 'Redis'
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Problem Solving' }
  ]

  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>

        <AboutGrid>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am a full-stack developer with a passion for creating innovative and efficient
              solutions. My journey in the digital realm began with curiosity and evolved into
              expertise across multiple technologies and frameworks.
            </p>
            <p>
              I believe in using technology to solve real problems. Every line
              of code I write is crafted with precision, performance, and user experience in mind.
              I transform complex business requirements into elegant, scalable applications.
            </p>
            <p>
              My mission is to bridge the gap between imagination and reality, creating digital
              experiences that not only function flawlessly but also inspire and engage users.
            </p>
          </AboutText>

          <SkillsContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillsTitle>Core Technologies</SkillsTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
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
