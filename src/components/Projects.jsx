import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

// Load image paths statically with Vite
const imageModules = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,svg,webp}', { eager: true })

const getProjectImages = (folderName) => {
  const images = []
  for (const path in imageModules) {
    // Looks for images in src/assets/projects/{folderName}/
    if (path.includes(`../assets/projects/${folderName}/`)) {
      images.push(imageModules[path].default)
    }
  }
  return images
}

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

const ProjectCarouselContainer = styled.div`
  height: 220px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg,
    rgba(91, 164, 230, 0.08) 0%,
    rgba(91, 164, 230, 0.15) 100%
  );
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const CarouselImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
`

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 15, 25, 0.7);
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
    box-shadow: 0 0 15px ${props => props.theme.colors.primary};
  }

  &.prev { left: 10px; }
  &.next { right: 10px; }

  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`

const EmptyImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(91, 164, 230, 0.5);
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 0;
  font-weight: 600;
`

const SoftwareBadge = styled.span`
  font-size: 0.725rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 20px;
  white-space: nowrap;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  flex-shrink: 0;

  ${props => {
    switch (props.$type) {
      case 'PWA':
        return `
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.1);
        `;
      case 'Desktop App':
        return `
          background: rgba(139, 92, 246, 0.12);
          color: #c084fc;
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.1);
        `;
      case 'Mobile App':
        return `
          background: rgba(245, 158, 11, 0.12);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.1);
        `;
      default: // Web App
        return `
          background: rgba(91, 164, 230, 0.12);
          color: #5ba4e6;
          border: 1px solid rgba(91, 164, 230, 0.3);
          box-shadow: 0 0 10px rgba(91, 164, 230, 0.1);
        `;
    }
  }}
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

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
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

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover, &:focus-within {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 15px rgba(91, 164, 230, 0.2);
  }
`

const DropdownLabel = styled.label`
  color: ${props => props.theme.colors.grey};
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
`

const Select = styled.select`
  background: transparent;
  color: ${props => props.theme.colors.white};
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  font-family: inherit;

  option {
    background: ${props => props.theme.colors.darkAlt};
    color: ${props => props.theme.colors.white};
    padding: 0.5rem;
  }
`

const EmptyFilterResult = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${props => props.theme.colors.grey};
  font-size: 1rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px dashed ${props => props.theme.colors.border};
  border-radius: 12px;
  width: 100%;
`

const ProjectCarousel = ({ folderName }) => {
  const images = getProjectImages(folderName);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <ProjectCarouselContainer>
        <EmptyImagePlaceholder>Awaiting Visuals - {folderName}</EmptyImagePlaceholder>
      </ProjectCarouselContainer>
    );
  }

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + images.length) % images.length);

  return (
    <ProjectCarouselContainer>
      <AnimatePresence mode="wait">
        <CarouselImage
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <CarouselButton className="prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /></svg>
          </CarouselButton>
          <CarouselButton className="next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>
          </CarouselButton>
        </>
      )}
    </ProjectCarouselContainer>
  );
};

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Step Tracker',
    folderName: 'StepTracker',
    description: 'A multi-user step tracker with dashboards, leaderboard, competetive charts , Team support. Everything you need to achieve your target steps and covert your casual walk into a disciplined hobby.',
    tech: ['Svelte', 'Hono', 'Cloudflare', 'Javascript', 'Tailwind'],
    category: 'Productivity Tools',
    softwareType: 'PWA',
    deployedUrl: 'https://stepcounter-frontend.learnerbisoyi.workers.dev'
  },
  {
    id: 2,
    title: 'Habibo',
    folderName: 'Habibo',
    description: 'A minimalist hobby tracker with detailed Insights and amazing Visual analytics',
    tech: ['React', 'Hono', 'Cloudflare', 'Typescript', 'Tailwind'],
    category: 'Productivity Tools',
    softwareType: 'PWA',
    deployedUrl: 'https://habibo.learnerbisoyi.workers.dev'
  },
  {
    id: 3,
    title: 'Easiest Git and Github Visualizer',
    folderName: 'GitVisualizer',
    description: 'An amazing and interactive visual interface to learn all the usefull concepts of Git & Github through meaningful simulation without doing any setup.',
    tech: ['React', 'Cloudflare', 'Framer', 'Tailwind'],
    category: 'Simulation',
    softwareType: 'Web App',
    deployedUrl: 'https://git-github-visualizer.learnerbisoyi.workers.dev'
  },
  {
    id: 4,
    title: 'Database Migrator',
    folderName: 'dbmig',
    description: 'A time saving tool where developers can migrate there PostgreSQL databases across different platforms, Export and Import data through excel, and preview data in minutes.',
    tech: ['Flask', 'Python', 'React', 'PostgreSQL'],
    category: 'Developer Utilities',
    softwareType: 'Web App',
    deployedUrl: 'https://witty-plant-027003000.7.azurestaticapps.net/'
  },
  {
    id: 5,
    title: 'AI Form Builder',
    folderName: 'AIFormBuilder',
    description: 'Extremely usefull and quick tool when somewant to create survey form and manage them just by typing what they need',
    tech: ['Groq', 'Python', 'React', 'D1SQLite'],
    category: 'Productivity Tools',
    softwareType: 'Web App',
    deployedUrl: 'https://ai-form-builder-a4w.pages.dev'
  },
  {
    id: 6,
    title: 'TickKick',
    folderName: 'TickKick',
    description: 'Premium Looking todo tracker with minimalist design and all essentials',
    tech: ['React'],
    category: 'Productivity Tools',
    softwareType: 'Web App',
    deployedUrl: 'https://lemon-pebble-07c34c300.7.azurestaticapps.net'
  },
  {
    id: 7,
    title: 'Neon Video Editor',
    folderName: 'NeonEditor',
    description: 'Ultramodern and Efficient video editor for content Creators, Gamers, and Educators.',
    tech: ['Electron', 'FFmpeg', 'React', 'Zustand', 'Inter Process Communication', 'Tailwind'],
    category: 'Creativity',
    softwareType: 'Desktop App',
    deployedUrl: 'https://github.com/adityarajbisoyi/Video-Editor/releases/download/v1.0.0/Neon.Video.Editor-0.1.0-setup.exe'
  },

]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSoftwareType, setActiveSoftwareType] = useState('All')

  const categories = ['All', 'Creativity', 'Games', 'Productivity Tools', 'Simulation', 'Developer Utilities']
  const softwareTypeTag = ['All', 'Web App', 'PWA', 'Desktop App', 'Mobile App']

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory
    const matchesSoftware = activeSoftwareType === 'All' || project.softwareType === activeSoftwareType
    return matchesCategory && matchesSoftware
  })

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

        <FilterContainer>
          <FilterButtons>
            {categories.map((category) => (
              <FilterButton
                key={category}
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>

          <DropdownContainer>
            <DropdownLabel htmlFor="software-type-filter">
              Platform / Type:
            </DropdownLabel>
            <Select
              id="software-type-filter"
              value={activeSoftwareType}
              onChange={(e) => setActiveSoftwareType(e.target.value)}
            >
              {softwareTypeTag.map((type) => (
                <option key={type} value={type}>
                  {type === 'All' ? 'All Platform Types' : type}
                </option>
              ))}
            </Select>
          </DropdownContainer>
        </FilterContainer>

        {filteredProjects.length === 0 ? (
          <EmptyFilterResult>
            No projects found matching the selected filters.
          </EmptyFilterResult>
        ) : (
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ProjectCarousel folderName={project.folderName} />

                <ProjectContent>
                  <ProjectHeader>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <SoftwareBadge $type={project.softwareType}>
                      {project.softwareType}
                    </SoftwareBadge>
                  </ProjectHeader>

                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>

                  <ProjectLinks>
                    <ProjectLink
                      href={project.deployedUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Experience
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        )}
      </ProjectsContent>
    </ProjectsContainer>
  )
}

export default Projects
