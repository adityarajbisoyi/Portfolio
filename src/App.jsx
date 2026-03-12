import { useState, useEffect, useCallback, useRef } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Portfolio from './components/Portfolio'
import ChatBot from './components/ChatBot'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0D0D0D;
    color: #F5F5F5;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }
`

const theme = {
  colors: {
    primary: '#5BA4E6',
    primaryLight: '#7BB8F0',
    primaryDark: '#3A7BC8',
    grey: '#B0B8C4',
    greyLight: '#D1D5DB',
    greyDark: '#6B7280',
    dark: '#0D0D0D',
    darkAlt: '#1A1A2E',
    darkCard: '#16162A',
    white: '#FFFFFF',
    offWhite: '#F5F5F5',
    border: 'rgba(91, 164, 230, 0.15)',
    cardBg: 'rgba(22, 22, 42, 0.6)',
  },
  fonts: {
    main: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  }
}

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #0D0D0D;
`

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentReady, setIsContentReady] = useState(false)
  const timerRef = useRef(null)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
    // Small delay for skeleton to appear before content
    timerRef.current = setTimeout(() => setIsContentReady(true), 100)
  }, [])

  useEffect(() => {
    const handlePageLoad = () => {
      // Wait for fonts and critical resources
      if (document.fonts) {
        document.fonts.ready.then(() => {
          handleLoadingComplete()
        })
      } else {
        handleLoadingComplete()
      }
    }

    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
    }

    return () => {
      window.removeEventListener('load', handlePageLoad)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [handleLoadingComplete])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <Portfolio key="portfolio" isContentReady={isContentReady} />
          )}
        </AnimatePresence>
        {!isLoading && <ChatBot />}
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
