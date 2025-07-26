import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useState } from 'react'

const ContactContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, 
    rgba(13, 20, 33, 0.9) 0%, 
    rgba(0, 0, 0, 0.95) 100%
  );
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 20px ${props => props.theme.colors.primary};
  
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
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.2),
    inset 0 0 30px rgba(0, 255, 255, 0.05);
`

const ContactForm = styled(motion.form)`
  background: rgba(255, 107, 53, 0.05);
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 
    0 0 30px rgba(255, 107, 53, 0.2),
    inset 0 0 30px rgba(255, 107, 53, 0.05);
`

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
`

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.metallic};
  font-size: 1.1rem;
  
  &:before {
    content: '►';
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
    font-size: 1.2rem;
    text-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-shadow: 0 0 5px ${props => props.theme.colors.primary};
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  color: ${props => props.theme.colors.metallic};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 15px ${props => props.theme.colors.primary};
    background: rgba(0, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(192, 192, 192, 0.6);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  color: ${props => props.theme.colors.metallic};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 15px ${props => props.theme.colors.primary};
    background: rgba(0, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(192, 192, 192, 0.6);
  }
`

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary}
  );
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 15px ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
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
      // Using Formspree for form submission
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
        alert('🚀 Transmission successful! Message sent to the mothership. You will receive a response within 24 hours.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Transmission failed')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('⚠️ Transmission failed! Please try again or contact directly at learnerbisoyi@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { label: 'Email', value: 'learnerbisoyi@gmail.com' },
    { label: 'Linkedin', value: 'Aditya Raj Bisoyi' },
    { label: 'Location', value: 'Bangalore, India' },
    { label: 'Response Time', value: '< 24 hours' }
  ]

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ESTABLISH CONNECTION
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactTitle>Transmission Details</ContactTitle>
            
            {contactInfo.map((item, index) => (
              <ContactItem
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <strong>{item.label}:</strong>&nbsp;{item.value}
              </ContactItem>
            ))}
            
            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6 }}>
                Ready to transform your ideas into reality? Send me a transmission 
                and let's discuss how we can work together to create something extraordinary.
              </p>
            </div>
            
            <SocialLinks>
              <SocialLink
                href="mailto:learnerbisoyi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Email"
              >
                📧
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
              >
                💼
              </SocialLink>
              <SocialLink
                href="https://github.com/adityarajbisoyi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="GitHub"
              >
                🐙
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactTitle>Send Transmission</ContactTitle>
            
            <FormGroup>
              <Label htmlFor="name">Designation</Label>
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
              <Label htmlFor="email">Communication Channel</Label>
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
              <Label htmlFor="subject">Mission Objective</Label>
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
              <Label htmlFor="message">Mission Briefing</Label>
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact
