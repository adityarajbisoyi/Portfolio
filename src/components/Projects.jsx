import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'

/* ---- Image loader ---- */
const imageModules = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,svg,webp}', { eager: true })

const getProjectImages = (folderName) => {
  const images = []
  for (const path in imageModules) {
    if (path.includes(`../assets/projects/${folderName}/`)) {
      images.push(imageModules[path].default)
    }
  }
  return images
}

/* ---- Styles ---- */
const ProjectsSection = styled.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`


const SectionTag = styled(motion.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background: #E8D5A3;
  }
`

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  span { color: #E8D5A3; }
`

/* ---- Filters ---- */
const FilterSection = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 3rem;
`

const FilterGroupLabel = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #E8D5A3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #E8D5A3;
    box-shadow: 0 0 8px rgba(232, 213, 163, 0.7);
  }
`

const ScrollablePillRow = styled(motion.div)`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 0.6rem;
  margin-bottom: 0.85rem;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 4%, black 92%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, black 4%, black 92%, transparent 100%);

  @media (min-width: 601px) {
    flex-wrap: wrap;
    -webkit-mask-image: none;
    mask-image: none;
    overflow-x: visible;
    padding-bottom: 0;
  }
`

const PillTab = styled(motion.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.5rem 1.15rem;
  border-radius: 100px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${props => props.$active ? '#E8D5A3' : 'rgba(255,255,255,0.18)'};
  background: ${props => props.$active ? 'rgba(232, 213, 163, 0.22)' : 'rgba(255,255,255,0.04)'};
  color: ${props => props.$active ? '#FFFFFF' : '#D6D6D6'};
  box-shadow: ${props => props.$active ? '0 0 16px rgba(232, 213, 163, 0.25)' : 'none'};
  letter-spacing: 0.4px;
  transition: all 0.22s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.6);
    color: #FFFFFF;
    background: rgba(232, 213, 163, 0.12);
  }
`

const PillCount = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.12rem 0.5rem;
  border-radius: 50px;
  background: ${props => props.$active ? 'rgba(232, 213, 163, 0.35)' : 'rgba(255, 255, 255, 0.12)'};
  color: ${props => props.$active ? '#FFFFFF' : '#E8D5A3'};
`

const FilterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 0.75rem 0;
`

const ResultCount = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: rgba(232, 213, 163, 0.15);
  margin-left: auto;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(232, 213, 163, 0.4);
  border-radius: 100px;
  flex-shrink: 0;
`

/* ---- Project Grid ---- */
const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
  gap: 1.75rem;
  position: relative;
  z-index: 2;
  width: 100%;
`

/* ---- Spotlight Card ---- */
const Card = styled(motion.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      400px circle at var(--mx, 50%) var(--my, 50%),
      rgba(232, 213, 163, 0.08) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(232, 213, 163, 0.35);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.55);

    &::before {
      opacity: 1;
    }
  }

  /* Category top border */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.$accentColor || '#E8D5A3'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`

const ImageArea = styled.div`
  height: 210px;
  position: relative;
  overflow: hidden;
  background: #0D0D0D;
  border-bottom: 1px solid rgba(255,255,255,0.04);
`

const CarouselImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`

const EmptyImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #333;
`

const CarouselDots = styled.div`
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.35rem;
  z-index: 3;
`

const CarouselDot = styled.div`
  width: ${props => props.$active ? '16px' : '5px'};
  height: 5px;
  border-radius: 3px;
  background: ${props => props.$active ? '#E8D5A3' : 'rgba(255,255,255,0.2)'};
  transition: all 0.3s ease;
`

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$dir === 'left' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
  background: rgba(10,10,10,0.8);
  border: 1px solid rgba(232, 213, 163, 0.2);
  color: #E8D5A3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${ImageArea}:hover & {
    opacity: 1;
  }

  svg { width: 14px; height: 14px; }
`

/* Content area */
const CardBody = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;
`

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
`

const CardTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.22rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.3;
`

const TypeBadge = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  white-space: nowrap;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  flex-shrink: 0;

  ${props => {
    const colors = {
      'PWA': ['#34d399', 'rgba(16, 185, 129, 0.18)', 'rgba(16, 185, 129, 0.4)'],
      'Desktop App': ['#c084fc', 'rgba(139, 92, 246, 0.18)', 'rgba(139, 92, 246, 0.4)'],
      'Mobile App': ['#fbbf24', 'rgba(245, 158, 11, 0.18)', 'rgba(245, 158, 11, 0.4)'],
      'Web App': ['#00E5CC', 'rgba(0, 229, 204, 0.16)', 'rgba(0, 229, 204, 0.38)'],
    }
    const [color, bg, border] = colors[props.$type] || colors['Web App']
    return `color: ${color}; background: ${bg}; border: 1px solid ${border}; font-weight: 700;`
  }}
`

const CardDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.72;
  color: #D6D6D6;
  margin-bottom: 1.35rem;
`

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.35rem;
`

const TechChip = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.28rem 0.75rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #EEEEEE;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(232, 213, 163, 0.18);
    border-color: #E8D5A3;
    color: #FFFFFF;
  }
`

const ExperienceLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0A0A0A;
  background: #E8D5A3;
  text-decoration: none;
  padding: 0.55rem 1.25rem;
  border-radius: 100px;
  transition: background 0.2s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #F0E0B0;
    svg { transform: translateX(3px); }
  }
`

const EmptyState = styled(motion.div)`
  grid-column: 1 / -1;
  text-align: center;
  padding: 5rem 2rem;
  color: #333;
  font-size: 0.9rem;
  border: 1px dashed rgba(255,255,255,0.06);
  border-radius: 20px;
`

/* ---- Category accent colors ---- */
const categoryColors = {
  'Creativity': '#FF6B35',
  'Games': '#c084fc',
  'Productivity Tools': '#00E5CC',
  'Simulation': '#E8D5A3',
  'Developer Utilities': '#4ade80',
}

/* ---- Carousel sub-component ---- */
const ProjectCarousel = ({ folderName }) => {
  const images = getProjectImages(folderName)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const t = setInterval(() => setIdx(p => (p + 1) % images.length), 2500)
    return () => clearInterval(t)
  }, [images.length])

  if (!images.length) return <EmptyImg>No preview</EmptyImg>

  return (
    <>
      <AnimatePresence mode="wait">
        <CarouselImg
          key={idx}
          src={images[idx]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <CarouselArrow $dir="left" onClick={e => { e.stopPropagation(); setIdx(p => (p - 1 + images.length) % images.length) }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </CarouselArrow>
          <CarouselArrow $dir="right" onClick={e => { e.stopPropagation(); setIdx(p => (p + 1) % images.length) }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </CarouselArrow>
          <CarouselDots>
            {images.map((_, i) => <CarouselDot key={i} $active={i === idx} />)}
          </CarouselDots>
        </>
      )}
    </>
  )
}

/* ---- Data ---- */
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Step Tracker',
    folderName: 'StepTracker',
    description: 'A multi-user step tracker with dashboards, leaderboard, competitive charts, and team support — turning your casual walk into a disciplined habit.',
    tech: ['Svelte', 'Hono', 'Cloudflare', 'Javascript', 'Tailwind'],
    category: 'Productivity Tools',
    softwareType: 'PWA',
    deployedUrl: 'https://stepcounter-frontend.learnerbisoyi.workers.dev'
  },
  {
    id: 2,
    title: 'Habibo',
    folderName: 'Habibo',
    description: 'A minimalist hobby tracker with detailed insights and stunning visual analytics — built for people who take their growth seriously.',
    tech: ['React', 'Hono', 'Cloudflare', 'Typescript', 'Tailwind'],
    category: 'Productivity Tools',
    softwareType: 'PWA',
    deployedUrl: 'https://habibo.learnerbisoyi.workers.dev'
  },
  {
    id: 3,
    title: 'Easiest Git & Github Visualizer',
    folderName: 'GitVisualizer',
    description: 'An interactive visual interface to learn all essential Git & Github concepts through meaningful simulation — zero setup required.',
    tech: ['React', 'Cloudflare', 'Framer', 'Tailwind'],
    category: 'Simulation',
    softwareType: 'Web App',
    deployedUrl: 'https://git-github-visualizer.learnerbisoyi.workers.dev'
  },
  {
    id: 4,
    title: 'Database Migrator',
    folderName: 'dbmig',
    description: 'A time-saving tool to migrate PostgreSQL databases across platforms, export/import via Excel, and preview data in minutes.',
    tech: ['Flask', 'Python', 'React', 'PostgreSQL'],
    category: 'Developer Utilities',
    softwareType: 'Web App',
    deployedUrl: 'https://witty-plant-027003000.7.azurestaticapps.net/'
  },
  {
    id: 5,
    title: 'AI Form Builder',
    folderName: 'AIFormBuilder',
    description: 'Create survey forms and manage them by just typing what you need — powered by AI for instant generation and management.',
    tech: ['Groq', 'Python', 'React', 'D1SQLite'],
    category: 'Productivity Tools',
    softwareType: 'Web App',
    deployedUrl: 'https://ai-form-builder-a4w.pages.dev'
  },
  {
    id: 6,
    title: 'TickKick',
    folderName: 'TickKick',
    description: 'A premium-looking todo tracker with a minimalist design and all the essentials you need to stay organized.',
    tech: ['React'],
    category: 'Productivity Tools',
    softwareType: 'Web App',
    deployedUrl: 'https://lemon-pebble-07c34c300.7.azurestaticapps.net'
  },
  {
    id: 7,
    title: 'Neon Video Editor',
    folderName: 'NeonEditor',
    description: 'An ultramodern and efficient video editor for content creators, gamers, and educators. Desktop-grade performance.',
    tech: ['Electron', 'FFmpeg', 'React', 'Zustand', 'IPC', 'Tailwind'],
    category: 'Creativity',
    softwareType: 'Desktop App',
    deployedUrl: 'https://github.com/adityarajbisoyi/Video-Editor/releases/download/v1.0.0/Neon.Video.Editor-0.1.0-setup.exe'
  },
]

/* ---- Main Component ---- */
const Projects = () => {
  const [activeCat, setActiveCat] = useState('All')
  const [activeType, setActiveType] = useState('All')

  // Only show categories that have projects matching activeType (or all categories if activeType === 'All')
  const availableCategories = (() => {
    const pool = activeType === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.softwareType === activeType)
    return ['All', ...Array.from(new Set(pool.map(p => p.category)))]
  })()

  // Only show platform types that exist within the current category selection
  const availablePlatforms = (() => {
    const pool = activeCat === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === activeCat)
    return ['All', ...Array.from(new Set(pool.map(p => p.softwareType)))]
  })()

  // Dynamic counts for each pill
  const getCatCount = (cat) => {
    if (cat === 'All') {
      return activeType === 'All'
        ? PROJECTS_DATA.length
        : PROJECTS_DATA.filter(p => p.softwareType === activeType).length
    }
    return (activeType === 'All'
      ? PROJECTS_DATA.filter(p => p.category === cat)
      : PROJECTS_DATA.filter(p => p.category === cat && p.softwareType === activeType)
    ).length
  }

  const getTypeCount = (type) => {
    if (type === 'All') {
      return activeCat === 'All'
        ? PROJECTS_DATA.length
        : PROJECTS_DATA.filter(p => p.category === activeCat).length
    }
    return (activeCat === 'All'
      ? PROJECTS_DATA.filter(p => p.softwareType === type)
      : PROJECTS_DATA.filter(p => p.category === activeCat && p.softwareType === type)
    ).length
  }

  // Handle category change: ensure activeType still exists in the new category
  const handleCatChange = (cat) => {
    setActiveCat(cat)
    if (activeType !== 'All') {
      const pool = cat === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === cat)
      const validTypes = pool.map(p => p.softwareType)
      if (!validTypes.includes(activeType)) {
        setActiveType('All')
      }
    }
  }

  // Handle platform change: ensure activeCat still exists for this new type
  const handleTypeChange = (type) => {
    setActiveType(type)
    if (activeCat !== 'All') {
      const pool = type === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.softwareType === type)
      const validCats = pool.map(p => p.category)
      if (!validCats.includes(activeCat)) {
        setActiveCat('All')
      }
    }
  }

  const filtered = PROJECTS_DATA.filter(p => {
    const catOk = activeCat === 'All' || p.category === activeCat
    const typeOk = activeType === 'All' || p.softwareType === activeType
    return catOk && typeOk
  })

  // Spotlight effect per card
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mx', `${x}%`)
    card.style.setProperty('--my', `${y}%`)
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTag
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </SectionTag>

        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Things I have <span>built</span>
        </SectionTitle>

        {/* Filters */}
        <FilterSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FilterGroupLabel>Category</FilterGroupLabel>
            <ScrollablePillRow>
              {availableCategories.map(c => (
                <PillTab
                  key={c}
                  $active={activeCat === c}
                  onClick={() => handleCatChange(c)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {c}
                  <PillCount $active={activeCat === c}>{getCatCount(c)}</PillCount>
                </PillTab>
              ))}
              <ResultCount>{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</ResultCount>
            </ScrollablePillRow>

            <FilterDivider />

            <FilterGroupLabel style={{ marginTop: '0.75rem' }}>Platform</FilterGroupLabel>
            <ScrollablePillRow>
              {availablePlatforms.map(t => (
                <PillTab
                  key={t}
                  $active={activeType === t}
                  onClick={() => handleTypeChange(t)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {t}
                  <PillCount $active={activeType === t}>{getTypeCount(t)}</PillCount>
                </PillTab>
              ))}
            </ScrollablePillRow>
          </motion.div>
        </FilterSection>


        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <EmptyState
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No projects match the selected filters.
            </EmptyState>
          ) : (
            <ProjectsGrid
              key="grid"
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map(project => (
                <Card
                  key={project.id}
                  variants={cardVariants}
                  $accentColor={categoryColors[project.category] || '#E8D5A3'}
                  onMouseMove={handleMouseMove}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageArea>
                    <ProjectCarousel folderName={project.folderName} />
                  </ImageArea>

                  <CardBody>
                    <CardTop>
                      <CardTitle>{project.title}</CardTitle>
                      <TypeBadge $type={project.softwareType}>{project.softwareType}</TypeBadge>
                    </CardTop>

                    <CardDesc>{project.description}</CardDesc>

                    <TechRow>
                      {project.tech.map(t => <TechChip key={t}>{t}</TechChip>)}
                    </TechRow>

                    <ExperienceLink
                      href={project.deployedUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Experience
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </ExperienceLink>
                  </CardBody>
                </Card>
              ))}
            </ProjectsGrid>
          )}
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects
