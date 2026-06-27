import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[#050816]/90 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Sasangi Ranasinghe</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            IT student and aspiring full-stack developer building clean, practical, and responsive digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <Link to="/about" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
            About
          </Link>
          <Link to="/projects" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
            Projects
          </Link>
          <Link to="/contact" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
            Contact
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">Copyright 2026 Sasangi Ranasinghe. All rights reserved.</p>
    </footer>
  )
}
