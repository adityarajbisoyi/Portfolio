import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

/* ─── Keyframes ─── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(1); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
  50%      { opacity: 1; transform: scale(1.1); box-shadow: 0 0 16px 2px rgba(74, 222, 128, 0.7); }
`

/* ─── Layout & Container ─── */
const ContactSection = styled.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`

const ContactContainer = styled.div`
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
  margin-bottom: 1.25rem;
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

const BigCTA = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -2px;
  line-height: 1.08;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 2;
  max-width: 860px;

  span {
    color: #E8D5A3;
    font-style: italic;
    background: linear-gradient(135deg, #FFF6DC 0%, #E8D5A3 50%, #C4A96B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const SubText = styled(motion.p)`
  font-size: 1.08rem;
  line-height: 1.75;
  color: #D6D6D6;
  max-width: 640px;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 3.5rem;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

/* ─── Left Side ─── */
const StatusDeck = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

const LiveStatusCard = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 18px;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(232, 213, 163, 0.4), transparent);
  }
`

const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4ADE80;
  background: rgba(74, 222, 128, 0.1);
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
  border: 1px solid rgba(74, 222, 128, 0.3);
`

const StatusDot = styled.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4ADE80;
  display: inline-block;
  animation: ${pulseGlow} 2s infinite ease-in-out;
`

const LocationTag = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #E8D5A3;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const StatusDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.65;
  color: #CFCFCF;
  margin: 0;
`

/* ─── Profile Cards ─── */
const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const ProfileCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 100%;
    background: ${props => props.$accent || '#E8D5A3'};
    opacity: 0.8;
    transition: width 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.$borderHover || 'rgba(232, 213, 163, 0.4)'};
    background: #171717;
    box-shadow: 0 14px 40px ${props => props.$glow || 'rgba(232, 213, 163, 0.15)'};
    &::before { width: 5px; }
  }
`

const ProfileCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProfileIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ProfileLogoWrapper = styled.div`
  width: 46px; height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$bg || 'rgba(255, 255, 255, 0.06)'};
  border: 1px solid ${props => props.$border || 'rgba(255, 255, 255, 0.12)'};
  color: ${props => props.$color || '#FFFFFF'};
  flex-shrink: 0;
  transition: transform 0.3s ease;
  ${ProfileCard}:hover & { transform: scale(1.08); }
`

const ProfileTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const ProfilePlatformName = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${props => props.$color || '#E8D5A3'};
`

const ProfileHandle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`

const ExternalLinkIcon = styled.div`
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E8D5A3;
  transition: all 0.3s ease;
  ${ProfileCard}:hover & {
    background: #E8D5A3;
    color: #0A0A0A;
    transform: translate(2px, -2px);
  }
`

const ProfileBio = styled.p`
  font-size: 0.88rem;
  line-height: 1.55;
  color: #C2C2C2;
  margin: 0;
`

const ProfileHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const HighlightPill = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #E0E0E0;
`

const AchievementsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.25rem;
`

const AchievementBadge = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: rgba(232, 213, 163, 0.08);
  border: 1px solid rgba(232, 213, 163, 0.2);
  color: #E8D5A3;
`

/* Direct Email Box */
const DirectEmailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: rgba(232, 213, 163, 0.03);
  border: 1px dashed rgba(232, 213, 163, 0.25);
  border-radius: 16px;
  gap: 1rem;
  flex-wrap: wrap;
`

const EmailDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const EmailLabel = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #E8D5A3;
`

const EmailLink = styled.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.98rem;
  font-weight: 600;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover { color: #E8D5A3; }
`

const CopyBtn = styled.button`
  background: rgba(232, 213, 163, 0.12);
  border: 1px solid rgba(232, 213, 163, 0.3);
  color: #E8D5A3;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 4px 12px rgba(232, 213, 163, 0.3);
  }
`

/* ─── Right Side: Clean Multi-Step Form ─── */
const FormConsole = styled(motion.div)`
  background: radial-gradient(circle at 100% 0%, rgba(232, 213, 163, 0.06) 0%, rgba(16, 16, 16, 0.96) 70%);
  border: 1px solid rgba(232, 213, 163, 0.25);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 600px) { padding: 1.5rem; }
`

const FormHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

const FormTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 0.35rem 0;
`

const FormSubtitle = styled.p`
  font-size: 0.88rem;
  color: #A8A8A8;
  line-height: 1.5;
  margin: 0;
`

/* Step Content Area */
const StepContent = styled(motion.div)`
  min-height: 320px;
  display: flex;
  flex-direction: column;
`

/* Intent Selection */
const IntentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const IntentOption = styled(motion.button)`
  background: ${props => props.$active ? 'rgba(232, 213, 163, 0.12)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${props => props.$active ? '#E8D5A3' : 'rgba(255, 255, 255, 0.12)'};
  border-radius: 14px;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.25s ease;
  box-shadow: ${props => props.$active ? '0 0 20px rgba(232, 213, 163, 0.15)' : 'none'};

  &:hover {
    border-color: rgba(232, 213, 163, 0.5);
    background: rgba(232, 213, 163, 0.06);
  }
`

const IntentRadio = styled.div`
  width: 16px; height: 16px;
  border-radius: 50%;
  border: 2px solid ${props => props.$active ? '#E8D5A3' : 'rgba(255, 255, 255, 0.25)'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.2s ease;

  &::after {
    content: '';
    width: 8px; height: 8px;
    border-radius: 50%;
    background: ${props => props.$active ? '#E8D5A3' : 'transparent'};
    transition: background 0.2s ease;
  }
`

const IntentTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`

const IntentTitle = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${props => props.$active ? '#FFFFFF' : '#E0E0E0'};
`

const IntentSub = styled.span`
  font-size: 0.76rem;
  color: #909090;
  line-height: 1.35;
`

const TimelineSection = styled.div`
  margin-bottom: 1.5rem;
`

const FieldLabel = styled.span`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 0.6rem;
`

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const Chip = styled.button`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.45rem 0.95rem;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid ${props => props.$active ? '#E8D5A3' : 'rgba(255, 255, 255, 0.15)'};
  background: ${props => props.$active ? 'rgba(232, 213, 163, 0.18)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => props.$active ? '#FFFFFF' : '#B8B8B8'};
  transition: all 0.2s ease;
  &:hover { border-color: #E8D5A3; color: #FFFFFF; }
`

/* Form Inputs */
const FormStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const InputLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const InputLabel = styled.label`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const RequiredStar = styled.span`
  color: #E8D5A3;
  font-size: 0.85rem;
`

const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const InputIconSlot = styled.div`
  position: absolute;
  left: 1rem;
  color: #777;
  display: flex;
  align-items: center;
  pointer-events: none;
`

const StyledInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props => props.$error ? '#FF5F56' : 'rgba(255, 255, 255, 0.18)'};
  border-radius: 12px;
  padding: 0.95rem 1.15rem 0.95rem 2.85rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.96rem;
  font-weight: 500;
  color: #FFFFFF;
  outline: none;
  transition: all 0.25s ease;
  &::placeholder { color: #606060; }
  &:focus {
    border-color: #E8D5A3;
    background: rgba(232, 213, 163, 0.05);
    box-shadow: 0 0 18px rgba(232, 213, 163, 0.2);
  }
`

const ErrorMsg = styled.span`
  font-size: 0.74rem;
  color: #FF5F56;
  font-weight: 500;
`

/* Step 3: Briefing */
const SummaryBar = styled.div`
  background: rgba(232, 213, 163, 0.06);
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 12px;
  padding: 0.85rem 1.1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  color: #D0D0D0;
`

const SummaryChip = styled.span`
  background: rgba(232, 213, 163, 0.12);
  border: 1px solid rgba(232, 213, 163, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  color: #E8D5A3;
  font-weight: 700;
  font-size: 0.72rem;
`

const PromptsSection = styled.div`
  margin-bottom: 1rem;
`

const PromptsLabel = styled.span`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 0.45rem;
`

const PromptChip = styled.button`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #C8C8C8;
  font-size: 0.74rem;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-color: #E8D5A3;
    color: #E8D5A3;
    background: rgba(232, 213, 163, 0.08);
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props => props.$error ? '#FF5F56' : 'rgba(255, 255, 255, 0.18)'};
  border-radius: 12px;
  padding: 1rem 1.15rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.96rem;
  font-weight: 500;
  color: #FFFFFF;
  outline: none;
  resize: vertical;
  min-height: 110px;
  transition: all 0.25s ease;
  &::placeholder { color: #606060; }
  &:focus {
    border-color: #E8D5A3;
    background: rgba(232, 213, 163, 0.05);
    box-shadow: 0 0 18px rgba(232, 213, 163, 0.2);
  }
`

/* Button Row */
const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
`

const BackBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  padding: 0.85rem 1.3rem;
  border-radius: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.25s ease;
  &:hover {
    border-color: #E8D5A3;
    color: #E8D5A3;
  }
`

const NextBtn = styled(motion.button)`
  background: linear-gradient(90deg, #C4A96B, #F0DFB4, #FFFFFF, #F0DFB4, #C4A96B);
  background-size: 200% auto;
  border: none;
  color: #0A0A0A;
  padding: 0.95rem 1.8rem;
  border-radius: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 8px 24px rgba(232, 213, 163, 0.25);
  transition: all 0.3s ease;
  margin-left: auto;
  &:hover {
    animation: ${shimmer} 2s linear infinite;
    box-shadow: 0 12px 32px rgba(232, 213, 163, 0.4);
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; animation: none; }
`

/* Success */
const SuccessCard = styled(motion.div)`
  background: rgba(232, 213, 163, 0.05);
  border: 1px solid rgba(232, 213, 163, 0.3);
  border-radius: 20px;
  padding: 3.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

const SuccessIcon = styled.div`
  width: 72px; height: 72px;
  border-radius: 50%;
  background: rgba(232, 213, 163, 0.15);
  border: 2px solid #E8D5A3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E8D5A3;
  box-shadow: 0 0 30px rgba(232, 213, 163, 0.3);
`

const SuccessTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.85rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`

const SuccessText = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: #CCCCCC;
  max-width: 490px;
  margin: 0;
  strong { color: #E8D5A3; }
`

const ResetBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(232, 213, 163, 0.4);
  color: #E8D5A3;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.75rem 1.6rem;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 0.75rem;
  transition: all 0.25s ease;
  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 4px 16px rgba(232, 213, 163, 0.3);
  }
`

/* ─── Static Data (no emojis) ─── */
const INTENTS = [
  { id: 'fullstack', name: 'Full-Stack Development', sub: 'Scalable platforms, modern web apps & APIs' },
  { id: 'ai', name: 'AI & Automation', sub: 'LLMs, agentic workflows & intelligent systems' },
  { id: 'frontend', name: 'Interactive UI & 3D Web', sub: 'High-end visuals, shaders & responsive UI' },
  { id: 'architecture', name: 'System Architecture', sub: 'Distributed systems, cloud & infrastructure' },
  { id: 'consulting', name: 'Technical Advisory', sub: 'Code review, scaling strategies & tech audit' },
  { id: 'opportunity', name: 'Role & Collaboration', sub: 'Engineering roles, contracts & partnerships' }
]

const TIMELINES = [
  '< 2 Weeks',
  '1 – 3 Months',
  'Ongoing / Full-Time',
  'Flexible / Advisory'
]

const PROMPTS = [
  'Looking to build an MVP from scratch',
  'Need technical review for architecture',
  'Discussing a software engineering role',
  'Interested in AI integration'
]

/* ─── Magic Wipe Variants ─── */
const wipeVariants = {
  enter: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0.5
  },
  center: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    clipPath: 'inset(0 0 0 100%)',
    opacity: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
  }
}

/* ─── Component ─── */
const Contact = () => {
  const [step, setStep] = useState(1)
  const [selectedIntent, setSelectedIntent] = useState(INTENTS[0].name)
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[1])

  const [form, setForm] = useState({
    name: '', email: '', company: '',
    subject: `Project inquiry: ${INTENTS[0].name}`,
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('learnerbisoyi@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const selectIntent = (name) => {
    setSelectedIntent(name)
    setForm(p => ({ ...p, subject: `Project inquiry: ${name} (${selectedTimeline})` }))
  }

  const selectTimeline = (t) => {
    setSelectedTimeline(t)
    setForm(p => ({ ...p, subject: `Project inquiry: ${selectedIntent} (${t})` }))
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => {
    if (step === 1) setStep(2)
    else if (step === 2 && validateStep2()) setStep(3)
  }

  const back = () => { if (step > 1) setStep(s => s - 1) }

  const applyPrompt = (txt) => {
    setForm(p => ({ ...p, message: p.message ? `${p.message}\n\n${txt}` : txt }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.message.trim()) {
      setErrors({ message: 'Please add a message' })
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mvgqalng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email,
          company: form.company || 'Not specified',
          intent: selectedIntent, timeline: selectedTimeline,
          subject: form.subject, message: form.message,
          _replyto: form.email
        })
      })
      if (res.ok) setSubmitted(true)
      else throw new Error()
    } catch {
      alert('Could not send message. You can reach Aditya directly at learnerbisoyi@gmail.com')
    } finally { setSubmitting(false) }
  }

  const reset = () => {
    setSubmitted(false)
    setStep(1)
    setForm({ name: '', email: '', company: '', subject: `Project inquiry: ${INTENTS[0].name}`, message: '' })
    setErrors({})
  }

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTag
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Direct Channel
        </SectionTag>

        <BigCTA
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Let us build something <span>remarkable</span> together
        </BigCTA>

        <SubText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a product to build, an engineering opportunity, or a bold vision?
          Send a message below or connect directly across channels.
        </SubText>

        <MainGrid>
          {/* ─── Left Column ─── */}
          <StatusDeck
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <LiveStatusCard>
              <StatusHeader>
                <StatusBadge><StatusDot /> Online & Available</StatusBadge>
                <LocationTag>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Bangalore, India (IST)
                </LocationTag>
              </StatusHeader>
              <StatusDescription>
                Currently reviewing select projects, engineering roles, and high-impact software collaborations.
                Typical response turnaround is under 24 hours.
              </StatusDescription>
            </LiveStatusCard>

            <ProfilesContainer>
              {/* GitHub Card — Real Data */}
              <ProfileCard
                href="https://github.com/adityarajbisoyi"
                target="_blank"
                rel="noreferrer"
                $accent="#FFFFFF"
                $borderHover="rgba(255, 255, 255, 0.4)"
                $glow="rgba(255, 255, 255, 0.08)"
              >
                <ProfileCardTop>
                  <ProfileIdentity>
                    <ProfileLogoWrapper $bg="rgba(255,255,255,0.08)" $border="rgba(255,255,255,0.2)" $color="#FFFFFF">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </ProfileLogoWrapper>
                    <ProfileTitleBlock>
                      <ProfilePlatformName $color="#D6D6D6">GitHub</ProfilePlatformName>
                      <ProfileHandle>@adityarajbisoyi</ProfileHandle>
                    </ProfileTitleBlock>
                  </ProfileIdentity>
                  <ExternalLinkIcon>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </ExternalLinkIcon>
                </ProfileCardTop>
                <ProfileBio>
                  Full-stack tools, video editors, fitness trackers, git visualizers & TUI applications.
                </ProfileBio>
                <ProfileHighlights>
                  <HighlightPill>TypeScript · Python · JS</HighlightPill>
                </ProfileHighlights>
                <AchievementsRow>
                  <AchievementBadge>Pair Extraordinaire</AchievementBadge>
                  <AchievementBadge>Pull Shark x2</AchievementBadge>
                  <AchievementBadge>Quickdraw</AchievementBadge>
                  <AchievementBadge>YOLO</AchievementBadge>
                </AchievementsRow>
              </ProfileCard>

              {/* LinkedIn Card */}
              <ProfileCard
                href="https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/"
                target="_blank"
                rel="noreferrer"
                $accent="#0A66C2"
                $borderHover="rgba(10, 102, 194, 0.45)"
                $glow="rgba(10, 102, 194, 0.2)"
              >
                <ProfileCardTop>
                  <ProfileIdentity>
                    <ProfileLogoWrapper $bg="rgba(10,102,194,0.15)" $border="rgba(10,102,194,0.35)" $color="#0A66C2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z"/>
                      </svg>
                    </ProfileLogoWrapper>
                    <ProfileTitleBlock>
                      <ProfilePlatformName $color="#60A5FA">LinkedIn</ProfilePlatformName>
                      <ProfileHandle>Aditya Raj Bisoyi</ProfileHandle>
                    </ProfileTitleBlock>
                  </ProfileIdentity>
                  <ExternalLinkIcon>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </ExternalLinkIcon>
                </ProfileCardTop>
                <ProfileBio>
                  Full-stack developer in Bangalore, experienced with React, Python, PostgreSQL, Docker & Cloudflare platforms.
                </ProfileBio>
                <ProfileHighlights>
                  <HighlightPill>Software Engineer</HighlightPill>
                  <HighlightPill>Bangalore, India</HighlightPill>
                </ProfileHighlights>
              </ProfileCard>
            </ProfilesContainer>

            <DirectEmailBox>
              <EmailDetails>
                <EmailLabel>Email</EmailLabel>
                <EmailLink href="mailto:learnerbisoyi@gmail.com">learnerbisoyi@gmail.com</EmailLink>
              </EmailDetails>
              <CopyBtn type="button" onClick={copyEmail}>
                {copied ? (
                  <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg> Copied!</>
                ) : (
                  <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg> Copy</>
                )}
              </CopyBtn>
            </DirectEmailBox>
          </StatusDeck>

          {/* ─── Right Column: Clean Form ─── */}
          <FormConsole
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <SuccessCard
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SuccessIcon>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </SuccessIcon>
                <SuccessTitle>Message Sent!</SuccessTitle>
                <SuccessText>
                  Thanks, <strong>{form.name}</strong>. Your message about <strong>{selectedIntent}</strong> has been received.
                  I will get back to you at <strong>{form.email}</strong> within 24 hours.
                </SuccessText>
                <ResetBtn type="button" onClick={reset}>Send Another Message</ResetBtn>
              </SuccessCard>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormHeader>
                  <FormTitle>Get in Touch</FormTitle>
                  <FormSubtitle>
                    Tell me about your project or idea — I would love to hear from you.
                  </FormSubtitle>
                </FormHeader>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <StepContent
                      key="s1"
                      variants={wipeVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <FieldLabel style={{ marginBottom: '0.75rem' }}>What are you looking for?</FieldLabel>
                      <IntentGrid>
                        {INTENTS.map(i => (
                          <IntentOption
                            key={i.id}
                            type="button"
                            $active={selectedIntent === i.name}
                            onClick={() => selectIntent(i.name)}
                            whileTap={{ scale: 0.98 }}
                          >
                            <IntentRadio $active={selectedIntent === i.name} />
                            <IntentTextBlock>
                              <IntentTitle $active={selectedIntent === i.name}>{i.name}</IntentTitle>
                              <IntentSub>{i.sub}</IntentSub>
                            </IntentTextBlock>
                          </IntentOption>
                        ))}
                      </IntentGrid>

                      <TimelineSection>
                        <FieldLabel>Timeline</FieldLabel>
                        <ChipsRow>
                          {TIMELINES.map(t => (
                            <Chip key={t} type="button" $active={selectedTimeline === t} onClick={() => selectTimeline(t)}>
                              {t}
                            </Chip>
                          ))}
                        </ChipsRow>
                      </TimelineSection>

                      <ActionRow>
                        <NextBtn type="button" onClick={next} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          Next
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </NextBtn>
                      </ActionRow>
                    </StepContent>
                  )}

                  {step === 2 && (
                    <StepContent
                      key="s2"
                      variants={wipeVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <FieldLabel style={{ marginBottom: '0.75rem' }}>A little about you</FieldLabel>
                      <FormStack>
                        <InputGroup>
                          <InputLabelRow>
                            <InputLabel htmlFor="c-name">Your Name <RequiredStar>*</RequiredStar></InputLabel>
                            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                          </InputLabelRow>
                          <InputWrap>
                            <InputIconSlot>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                              </svg>
                            </InputIconSlot>
                            <StyledInput
                              id="c-name" type="text" required placeholder="e.g. Alex Vance"
                              $error={!!errors.name} value={form.name}
                              onChange={e => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: null }) }}
                            />
                          </InputWrap>
                        </InputGroup>

                        <InputGroup>
                          <InputLabelRow>
                            <InputLabel htmlFor="c-email">Email <RequiredStar>*</RequiredStar></InputLabel>
                            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                          </InputLabelRow>
                          <InputWrap>
                            <InputIconSlot>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                            </InputIconSlot>
                            <StyledInput
                              id="c-email" type="email" required placeholder="e.g. alex@company.com"
                              $error={!!errors.email} value={form.email}
                              onChange={e => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: null }) }}
                            />
                          </InputWrap>
                        </InputGroup>

                        <InputGroup>
                          <InputLabelRow>
                            <InputLabel htmlFor="c-company">Company / Project <span style={{ color: '#666', fontWeight: 'normal', textTransform: 'none' }}>(optional)</span></InputLabel>
                          </InputLabelRow>
                          <InputWrap>
                            <InputIconSlot>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                              </svg>
                            </InputIconSlot>
                            <StyledInput
                              id="c-company" type="text" placeholder="e.g. Acme Labs"
                              value={form.company}
                              onChange={e => setForm({ ...form, company: e.target.value })}
                            />
                          </InputWrap>
                        </InputGroup>
                      </FormStack>

                      <ActionRow>
                        <BackBtn type="button" onClick={back}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                          </svg>
                          Back
                        </BackBtn>
                        <NextBtn type="button" onClick={next} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          Next
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </NextBtn>
                      </ActionRow>
                    </StepContent>
                  )}

                  {step === 3 && (
                    <StepContent
                      key="s3"
                      variants={wipeVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <SummaryBar>
                        <SummaryChip>{selectedIntent}</SummaryChip>
                        <SummaryChip>{selectedTimeline}</SummaryChip>
                        <span style={{ marginLeft: 'auto', color: '#888', fontSize: '0.72rem', cursor: 'pointer' }} onClick={() => setStep(1)}>
                          Edit
                        </span>
                      </SummaryBar>

                      <InputGroup style={{ marginBottom: '1rem' }}>
                        <InputLabel htmlFor="c-subject">Subject</InputLabel>
                        <StyledInput
                          id="c-subject" type="text" required value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          placeholder="Subject..." style={{ paddingLeft: '1.15rem' }}
                        />
                      </InputGroup>

                      <PromptsSection>
                        <PromptsLabel>Quick starters</PromptsLabel>
                        <ChipsRow>
                          {PROMPTS.map((p, i) => (
                            <PromptChip key={i} type="button" onClick={() => applyPrompt(p)}>+ {p}</PromptChip>
                          ))}
                        </ChipsRow>
                      </PromptsSection>

                      <InputGroup style={{ marginBottom: '1.5rem' }}>
                        <InputLabelRow>
                          <InputLabel htmlFor="c-msg">Your Message <RequiredStar>*</RequiredStar></InputLabel>
                          {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
                        </InputLabelRow>
                        <StyledTextarea
                          id="c-msg" required $error={!!errors.message}
                          placeholder="Describe your project, timeline, and any specific questions..."
                          value={form.message}
                          onChange={e => { setForm({ ...form, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: null }) }}
                        />
                      </InputGroup>

                      <ActionRow>
                        <BackBtn type="button" onClick={back}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                          </svg>
                          Back
                        </BackBtn>
                        <NextBtn
                          type="submit"
                          disabled={submitting || !form.message.trim()}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {submitting ? 'Sending...' : (
                            <>
                              Send Message
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                              </svg>
                            </>
                          )}
                        </NextBtn>
                      </ActionRow>
                    </StepContent>
                  )}
                </AnimatePresence>
              </form>
            )}
          </FormConsole>
        </MainGrid>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
