import React from 'react'
import { Link } from 'react-router-dom'
import { heroStats } from '../data/portfolioData'

export default function Home() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(148,163,184,0.08),_transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            React Developer - Clean UI - Fast Delivery
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
            Hi, I&apos;m <br />
            <span className="text-white">Sasangi Ranasinghe</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build responsive web applications and practical project solutions with React, Tailwind CSS, PHP,
            JavaScript, and MySQL. My focus is on clean UI, smooth user flow, and code that is easy to grow.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#080b1f] transition hover:bg-slate-200"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">React</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Tailwind</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">JavaScript</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Responsive UI</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
            <div className="ui-card relative rounded-[2rem] p-4">
              <img
                src="/images/sasa.jpg"
                alt="Sasangi"
                className="h-[18rem] w-[18rem] rounded-[1.5rem] object-cover object-top sm:h-[24rem] sm:w-[24rem]"
              />
            </div>
            <div className="ui-card absolute -bottom-5 -left-5 rounded-2xl px-5 py-4">
              <p className="text-sm text-slate-400">Open for</p>
              <p className="text-lg font-semibold text-white">Internships & Project Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
