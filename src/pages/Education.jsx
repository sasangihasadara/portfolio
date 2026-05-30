import React from 'react'
import PageHeader from '../components/PageHeader'
import { educationItems } from '../data/portfolioData'

export default function Education() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Education"
          title="Learning path and next step"
          description="My education is centered on building practical software skills, strong problem-solving habits, and the confidence to contribute in team environments."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {educationItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-6 shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">{item.year}</p>
                <h2 className="mt-3 text-2xl font-bold text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-purple-300">Focus areas</h2>
            <div className="mt-6 space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Full-stack web development through React, PHP, and MySQL.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Mobile and UI design basics with Kotlin and wireframing.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Teamwork, communication, and project delivery habits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

