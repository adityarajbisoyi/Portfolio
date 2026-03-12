import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import aiService from '../services/aiService'

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`

const ChatToggle = styled(motion.button)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.dark};
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(91, 164, 230, 0.3);
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`

const ChatIcon = styled.svg`
  width: 22px;
  height: 22px;
  fill: currentColor;
`

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 68px;
  right: 0;
  width: 350px;
  height: 480px;
  background: rgba(13, 13, 13, 0.95);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
    bottom: 60px;
    right: -16px;
  }
`

const ChatHeader = styled.div`
  padding: 1rem 1.25rem;
  background: rgba(91, 164, 230, 0.06);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BotAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.dark};
  font-weight: 700;
  font-size: 0.8rem;
`

const BotInfo = styled.div`
  flex: 1;

  h4 {
    color: ${props => props.theme.colors.white};
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
  }

  p {
    color: ${props => props.theme.colors.greyDark};
    margin: 0;
    font-size: 0.75rem;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.grey};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: rgba(91, 164, 230, 0.1);
  }
`

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 2px;
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
  padding: 0.625rem 0.875rem;
  border-radius: 10px;
  font-size: 0.875rem;
  line-height: 1.5;

  &.user {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
    font-weight: 500;
  }

  &.bot {
    background: rgba(91, 164, 230, 0.08);
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.greyLight};
  }
`

const ChatInput = styled.div`
  padding: 0.875rem 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  gap: 0.5rem;
`

const InputField = styled.input`
  flex: 1;
  padding: 0.625rem 0.875rem;
  background: rgba(91, 164, 230, 0.05);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.greyDark};
  }
`

const SendButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 0.625rem 1rem;
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: inherit;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`

const TypingIndicator = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  background: rgba(91, 164, 230, 0.08);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  max-width: 80%;
  color: ${props => props.theme.colors.grey};
  font-size: 0.85rem;

  .dots {
    display: flex;
    gap: 3px;

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
      opacity: 0.4;
    }
    30% {
      transform: translateY(-6px);
      opacity: 1;
    }
  }
`

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I can help you learn more about Aditya's portfolio, discuss projects, or answer any questions you might have. How can I assist you?",
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    const messageToSend = inputValue
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      const aiResponse = await aiService.generateResponse(messageToSend)

      const botResponse = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorResponse = {
        id: Date.now() + 1,
        text: "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment, or feel free to contact Aditya directly through the contact form.",
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorResponse])
      setIsTyping(false)
    }
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
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <ChatHeader>
              <BotAvatar>AI</BotAvatar>
              <BotInfo>
                <h4>Assistant</h4>
                <p>AI-powered portfolio assistant</p>
              </BotInfo>
              <CloseButton onClick={() => setIsOpen(false)}>&#xd7;</CloseButton>
            </ChatHeader>

            <ChatMessages>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  className={message.sender}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageBubble className={message.sender}>
                    {message.text}
                  </MessageBubble>
                </Message>
              ))}

              {isTyping && (
                <Message className="bot">
                  <TypingIndicator
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thinking
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>

      <ChatToggle
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>&#xd7;</span>
        ) : (
          <ChatIcon viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </ChatIcon>
        )}
      </ChatToggle>
    </ChatBotContainer>
  )
}

export default ChatBot
