import { useEffect, useRef } from 'react'

const SoundManager = ({ enabled, audioFile }) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (!enabled || !audioFile) {
      console.log('SoundManager: Audio disabled or no file provided')
      return
    }

    console.log('SoundManager: Attempting to load audio:', audioFile)

    // Create and play background audio
    const audio = new Audio(audioFile)
    audioRef.current = audio
    
    audio.loop = false // Don't loop - play once during loading
    audio.volume = 0.3 // Lower volume for better experience
    audio.preload = 'auto'
    
    // Add event listeners for debugging
    audio.addEventListener('loadstart', () => console.log('Audio loading started'))
    audio.addEventListener('canplay', () => console.log('Audio can start playing'))
    audio.addEventListener('error', (e) => console.error('Audio error:', e))
    audio.addEventListener('ended', () => console.log('Audio ended naturally'))
    
    // Add fade out effect near the end (optional)
    audio.addEventListener('timeupdate', () => {
      if (audio.duration && audio.currentTime > audio.duration - 1) {
        // Fade out in the last second
        const remainingTime = audio.duration - audio.currentTime
        audio.volume = 0.3 * (remainingTime / 1)
      }
    })
    
    // Try to play the audio immediately
    const playAudio = async () => {
      try {
        console.log('Attempting to play audio...')
        await audio.play()
        console.log('Audio playing successfully!')
      } catch (error) {
        console.log('Audio autoplay prevented:', error.message)
        console.log('Will start audio on first user interaction')
        
        // Add multiple event listeners for user interaction
        const startAudio = async () => {
          try {
            await audio.play()
            console.log('Audio started after user interaction!')
            // Remove all listeners once audio starts
            document.removeEventListener('click', startAudio)
            document.removeEventListener('keydown', startAudio)
            document.removeEventListener('touchstart', startAudio)
          } catch (err) {
            console.error('Failed to start audio even after user interaction:', err)
          }
        }
        
        document.addEventListener('click', startAudio)
        document.addEventListener('keydown', startAudio)
        document.addEventListener('touchstart', startAudio)
      }
    }

    // Small delay to ensure component is mounted
    const timer = setTimeout(playAudio, 100)

    // Cleanup
    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current = null
      }
    }
  }, [enabled, audioFile])

  return null // This component doesn't render anything
}

export default SoundManager
