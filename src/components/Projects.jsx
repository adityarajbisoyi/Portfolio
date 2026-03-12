import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.darkAlt};
  position: relative;
`

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`

const ProjectImage = styled.div`
  height: 180px;
  background: linear-gradient(135deg,
    rgba(91, 164, 230, 0.08) 0%,
    rgba(91, 164, 230, 0.15) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.grey};
  position: relative;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 0.75rem;
  font-weight: 600;
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.grey};
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`

const TechTag = styled.span`
  background: rgba(91, 164, 230, 0.08);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 0.25rem 0.625rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`

const ProjectStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.grey};
`

const ProjectStat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const LoadingSpinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${props => props.theme.colors.grey};
  font-size: 1rem;
  grid-column: 1 / -1;

  &::before {
    content: '';
    width: 32px;
    height: 32px;
    border: 2px solid ${props => props.theme.colors.border};
    border-top-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-right: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`

const ProjectLink = styled(motion.a)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FilterButton = styled(motion.button)`
  background: ${props => props.$active ?
    props.theme.colors.primary :
    'rgba(91, 164, 230, 0.08)'
  };
  border: 1px solid ${props => props.$active ?
    props.theme.colors.primary :
    props.theme.colors.border
  };
  border-radius: 6px;
  padding: 0.625rem 1.25rem;
  color: ${props => props.$active ? props.theme.colors.dark : props.theme.colors.grey};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.$active ? props.theme.colors.dark : props.theme.colors.white};
  }
`

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const SPECIFIC_REPOS = [
    'a4fitness',
    'Space-Station-Proximity',
    'Quiz-Game',
    'data-collectionand-asset-collection',
    'Data-Transmission-Protocols',
    'Simon-Game-Hard-Verison',
    'herbalGarden'
  ]

  const fetchGitHubProjects = async () => {
    try {
      console.log('Using fallback project data due to GitHub API limitations')
      setProjects(getFallbackProjects())
      setLoading(false)
    } catch (error) {
      console.error('Error loading projects:', error)
      setProjects(getFallbackProjects())
      setLoading(false)
    }
  }

  const getFallbackProjects = () => {
    return [
      {
        id: 1,
        title: 'A4 Fitness',
        description: 'A comprehensive fitness website with workout plans and health tracking features.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web Development',
        githubUrl: 'https://github.com/adityarajbisoyi/a4fitness',
        image: 'Web Application'
      },
      {
        id: 2,
        title: 'Space Station Proximity',
        description: 'A simulation project for space station proximity operations and calculations.',
        tech: ['Python', 'JavaScript'],
        category: 'Simulation',
        githubUrl: 'https://github.com/adityarajbisoyi/Space-Station-Proximity',
        image: 'Simulation'
      },
      {
        id: 3,
        title: 'Quiz Game',
        description: 'An interactive quiz game with multiple categories and scoring system.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        githubUrl: 'https://github.com/adityarajbisoyi/Quiz-Game',
        image: 'Game'
      },
      {
        id: 4,
        title: 'Data Collection And Asset Collection',
        description: 'A comprehensive data collection and asset management system.',
        tech: ['Python', 'JavaScript'],
        category: 'Data & Systems',
        githubUrl: 'https://github.com/adityarajbisoyi/data-collectionand-asset-collection',
        image: 'Data System'
      },
      {
        id: 5,
        title: 'Data Transmission Protocols',
        description: 'Implementation of various data transmission protocols and communication systems.',
        tech: ['Python', 'C++'],
        category: 'Data & Systems',
        githubUrl: 'https://github.com/adityarajbisoyi/Data-Transmission-Protocols',
        image: 'Protocols'
      },
      {
        id: 6,
        title: 'Simon Game Hard Version',
        description: 'An enhanced version of the classic Simon memory game with increased difficulty.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        githubUrl: 'https://github.com/adityarajbisoyi/Simon-Game-Hard-Verison',
        image: 'Game'
      },
      {
        id: 7,
        title: 'Herbal Garden',
        description: 'A beautiful herbal garden website showcasing various plants and their benefits.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web Development',
        githubUrl: 'https://github.com/adityarajbisoyi/herbalGarden',
        image: 'Web Application'
      }
    ]
  }

  const categories = ['All', 'Web Development', 'Games', 'Data & Systems', 'Simulation']

  useEffect(() => {
    fetchGitHubProjects()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </SectionTitle>

        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              $active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          {loading ? (
            <LoadingSpinner
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Loading Projects...
            </LoadingSpinner>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ProjectImage>
                  {project.image}
                </ProjectImage>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>

                  <ProjectLinks>
                    <ProjectLink
                      href={project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Source Code
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))
          )}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  )
}

export default Projects
