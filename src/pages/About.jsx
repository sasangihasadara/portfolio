import React from 'react'
import PageHeader from '../components/PageHeader'

const focusPoints = [
  'Third-year IT undergraduate at SLIIT with a growing focus on full-stack, UI/UX, and QA.',
  'Interested in building usable interfaces, finding edge cases, and improving quality.',
  'Looking to gain practical industry experience with a team that values delivery and polish.',
]

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="About"
          title="A bit more about me"
          description="I am a third-year Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a growing interest in full-stack development, UI/UX, and QA workflows."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="ui-card rounded-2xl p-8">
            <p className="text-base leading-8 text-slate-300">
              I have experience working with both front-end and back-end technologies, and I enjoy reviewing web
              applications with a quality-first mindset. At present, I am improving my knowledge of full-stack
              structure, UI/UX decisions, test planning, bug reporting, and usability checks across different devices.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {focusPoints.map((point) => (
                <div key={point} className="ui-card rounded-2xl p-4 text-sm leading-6 text-slate-300">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="ui-card rounded-2xl p-8">
            <h2 className="font-display text-2xl font-semibold text-white">What I bring</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="ui-card rounded-2xl p-4">
                Full-stack thinking with a focus on structure, flow, and practical implementation.
              </div>
              <div className="ui-card rounded-2xl p-4">
                UI / UX awareness with practical project experience across responsive interfaces.
              </div>
              <div className="ui-card rounded-2xl p-4">
                QA discipline with a growth mindset and willingness to learn from team feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
