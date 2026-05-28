import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#070b2a]/80 backdrop-blur border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">Portfolio</h1>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
          <Link to="/projects" className="hover:text-purple-400">Projects</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
