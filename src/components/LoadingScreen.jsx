import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at center, #0d1421 0%, #000000 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
`

const AlienTextBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.4;
  z-index: 1;
  will-change: transform;
  transform: translateZ(0);
`

const AlienTextLine = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 5px ${props => props.theme.colors.primary};
  letter-spacing: 2px;
  opacity: 0.6;
  will-change: transform;
  transform: translateZ(0);
`

const LoadingText = styled(motion.h1)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: 
    0 0 10px ${props => props.theme.colors.primary},
    0 0 20px ${props => props.theme.colors.primary},
    0 0 30px ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  font-weight: 900;
  letter-spacing: 3px;
`

const CanvasContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-bottom: 2rem;
`

function Gear({ position, rotation, scale = 1 }) {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 2
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <cylinderGeometry args={[1 * scale, 1 * scale, 0.2 * scale, 12]} />
      <meshStandardMaterial 
        color="#00ffff"
        metalness={0.8}
        roughness={0.2}
        emissive="#00ffff"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function CubeFormation() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  const cubePositions = [
    // Front face
    [-1, 1, 1], [0, 1, 1], [1, 1, 1],
    [-1, 0, 1], [0, 0, 1], [1, 0, 1],
    [-1, -1, 1], [0, -1, 1], [1, -1, 1],
    
    // Back face
    [-1, 1, -1], [0, 1, -1], [1, 1, -1],
    [-1, 0, -1], [0, 0, -1], [1, 0, -1],
    [-1, -1, -1], [0, -1, -1], [1, -1, -1],
    
    // Middle layer
    [-1, 1, 0], [0, 1, 0], [1, 1, 0],
    [-1, 0, 0], [1, 0, 0],
    [-1, -1, 0], [0, -1, 0], [1, -1, 0],
  ]

  return (
    <group ref={groupRef}>
      {cubePositions.map((position, index) => (
        <Gear 
          key={index}
          position={position}
          rotation={[0, 0, index * 0.1]}
          scale={0.3}
        />
      ))}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />
    </group>
  )
}

function AlienTextStream() {
  const alienSymbols = [
    '◊◉◈◇◆▲▼◀▶△▽▷◁',
    '⟨⟩⟪⟫⟬⟭⟮⟯⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿',
    '⧀⧁⧂⧃⧄⧅⧆⧇⧈⧉⧊⧋⧌⧍⧎⧏⧐⧑⧒⧓⧔⧕⧖⧗⧘⧙⧚⧛⧜⧝⧞⧟',
    '⨀⨁⨂⨃⨄⨅⨆⨇⨈⨉⨊⨋⨌⨍⨎⨏⨐⨑⨒⨓⨔⨕⨖⨗⨘⨙⨚⨛⨜⨝⨞⨟',
    '⬟⬠⬡⬢⬣⬤⬥⬦⬧⬨⬩⬪⬫⬬⬭⬮⬯⬰⬱⬲⬳⬴⬵⬶⬷⬸⬹⬺⬻⬼⬽⬾⬿',
    '⫷⫸⫹⫺⫻⫼⫽⫾⫿⬀⬁⬂⬃⬄⬅⬆⬇⬈⬉⬊⬋⬌⬍⬎⬏⬐⬑⬒⬓⬔⬕⬖⬗',
    '╭╮╯╰╱╲╳╴╵╶╷╸╹╺╻╼╽╾╿▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏',
    '░▒▓█▇▆▅▄▃▂▁▪▫◦•∘○●◯◉⦿⦾⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯'
  ]

  const generateRandomText = () => {
    const symbolSet = alienSymbols[Math.floor(Math.random() * alienSymbols.length)]
    let text = ''
    for (let i = 0; i < 20 + Math.random() * 30; i++) {
      text += symbolSet[Math.floor(Math.random() * symbolSet.length)] + ' '
    }
    return text
  }

  // Moving lines
  const movingLines = Array.from({ length: 15 }, (_, index) => ({
    id: `moving-${index}`,
    text: generateRandomText(),
    top: Math.random() * 100,
    speed: 20 + Math.random() * 30,
    opacity: 0.4 + Math.random() * 0.3
  }))

  // Static scattered text
  const staticLines = Array.from({ length: 20 }, (_, index) => ({
    id: `static-${index}`,
    text: generateRandomText(),
    top: Math.random() * 100,
    left: Math.random() * 90,
    opacity: 0.2 + Math.random() * 0.3
  }))

  return (
    <AlienTextBackground>
      {/* Moving alien text lines */}
      {movingLines.map((line) => (
        <AlienTextLine
          key={line.id}
          style={{
            top: `${line.top}%`,
            opacity: line.opacity,
            fontSize: `${10 + Math.random() * 8}px`,
            left: 0
          }}
          animate={{
            x: ["-20vw", "120vw"]
          }}
          transition={{
            duration: line.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15
          }}
        >
          {line.text}
        </AlienTextLine>
      ))}
      
      {/* Static scattered alien text */}
      {staticLines.map((line) => (
        <AlienTextLine
          key={line.id}
          style={{
            top: `${line.top}%`,
            left: `${line.left}%`,
            opacity: line.opacity,
            fontSize: `${8 + Math.random() * 6}px`,
            position: 'absolute'
          }}
          animate={{
            opacity: [line.opacity * 0.5, line.opacity, line.opacity * 0.3],
            scale: [1, 1.1, 0.9]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 10
          }}
        >
          {line.text.substring(0, 15 + Math.random() * 20)}
        </AlienTextLine>
      ))}
    </AlienTextBackground>
  )
}

const LoadingScreen = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AlienTextStream />
      
      <LoadingText
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ zIndex: 10, position: 'relative' }}
      >
        INITIALIZING...
      </LoadingText>
      
      <CanvasContainer style={{ zIndex: 10, position: 'relative' }}>
        <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
          <CubeFormation />
        </Canvas>
      </CanvasContainer>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, #00ffff, #ff6b35, #00ffff)',
          borderRadius: '2px',
          boxShadow: '0 0 20px #00ffff',
          zIndex: 10,
          position: 'relative'
        }}
      />
    </LoadingContainer>
  )
}

export default LoadingScreen
