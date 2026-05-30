import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { certificateItems } from '../data/portfolioData'

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selectedCertificate ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedCertificate])

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Education"
          title="Certificates and learning path"
          description="My learning journey includes practical software skills, problem-solving habits, and certificates that show my growth in web development, tools, and real project work. I use each certificate as a step toward stronger technical confidence and better industry readiness."
          actions={
            <a
              href="#certificate-gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <i data-lucide="images" className="mr-2 h-4 w-4" />
              View gallery
            </a>
          }
        />

        <div className="mx-auto max-w-6xl">
          <div className="ui-card rounded-[2rem] p-6 md:p-8">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Certificates overview</p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-white">
                Clear previews, clean spacing, and full-size inspection when needed
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                Since certificates contain a lot of text, the gallery now uses larger preview cards, object-contain
                images, and a modal view so every detail stays readable.
              </p>
            </div>

            <div id="certificate-gallery" className="mt-8 grid gap-6 md:grid-cols-2">
              {certificateItems.map((certificate, index) => (
                <article
                  key={`${certificate.title}-${certificate.issuer}`}
                  className={`ui-card reveal reveal-${(index % 4) + 1} overflow-hidden rounded-[1.75rem] ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="grid gap-0 md:grid-cols-[minmax(280px,1.2fr)_1fr]">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="group relative block min-h-[280px] overflow-hidden border-b border-white/10 bg-[#0b1026] text-left md:min-h-[320px] md:border-b-0 md:border-r md:border-white/10"
                    >
                      <img
                        src={encodeURI(certificate.image)}
                        alt={certificate.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-300">
                            Click to enlarge
                          </p>
                          <p className="mt-1 text-xs text-slate-400">Open the full certificate view</p>
                        </div>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10">
                          <i data-lucide="zoom-in" className="h-4 w-4 text-white" />
                        </span>
                      </div>
                    </button>

                    <div className="flex flex-col justify-between p-5 md:p-6">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                            {certificate.year}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                            Verified learning
                          </span>
                        </div>

                        <h3 className="font-display mt-4 text-2xl font-semibold text-white">{certificate.title}</h3>
                        <p className="mt-2 text-sm font-medium text-slate-400">{certificate.issuer}</p>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{certificate.description}</p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedCertificate(certificate)}
                          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                        >
                          <i data-lucide="eye" className="mr-2 h-4 w-4" />
                          View certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate ? (
        <div
          role="presentation"
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-8 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate`}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b18] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Certificate preview</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                  {selectedCertificate.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                aria-label="Close certificate preview"
              >
                <i data-lucide="x" className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="flex items-center justify-center bg-black/30 p-4 md:p-6">
                <img
                  src={encodeURI(selectedCertificate.image)}
                  alt={selectedCertificate.title}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>

              <div className="border-t border-white/10 p-5 md:p-6 lg:border-l lg:border-t-0">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                    {selectedCertificate.year}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                    Certificate
                  </span>
                </div>

                <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">Issued by</p>
                <p className="mt-2 text-base leading-7 text-slate-200">{selectedCertificate.issuer}</p>
                <p className="mt-5 text-sm leading-7 text-slate-300">{selectedCertificate.description}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  The larger preview makes the text easier to read, and the modal keeps the full certificate
                  available without crowding the page.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
