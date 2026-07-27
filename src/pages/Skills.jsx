import React from 'react'
import { skillGroups } from '../data/portfolioData'

const stack = [
  { label: 'HTML / CSS', icon: 'code-2', tone: 'text-orange-300' },
  { label: 'React', icon: 'atom', tone: 'text-cyan-300' },
  { label: 'Node.js', icon: 'braces', tone: 'text-emerald-300' },
  { label: 'PHP', icon: 'file-code-2', tone: 'text-violet-300' },
  { label: 'MySQL', icon: 'database', tone: 'text-sky-300' },
  { label: 'Kotlin', icon: 'smartphone', tone: 'text-fuchsia-300' },
  { label: 'Figma', icon: 'figma', tone: 'text-rose-300' },
]

function SkillPanel({ group, groupIndex }) {
  return (
    <article className="skills-panel relative overflow-hidden rounded-2xl border border-violet-300/10 bg-[#0a1024]/80 p-5 sm:p-6">
      <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-500/45 to-blue-500/35 shadow-lg shadow-violet-950/40">
            <i data-lucide={group.icon} className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-white">{group.title}</h2>
            <p className="mt-1 text-xs text-slate-400">{group.summary}</p>
          </div>
        </div>
        <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-2.5 py-1 text-xs font-semibold text-violet-200">
          {group.level}%
        </span>
      </div>

      <div className="relative mt-7 space-y-4">
        {group.items.map((item, itemIndex) => {
          const level = Math.max(group.level - itemIndex * 5 - groupIndex * 2, 62)
          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2 font-medium text-slate-200">
                  <i data-lucide={item.icon} className="h-3.5 w-3.5 text-violet-300" />
                  {item.label}
                </span>
                <span className="font-semibold text-violet-300">{level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="skills-progress h-full rounded-full"
                  style={{ '--skill-width': `${level}%`, animationDelay: `${itemIndex * 110}ms` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default function Skills() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="skills-showcase relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[#070b1b]/90 px-5 py-12 shadow-2xl shadow-black/30 sm:px-8 sm:py-16 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-2/3 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-violet-300">Skills & Technologies</p>
          <h1 className="font-display mt-4 text-4xl font-semibold text-white sm:text-5xl">
            My <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">Arsenal</span>
          </h1>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-400" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I use modern technologies to build responsive applications with clean interfaces, reliable logic, and a strong focus on usability.
          </p>
        </div>

        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          {stack.map((technology) => (
            <div
              key={technology.label}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3.5 py-2.5 text-xs font-semibold text-slate-300 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-violet-300/25 hover:bg-violet-400/[0.08] sm:px-4"
            >
              <i data-lucide={technology.icon} className={`h-4 w-4 ${technology.tone}`} />
              {technology.label}
            </div>
          ))}
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillPanel key={group.title} group={group} groupIndex={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
