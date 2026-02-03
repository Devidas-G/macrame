import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/about'

function AppRouter() {
  const [route, setRoute] = useState<string>(
    // strip leading '#' if present
    (window.location.hash || '').replace(/^#/, ''),
  )

  useEffect(() => {
    const onHash = () => setRoute((window.location.hash || '').replace(/^#/, ''))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === 'about') return <About />
  // default to home for unknown or empty route
  return <Home />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
