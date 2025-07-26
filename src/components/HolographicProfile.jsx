import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 2rem auto;
`

const HolographicCanvas = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${props => props.theme.colors.primary};
  box-shadow: 
    0 0 30px ${props => props.theme.colors.primary},
    inset 0 0 30px rgba(0, 255, 255, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(
        45deg,
        transparent 30%,
        rgba(0, 255, 255, 0.1) 50%,
        transparent 70%
      );
    animation: holographicScan 3s ease-in-out infinite;
    z-index: 2;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 255, 255, 0.1) 2px,
        rgba(0, 255, 255, 0.1) 4px
      );
    border-radius: 50%;
    z-index: 1;
  }
  
  @keyframes holographicScan {
    0%, 100% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: 
    hue-rotate(180deg)
    contrast(1.2)
    brightness(1.1)
    saturate(0.8);
  mix-blend-mode: screen;
`

const PlaceholderProfile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: 
    radial-gradient(circle at 30% 30%, 
      rgba(0, 255, 255, 0.3) 0%,
      rgba(255, 107, 53, 0.2) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  padding: 2rem;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
`

function HolographicEffect() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <ringGeometry args={[1.2, 1.5, 32]} />
      <meshStandardMaterial 
        color="#00ffff"
        transparent
        opacity={0.3}
        emissive="#00ffff"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

const HolographicProfile = ({ profileImage }) => {
  return (
    <ProfileContainer>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <HolographicCanvas>
          {profileImage ? (
            <ProfileImage src={profileImage} alt="Profile" />
          ) : (
            <PlaceholderProfile>
              Add Your Profile Photo Here
              <br />
              <small>(Will get holographic effect)</small>
            </PlaceholderProfile>
          )}
        </HolographicCanvas>
      </motion.div>
      
      <Canvas 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          pointerEvents: 'none'
        }}
        camera={{ position: [0, 0, 3] }}
      >
        <HolographicEffect />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#00ffff" />
      </Canvas>
    </ProfileContainer>
  )
}

export default HolographicProfile
