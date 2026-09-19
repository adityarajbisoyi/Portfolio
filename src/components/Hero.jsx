import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react'

/* ─── Keyframes ─── */
const marqueeScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
`

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

/* ─── Section ─── */
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 8.5rem 2rem 4.5rem;

  @media (max-width: 900px)  { padding: 7.5rem 1.5rem 4rem; }
  @media (max-width: 600px)  { padding: 6.5rem 1.25rem 3.5rem; }
`

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

/* Subtle dot-grid overlay */
const GridLines = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(rgba(232,213,163,0.055) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 1;
`

/* ─── Two-column layout ─── */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 4.5rem;
  align-items: center;
  width: 100%;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

/* ─── Mobile avatar (only on small screens) ─── */
const MobileAvatar = styled(motion.div)`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
    order: 1;
  }
`

const MobileAvatarImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  border: 2px solid rgba(232,213,163,0.25);
  box-shadow: 0 0 40px rgba(232,213,163,0.12);
`

/* ─── Kicker ─── */
const Kicker = styled(motion.p)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: #E8D5A3;
    flex-shrink: 0;
  }
`

/* ─── Headline ─── */
const HeadlineWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 1.75rem;
`

const Headline = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 6.5vw, 6rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -2px;
  color: #ffffff;
  margin: 0;

  .gold    { color: #E8D5A3; font-style: italic; }
  .outline {
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.35);
    color: transparent;
  }

  @media (max-width: 600px) {
    font-size: clamp(2.4rem, 9vw, 3.5rem);
    letter-spacing: -1px;
  }
`

/* ─── Role / Description ─── */
const Role = styled(motion.p)`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.78;
  color: #D4D4D4;
  margin-bottom: 2.25rem;
  max-width: 520px;

  strong {
    color: #FFFFFF;
    font-weight: 700;
  }

  @media (max-width: 900px) { max-width: 100%; }
`

/* ─── CTA row ─── */
const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
`

const PrimaryBtn = styled(motion.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #0A0A0A;
  background: #E8D5A3;
  border: none;
  padding: 0.85rem 1.9rem;
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.55s ease;
  }
  &:hover::after { transform: translateX(100%); }

  @media (max-width: 400px) { padding: 0.8rem 1.5rem; font-size: 0.78rem; }
`

const SecondaryBtn = styled(motion.a)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #E8D5A3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 0;
  transition: color 0.2s ease;

  svg { transition: transform 0.3s ease; }
  &:hover { color: #FFFFFF; svg { transform: translateX(4px); } }
`

/* ─── Profile tilt card (desktop) ─── */
/* ─── Profile tilt card (desktop) ─── */
const ProfileSide = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 1050px) { display: none; }
`

const TiltCard = styled(motion.div)`
  width: 100%;
  max-width: 440px;
  aspect-ratio: 4/5;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(232, 213, 163, 0.2);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(232, 213, 163, 0.06);
  cursor: none;
  transform-style: preserve-3d;
  perspective: 1000px;
  background: #141414;
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 10, 0.88) 100%);
`

const GlareLayer = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(232,213,163,0.08) 0%,
    transparent 50%,
    rgba(0,229,204,0.04) 100%
  );
  pointer-events: none;
`

const CardLabel = styled.div`
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  right: 1.75rem;
  z-index: 5;

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.3px;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.72rem;
    font-weight: 700;
    color: #E8D5A3;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
`

/* ─── Horizontal Metrics Strip ─── */
const StatsDeck = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 2.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 1.75rem 0;
  }
`

const StatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1rem;
    top: 15%;
    height: 70%;
    width: 1px;
    background: rgba(255, 255, 255, 0.08);

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const StatNum = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #E8D5A3;
  line-height: 1;
  letter-spacing: -1px;
`

const StatLabel = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

/* ─── Marquee ticker ─── */
const MarqueeWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  margin-top: 0.5rem;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 0.85rem 0;
  /* mask out edges */
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
`

const MarqueeTrack = styled.div`
  display: flex;
  gap: 2.5rem;
  animation: ${marqueeScroll} 22s linear infinite;
  white-space: nowrap;
  width: max-content;
`

const MarqueeItem = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #B8B8B8;
`

const MarqueeDot = styled.span`
  color: #E8D5A3;
  font-size: 0.55rem;
  vertical-align: middle;
`

/* ─── Scroll indicator ─── */
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  .line {
    width: 1px;
    height: 42px;
    background: linear-gradient(to bottom, rgba(232,213,163,0.7), transparent);
    animation: ${scrollBounce} 2.2s ease-in-out infinite;
  }

  span {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #E8D5A3;
    writing-mode: vertical-rl;
  }

  @media (max-width: 768px) { display: none; }
`

/* ─── Data ─── */
const STATS = [
  { num: '20+', label: 'Projects Shipped' },
  { num: '2+', label: 'Years Building' },
  { num: '100%', label: 'Satisfaction' },
]
const MARQUEE_ITEMS = [
  'React', 'Node.js', 'Svelte', 'Cloudflare', 'TypeScript',
  'Three.js', 'Framer Motion', 'PostgreSQL', 'Hono', 'Python',
  'React', 'Node.js', 'Svelte', 'Cloudflare', 'TypeScript',
  'Three.js', 'Framer Motion', 'PostgreSQL', 'Hono', 'Python',
]

/* ─── Component ─── */
const Hero = () => {
  const cardRef  = useRef(null)
  const mouseX   = useMotionValue(0)
  const mouseY   = useMotionValue(0)

  const rotateX  = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 250, damping: 22 })
  const rotateY  = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 250, damping: 22 })

  const handleCardMove  = (e) => {
    const r = cardRef.current?.getBoundingClientRect()
    if (!r) return
    mouseX.set((e.clientX - r.left) / r.width  - 0.5)
    mouseY.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const handleCardLeave = () => { mouseX.set(0); mouseY.set(0) }

  const scrollToProjects = () => {
    if (window.lenis) {
      window.lenis.scrollTo('#projects', { offset: -20, duration: 1.15 })
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    if (window.lenis) {
      window.lenis.scrollTo('#contact', { offset: -20, duration: 1.15 })
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroSection id="home">
      <GridLines />

      <HeroContainer>
        <Grid>
          {/* Text */}
          <TextSide>
            {/* Mobile profile avatar */}
            <MobileAvatar
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,0.36,1] }}
            >
              <MobileAvatarImg src="/profile.jpg" alt="Aditya Raj Bisoyi" />
            </MobileAvatar>

            <Kicker
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Full-Stack Developer
            </Kicker>

            <HeadlineWrapper>
              <Headline>
                {[
                  { text: 'Creator,',         cls: '' },
                  { text: 'Developer',        cls: 'gold' },
                  { text: '& Designer.',      cls: 'outline' },
                ].map(({ text, cls }, i) => (
                  <motion.div
                    key={text}
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.22 + i * 0.13, ease: [0.22,1,0.36,1] }}
                  >
                    <span className={cls || undefined}>{text}</span>
                  </motion.div>
                ))}
              </Headline>
            </HeadlineWrapper>

            <Role
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
            >
              I transform complex problems into elegant, high-performance
              solutions — building applications that push what is possible,
              with precision and craft.
            </Role>

            <ButtonRow
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
            >
              <PrimaryBtn
                onClick={scrollToProjects}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
              </PrimaryBtn>
              <SecondaryBtn onClick={scrollToContact} as={motion.div} whileHover={{ x: 3 }}>
                Contact me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </SecondaryBtn>
            </ButtonRow>
          </TextSide>

          {/* Desktop tilt card */}
          <ProfileSide>
            <TiltCard
              ref={cardRef}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22,1,0.36,1] }}
            >
              <ProfileImg src="/profile.jpg" alt="Aditya Raj Bisoyi" />
              <CardOverlay />
              <GlareLayer />
              <CardLabel>
                <h3>Aditya Raj Bisoyi</h3>
                <p>Full-Stack Developer</p>
              </CardLabel>
            </TiltCard>
          </ProfileSide>
        </Grid>

        {/* Horizontal metrics strip bridging full container width */}
        <StatsDeck
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          {STATS.map((s, i) => (
            <StatCard
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 + i * 0.08, duration: 0.45 }}
            >
              <StatNum>{s.num}</StatNum>
              <StatLabel>{s.label}</StatLabel>
            </StatCard>
          ))}
        </StatsDeck>

        {/* Marquee ticker */}
        <MarqueeWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <MarqueeTrack>
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>
                <MarqueeItem>{item}</MarqueeItem>
                <MarqueeDot>&#9632;</MarqueeDot>
              </span>
            ))}
          </MarqueeTrack>
        </MarqueeWrapper>
      </HeroContainer>

      {/* Scroll indicator */}
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="line" />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero
