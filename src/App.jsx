import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (window.emailjs && window.emailjs.init) window.emailjs.init('h7l3hvKInz5qNnRRT')
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons()
  }, [location.pathname])

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
