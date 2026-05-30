import React from 'react'
import PageHeader from '../components/PageHeader'
import { certificateItems } from '../data/portfolioData'

export default function Education() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Education"
          title="Certificates and learning path"
          description="My learning journey includes practical software skills, problem-solving habits, and certificates that show my growth in web development, tools, and real project work. I use each certificate as a step toward stronger technical confidence and better industry readiness."
        />

        <div className="mx-auto max-w-4xl">
          <div className="ui-card rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold text-white">Certificates</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Add your certificate images in the boxed area below. Each card has space for an image, title, issuer,
              and description.
            </p>

            <div className="mt-6 space-y-4">
              {certificateItems.map((certificate) => (
                <div key={`${certificate.title}-${certificate.issuer}`} className="ui-card rounded-2xl p-4">
                  <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
                    <div className="flex h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#0f132b]">
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
                      <h3 className="font-display mt-2 text-lg font-semibold text-white">{certificate.title}</h3>
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
    </section>
  )
}
