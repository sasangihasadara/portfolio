import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { certificateItems } from '../data/portfolioData'

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const orderedCertificates = [...certificateItems].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))

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
          <div className="ui-card rounded-[2rem] p-4 sm:p-6 md:p-8">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-4 sm:p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Certificates overview</p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-white">
                Clear previews, clean spacing, and full-size inspection when needed
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                Certificates are arranged with the newest entries first, and each card now exposes the verification
                details directly so the information feels clear instead of hidden in the screenshot.
              </p>
            </div>

            <div id="certificate-gallery" className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
              {orderedCertificates.map((certificate, index) => (
                <article
                  key={`${certificate.title}-${certificate.issuer}`}
                  className={`ui-card reveal reveal-${(index % 4) + 1} overflow-hidden rounded-[1.75rem]`}
                >
                  <div className="grid gap-0 md:grid-cols-[minmax(260px,1.08fr)_minmax(0,0.92fr)]">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="group relative block min-h-[250px] overflow-hidden border-b border-white/10 bg-[#0b1026] text-left sm:min-h-[280px] md:min-h-[320px] md:border-b-0 md:border-r md:border-white/10"
                    >
                      <img
                        src={encodeURI(certificate.image)}
                        alt={certificate.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-3 sm:p-4 transition duration-500 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur sm:inset-x-4 sm:bottom-4 sm:px-4 sm:py-3">
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

                    <div className="flex flex-col justify-between p-4 sm:p-5 md:p-6">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                            {certificate.year}
                          </span>
                          {certificate.issuedDate ? (
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                              {certificate.issuedDate}
                            </span>
                          ) : null}
                        </div>

                        <h3 className="font-display mt-4 text-2xl font-semibold text-white">{certificate.title}</h3>
                        <p className="mt-2 text-sm font-medium text-slate-400">{certificate.issuer}</p>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{certificate.description}</p>

                        {certificate.verification ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                              {certificate.verification.label}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white">
                              {certificate.verification.value}
                            </span>
                          </div>
                        ) : null}
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
                        {certificate.verification?.href ? (
                          <a
                            href={certificate.verification.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                          >
                            <i data-lucide="link-2" className="mr-2 h-4 w-4" />
                            Verify online
                          </a>
                        ) : null}
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

            <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="flex items-center justify-center bg-black/30 p-3 sm:p-4 md:p-6">
                <img
                  src={encodeURI(selectedCertificate.image)}
                  alt={selectedCertificate.title}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>

              <div className="border-t border-white/10 p-4 sm:p-5 md:p-6 lg:border-l lg:border-t-0">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                    {selectedCertificate.year}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                    Certificate
                  </span>
                  {selectedCertificate.issuedDate ? (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                      {selectedCertificate.issuedDate}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">Issued by</p>
                <p className="mt-2 text-base leading-7 text-slate-200">{selectedCertificate.issuer}</p>
                <p className="mt-5 text-sm leading-7 text-slate-300">{selectedCertificate.description}</p>

                {selectedCertificate.verification ? (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Verification</p>
                    <p className="mt-3 text-sm font-medium text-slate-200">{selectedCertificate.verification.label}</p>
                    <p className="mt-2 break-all text-base font-semibold text-white">
                      {selectedCertificate.verification.href ? (
                        <a
                          href={selectedCertificate.verification.href}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-cyan-200"
                        >
                          {selectedCertificate.verification.value}
                        </a>
                      ) : (
                        selectedCertificate.verification.value
                      )}
                    </p>
                  </div>
                ) : null}

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  The larger preview makes the text easier to read, and the modal keeps the full certificate
                  available without crowding the page. Newest certificates stay at the top of the gallery.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
