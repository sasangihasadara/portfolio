import React from 'react'
import { Link } from 'react-router-dom'
import { heroStats } from '../data/portfolioData'

export default function Home() {
  return (
    <section className="relative overflow-hidden pb-28 pt-24 lg:pb-32 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(148,163,184,0.08),_transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="space-y-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            <i data-lucide="sparkles" className="h-3.5 w-3.5" />
            SLIIT / Full-Stack Web Developer / UI Focus
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Third-Year IT Undergraduate - Open for Internships
          </p>
          <h1 className="font-display reveal reveal-1 max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
            Hi, I&apos;m <br />
            <span className="text-white">Sasangi Ranasinghe</span>
          </h1>
          <p className="reveal reveal-2 max-w-2xl text-lg leading-8 text-slate-300">
            I&apos;m a third-year Information Technology undergraduate at SLIIT with a strong interest in full-stack
            web development. I build responsive web applications that work well across devices and focus on clean,
            practical user experiences with React, Tailwind CSS, PHP, JavaScript, MySQL, and APIs.
          </p>

          <div className="reveal reveal-3 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#080b1f] transition hover:-translate-y-0.5 hover:bg-slate-200 sm:w-auto"
            >
              <i data-lucide="send" className="mr-2 h-4 w-4" />
              Hire Me
            </Link>
            <a
              href="/images/Sasangi_CV.pdf"
              download="Sasangi_CV.pdf"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5 sm:w-auto"
            >
              <i data-lucide="download" className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="reveal reveal-4 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm leading-7 text-slate-300">
              I am looking forward to working with a software development team to gain practical industry experience
              as a Full-Stack Web Developer. I value teamwork, communication, and learning through real project work.
            </p>
          </div>

          <div className="reveal reveal-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="ui-card rounded-2xl p-4">
                <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-4 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">React</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Tailwind</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">JavaScript</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Responsive UI</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
            <div className="ui-card reveal reveal-2 float-slow relative rounded-[2rem] p-4">
              <img
                src="/images/sasa.jpg"
                alt="Sasangi Ranasinghe"
                className="h-[18rem] w-[18rem] rounded-[1.5rem] object-cover object-top sm:h-[24rem] sm:w-[24rem]"
              />
            </div>
            <div className="ui-card reveal reveal-4 absolute -bottom-5 -left-5 rounded-2xl px-5 py-4">
              <p className="text-sm text-slate-400">Open for</p>
              <p className="font-display text-lg font-semibold text-white">Internships & Project Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
