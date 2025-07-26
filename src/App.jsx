import { useState, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Portfolio from './components/Portfolio'
import ChatBot from './components/ChatBot'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Orbitron', 'Arial', sans-serif;
    background: radial-gradient(ellipse at center, #0d1421 0%, #000000 100%);
    color: #00ffff;
    overflow-x: hidden;
    min-height: 100vh;
  }

  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
`

const theme = {
  colors: {
    primary: '#00ffff',
    secondary: '#ff6b35',
    accent: '#ffd700',
    dark: '#0d1421',
    darker: '#000000',
    metallic: '#c0c0c0',
    neon: '#00ff41'
  },
  fonts: {
    main: 'Orbitron, Arial, sans-serif'
  }
}

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: radial-gradient(ellipse at center, #0d1421 0%, #000000 100%);
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 255, 255, 0.03) 2px,
        rgba(0, 255, 255, 0.03) 4px
      );
    pointer-events: none;
    z-index: 1;
  }
`

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <Portfolio key="portfolio" />
          )}
        </AnimatePresence>
        {!isLoading && <ChatBot />}
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
