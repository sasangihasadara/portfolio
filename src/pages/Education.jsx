import React from 'react'
import PageHeader from '../components/PageHeader'
import { certificateItems, educationItems } from '../data/portfolioData'

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
                className="ui-card rounded-2xl p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{item.year}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="ui-card rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white">Focus areas</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                <div className="ui-card rounded-2xl p-4">
                  Full-stack web development through React, PHP, and MySQL.
                </div>
                <div className="ui-card rounded-2xl p-4">
                  Mobile and UI design basics with Kotlin and wireframing.
                </div>
                <div className="ui-card rounded-2xl p-4">
                  Teamwork, communication, and project delivery habits.
                </div>
              </div>
            </div>

            <div className="ui-card rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white">Certificates</h2>
              <div className="mt-6 space-y-4">
                {certificateItems.map((certificate) => (
                  <div
                    key={`${certificate.title}-${certificate.issuer}`}
                    className="ui-card rounded-2xl p-4"
                  >
                    <div className="grid gap-4 md:grid-cols-[140px_1fr] md:items-start">
                      <div className="flex h-[140px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#0f132b]">
                        {certificate.image ? (
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="h-full w-full rounded-2xl object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <i data-lucide="image" className="mx-auto mb-2 h-6 w-6 text-slate-400" />
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                              Certificate Image
                            </p>
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                          {certificate.year}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{certificate.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{certificate.issuer}</p>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{certificate.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
