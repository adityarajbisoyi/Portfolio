import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
`

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(13, 20, 33, 0.8);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 0 30px ${props => props.theme.colors.primary},
      inset 0 0 30px rgba(0, 255, 255, 0.1);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(
        135deg,
        transparent 30%,
        rgba(0, 255, 255, 0.05) 50%,
        transparent 70%
      );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.2) 0%, 
    rgba(255, 107, 53, 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::after {
    left: 100%;
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.metallic};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.primary};
`

const ProjectStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.metallic};
`

const ProjectStat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: '⭐';
    color: ${props => props.theme.colors.accent};
  }
  
  &:nth-child(2)::before {
    content: '🔀';
  }
  
  &:nth-child(3)::before {
    content: '📅';
  }
`

const LoadingSpinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  
  &::before {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-top: 3px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled(motion.a)`
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary}
  );
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
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
      rgba(255, 255, 255, 0.3), 
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 
    `linear-gradient(45deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})` :
    'rgba(0, 255, 255, 0.1)'
  };
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  color: ${props => props.active ? props.theme.colors.dark : props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 15px ${props => props.theme.colors.primary};
  }
`

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // Specific repositories to showcase
  const SPECIFIC_REPOS = [
    'a4fitness',
    'Space-Station-Proximity',
    'Quiz-Game',
    'data-collectionand-asset-collection',
    'Data-Transmission-Protocols',
    'Simon-Game-Hard-Verison',
    'herbalGarden'
  ]

  // GitHub API integration for specific repos
  const fetchGitHubProjects = async () => {
    try {
      // Due to GitHub API rate limiting, use fallback data directly
      console.log('Using fallback project data due to GitHub API limitations')
      setProjects(getFallbackProjects())
      setLoading(false)
    } catch (error) {
      console.error('Error loading projects:', error)
      setProjects(getFallbackProjects())
      setLoading(false)
    }
  }

  // Fallback project data if GitHub API fails
  const getFallbackProjects = () => {
    return [
      {
        id: 1,
        title: 'A4 Fitness',
        description: 'A comprehensive fitness website with workout plans and health tracking features.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web Development',
        githubUrl: 'https://github.com/adityarajbisoyi/a4fitness',
        image: 'GitHub Project'
      },
      {
        id: 2,
        title: 'Space Station Proximity',
        description: 'A simulation project for space station proximity operations and calculations.',
        tech: ['Python', 'JavaScript'],
        category: 'Simulation',
        githubUrl: 'https://github.com/adityarajbisoyi/Space-Station-Proximity',
        image: 'GitHub Project'
      },
      {
        id: 3,
        title: 'Quiz Game',
        description: 'An interactive quiz game with multiple categories and scoring system.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        githubUrl: 'https://github.com/adityarajbisoyi/Quiz-Game',
        image: 'GitHub Project'
      },
      {
        id: 4,
        title: 'Data Collection And Asset Collection',
        description: 'A comprehensive data collection and asset management system.',
        tech: ['Python', 'JavaScript'],
        category: 'Data & Systems',
        githubUrl: 'https://github.com/adityarajbisoyi/data-collectionand-asset-collection',
        image: 'GitHub Project'
      },
      {
        id: 5,
        title: 'Data Transmission Protocols',
        description: 'Implementation of various data transmission protocols and communication systems.',
        tech: ['Python', 'C++'],
        category: 'Data & Systems',
        githubUrl: 'https://github.com/adityarajbisoyi/Data-Transmission-Protocols',
        image: 'GitHub Project'
      },
      {
        id: 6,
        title: 'Simon Game Hard Version',
        description: 'An enhanced version of the classic Simon memory game with increased difficulty.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Games',
        githubUrl: 'https://github.com/adityarajbisoyi/Simon-Game-Hard-Verison',
        image: 'GitHub Project'
      },
      {
        id: 7,
        title: 'Herbal Garden',
        description: 'A beautiful herbal garden website showcasing various plants and their benefits.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web Development',
        githubUrl: 'https://github.com/adityarajbisoyi/herbalGarden',
        image: 'GitHub Project'
      }
    ]
  }

  const categories = ['All', 'Web Development', 'Games', 'Data & Systems', 'Simulation']

  // Fetch GitHub projects on component mount
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          MISSION ARCHIVES
        </SectionTitle>
        
        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              transition={{ duration: 0.5 }}
            >
              Loading GitHub Projects...
            </LoadingSpinner>
          ) : (
            filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
