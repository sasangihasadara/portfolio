import React from 'react'
import PageHeader from '../components/PageHeader'
import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Skills"
          title="Tools and technologies I work with"
          description="A clearer map of the tools I use across frontend, backend, mobile, and workflow tasks. The strongest areas are shown first, with a quick sense of where I am growing next."
        />

        <div className="ui-card mb-8 rounded-[2rem] p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0f132b] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
                <i data-lucide="layout-grid" className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Strongest area</p>
              <p className="font-display mt-2 text-xl font-semibold text-white">Frontend UI and responsive layouts</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0f132b] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
                <i data-lucide="briefcase" className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">What I build</p>
              <p className="font-display mt-2 text-xl font-semibold text-white">Portfolio sites, student projects, and practical app interfaces</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0f132b] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
                <i data-lucide="target" className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Current focus</p>
              <p className="font-display mt-2 text-xl font-semibold text-white">Stronger backend flow and better project delivery</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="ui-card rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white">
                  <i data-lucide={group.icon} className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold text-white">{group.title}</h2>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {group.level}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{group.summary}</p>
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${group.level}%` }}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0f132b] px-4 py-2 text-sm text-slate-300"
                  >
                    <i data-lucide={item.icon} className="h-3.5 w-3.5 text-slate-400" />
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
