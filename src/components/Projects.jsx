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
            <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
          </CarouselButton>
          <CarouselButton className="next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
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
    tech: ['Svelte','Hono','Cloudflare','Javascript','Tailwind'],
    category: 'Productivity Tools',
    deployedUrl: 'https://stepcounter-frontend.learnerbisoyi.workers.dev' // Update with real deployed links
  },
  {
    id: 2,
    title: 'Habibo',
    folderName: 'Habibo',
    description: 'A minimalist hobby tracker with detailed Insights and amazing Visual analytics',
    tech: ['React','Hono','Cloudflare','Typescript','Tailwind'],
    category: 'Productivity Tools',
    deployedUrl: 'https://habibo.learnerbisoyi.workers.dev'
  },
  {
    id: 3,
    title: 'Easiest Git and Github Visualizer',
    folderName: 'GitVisualizer',
    description: 'An amazing and interactive visual interface to learn all the usefull concepts Git and Github through best possible meaningful simulation without doing setup.',
    tech: ['React','Cloudflare','Framer','Tailwind'],
    category: 'Simulation',
    deployedUrl: 'https://git-github-visualizer.learnerbisoyi.workers.dev'
  },

]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Games', 'Productivity Tools', 'Simulation']

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeFilter)

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
                <ProjectTitle>{project.title}</ProjectTitle>
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
      </ProjectsContent>
    </ProjectsContainer>
  )
}

export default Projects
