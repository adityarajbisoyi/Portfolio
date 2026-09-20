import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

/* ─── Fixed Fullscreen Overlay ─── */
const LoadingContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: #0A0A0A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  overflow: hidden;
  user-select: none;
`

/* Radial aura in center */
const RadialAura = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  background: radial-gradient(circle, rgba(232, 213, 163, 0.07) 0%, transparent 70%);
  pointer-events: none;
`

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  position: relative;
  z-index: 2;
`

/* Brand Header */
const BrandHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`

const NameText = styled(motion.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: #FFFFFF;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.15rem;

  span.dot {
    color: #E8D5A3;
    font-size: 1.2em;
    margin-left: 2px;
  }
`

const SubtitleText = styled(motion.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  opacity: 0.9;
`

/* Progress Area */
const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  width: 280px;

  @media (max-width: 480px) {
    width: 220px;
  }
`

const ProgressTrack = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #C4A96B, #E8D5A3, #FFFFFF);
  border-radius: 2px;
  width: ${props => props.$width}%;
  transition: width 0.05s linear;
  box-shadow: 0 0 12px rgba(232, 213, 163, 0.6);
`

const ProgressMeta = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StatusLabel = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0B0B0;
`

const PercentNumber = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #E8D5A3;
`

/* Minimalist Corner Accents */
const Corner = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: rgba(232, 213, 163, 0.25);
  border-style: solid;
  pointer-events: none;

  &.tl { top: 2rem; left: 2rem; border-width: 1px 0 0 1px; }
  &.tr { top: 2rem; right: 2rem; border-width: 1px 1px 0 0; }
  &.bl { bottom: 2rem; left: 2rem; border-width: 0 0 1px 1px; }
  &.br { bottom: 2rem; right: 2rem; border-width: 0 1px 1px 0; }

  @media (max-width: 600px) {
    display: none;
  }
`

const BottomTag = styled.div`
  position: absolute;
  bottom: 2.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #666666;
`

/* ─── Component ─── */
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = performance.now()
    const DURATION = 2000 // Exact 2.0 seconds animation

    let animFrame
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const ratio = Math.min(elapsed / DURATION, 1)

      // Smooth easeOutCubic curve
      const easedPercent = Math.min(100, Math.round((1 - Math.pow(1 - ratio, 3)) * 100))
      setProgress(easedPercent)

      if (ratio < 1) {
        animFrame = requestAnimationFrame(step)
      } else {
        // Complete smoothly after reaching 100%
        setTimeout(() => {
          if (onComplete) onComplete()
        }, 120)
      }
    }

    animFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animFrame)
  }, [onComplete])

  const getStatusText = (val) => {
    if (val < 30) return 'INITIALIZING SYSTEM'
    if (val < 65) return 'HYDRATING ASSETS'
    if (val < 95) return 'PREPARING WORKSPACE'
    return 'READY'
  }

  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <RadialAura />

      <Corner className="tl" />
      <Corner className="tr" />
      <Corner className="bl" />
      <Corner className="br" />

      <CenterContent>
        <BrandHeader>
          <NameText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Aditya Raj Bisoyi<span className="dot">.</span>
          </NameText>
          <SubtitleText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack &amp; Software Engineer
          </SubtitleText>
        </BrandHeader>

        <ProgressContainer>
          <ProgressTrack>
            <ProgressFill $width={progress} />
          </ProgressTrack>
          <ProgressMeta>
            <StatusLabel>{getStatusText(progress)}</StatusLabel>
            <PercentNumber>{progress}%</PercentNumber>
          </ProgressMeta>
        </ProgressContainer>
      </CenterContent>

      <BottomTag>PORTFOLIO EXPERIENCE // 2025</BottomTag>
    </LoadingContainer>
  )
}

export default LoadingScreen
