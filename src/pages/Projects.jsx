import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [modal, setModal] = useState(null)

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Projects"
          title="Selected work"
          description="These projects show the kind of problems I enjoy solving: practical interfaces, clear user flow, and useful back-end structure."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="ui-card overflow-hidden rounded-2xl"
            >
              <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-[#0f132b] px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setModal(project)}
                    className="rounded-full bg-white px-5 py-2.5 font-semibold text-[#080b1f] transition hover:bg-slate-200"
                  >
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/5"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {modal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setModal(null)}
        >
          <div
            className="ui-card relative w-full max-w-xl rounded-2xl p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 text-slate-400 transition hover:text-white"
              aria-label="Close details"
            >
              Close
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Project details</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-white">{modal.title}</h3>
            <p className="mt-4 text-slate-300">{modal.details}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {modal.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={modal.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-[#080b1f] transition hover:bg-slate-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ) : null}
    </section>
  )
}
