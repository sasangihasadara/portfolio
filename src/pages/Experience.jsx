import React from 'react'
import PageHeader from '../components/PageHeader'
import { experienceItems } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Experience"
          title="Project experience that shows my workflow"
          description="I am still early in my career, so I present my experience through the projects, collaboration, and development patterns I have already practiced."
        />

        <div className="space-y-4">
          {experienceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-6 shadow-xl"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">{item.period}</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{item.title}</h2>
                </div>
              </div>

              <p className="mt-4 max-w-4xl leading-7 text-gray-300">{item.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

