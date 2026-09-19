import { motion, useInView } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { useRef, useEffect, useState } from 'react'

/* ─── Counter ─── */
const useCounter = (target, duration = 1500, inView) => {
  const [val, setVal] = useState(0)
  const ran = useRef(false)
  useEffect(() => {
    if (!inView || ran.current) return
    ran.current = true
    const num = parseInt(target)
    if (isNaN(num)) { setVal(target); return }
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * num))
      if (p < 1) requestAnimationFrame(step)
      else setVal(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])
  return val
}

const CounterVal = ({ value }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCounter(value, 1400, inView)
  return <span ref={ref}>{count}</span>
}

/* ─── Keyframes ─── */
const tickerScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`

/* ─── Styles ─── */
const AboutSection = styled.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionTag = styled(motion.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: #E8D5A3;
    flex-shrink: 0;
  }
`

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -1.5px;
  line-height: 1.12;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;
  max-width: 820px;

  span {
    color: #E8D5A3;
    font-style: italic;
    background: linear-gradient(135deg, #FFF6DC 0%, #E8D5A3 50%, #C4A96B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 600px) {
    margin-bottom: 2.5rem;
    letter-spacing: -0.8px;
  }
`

/* ─── Bento Grid ─── */
const BentoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  position: relative;
  z-index: 2;

  /* ── Desktop: 12-col ── */
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "bio  bio  bio  bio  bio  bio  sk   sk   sk   sk   sk   sk "
    "bio  bio  bio  bio  bio  bio  sk   sk   sk   sk   sk   sk "
    "st1  st1  st1  st2  st2  st2  app  app  app  app  app  app"
    "tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr";

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "bio  bio "
      "sk   sk  "
      "st1  st2 "
      "app  app "
      "tkr  tkr ";
  }

  /* ── Mobile ── */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "bio"
      "sk "
      "st1"
      "st2"
      "app"
      "tkr";
  }
`

/* ─── Base card ─── */
const BentoCard = styled(motion.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.25rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.35);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(232,213,163,0.06) 0%, transparent 65%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  &:hover::before { opacity: 1; }
`

/* ─── Named area cards ─── */
const BiographyCard = styled(BentoCard)`
  grid-area: bio;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SkillsCard = styled(BentoCard)`
  grid-area: sk;
  display: flex;
  flex-direction: column;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`

const Stat1Card = styled(BentoCard)`
  grid-area: st1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Stat2Card = styled(BentoCard)`
  grid-area: st2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ApproachCard = styled(BentoCard)`
  grid-area: app;
  padding: 1.8rem 2.25rem;
`

const TickerCard = styled(BentoCard)`
  grid-area: tkr;
  padding: 1.25rem 2.25rem;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  overflow: hidden;
`

/* ─── Card internals ─── */
const CardTag = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  display: block;
  margin-bottom: 0.9rem;
`

const CardTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1.15rem;
`

const AboutText = styled.div`
  font-size: 1.05rem;
  line-height: 1.85;
  color: #D6D6D6;

  p {
    margin-bottom: 1.35rem;
    &:last-child { margin-bottom: 0; }
  }

  strong {
    color: #FFFFFF;
    font-weight: 700;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
  }
`

/* ─── Stats ─── */
const BigNumber = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.6rem, 4.5vw, 3.8rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1;
  margin-bottom: 0.5rem;
`

const StatDesc = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  color: #B8B8B8;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`

/* ─── Skills ─── */
const skillDomains = [
  { name: 'Frontend',  color: '#00E5CC', skills: ['React', 'Svelte', 'Next.js', 'Three.js', 'Framer'] },
  { name: 'Backend',   color: '#E8D5A3', skills: ['Node.js', 'Hono', 'Flask', 'Python', 'GraphQL'] },
  { name: 'Database',  color: '#c084fc', skills: ['PostgreSQL', 'MongoDB', 'D1 SQLite', 'Redis'] },
  { name: 'Platform',  color: '#FF6B35', skills: ['Cloudflare', 'Docker', 'AWS', 'GitHub'] },
]

const DomainGroup = styled.div`
  margin-bottom: 1.2rem;
  &:last-child { margin-bottom: 0; }
`

const DomainLabel = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${p => p.$color};
  margin-bottom: 0.55rem;
`

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`

const Pill = styled(motion.span)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.32rem 0.8rem;
  border-radius: 100px;
  background: ${p => p.$color}20;
  border: 1px solid ${p => p.$color}55;
  color: #FFFFFF;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  &:hover {
    background: ${p => p.$color}35;
    border-color: ${p => p.$color};
    transform: translateY(-1px);
  }
`

/* ─── Ticker ─── */
const TickerLabel = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  white-space: nowrap;
  flex-shrink: 0;
`

const TickerTrack = styled.div`
  display: flex;
  gap: 2.5rem;
  animation: ${tickerScroll} 16s linear infinite;
  white-space: nowrap;
  width: max-content;
`

const TickerItem = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #D4D4D4;
  letter-spacing: 0.6px;
`

const LEARNING = ['Rust', 'WebAssembly', 'Kubernetes', 'Go', 'Distributed Systems',
                  'Rust', 'WebAssembly', 'Kubernetes', 'Go', 'Distributed Systems']

/* ─── Component ─── */
const About = () => {
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } }
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } }
  }

  const spotlight = (e) => {
    const c = e.currentTarget
    const r = c.getBoundingClientRect()
    c.style.setProperty('--mx', `${((e.clientX - r.left) / r.width)  * 100}%`)
    c.style.setProperty('--my', `${((e.clientY - r.top)  / r.height) * 100}%`)
  }

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTag
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who I am
        </SectionTag>

        <SectionTitle
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Building at the <span>intersection</span><br />
          of craft and technology
        </SectionTitle>

        <BentoGrid
          as={motion.div}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Biography */}
          <BiographyCard variants={cardVariants} onMouseMove={spotlight}>
            <CardTag>Background</CardTag>
            <AboutText>
              <p>
                I am a <strong>full-stack developer</strong> with a deep passion for crafting
                innovative, efficient, and beautiful digital experiences. My journey started
                with raw curiosity — taking things apart to understand how they work — and
                evolved into expertise across the entire stack.
              </p>
              <p>
                I believe great software is like great architecture: <strong>structurally sound</strong>,
                aesthetically considered, and built to stand the test of time. Every line of
                code I write is crafted with performance, accessibility, and user delight in mind.
              </p>
              <p>
                My mission is to bridge the gap between <strong>imagination and reality</strong> —
                creating digital experiences that function flawlessly and leave users genuinely impressed.
              </p>
            </AboutText>
          </BiographyCard>

          {/* Skills */}
          <SkillsCard variants={cardVariants} onMouseMove={spotlight}>
            <CardTag>Stack</CardTag>
            <CardTitle>Core Technologies</CardTitle>
            <SkillsGrid>
              {skillDomains.map(domain => (
                <DomainGroup key={domain.name}>
                  <DomainLabel $color={domain.color}>{domain.name}</DomainLabel>
                  <PillRow>
                    {domain.skills.map((skill, i) => (
                      <Pill
                        key={skill}
                        $color={domain.color}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.06 }}
                      >
                        {skill}
                      </Pill>
                    ))}
                  </PillRow>
                </DomainGroup>
              ))}
            </SkillsGrid>
          </SkillsCard>

          {/* Stat 1 */}
          <Stat1Card variants={cardVariants} onMouseMove={spotlight}>
            <CardTag>Projects</CardTag>
            <BigNumber><CounterVal value="20+" /></BigNumber>
            <StatDesc>Quality Projects Shipped</StatDesc>
          </Stat1Card>

          {/* Stat 2 */}
          <Stat2Card variants={cardVariants} onMouseMove={spotlight}>
            <CardTag>Experience</CardTag>
            <BigNumber><CounterVal value="2+" /></BigNumber>
            <StatDesc>Years of Building</StatDesc>
          </Stat2Card>

          {/* Approach */}
          <ApproachCard variants={cardVariants} onMouseMove={spotlight}>
            <CardTag>Approach</CardTag>
            <AboutText>
              <p style={{ marginBottom: 0 }}>
                I approach every project as a <strong>product thinker</strong> — starting with
                the user problem, designing the system, then writing the code. I care deeply
                about the tiny details that separate good from <strong>exceptional</strong>.
              </p>
            </AboutText>
          </ApproachCard>

          {/* Learning ticker */}
          <TickerCard variants={cardVariants} style={{ overflow: 'hidden' }}>
            <TickerLabel>Exploring</TickerLabel>
            <div style={{ overflow: 'hidden', flex: 1 }}>
              <TickerTrack>
                {LEARNING.map((item, i) => (
                  <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>
                    <TickerItem>{item}</TickerItem>
                    <span style={{ color: '#E8D5A3', fontSize: '0.45rem', verticalAlign: 'middle' }}>&#9632;</span>
                  </span>
                ))}
              </TickerTrack>
            </div>
          </TickerCard>
        </BentoGrid>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
