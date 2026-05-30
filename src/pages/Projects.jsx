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
              className="overflow-hidden rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] shadow-xl transition hover:-translate-y-1 hover:border-purple-500/40"
            >
              <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-300">{project.title}</h2>
                <p className="mt-3 text-gray-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setModal(project)}
                    className="rounded-full bg-purple-600 px-5 py-2.5 font-semibold text-white transition hover:bg-purple-500"
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
            className="relative w-full max-w-xl rounded-[1.5rem] border border-purple-500/30 bg-[#0b0f3b] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 text-gray-400 transition hover:text-white"
              aria-label="Close details"
            >
              Close
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">Project details</p>
            <h3 className="mt-3 text-3xl font-bold text-white">{modal.title}</h3>
            <p className="mt-4 text-gray-300">{modal.details}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {modal.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={modal.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-500"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ) : null}
    </section>
  )
}

