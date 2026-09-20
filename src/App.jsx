import { useState, useCallback } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Portfolio from './components/Portfolio'
import ChatBot from './components/ChatBot'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: auto !important;
  }

  html.lenis, html.lenis body {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0A0A0A;
    color: #E8E8E8;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: none;
  }

  @media (max-width: 768px) {
    body {
      cursor: auto;
    }
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #0A0A0A;
  }

  ::-webkit-scrollbar-thumb {
    background: #E8D5A3;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #F0E0B0;
  }

  ::selection {
    background: rgba(232, 213, 163, 0.25);
    color: #FFFFFF;
  }

  a, button {
    cursor: none;
  }

  @media (max-width: 768px) {
    a, button {
      cursor: auto;
    }
  }

  button:focus,
  input:focus,
  textarea:focus,
  a:focus {
    outline: 2px solid rgba(232, 213, 163, 0.5);
    outline-offset: 2px;
  }
`

const theme = {
  colors: {
    primary: '#E8D5A3',
    primaryLight: '#F0E0B0',
    primaryDark: '#C4A96B',
    cyan: '#00E5CC',
    cyanDim: 'rgba(0, 229, 204, 0.15)',
    orange: '#FF6B35',
    orangeDim: 'rgba(255, 107, 53, 0.12)',
    grey: '#888',
    greyLight: '#B0B0B0',
    greyDark: '#555',
    dark: '#0A0A0A',
    darkAlt: '#111111',
    darkCard: '#161616',
    darkCardAlt: '#1A1A1A',
    white: '#FFFFFF',
    offWhite: '#E8E8E8',
    border: 'rgba(232, 213, 163, 0.12)',
    borderStrong: 'rgba(232, 213, 163, 0.25)',
    cardBg: 'rgba(22, 22, 22, 0.7)',
  },
  fonts: {
    display: "'Space Grotesk', -apple-system, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  }
}

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #0A0A0A;
`

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SmoothScroll>
        <CustomCursor />
        <AppContainer>
          {/* Frontend is mounted immediately so assets, fonts & layout hydrate in the background */}
          <Portfolio />
          {!isLoading && <ChatBot />}

          {/* Fixed 2-second loading animation overlay */}
          <AnimatePresence>
            {isLoading && (
              <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
            )}
          </AnimatePresence>
        </AppContainer>
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App

