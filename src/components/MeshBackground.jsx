import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
`

const MeshBackground = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 })
  const animFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e) => {
      targetMouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let t = 0

    const points = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      color: i < 2 ? '#E8D5A3' : i < 4 ? '#00E5CC' : '#FF6B35',
      radius: 300 + Math.random() * 200
    }))

    const draw = () => {
      // Lerp mouse
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.04
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.04

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      t += 0.004

      for (const p of points) {
        p.x += p.vx + Math.sin(t + p.y * 10) * 0.0001
        p.y += p.vy + Math.cos(t + p.x * 10) * 0.0001
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
      }

      // Mouse influence point
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of points) {
        const cx = (p.x + mx * 0.3) / 1.3 * canvas.width
        const cy = (p.y + my * 0.3) / 1.3 * canvas.height

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, p.radius)
        gradient.addColorStop(0, p.color + '18')
        gradient.addColorStop(0.5, p.color + '08')
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(cx, cy, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return <Canvas ref={canvasRef} />
}

export default MeshBackground
