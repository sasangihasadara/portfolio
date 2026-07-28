import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer mt-12 border-t border-white/10 bg-[#050816]/90 py-12 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="max-w-2xl">
          <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Open to internships, collaborations, and project work.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            I am looking to contribute, learn, and keep improving as a full-stack developer.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href="#about" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            About
          </a>
          <a href="#projects" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        Copyright 2026 Sasangi Ranasingha. All rights reserved.
      </p>
    </footer>
  )
}
