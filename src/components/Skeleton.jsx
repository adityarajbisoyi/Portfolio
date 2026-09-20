import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const SkeletonPulse = styled(motion.div)`
  background: linear-gradient(
    90deg,
    rgba(232, 213, 163, 0.04) 0%,
    rgba(232, 213, 163, 0.10) 50%,
    rgba(232, 213, 163, 0.04) 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.8s ease-in-out infinite;
  border-radius: ${props => props.$radius || '8px'};
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '20px'};
`

const SkeletonContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

/* Hero Skeleton */
const HeroSkeletonWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const HeroSkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const HeroTextSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const HeroProfileSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

/* Section Skeleton */
const SectionSkeletonWrapper = styled.section`
  padding: 6rem 2rem;
`

const SectionSkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const CardSkeleton = styled(motion.div)`
  background: rgba(22, 22, 42, 0.4);
  border: 1px solid rgba(91, 164, 230, 0.08);
  border-radius: 12px;
  overflow: hidden;
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export const HeroSkeleton = () => (
  <HeroSkeletonWrapper>
    <HeroSkeletonGrid
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroTextSkeleton as={motion.div} variants={itemVariants}>
        <SkeletonPulse $height="14px" $width="100px" />
        <SkeletonPulse $height="48px" $width="80%" />
        <SkeletonPulse $height="48px" $width="60%" />
        <SkeletonPulse $height="24px" $width="70%" style={{ marginTop: '0.5rem' }} />
        <SkeletonPulse $height="16px" $width="90%" style={{ marginTop: '0.5rem' }} />
        <SkeletonPulse $height="16px" $width="85%" />
        <SkeletonPulse $height="16px" $width="75%" />
        <SkeletonPulse $height="48px" $width="180px" $radius="8px" style={{ marginTop: '1rem' }} />
      </HeroTextSkeleton>

      <HeroProfileSkeleton as={motion.div} variants={itemVariants}>
        <SkeletonPulse $height="280px" $width="280px" $radius="50%" />
        <SkeletonPulse $height="28px" $width="200px" />
      </HeroProfileSkeleton>
    </HeroSkeletonGrid>
  </HeroSkeletonWrapper>
)

export const AboutSkeleton = () => (
  <SectionSkeletonWrapper>
    <SkeletonContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <SkeletonPulse $height="36px" $width="250px" />
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SkeletonPulse $height="16px" $width="100%" />
          <SkeletonPulse $height="16px" $width="95%" />
          <SkeletonPulse $height="16px" $width="90%" />
          <SkeletonPulse $height="16px" $width="100%" style={{ marginTop: '1rem' }} />
          <SkeletonPulse $height="16px" $width="85%" />
          <SkeletonPulse $height="16px" $width="92%" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SkeletonPulse $height="24px" $width="180px" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonPulse key={i} $height="44px" $radius="8px" />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '4rem' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <SkeletonPulse $height="48px" $width="80px" style={{ margin: '0 auto' }} />
            <SkeletonPulse $height="14px" $width="120px" style={{ margin: '0.5rem auto 0' }} />
          </div>
        ))}
      </motion.div>
    </SkeletonContainer>
  </SectionSkeletonWrapper>
)

export const ProjectsSkeleton = () => (
  <SectionSkeletonWrapper>
    <SkeletonContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <SkeletonPulse $height="36px" $width="200px" />
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonPulse key={i} $height="40px" $width="120px" $radius="6px" />
        ))}
      </motion.div>

      <SectionSkeletonGrid as={motion.div} variants={itemVariants}>
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i}>
            <SkeletonPulse $height="180px" $radius="0" />
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <SkeletonPulse $height="24px" $width="70%" />
              <SkeletonPulse $height="14px" $width="100%" />
              <SkeletonPulse $height="14px" $width="85%" />
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <SkeletonPulse $height="28px" $width="60px" $radius="4px" />
                <SkeletonPulse $height="28px" $width="80px" $radius="4px" />
                <SkeletonPulse $height="28px" $width="70px" $radius="4px" />
              </div>
              <SkeletonPulse $height="36px" $width="110px" $radius="6px" style={{ marginTop: '0.5rem' }} />
            </div>
          </CardSkeleton>
        ))}
      </SectionSkeletonGrid>
    </SkeletonContainer>
  </SectionSkeletonWrapper>
)

export const ContactSkeleton = () => (
  <SectionSkeletonWrapper>
    <SkeletonContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <SkeletonPulse $height="36px" $width="220px" />
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <SkeletonPulse $height="28px" $width="200px" />
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonPulse key={i} $height="20px" $width="80%" />
          ))}
          <SkeletonPulse $height="16px" $width="90%" style={{ marginTop: '1rem' }} />
          <SkeletonPulse $height="16px" $width="85%" />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonPulse key={i} $height="44px" $width="44px" $radius="50%" />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <SkeletonPulse $height="28px" $width="160px" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <SkeletonPulse $height="14px" $width="100px" style={{ marginBottom: '0.5rem' }} />
              <SkeletonPulse $height="44px" $radius="6px" />
            </div>
          ))}
          <SkeletonPulse $height="48px" $radius="8px" />
        </div>
      </motion.div>
    </SkeletonContainer>
  </SectionSkeletonWrapper>
)

const FullPageSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* Nav Skeleton */}
    <div style={{ 
      padding: '1rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <SkeletonPulse $height="24px" $width="120px" />
      <div style={{ display: 'flex', gap: '2rem' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonPulse key={i} $height="18px" $width="60px" />
        ))}
      </div>
    </div>

    <HeroSkeleton />
    <AboutSkeleton />
    <ProjectsSkeleton />
    <ContactSkeleton />
  </motion.div>
)

export default FullPageSkeleton
