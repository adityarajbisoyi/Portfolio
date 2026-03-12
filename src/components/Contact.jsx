import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useState } from 'react'

const ContactContainer = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.dark};
  position: relative;
`

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
`

const ContactForm = styled(motion.form)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
`

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
  font-weight: 600;
`

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  color: ${props => props.theme.colors.grey};
  font-size: 1rem;

  strong {
    color: ${props => props.theme.colors.greyLight};
    min-width: 120px;
  }
`

const ContactDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  margin-right: 1rem;
  flex-shrink: 0;
`

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.greyLight};
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(91, 164, 230, 0.05);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: rgba(91, 164, 230, 0.08);
  }

  &::placeholder {
    color: ${props => props.theme.colors.greyDark};
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(91, 164, 230, 0.05);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: rgba(91, 164, 230, 0.08);
  }

  &::placeholder {
    color: ${props => props.theme.colors.greyDark};
  }
`

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: inherit;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(91, 164, 230, 0.06);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  color: ${props => props.theme.colors.grey};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    background: rgba(91, 164, 230, 0.12);
  }
`

const SocialIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: currentColor;
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mvgqalng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        alert('Message sent successfully! I will respond within 24 hours.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or contact directly at learnerbisoyi@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { label: 'Email', value: 'learnerbisoyi@gmail.com' },
    { label: 'LinkedIn', value: 'Aditya Raj Bisoyi' },
    { label: 'Location', value: 'Bangalore, India' },
    { label: 'Response', value: 'Within 24 hours' }
  ]

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactTitle>Contact Information</ContactTitle>

            {contactInfo.map((item, index) => (
              <ContactItem
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ContactDot />
                <strong>{item.label}:</strong>&nbsp;{item.value}
              </ContactItem>
            ))}

            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#B0B8C4', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Ready to bring your ideas to life? Send me a message
                and let us discuss how we can work together to create something great.
              </p>
            </div>

            <SocialLinks>
              <SocialLink
                href="mailto:learnerbisoyi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <SocialIcon viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </SocialIcon>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <SocialIcon viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </SocialIcon>
              </SocialLink>
              <SocialLink
                href="https://github.com/adityarajbisoyi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <SocialIcon viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </SocialIcon>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactTitle>Send a Message</ContactTitle>

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project subject"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact
