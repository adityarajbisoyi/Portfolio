import { motion } from 'framer-motion'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 2rem auto;
  
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`

const ProfileWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: 0 0 40px rgba(91, 164, 230, 0.1);
  position: relative;
  background: ${props => props.theme.colors.darkCard};
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const PlaceholderProfile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg,
    ${props => props.theme.colors.darkCard} 0%,
    ${props => props.theme.colors.darkAlt} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => props.theme.colors.grey};
  text-align: center;
  padding: 2rem;
`

const RingAccent = styled(motion.div)`
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border-radius: 50%;
  border: 1px solid rgba(91, 164, 230, 0.15);
`

const HolographicProfile = ({ profileImage }) => {
  return (
    <ProfileContainer>
      <RingAccent
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          borderTopColor: 'rgba(91, 164, 230, 0.4)',
        }}
      />
      <ProfileWrapper
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {profileImage ? (
          <ProfileImage src={profileImage} alt="Aditya Raj Bisoyi" />
        ) : (
          <PlaceholderProfile>
            Profile Photo
          </PlaceholderProfile>
        )}
      </ProfileWrapper>
    </ProfileContainer>
  )
}

export default HolographicProfile
