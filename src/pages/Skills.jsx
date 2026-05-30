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
          description="A compact view of the stacks I use across frontend, backend, mobile, and development workflow tasks."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="ui-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white">
                  <i data-lucide={group.icon} className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold text-white">{group.title}</h2>
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
