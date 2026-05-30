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
              className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-6 shadow-xl transition hover:-translate-y-1 hover:border-purple-500/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                  <i data-lucide={group.icon} className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-white">{group.title}</h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                  >
                    {item}
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

