import React from 'react'
import PageHeader from '../components/PageHeader'
import { services } from '../data/portfolioData'

export default function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Services"
          title="How I can help"
          description="These are the kinds of tasks I can support well right now, especially for portfolio sites, student projects, and small web applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-6 shadow-xl transition hover:-translate-y-1 hover:border-purple-500/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                  <i data-lucide={service.icon} className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-white">{service.title}</h2>
              </div>

              <p className="mt-4 leading-7 text-gray-300">{service.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {point}
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

