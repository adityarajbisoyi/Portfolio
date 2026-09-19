import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import styled from 'styled-components'

/* The DOT uses raw MotionValues (zero lag).
   The RING uses a tight spring (subtle trail, elegant feel). */

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999;
  border-radius: 50%;
  border: 1.5px solid rgba(232, 213, 163, 0.65);
  /* translate -50% -50% so it centres on the cursor point */
  margin-left: -18px;
  margin-top: -18px;
  width: 36px;
  height: 36px;
  will-change: transform;
  transform: translateZ(0);

  @media (max-width: 768px) { display: none; }
`

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999;
  border-radius: 50%;
  background: #E8D5A3;
  /* translate -50% -50% to centre */
  margin-left: -3px;
  margin-top: -3px;
  width: 6px;
  height: 6px;
  will-change: transform;
  transform: translateZ(0);

  @media (max-width: 768px) { display: none; }
`

const CustomCursor = () => {
  /* Raw motion values — update instantly on mousemove */
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  /* Ring lags slightly for elegance */
  const ringX = useSpring(rawX, { stiffness: 600, damping: 38, mass: 0.3 })
  const ringY = useSpring(rawY, { stiffness: 600, damping: 38, mass: 0.3 })

  const [state, setState] = useState('default') // default | hover | click | text

  useEffect(() => {
    const onMove = (e) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    const onOver = (e) => {
      const t = e.target
      if (
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.getAttribute('role') === 'button'
      ) {
        setState('hover')
      } else if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') {
        setState('text')
      } else {
        setState('default')
      }
    }

    const onDown = () => setState('click')
    const onUp   = () => setState('default')

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [rawX, rawY])

  const ringVariants = {
    default: { scale: 1,   opacity: 0.7 },
    hover:   { scale: 2.4, opacity: 0.45, borderColor: 'rgba(0,229,204,0.7)' },
    click:   { scale: 0.7, opacity: 1 },
    text:    { scale: 0.5, opacity: 0.6, borderRadius: '3px', width: '3px', height: '28px', marginLeft: '-1.5px', marginTop: '-14px' },
  }

  const dotVariants = {
    default: { scale: 1,   opacity: 1 },
    hover:   { scale: 0,   opacity: 0 },
    click:   { scale: 1.8, opacity: 1, backgroundColor: '#00E5CC' },
    text:    { scale: 0,   opacity: 0 },
  }

  return (
    <>
      {/* Ring — spring trailing */}
      <CursorRing
        style={{ x: ringX, y: ringY }}
        animate={state}
        variants={ringVariants}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />
      {/* Dot — raw, instant */}
      <CursorDot
        style={{ x: rawX, y: rawY }}
        animate={state}
        variants={dotVariants}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </>
  )
}

export default CustomCursor
