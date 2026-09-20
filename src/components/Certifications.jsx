import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'

/* ─── Real Certifications Data (LinkedIn) ─── */
const CERTIFICATIONS = [
  {
    id: 1,
    title: 'IBM RAG and Agentic AI Professional Certificate',
    issuer: 'IBM',
    date: 'Sep 2026',
    credentialId: 'Q1RY6EZTO52M',
    skills: ['Retrieval-Augmented Generation (RAG)', 'Agentic AI Development'],
    description: 'Earned the IBM RAG and Agentic AI Professional Certificate, demonstrating proficiency in designing and deploying advanced generative AI applications and autonomous multi-agent pipelines.',
    category: 'AI & Agents',
  },
  {
    id: 2,
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    date: 'Nov 2025',
    credentialId: null,
    skills: ['Docker Products', 'Containerization'],
    description: 'Verified competencies in container architecture, Dockerfile optimization, multi-container compose configurations, and isolated reproducible development environments.',
    category: 'DevOps & Tools',
  },
  {
    id: 3,
    title: 'Foundation: Introduction to LangGraph',
    issuer: 'LangChain',
    date: 'Nov 2025',
    credentialId: 'jcphbyrpdw',
    skills: ['Multi-agent Systems', 'AI Agents'],
    description: 'Mastered core LangGraph architectures for stateful cyclic graphs, branching agent workflows, memory persistence, and human-in-the-loop controls.',
    category: 'AI & Agents',
  },
  {
    id: 4,
    title: 'Essential Skills in Adobe Premiere Pro 2025 Professional Certificate',
    issuer: 'Adobe',
    date: 'Jul 2025',
    credentialId: null,
    skills: ['Non-linear Editing', 'Video Editing'],
    description: 'Industry credential covering professional non-linear video editing, audio-visual timing, multi-track sequencing, and high-performance post-production workflows.',
    category: 'Creative & Media',
  },
  {
    id: 5,
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'GitHub',
    date: 'Jul 2025',
    credentialId: null,
    skills: ['GitHub', 'Git Version Control'],
    description: 'Practical validation in collaborative Git development, pull request workflows, branch protection rules, and enterprise repository management.',
    category: 'DevOps & Tools',
  },
  {
    id: 6,
    title: 'Google Data Analytics',
    issuer: 'Google',
    date: 'Aug 2024',
    credentialId: 'VM1T4RCWUNGY',
    skills: ['Data Analytics', 'SQL', 'Spreadsheets'],
    description: 'Comprehensive program covering end-to-end data analytics lifecycle, structured data transformation, SQL querying, analytical thinking, and visual storytelling.',
    category: 'Data & Analytics',
  },
  {
    id: 7,
    title: 'Google Cybersecurity',
    issuer: 'Google',
    date: 'Jun 2024',
    credentialId: 'G2HCQGUPVX8JC',
    skills: ['Cybersecurity', 'Network Security'],
    description: 'Hands-on practice in identifying cyber threats, vulnerabilities, SIEM tooling, network defense architectures, and proactive incident response.',
    category: 'Security',
  },
]

const CERT_CATEGORIES = ['All', ...Array.from(new Set(CERTIFICATIONS.map(c => c.category)))]

/* ─── GitHub Achievements (real profile data) ─── */
const ACHIEVEMENTS = [
  { name: 'Pair Extraordinaire', description: 'Co-authored commits on merged pull requests', icon: '🤝' },
  { name: 'Pull Shark x2', description: 'Opened pull requests that have been merged — earned twice', icon: '🦈' },
  { name: 'Quickdraw', description: 'Closed an issue or pull request within 5 minutes of opening', icon: '⚡' },
  { name: 'YOLO', description: 'Merged a pull request without code review', icon: '🎲' },
]

/* ─── Styles ─── */
const CertSection = styled.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`

const CertContainer = styled.div`
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

/* ─── Slideshow Tile ─── */
const ShowcaseTile = styled(motion.div)`
  background: #121212;
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  max-width: 780px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #E8D5A3, transparent);
  }

  @media (max-width: 600px) { padding: 1.5rem; }
`

const CertCounter = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #E8D5A3;
  text-transform: uppercase;
`

const CertIssuerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const IssuerBadge = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #C4A96B;
  background: rgba(232, 213, 163, 0.1);
  border: 1px solid rgba(232, 213, 163, 0.25);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
`

const CertDate = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #888;
`

const CertCategoryBadge = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.22rem 0.6rem;
  border-radius: 6px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-left: auto;
  background: ${props => {
    const m = {
      'AI & Agents': 'rgba(168, 85, 247, 0.12)',
      'DevOps & Tools': 'rgba(251, 191, 36, 0.12)',
      'Creative & Media': 'rgba(244, 63, 94, 0.12)',
      'Data & Analytics': 'rgba(56, 189, 248, 0.12)',
      'Security': 'rgba(239, 68, 68, 0.12)',
    }
    return m[props.$cat] || 'rgba(255,255,255,0.08)'
  }};
  color: ${props => {
    const m = {
      'AI & Agents': '#C084FC',
      'DevOps & Tools': '#FBBF24',
      'Creative & Media': '#FB7185',
      'Data & Analytics': '#38BDF8',
      'Security': '#F87171',
    }
    return m[props.$cat] || '#E8D5A3'
  }};
  border: 1px solid ${props => {
    const m = {
      'AI & Agents': 'rgba(168, 85, 247, 0.3)',
      'DevOps & Tools': 'rgba(251, 191, 36, 0.3)',
      'Creative & Media': 'rgba(244, 63, 94, 0.3)',
      'Data & Analytics': 'rgba(56, 189, 248, 0.3)',
      'Security': 'rgba(239, 68, 68, 0.3)',
    }
    return m[props.$cat] || 'rgba(255,255,255,0.15)'
  }};
`

const CertTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.25;
  margin: 0;

  @media (max-width: 600px) { font-size: 1.3rem; }
`

const CertDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #C8C8C8;
  margin: 0;
`

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.2rem;
`

const SkillTag = styled.span`
  font-size: 0.72rem;
  color: #D6D6D6;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-family: 'Space Grotesk', sans-serif;
`

const CredentialIdTag = styled.div`
  font-size: 0.72rem;
  color: #8E8E8E;
  font-family: monospace;
  letter-spacing: 0.5px;
`

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`

const NavBtn = styled.button`
  width: 42px; height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(232, 213, 163, 0.3);
  background: rgba(232, 213, 163, 0.06);
  color: #E8D5A3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
  }

  svg { width: 16px; height: 16px; }
`

const DotRow = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`

const Dot = styled.button`
  width: ${props => props.$active ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background: ${props => props.$active ? '#E8D5A3' : 'rgba(255,255,255,0.15)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover { background: rgba(232, 213, 163, 0.5); }
`

const ToggleViewBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: 2.5rem auto 0;
  padding: 0.85rem 2rem;
  border-radius: 100px;
  border: 1px solid rgba(232, 213, 163, 0.35);
  background: rgba(232, 213, 163, 0.06);
  color: #E8D5A3;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 6px 20px rgba(232, 213, 163, 0.3);
  }

  svg { width: 14px; height: 14px; }
`

/* ─── Grid Mode ─── */
const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
`

const FilterPill = styled(motion.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.5rem 1.15rem;
  border-radius: 100px;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid ${props => props.$active ? '#E8D5A3' : 'rgba(255,255,255,0.18)'};
  background: ${props => props.$active ? 'rgba(232, 213, 163, 0.22)' : 'rgba(255,255,255,0.04)'};
  color: ${props => props.$active ? '#FFFFFF' : '#D6D6D6'};
  letter-spacing: 0.4px;
  transition: all 0.22s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.6);
    color: #FFFFFF;
  }
`

const CertGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
  gap: 1.5rem;
`

const CertCard = styled(motion.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: ${props => {
      const m = {
        'AI & Agents': '#C084FC',
        'DevOps & Tools': '#FBBF24',
        'Creative & Media': '#FB7185',
        'Data & Analytics': '#38BDF8',
        'Security': '#F87171',
      }
      return m[props.$cat] || '#E8D5A3'
    }};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(232, 213, 163, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.55);
    &::before { opacity: 1; }
  }
`

const CertCardTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.3;
`

const CertCardIssuer = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #E8D5A3;
`

const CertCardDesc = styled.p`
  font-size: 0.88rem;
  line-height: 1.6;
  color: #B8B8B8;
  margin: 0;
`

const CertCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 0.5rem;
  padding-top: 0.5rem;
`

const CertCardDate = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: #888;
`

/* ─── Achievements Section ─── */
const AchievementsBlock = styled.div`
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
`

const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(232, 213, 163, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.4);
    background: rgba(232, 213, 163, 0.04);
    transform: translateY(-2px);
  }
`

const AchievementIcon = styled.div`
  font-size: 1.8rem;
  flex-shrink: 0;
  line-height: 1;
`

const AchievementInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const AchievementName = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFFFFF;
`

const AchievementDesc = styled.span`
  font-size: 0.82rem;
  color: #999;
  line-height: 1.45;
`

/* ─── Component ─── */
const Certifications = () => {
  const [showAll, setShowAll] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [filterCat, setFilterCat] = useState('All')
  const timerRef = useRef(null)

  // Auto-advance in slideshow mode every 3 seconds
  useEffect(() => {
    if (showAll) return
    timerRef.current = setInterval(() => {
      setActiveIdx(p => (p + 1) % CERTIFICATIONS.length)
    }, 3000)
    return () => clearInterval(timerRef.current)
  }, [showAll])

  const prev = () => setActiveIdx(p => (p - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length)
  const next = () => setActiveIdx(p => (p + 1) % CERTIFICATIONS.length)
  const jumpTo = (i) => setActiveIdx(i)

  const cert = CERTIFICATIONS[activeIdx]

  const filteredCerts = filterCat === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === filterCat)

  return (
    <CertSection id="certifications">
      <CertContainer>
        <SectionTag
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Achievements
        </SectionTag>

        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Licenses & <span>Certifications</span>
        </SectionTitle>

        <AnimatePresence mode="wait">
          {!showAll ? (
            /* Slideshow Mode */
            <motion.div
              key="slideshow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <ShowcaseTile
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CertCounter>
                    Certificate {activeIdx + 1} of {CERTIFICATIONS.length}
                  </CertCounter>

                  <CertIssuerRow>
                    <IssuerBadge>{cert.issuer}</IssuerBadge>
                    <CertDate>{cert.date}</CertDate>
                    <CertCategoryBadge $cat={cert.category}>{cert.category}</CertCategoryBadge>
                  </CertIssuerRow>

                  <CertTitle>{cert.title}</CertTitle>
                  <CertDesc>{cert.description}</CertDesc>

                  {cert.skills && cert.skills.length > 0 && (
                    <SkillsRow>
                      {cert.skills.map(skill => (
                        <SkillTag key={skill}>{skill}</SkillTag>
                      ))}
                    </SkillsRow>
                  )}

                  {cert.credentialId && (
                    <CredentialIdTag>Credential ID: {cert.credentialId}</CredentialIdTag>
                  )}

                  <NavRow>
                    <NavBtn onClick={prev} aria-label="Previous Certificate">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </NavBtn>
                    <DotRow>
                      {CERTIFICATIONS.map((_, i) => (
                        <Dot key={i} $active={i === activeIdx} onClick={() => jumpTo(i)} aria-label={`Go to slide ${i + 1}`} />
                      ))}
                    </DotRow>
                    <NavBtn onClick={next} aria-label="Next Certificate">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </NavBtn>
                  </NavRow>
                </ShowcaseTile>
              </AnimatePresence>

              <ToggleViewBtn
                onClick={() => setShowAll(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Certifications ({CERTIFICATIONS.length})
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
                </svg>
              </ToggleViewBtn>
            </motion.div>
          ) : (
            /* Grid Mode */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FilterRow>
                {CERT_CATEGORIES.map(cat => (
                  <FilterPill
                    key={cat}
                    $active={filterCat === cat}
                    onClick={() => setFilterCat(cat)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {cat}
                  </FilterPill>
                ))}
              </FilterRow>

              <CertGrid
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                initial="hidden"
                animate="visible"
              >
                {filteredCerts.map(c => (
                  <CertCard
                    key={c.id}
                    $cat={c.category}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                    }}
                  >
                    <CertCardTitle>{c.title}</CertCardTitle>
                    <CertCardIssuer>{c.issuer}</CertCardIssuer>
                    <CertCardDesc>{c.description}</CertCardDesc>

                    {c.skills && c.skills.length > 0 && (
                      <SkillsRow>
                        {c.skills.map(skill => (
                          <SkillTag key={skill}>{skill}</SkillTag>
                        ))}
                      </SkillsRow>
                    )}

                    {c.credentialId && (
                      <CredentialIdTag>ID: {c.credentialId}</CredentialIdTag>
                    )}

                    <CertCardFooter>
                      <CertCategoryBadge $cat={c.category}>{c.category}</CertCategoryBadge>
                      <CertCardDate>{c.date}</CertCardDate>
                    </CertCardFooter>
                  </CertCard>
                ))}
              </CertGrid>

              <ToggleViewBtn
                onClick={() => setShowAll(false)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Back to Slideshow
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </ToggleViewBtn>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── GitHub Achievements ─── */}
        <AchievementsBlock>
          <SectionTag
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            GitHub Achievements
          </SectionTag>

          <AchievementsGrid>
            {ACHIEVEMENTS.map((ach, i) => (
              <AchievementCard
                key={ach.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <AchievementIcon>{ach.icon}</AchievementIcon>
                <AchievementInfo>
                  <AchievementName>{ach.name}</AchievementName>
                  <AchievementDesc>{ach.description}</AchievementDesc>
                </AchievementInfo>
              </AchievementCard>
            ))}
          </AchievementsGrid>
        </AchievementsBlock>
      </CertContainer>
    </CertSection>
  )
}

export default Certifications
