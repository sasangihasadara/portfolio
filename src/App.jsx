import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import LiveBackground from './components/LiveBackground'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
  })

  useEffect(() => {
    if (window.emailjs && window.emailjs.init) window.emailjs.init('h7l3hvKInz5qNnRRT')
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons()
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen text-white">
      <LiveBackground theme={theme} />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main className="relative z-10 pt-20">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="services"><Services /></div>
        <div id="certificates"><Education /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}
