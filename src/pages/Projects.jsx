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
          description="These projects show the kind of problems I enjoy solving across full-stack delivery, UI/UX flow, and QA-minded checking for responsiveness, edge cases, and usability."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="ui-card group overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0b1026] sm:aspect-[16/10]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_35%),linear-gradient(135deg,_rgba(59,130,246,0.24),_rgba(15,23,42,0.96))] p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                        <i data-lucide="car-front" className="h-6 w-6 text-white" />
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
                        New Project
                      </span>
                    </div>
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        Vehicle service system
                      </p>
                      <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                        Service scheduling, fuel tracking, and customer records
                      </h3>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b18]/35 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur sm:left-4 sm:top-4 sm:text-[11px] sm:tracking-[0.28em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Project
                </div>
                {project.liveUrl ? (
                  <div className="absolute bottom-3 right-3 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-100 backdrop-blur sm:bottom-4 sm:right-4 sm:text-[11px] sm:tracking-[0.28em]">
                    Live Ready
                  </div>
                ) : null}
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="font-display text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Case study</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.challenge}</p>
                </div>
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
                    className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-[0_14px_30px_rgba(59,130,246,0.22)] transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    View Details
                  </button>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 font-semibold text-emerald-100 transition hover:bg-emerald-400/15 sm:w-auto"
                    >
                      Live Demo
                    </a>
                  ) : null}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/5 sm:w-auto"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/80 px-4 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="ui-card relative w-full max-w-xl rounded-2xl p-5 sm:p-6"
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
            <p className="mt-4 text-slate-300">{modal.description}</p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Challenge</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{modal.challenge}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Approach</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{modal.approach}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Result</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{modal.result}</p>
              </div>
            </div>

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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {modal.liveUrl ? (
                <a
                  href={modal.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-400/15 sm:w-auto"
                >
                  Open Live Demo
                </a>
              ) : null}
              <a
                href={modal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 px-5 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(59,130,246,0.22)] transition hover:-translate-y-0.5 sm:w-auto"
              >
                View on GitHub
              </a>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
