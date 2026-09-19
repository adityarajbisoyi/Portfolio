import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

/* ─── Keyframes ─── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50%      { opacity: 1; transform: scale(1.15); box-shadow: 0 0 16px rgba(74, 222, 128, 0.8); }
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
  grid-template-columns: 1fr 1.48fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`

/* ─── Left Side: Telemetry / Status Deck ─── */
const StatusDeck = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const LiveStatusCard = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  backdrop-filter: blur(8px);
`

const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ADE80;
  display: inline-block;
  animation: ${pulseGlow} 2s infinite ease-in-out;
`

const LocationTag = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #E8D5A3;
`

const StatusDescription = styled.p`
  font-size: 0.94rem;
  line-height: 1.68;
  color: #D2D2D2;
  margin: 0;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const ContactItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.35rem 1.65rem;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.35);
    background: rgba(232, 213, 163, 0.03);
    transform: translateY(-2px);
  }
`

const ContactItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContactItemLabel = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #E8D5A3;
`

const ContactItemValue = styled.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #FFFFFF;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  word-break: break-all;
  transition: color 0.2s ease;

  &:hover {
    color: #E8D5A3;
  }
`

const CopyBtn = styled.button`
  background: rgba(232, 213, 163, 0.1);
  border: 1px solid rgba(232, 213, 163, 0.25);
  color: #E8D5A3;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
  }
`

const SocialBar = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const SocialChip = styled(motion.a)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #E8D5A3;
  background: rgba(232, 213, 163, 0.06);
  border: 1px solid rgba(232, 213, 163, 0.2);
  padding: 0.55rem 1.1rem;
  border-radius: 100px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all 0.25s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    border-color: #E8D5A3;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(232, 213, 163, 0.2);
  }
`

/* ─── Right Side: Creative Interactive Dispatch Console ─── */
const DispatchConsole = styled(motion.div)`
  background: radial-gradient(circle at 100% 0%, rgba(232, 213, 163, 0.08) 0%, rgba(18, 18, 18, 0.95) 70%);
  border: 1px solid rgba(232, 213, 163, 0.25);
  border-radius: 24px;
  padding: 2.75rem;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  @media (max-width: 600px) {
    padding: 1.75rem;
  }
`

const ConsoleTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
  gap: 1rem;
`

const ConsoleTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const TerminalDots = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    &:nth-child(1) { background: #FF5F56; }
    &:nth-child(2) { background: #FFBD2E; }
    &:nth-child(3) { background: #27C93F; }
  }
`

const ConsoleHeaderLabel = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
`

/* Intent Selector */
const IntentSection = styled.div`
  margin-bottom: 2rem;
`

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.85rem;
`

const StepIndicator = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 800;
  color: #0A0A0A;
  background: #E8D5A3;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
`

const SectionLabelText = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
`

const IntentChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const IntentChip = styled(motion.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.55rem 1.15rem;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid ${props => props.$active ? '#E8D5A3' : 'rgba(255,255,255,0.18)'};
  background: ${props => props.$active ? 'rgba(232, 213, 163, 0.22)' : 'rgba(255,255,255,0.04)'};
  color: ${props => props.$active ? '#FFFFFF' : '#D6D6D6'};
  box-shadow: ${props => props.$active ? '0 0 16px rgba(232, 213, 163, 0.25)' : 'none'};
  transition: all 0.22s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.6);
    color: #FFFFFF;
    background: rgba(232, 213, 163, 0.12);
  }
`

/* Fields Container */
const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FieldLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const FieldNum = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #E8D5A3;
`

const FieldLabel = styled.label`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FFFFFF;
`

const StyledInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 0.95rem 1.15rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #FFFFFF;
  outline: none;
  transition: all 0.25s ease;

  &::placeholder {
    color: #A0A0A0;
    font-weight: 400;
  }

  &:focus {
    border-color: #E8D5A3;
    background: rgba(232, 213, 163, 0.05);
    box-shadow: 0 0 18px rgba(232, 213, 163, 0.25);
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 1rem 1.15rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #FFFFFF;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: all 0.25s ease;

  &::placeholder {
    color: #A0A0A0;
    font-weight: 400;
  }

  &:focus {
    border-color: #E8D5A3;
    background: rgba(232, 213, 163, 0.05);
    box-shadow: 0 0 18px rgba(232, 213, 163, 0.25);
  }
`

/* Submit Button */
const SubmitButton = styled(motion.button)`
  width: 100%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #0A0A0A;
  background: linear-gradient(
    90deg,
    #C4A96B, #F0DFB4, #FFFFFF, #F0DFB4, #C4A96B
  );
  background-size: 200% auto;
  border: none;
  border-radius: 12px;
  padding: 1.15rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 8px 30px rgba(232, 213, 163, 0.25);
  transition: all 0.3s ease;

  &:hover {
    animation: ${shimmer} 2s linear infinite;
    box-shadow: 0 12px 40px rgba(232, 213, 163, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

/* Success Hologram */
const SuccessCard = styled(motion.div)`
  background: rgba(232, 213, 163, 0.05);
  border: 1px solid rgba(232, 213, 163, 0.3);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

const SuccessBadgeIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(232, 213, 163, 0.15);
  border: 2px solid #E8D5A3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E8D5A3;
`

const SuccessTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`

const SuccessText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #C0C0C0;
  max-width: 480px;
  margin: 0;

  strong {
    color: #E8D5A3;
  }
`

const ResetBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(232, 213, 163, 0.3);
  color: #E8D5A3;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.65rem 1.5rem;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
  }
`

/* ─── Static Data & Presets ─── */
const INTENT_OPTIONS = [
  'Full-Stack Development',
  'AI & Automation',
  'Web / Mobile App',
  'Software Architecture',
  'Engineering Consultation',
  'Quick Hello / Collaboration'
]

/* ─── Component ─── */
const Contact = () => {
  const [selectedIntent, setSelectedIntent] = useState('Full-Stack Development')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project inquiry: Full-Stack Development',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleIntentClick = (intent) => {
    setSelectedIntent(intent)
    setFormData(prev => ({
      ...prev,
      subject: `Project inquiry: ${intent}`
    }))
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('learnerbisoyi@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mvgqalng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          intent: selectedIntent,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      alert('Could not dispatch message. You can reach Aditya directly at learnerbisoyi@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
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
          Dispatch a message below or connect directly across channels.
        </SubText>

        <MainGrid>
          {/* Left: Status Deck & Direct Coordinates */}
          <StatusDeck
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <LiveStatusCard>
              <StatusHeader>
                <StatusBadge>
                  <StatusDot /> Online & Available
                </StatusBadge>
                <LocationTag>Bangalore (IST)</LocationTag>
              </StatusHeader>
              <StatusDescription>
                Currently reviewing select projects, product engineering roles, and high-impact software collaborations.
                Typical response turnaround is under 24 hours.
              </StatusDescription>
            </LiveStatusCard>

            <ContactList>
              <ContactItem>
                <ContactItemHeader>
                  <ContactItemLabel>Direct Email</ContactItemLabel>
                  <CopyBtn type="button" onClick={copyEmail}>
                    {copied ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </CopyBtn>
                </ContactItemHeader>
                <ContactItemValue href="mailto:learnerbisoyi@gmail.com">
                  learnerbisoyi@gmail.com
                </ContactItemValue>
              </ContactItem>

              <ContactItem>
                <ContactItemHeader>
                  <ContactItemLabel>Professional Profile</ContactItemLabel>
                </ContactItemHeader>
                <ContactItemValue
                  href="https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aditya Raj Bisoyi
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </ContactItemValue>
              </ContactItem>

              <ContactItem>
                <ContactItemHeader>
                  <ContactItemLabel>Expected Response</ContactItemLabel>
                </ContactItemHeader>
                <ContactItemValue as="span" style={{ cursor: 'default' }}>
                  Within 24 Hours Guaranteed
                </ContactItemValue>
              </ContactItem>
            </ContactList>

            <SocialBar>
              <SocialChip href="https://github.com/adityarajbisoyi" target="_blank" rel="noreferrer">
                GitHub
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </SocialChip>
              <SocialChip href="https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/" target="_blank" rel="noreferrer">
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </SocialChip>
            </SocialBar>
          </StatusDeck>

          {/* Right: Creative Interactive Dispatch Console */}
          <DispatchConsole
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <AnimatePresence>
                <SuccessCard
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SuccessBadgeIcon>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </SuccessBadgeIcon>
                  <SuccessTitle>Transmission Dispatched</SuccessTitle>
                  <SuccessText>
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{selectedIntent}</strong> has been securely transmitted.
                    A response will be sent to <strong>{formData.email}</strong> within 24 hours.
                  </SuccessText>
                  <ResetBtn type="button" onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', subject: `Project inquiry: ${selectedIntent}`, message: '' })
                  }}>
                    Send Another Message
                  </ResetBtn>
                </SuccessCard>
              </AnimatePresence>
            ) : (
              <form onSubmit={handleSubmit}>
                <ConsoleTopBar>
                  <ConsoleTitle>
                    <TerminalDots>
                      <span />
                      <span />
                      <span />
                    </TerminalDots>
                    <ConsoleHeaderLabel>Send a Direct Message</ConsoleHeaderLabel>
                  </ConsoleTitle>
                </ConsoleTopBar>

                {/* Step 1: Intent Selection */}
                <IntentSection>
                  <SectionHeading>
                    <StepIndicator>01</StepIndicator>
                    <SectionLabelText>Select Inquiry Type</SectionLabelText>
                  </SectionHeading>
                  <IntentChipsRow>
                    {INTENT_OPTIONS.map(intent => (
                      <IntentChip
                        key={intent}
                        type="button"
                        $active={selectedIntent === intent}
                        onClick={() => handleIntentClick(intent)}
                        whileTap={{ scale: 0.96 }}
                      >
                        {intent}
                      </IntentChip>
                    ))}
                  </IntentChipsRow>
                </IntentSection>

                {/* Step 2: Name & Email */}
                <FieldsGrid>
                  <FieldGroup>
                    <FieldLabelRow>
                      <FieldNum>02 // YOUR NAME</FieldNum>
                    </FieldLabelRow>
                    <FieldLabel htmlFor="user-name">Your Name</FieldLabel>
                    <StyledInput
                      id="user-name"
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabelRow>
                      <FieldNum>03 // YOUR EMAIL</FieldNum>
                    </FieldLabelRow>
                    <FieldLabel htmlFor="user-email">Email Address</FieldLabel>
                    <StyledInput
                      id="user-email"
                      required
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </FieldGroup>
                </FieldsGrid>

                {/* Step 3: Subject / Topic */}
                <FieldGroup style={{ marginBottom: '1.5rem' }}>
                  <FieldLabelRow>
                    <FieldNum>04 // SUBJECT</FieldNum>
                  </FieldLabelRow>
                  <FieldLabel htmlFor="user-subject">Project Topic / Headline</FieldLabel>
                  <StyledInput
                    id="user-subject"
                    required
                    type="text"
                    placeholder="Subject of collaboration"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </FieldGroup>

                {/* Step 4: Message */}
                <FieldGroup style={{ marginBottom: '2rem' }}>
                  <FieldLabelRow>
                    <FieldNum>05 // YOUR MESSAGE</FieldNum>
                  </FieldLabelRow>
                  <FieldLabel htmlFor="user-message">Your Message</FieldLabel>
                  <StyledTextarea
                    id="user-message"
                    required
                    placeholder="Provide any context, timeline, scope, or questions..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </FieldGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </SubmitButton>
              </form>
            )}
          </DispatchConsole>
        </MainGrid>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
