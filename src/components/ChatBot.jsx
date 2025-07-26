import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`

const ChatToggle = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary}
  );
  border: none;
  color: ${props => props.theme.colors.dark};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.5),
    0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.1) 2px,
        rgba(255, 255, 255, 0.1) 4px
      );
    animation: scan 2s linear infinite;
  }
  
  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: rgba(13, 20, 33, 0.95);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.3),
    inset 0 0 30px rgba(0, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
    bottom: 70px;
    right: -50px;
  }
`

const ChatHeader = styled.div`
  padding: 1rem;
  background: rgba(0, 255, 255, 0.1);
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 1rem;
`

const BotAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
`

const BotInfo = styled.div`
  flex: 1;
  
  h4 {
    color: ${props => props.theme.colors.primary};
    margin: 0;
    font-size: 1rem;
    text-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
  
  p {
    color: ${props => props.theme.colors.metallic};
    margin: 0;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};
  }
`

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 255, 255, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 3px;
  }
`

const Message = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  
  &.user {
    flex-direction: row-reverse;
  }
`

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  &.user {
    background: linear-gradient(45deg, 
      ${props => props.theme.colors.primary}, 
      ${props => props.theme.colors.secondary}
    );
    color: ${props => props.theme.colors.dark};
    font-weight: 500;
  }
  
  &.bot {
    background: rgba(0, 255, 255, 0.1);
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.metallic};
  }
`

const ChatInput = styled.div`
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.colors.primary};
  background: rgba(0, 255, 255, 0.05);
  display: flex;
  gap: 0.5rem;
`

const InputField = styled.input`
  flex: 1;
  padding: 0.75rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  color: ${props => props.theme.colors.metallic};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    color: rgba(192, 192, 192, 0.6);
  }
`

const SendButton = styled(motion.button)`
  background: linear-gradient(45deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.secondary}
  );
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
`

const TypingIndicator = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  max-width: 80%;
  color: ${props => props.theme.colors.metallic};
  font-size: 0.9rem;
  
  .dots {
    display: flex;
    gap: 2px;
    
    span {
      width: 4px;
      height: 4px;
      background: ${props => props.theme.colors.primary};
      border-radius: 50%;
      animation: typing 1.4s infinite ease-in-out;
      
      &:nth-child(1) { animation-delay: 0s; }
      &:nth-child(2) { animation-delay: 0.2s; }
      &:nth-child(3) { animation-delay: 0.4s; }
    }
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.3;
    }
    30% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }
`

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm PRIME, your AI assistant. I can help you learn more about this portfolio, discuss projects, or answer any questions you might have. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('project') || message.includes('work')) {
      return "I can tell you about the various projects showcased in this portfolio! There are web applications, mobile apps, AI/ML projects, blockchain solutions, and IoT dashboards. Each project demonstrates different technical skills and innovative approaches. Which type of project interests you most?"
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "The developer specializes in a wide range of technologies including React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js, and many more. The tech stack is constantly evolving to stay current with industry trends!"
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('work together')) {
      return "Great! You can get in touch through the contact form on this page, or scroll down to the 'Establish Connection' section. The developer typically responds within 24 hours and is always excited to discuss new opportunities!"
    }
    
    if (message.includes('experience') || message.includes('background')) {
      return "With 3+ years of experience and 50+ completed projects, the developer has worked across various domains including e-commerce, AI/ML, mobile applications, and blockchain. The focus is always on creating innovative, user-centric solutions."
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to this Transformers-themed portfolio! I'm here to help you navigate and learn more about the developer's work. Feel free to ask me anything about the projects, skills, or how to get in touch!"
    }
    
    if (message.includes('transformer') || message.includes('autobot') || message.includes('theme')) {
      return "Cool that you noticed the Transformers theme! This portfolio is designed with inspiration from the Autobots - featuring dark backgrounds, 3D animations, holographic effects, and futuristic UI elements. It represents the developer's ability to 'transform' ideas into digital reality!"
    }
    
    return "That's an interesting question! I'm here to help you learn more about this portfolio, the projects showcased, or how to get in touch with the developer. Feel free to ask about specific projects, technical skills, or anything else you'd like to know!"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <ChatBotContainer>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ChatHeader>
              <BotAvatar>🤖</BotAvatar>
              <BotInfo>
                <h4>PRIME Assistant</h4>
                <p>AI-powered help system</p>
              </BotInfo>
              <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
            </ChatHeader>
            
            <ChatMessages>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  className={message.sender}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageBubble className={message.sender}>
                    {message.text}
                  </MessageBubble>
                </Message>
              ))}
              
              {isTyping && (
                <Message className="bot">
                  <TypingIndicator
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    PRIME is thinking
                    <div className="dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </TypingIndicator>
                </Message>
              )}
              
              <div ref={messagesEndRef} />
            </ChatMessages>
            
            <ChatInput>
              <InputField
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
              />
              <SendButton
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>
      
      <ChatToggle
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? '×' : '🤖'}
      </ChatToggle>
    </ChatBotContainer>
  )
}

export default ChatBot
