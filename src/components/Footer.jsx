import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[#050816]/90 py-12 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Contact footer</p>
          <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Let&apos;s build something practical, polished, and ready for the real world.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            I am open to internships, collaborations, and project opportunities where I can contribute
            and keep growing as a full-stack developer.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link to="/about" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            About
          </Link>
          <Link to="/projects" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            Projects
          </Link>
          <Link to="/contact" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        Copyright 2026 Sasangi Ranasinghe. All rights reserved.
      </p>
    </footer>
  )
}
